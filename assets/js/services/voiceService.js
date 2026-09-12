/**
 * voiceService.js - High Quality Unified Voice Engine Abstraction
 * Wraps SpeechSynthesisService and SpeechRecognitionService.
 * Exposes speak, pause, resume, togglePause, stop, and toggleMute.
 */
class VoiceService {
  constructor(options = {}) {
    this.options = options;
    this.ttsService = new window.SpeechSynthesisService({
      lang: options.lang || 'ta-IN',
      pitch: options.pitch || 0.96,
      rate: options.rate || 0.85,
      onStart: options.onStart || (() => {}),
      onPause: options.onPause || (() => {}),
      onResume: options.onResume || (() => {}),
      onEnd: options.onEnd || (() => {}),
      onError: options.onError || (() => {})
    });
    this.isMuted = false;
  }

  get isSpeaking() {
    return this.ttsService.isSpeaking;
  }

  get isPaused() {
    return this.ttsService.isPaused;
  }

  speak(text, onEndCallback = null) {
    if (this.isMuted) {
      if (onEndCallback) onEndCallback();
      return;
    }
    this.ttsService.speak(text, onEndCallback);
  }

  pause() {
    this.ttsService.pause();
  }

  resume() {
    this.ttsService.resume();
  }

  togglePause() {
    return this.ttsService.togglePause();
  }

  stopSpeaking() {
    this.ttsService.stop();
  }

  replayLastResponse(onEndCallback = null) {
    return this.ttsService.replayLastResponse(onEndCallback);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) this.stopSpeaking();
    return this.isMuted;
  }
}

window.VoiceService = VoiceService;
