/**
 * VoiceService - High-performance Voice Engine Abstraction
 * Fully safe error handling (STT/TTS unavailable, network, permission, timeout, empty input).
 * No hardcoded API keys.
 */
class VoiceService {
  constructor(options = {}) {
    this.options = {
      lang: options.lang || 'ta-IN',
      pitch: options.pitch || 0.95,
      rate: options.rate || 0.88,
      onStateChange: options.onStateChange || (() => {}),
      onResult: options.onResult || (() => {}),
      onError: options.onError || (() => {}),
      ...options
    };

    this.recognition = null;
    this.synth = window.speechSynthesis || null;
    this.isListening = false;
    this.isSpeaking = false;
    this.isMuted = false;
    this.tamilVoice = null;
    this.currentUtterance = null;
    this.mediaStream = null;

    this.initSTT();
    this.initTTS();
  }

  /** Initialize Speech Recognition (STT) with comprehensive error handling */
  initSTT() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('VoiceService: Browser Speech Recognition API not available.');
      return;
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;
      this.recognition.lang = this.options.lang;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.options.onStateChange('LISTENING', 'கேட்கிறேன்...');
      };

      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        const currentText = finalTranscript || interimTranscript;
        if (currentText && currentText.trim()) {
          this.options.onResult(currentText.trim(), event.results[0].isFinal);
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('VoiceService STT Error Event:', event.error);
        this.stopListening();

        let errorMsg = 'மன்னிக்கவும், குரலை அறிய முடியவில்லை. மீண்டும் முயற்சிக்கவும்.';
        
        switch (event.error) {
          case 'not-allowed':
          case 'service-not-allowed':
            errorMsg = 'மைக்ரோஃபோன் அனுமதி தேவைப்படுகிறது. (Microphone permission required)';
            break;
          case 'no-speech':
            errorMsg = 'பேச்சு எதுவும் கேட்கவில்லை. மீண்டும் முயற்சிக்கவும். (No speech detected)';
            break;
          case 'network':
            errorMsg = 'இணைய இணைப்பு கோளாறு. (Network failure)';
            break;
          case 'audio-capture':
            errorMsg = 'மைக்ரோஃபோன் வன்பொருள் கிடைக்கவில்லை. (Microphone hardware missing)';
            break;
          case 'aborted':
            errorMsg = 'குரல் பதிவு ரத்து செய்யப்பட்டது.';
            break;
          default:
            errorMsg = 'Voice service temporarily unavailable. மீண்டும் முயற்சிக்கவும்.';
        }

        this.options.onError(errorMsg);
        this.options.onStateChange('ERROR', errorMsg);
      };

      this.recognition.onend = () => {
        this.stopListening();
      };
    } catch (e) {
      console.error('VoiceService STT Init Exception:', e);
      this.options.onError('Browser speech service error.');
    }
  }

  /** Initialize Text-To-Speech (TTS) */
  initTTS() {
    if (!this.synth) {
      console.warn('VoiceService: SpeechSynthesis API not supported in this browser environment.');
      return;
    }

    const loadVoices = () => {
      const voices = this.synth.getVoices();
      this.tamilVoice = voices.find(v => v.lang === 'ta-IN' || v.lang.startsWith('ta')) ||
                        voices.find(v => v.name.toLowerCase().includes('tamil')) ||
                        voices.find(v => v.lang.includes('IN')) ||
                        voices[0];
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  /** Start listening to microphone input */
  async startListening() {
    if (this.isSpeaking) {
      this.stopSpeaking();
    }

    if (!this.recognition) {
      const msg = 'உங்களின் Browser-ல் Speech Recognition வசதி இல்லை. Google Chrome, Edge அல்லது Safari பயன்படுத்தவும்.';
      this.options.onError(msg);
      this.options.onStateChange('ERROR', msg);
      return;
    }

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      }
      this.recognition.start();
    } catch (err) {
      console.warn('VoiceService getUserMedia permission denied:', err);
      const permMsg = 'மைக்ரோஃபோன் அனுமதி தேவைப்படுகிறது. Browser permissions check செய்யவும்.';
      this.options.onError(permMsg);
      this.options.onStateChange('ERROR', permMsg);
    }
  }

  /** Stop listening and cleanly release audio stream hardware */
  stopListening() {
    this.isListening = false;
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }

    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
  }

  /** Speak text using SpeechSynthesis (TTS) */
  speak(text, onEndCallback = null) {
    if (this.isMuted) {
      if (onEndCallback) onEndCallback();
      return;
    }

    if (!this.synth || !text) {
      if (onEndCallback) onEndCallback();
      return;
    }

    this.stopSpeaking();
    this.stopListening();

    this.isSpeaking = true;
    this.options.onStateChange('SPEAKING', 'பதில் அளிக்கிறது...');

    const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
    if (!cleanText) {
      this.isSpeaking = false;
      this.options.onStateChange('IDLE', 'மீண்டும் கேட்கலாம்.');
      return;
    }

    this.currentUtterance = new SpeechSynthesisUtterance(cleanText);
    this.currentUtterance.lang = this.options.lang;
    this.currentUtterance.rate = this.options.rate;
    this.currentUtterance.pitch = this.options.pitch;

    if (this.tamilVoice) {
      this.currentUtterance.voice = this.tamilVoice;
    }

    this.currentUtterance.onend = () => {
      this.isSpeaking = false;
      this.options.onStateChange('IDLE', 'மீண்டும் கேட்கலாம்.');
      if (onEndCallback) onEndCallback();
    };

    this.currentUtterance.onerror = (e) => {
      console.warn('VoiceService TTS Error:', e);
      this.isSpeaking = false;
      this.options.onStateChange('IDLE', 'மீண்டும் கேட்கலாம்.');
    };

    this.synth.speak(this.currentUtterance);
  }

  /** Stop speaking immediately */
  stopSpeaking() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
  }

  /** Toggle Mute Audio Option */
  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopSpeaking();
    }
    return this.isMuted;
  }

  destroy() {
    this.stopListening();
    this.stopSpeaking();
    this.recognition = null;
    this.synth = null;
  }
}

window.VoiceService = VoiceService;
