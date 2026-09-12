/**
 * VoiceWaveform.js - Subtle Elegant Animated Voice Waveform Component
 * LISTENING: Waveform responds smoothly to audio input.
 * SPEAKING: Waveform animates subtly during speech playback.
 */
class VoiceWaveform {
  constructor(ringEl) {
    this.ringEl = ringEl;
    this.barsInterval = null;
  }

  setActive(active) {
    if (active) {
      this.ringEl.style.opacity = '1';
    } else {
      this.ringEl.style.opacity = '0';
      if (this.barsInterval) {
        clearInterval(this.barsInterval);
        this.barsInterval = null;
      }
    }
  }

  animateSpeakingBars(containerEl) {
    if (!containerEl) return;
    this.stopBarsAnimation();

    const bars = containerEl.querySelectorAll('.bharathi-wave-bar');
    if (!bars || bars.length === 0) return;

    this.barsInterval = setInterval(() => {
      bars.forEach(bar => {
        const randomHeight = Math.floor(Math.random() * 16) + 4;
        bar.style.height = `${randomHeight}px`;
      });
    }, 120);
  }

  stopBarsAnimation() {
    if (this.barsInterval) {
      clearInterval(this.barsInterval);
      this.barsInterval = null;
    }
  }
}

window.VoiceWaveform = VoiceWaveform;
