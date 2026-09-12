/**
 * speechRecognitionService.js - Speech-to-Text (STT) Service
 * Features precise Tamil error messages:
 * - "மைக்ரோஃபோன் அனுமதி கிடைக்கவில்லை."
 * - "மீண்டும் முயற்சிக்கவும்."
 * - "குரல் சேவை தற்போது கிடைக்கவில்லை."
 */
class SpeechRecognitionService {
  constructor(options = {}) {
    this.options = {
      lang: options.lang || 'ta-IN',
      fallbackLang: options.fallbackLang || 'en-IN',
      onStart: options.onStart || (() => {}),
      onResult: options.onResult || (() => {}),
      onError: options.onError || (() => {}),
      onEnd: options.onEnd || (() => {})
    };

    this.recognition = null;
    this.mediaStream = null;
    this.isListening = false;
    this.currentLang = this.options.lang;
    this.init();
  }

  init() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('SpeechRecognitionService: Web Speech API not supported.');
      return;
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;
      this.recognition.lang = this.currentLang;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.options.onStart();
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

        const text = finalTranscript || interimTranscript;
        if (text && text.trim()) {
          this.options.onResult(text.trim(), Boolean(finalTranscript));
        }
      };

      this.recognition.onerror = (event) => {
        this.stop();
        let errorMsg = 'குரல் சேவை தற்போது கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்.';
        
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          errorMsg = 'மைக்ரோஃபோன் அனுமதி கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்.';
        } else if (event.error === 'no-speech') {
          errorMsg = 'பேச்சு எதுவும் கேட்கவில்லை. மீண்டும் முயற்சிக்கவும்.';
        } else if (event.error === 'network') {
          errorMsg = 'இணைய இணைப்பு கோளாறு. மீண்டும் முயற்சிக்கவும்.';
        }

        this.options.onError(errorMsg);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.options.onEnd();
      };
    } catch (e) {
      console.error('SpeechRecognitionService Init Error:', e);
      this.options.onError('குரல் சேவை தற்போது கிடைக்கவில்லை.');
    }
  }

  setLocale(langCode) {
    this.currentLang = langCode || 'ta-IN';
    if (this.recognition) {
      this.recognition.lang = this.currentLang;
    }
  }

  async start(preferredLang) {
    if (!this.recognition) {
      this.options.onError('உங்களின் Browser-ல் Speech Recognition வசதி இல்லை.');
      return;
    }

    if (preferredLang) {
      this.setLocale(preferredLang);
    } else {
      this.setLocale(this.options.lang);
    }

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      }
      this.recognition.start();
    } catch (err) {
      console.warn('SpeechRecognitionService getUserMedia denied:', err);
      this.options.onError('மைக்ரோஃபோன் அனுமதி கிடைக்கவில்லை.');
    }
  }

  stop() {
    this.isListening = false;
    if (this.recognition) {
      try { this.recognition.stop(); } catch (e) {}
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
  }
}

window.SpeechRecognitionService = SpeechRecognitionService;
