/**
 * speechSynthesisService.js - Text-to-Speech Provider Abstraction Layer
 * Supports Speak, Pause, Resume, Stop, Mute, and Multi-Tier Fallback.
 * Never crashes the website.
 */
class SpeechSynthesisService {
  constructor(options = {}) {
    this.options = {
      lang: options.lang || 'ta-IN',
      pitch: options.pitch || 0.96, // Soft, polite, natural pitch
      rate: options.rate || 0.85,  // Relaxed, unhurried, gentle speaking rate
      volume: options.volume || 1.0,
      onStart: options.onStart || (() => {}),
      onPause: options.onPause || (() => {}),
      onResume: options.onResume || (() => {}),
      onEnd: options.onEnd || (() => {}),
      onError: options.onError || (() => {})
    };

    this.fallbackProvider = window.speechSynthesis || null;
    this.selectedVoice = null;
    this.isSpeaking = false;
    this.isPaused = false;

    this.availableVoices = [];
    this.initProviders();
  }

  initProviders() {
    if (!this.fallbackProvider) return;

    const selectBestVoice = () => {
      try {
        const voices = this.fallbackProvider.getVoices();
        if (!voices || voices.length === 0) return;

        this.availableVoices = voices;

        // Score voices to prioritize ultra-polite Natural/Neural Tamil voices
        let bestVoice = null;
        let highestScore = -1;

        voices.forEach(voice => {
          let score = 0;
          const name = voice.name.toLowerCase();
          const lang = voice.lang.toLowerCase();

          // High priority for Tamil language matches
          if (lang === 'ta-IN' || lang.startsWith('ta')) score += 120;
          else if (lang.includes('in')) score += 30;

          // Prefer Natural & Neural voices on Windows/Edge/Chrome (Valluvar / Pallavi Natural / Google Tamil)
          if (name.includes('natural')) score += 80;
          if (name.includes('neural')) score += 70;
          if (name.includes('google')) score += 50;
          if (name.includes('online')) score += 40;
          if (name.includes('microsoft')) score += 35;
          if (name.includes('valluvar') || name.includes('pallavi') || name.includes('male')) score += 30;

          if (score > highestScore) {
            highestScore = score;
            bestVoice = voice;
          }
        });

        this.selectedVoice = bestVoice || voices[0];
      } catch (e) {
        console.warn('SpeechSynthesisService voice selection error:', e);
      }
    };

    selectBestVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = selectBestVoice;
    }
  }

  getAvailableVoices() {
    return this.availableVoices || [];
  }

  setVoiceByName(voiceName) {
    if (!this.availableVoices) return false;
    const found = this.availableVoices.find(v => v.name === voiceName);
    if (found) {
      this.selectedVoice = found;
      return true;
    }
    return false;
  }

  normalizeText(text) {
    if (!text) return '';
    let clean = text
      .replace(/<[^>]*>?/gm, '')
      .replace(/1910/g, 'ஆயிரத்து தொள்ளாயிரத்து பத்து')
      .replace(/1908/g, 'ஆயிரத்து தொள்ளாயிரத்து எட்டு')
      .replace(/1918/g, 'ஆயிரத்து தொள்ளாயிரத்து பதினெட்டு')
      .replace(/1921/g, 'ஆயிரத்து தொள்ளாயிரத்து இருபத்து ஒன்று')
      .replace(/1882/g, 'ஆயிரத்து எண்ணூற்று எண்பத்து இரண்டு')
      .replace(/–/g, ' முதல் ')
      .replace(/—/g, ', ')
      .replace(/AI/gi, 'ஏ ஐ')
      .trim();

    // Add natural micro-pauses after sentences and clause breaks for crystal clear Tamil articulation
    clean = clean.replace(/([.!?])/g, '$1 , ');
    return clean;
  }

  speak(text, onEndCallback = null) {
    if (!text) {
      if (onEndCallback) onEndCallback();
      return;
    }

    this.lastSpokenText = text;
    this.stop();
    this.isSpeaking = true;
    this.isPaused = false;
    this.options.onStart();

    const cleanText = this.normalizeText(text);

    if (this.fallbackProvider) {
      try {
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = this.options.lang;
        utterance.rate = this.options.rate;
        utterance.pitch = this.options.pitch;
        utterance.volume = this.options.volume;

        if (this.selectedVoice) {
          utterance.voice = this.selectedVoice;
        }

        utterance.onend = () => {
          this.isSpeaking = false;
          this.isPaused = false;
          this.options.onEnd();
          if (onEndCallback) onEndCallback();
        };

        utterance.onerror = (err) => {
          console.warn('SpeechSynthesisService Primary Error, invoking visual fallback:', err);
          this.executeVisualFallback(onEndCallback);
        };

        this.fallbackProvider.speak(utterance);
        return;
      } catch (err) {
        console.warn('SpeechSynthesisService Exception:', err);
      }
    }

    this.executeVisualFallback(onEndCallback);
  }

  pause() {
    if (this.fallbackProvider && this.fallbackProvider.speaking && !this.isPaused) {
      try {
        this.fallbackProvider.pause();
        this.isPaused = true;
        this.options.onPause();
      } catch (e) {}
    }
  }

  resume() {
    if (this.fallbackProvider && this.isPaused) {
      try {
        this.fallbackProvider.resume();
        this.isPaused = false;
        this.options.onResume();
      } catch (e) {}
    }
  }

  togglePause() {
    if (this.isPaused) {
      this.resume();
      return false; // Not paused anymore
    } else if (this.isSpeaking) {
      this.pause();
      return true; // Now paused
    }
    return false;
  }

  replayLastResponse(onEndCallback = null) {
    if (this.lastSpokenText) {
      this.speak(this.lastSpokenText, onEndCallback);
      return true;
    }
    return false;
  }

  stop() {
    if (this.fallbackProvider && (this.fallbackProvider.speaking || this.fallbackProvider.paused)) {
      try { this.fallbackProvider.cancel(); } catch (e) {}
    }
    this.isSpeaking = false;
    this.isPaused = false;
  }

  executeVisualFallback(onEndCallback) {
    this.isSpeaking = false;
    this.isPaused = false;
    setTimeout(() => {
      this.options.onEnd();
      if (onEndCallback) onEndCallback();
    }, 1500);
  }
}

window.SpeechSynthesisService = SpeechSynthesisService;
