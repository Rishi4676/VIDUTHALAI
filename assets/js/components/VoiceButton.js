/**
 * VoiceButton.js - Large Microphone Action Button Component with ARIA labels
 */
class VoiceButton {
  constructor(buttonEl, labelEl) {
    this.buttonEl = buttonEl;
    this.labelEl = labelEl;
    this.iconEl = buttonEl.querySelector('.material-symbols-outlined');
  }

  updateState(state) {
    if (state === 'LISTENING') {
      this.iconEl.textContent = 'graphic_eq';
      this.labelEl.textContent = 'கேட்கிறேன்... (பேசவும்)';
      this.buttonEl.setAttribute('aria-label', 'Stop recording voice query / கேட்ப்பதை நிறுத்த');
      this.buttonEl.setAttribute('aria-pressed', 'true');
    } else if (state === 'SPEAKING') {
      this.iconEl.textContent = 'volume_up';
      this.labelEl.textContent = 'பதில் அளிக்கிறது...';
      this.buttonEl.setAttribute('aria-label', 'Speaking answer');
      this.buttonEl.setAttribute('aria-pressed', 'false');
    } else if (state === 'PROCESSING') {
      this.iconEl.textContent = 'sync';
      this.labelEl.textContent = 'சிந்திக்கிறேன்...';
      this.buttonEl.setAttribute('aria-label', 'Processing query');
    } else {
      this.iconEl.textContent = 'mic';
      this.labelEl.textContent = 'பேசத் தொடங்குங்கள்';
      this.buttonEl.setAttribute('aria-label', 'Start recording voice query / பேசத் தொடங்க');
      this.buttonEl.setAttribute('aria-pressed', 'false');
    }
  }
}

window.VoiceButton = VoiceButton;
