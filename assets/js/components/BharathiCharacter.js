/**
 * BharathiCharacter.js - Character Avatar Component
 * Uses window.getBharathiAsset(state) centralized asset dictionary.
 * Supports states: IDLE, GREETING, LISTENING, THINKING, SPEAKING, HAPPY, CONFUSED, ERROR, GOODBYE.
 */
class BharathiCharacter {
  constructor(containerEl) {
    this.containerEl = containerEl;
    this.currentState = 'idle';
    this.render();
  }

  render() {
    const initialImgSrc = window.getBharathiAsset('idle');
    this.containerEl.innerHTML = `
      <span class="bharathi-speech-wave-ring"></span>
      <img src="${initialImgSrc}" alt="Digital Bharathiyar Character Avatar" class="bharathi-avatar-img" />
      <div class="bharathi-thinking-particles">
        <span class="bharathi-particle">✒️</span>
        <span class="bharathi-particle">✨</span>
        <span class="bharathi-particle">📖</span>
      </div>
    `;
    this.imgEl = this.containerEl.querySelector('img');
  }

  updateState(state) {
    this.currentState = (state || 'idle').toLowerCase();
    this.containerEl.className = `bharathi-header-avatar state-${this.currentState}`;

    // Update image src cleanly using centralized bharathiAssets dictionary
    if (this.imgEl && typeof window.getBharathiAsset === 'function') {
      const assetUrl = window.getBharathiAsset(this.currentState);
      if (this.imgEl.getAttribute('src') !== assetUrl) {
        this.imgEl.setAttribute('src', assetUrl);
      }
    }
  }
}

window.BharathiCharacter = BharathiCharacter;
