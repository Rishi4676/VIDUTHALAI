/**
 * speechSynthesisService.js - Ultra-Natural, Polite & Human-Like Tamil Text-to-Speech Engine
 * Delivers warm, respectful, gentle, and clear Tamil/English speech with natural sentence pauses.
 * Supports multi-tier voice scoring, instant cancellation on user input, and graceful fallbacks.
 */
class SpeechSynthesisService {
  constructor(options = {}) {
    this.options = {
      lang: options.lang || 'ta-IN',
      pitch: options.pitch || 0.98, // Warm, gentle, humble human pitch
      rate: options.rate || 0.85,   // Comfortable, slightly slower rate for crystal clear pronunciation
      volume: options.volume || 1.0,
      onStart: options.onStart || (() => {}),
      onPause: options.onPause || (() => {}),
      onResume: options.onResume || (() => {}),
      onEnd: options.onEnd || (() => {}),
      onError: options.onError || (() => {})
    };

    this.fallbackProvider = window.speechSynthesis || null;
    this.selectedVoice = null;
    this.selectedEnglishVoice = null;
    this.isSpeaking = false;
    this.isPaused = false;
    this.sentenceQueue = [];
    this.currentChunkIndex = 0;
    this.lastSpokenText = '';

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

        let bestTamilVoice = null;
        let highestTamilScore = -1;

        let bestEnglishVoice = null;
        let highestEnglishScore = -1;

        voices.forEach(voice => {
          let score = 0;
          const name = voice.name.toLowerCase();
          const lang = voice.lang.toLowerCase();

          // 1. High priority for Tamil language matches
          if (lang === 'ta-IN' || lang.startsWith('ta')) score += 150;
          else if (lang.includes('ta')) score += 100;
          else if (lang.includes('in')) score += 30;

          // 2. Prefer Natural, Neural, Online, and Human-sounding Tamil voices
          if (name.includes('natural')) score += 80;
          if (name.includes('neural')) score += 70;
          if (name.includes('pallavi') || name.includes('valluvar') || name.includes('kani')) score += 60;
          if (name.includes('google')) score += 50;
          if (name.includes('online')) score += 40;
          if (name.includes('microsoft')) score += 35;
          if (name.includes('apple') || name.includes('siri')) score += 30;

          if (score > highestTamilScore) {
            highestTamilScore = score;
            bestTamilVoice = voice;
          }

          // Score English Voices for English queries
          if (lang.startsWith('en')) {
            let enScore = 50;
            if (lang === 'en-in') enScore += 60;
            if (name.includes('natural') || name.includes('neural')) enScore += 40;
            if (name.includes('google')) enScore += 30;
            if (enScore > highestEnglishScore) {
              highestEnglishScore = enScore;
              bestEnglishVoice = voice;
            }
          }
        });

        this.selectedVoice = bestTamilVoice || voices.find(v => v.lang.startsWith('ta')) || voices[0];
        this.selectedEnglishVoice = bestEnglishVoice || voices.find(v => v.lang.startsWith('en')) || this.selectedVoice;
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

    return clean;
  }

  speak(text, onEndCallback = null) {
    if (!text) {
      if (onEndCallback) onEndCallback();
      return;
    }

    this.lastSpokenText = text;
    this.stop();

    const cleanText = this.normalizeText(text);
    const hasTamilScript = /[\u0B80-\u0BFF]/.test(cleanText);

    // Split text into natural sentence phrases for gentle, human-like cadence
    const phrases = cleanText
      .split(/(?<=[.!?;\n])\s+/)
      .map(p => p.trim())
      .filter(p => p.length > 0);

    if (phrases.length === 0) {
      if (onEndCallback) onEndCallback();
      return;
    }

    this.sentenceQueue = phrases;
    this.currentChunkIndex = 0;
    this.isSpeaking = true;
    this.isPaused = false;
    this.options.onStart();

    const targetVoice = hasTamilScript ? this.selectedVoice : (this.selectedEnglishVoice || this.selectedVoice);
    const targetLang = hasTamilScript ? 'ta-IN' : 'en-IN';

    const speakChunk = (index) => {
      if (!this.isSpeaking || index >= this.sentenceQueue.length) {
        this.isSpeaking = false;
        this.isPaused = false;
        this.options.onEnd();
        if (onEndCallback) onEndCallback();
        return;
      }

      const chunk = this.sentenceQueue[index];
      if (!chunk) {
        speakChunk(index + 1);
        return;
      }

      if (this.fallbackProvider) {
        try {
          const utterance = new SpeechSynthesisUtterance(chunk);
          utterance.lang = targetLang;
          utterance.rate = hasTamilScript ? 0.85 : 0.90; // Gentle, clear speed so every word is understood
          utterance.pitch = 0.98;                        // Calm, respectful, polite tone
          utterance.volume = this.options.volume;

          if (targetVoice) {
            utterance.voice = targetVoice;
          }

          utterance.onend = () => {
            if (this.isSpeaking) {
              // Natural conversational micro-pause between sentences (180ms)
              setTimeout(() => speakChunk(index + 1), 180);
            }
          };

          utterance.onerror = (err) => {
            console.warn('SpeechSynthesis chunk error:', err);
            speakChunk(index + 1);
          };

          this.fallbackProvider.speak(utterance);
          return;
        } catch (err) {
          console.warn('SpeechSynthesis Exception:', err);
        }
      }

      this.executeVisualFallback(onEndCallback);
    };

    speakChunk(0);
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
      return false;
    } else if (this.isSpeaking) {
      this.pause();
      return true;
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
    this.isSpeaking = false;
    this.isPaused = false;
    this.sentenceQueue = [];
    this.currentChunkIndex = 0;
    if (this.fallbackProvider) {
      try {
        this.fallbackProvider.cancel();
      } catch (e) {}
    }
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
