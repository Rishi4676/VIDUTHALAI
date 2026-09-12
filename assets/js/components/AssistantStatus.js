/**
 * AssistantStatus.js - Status Indicator & Transcript Component with aria-live
 */
class AssistantStatus {
  constructor(statusTextEl, transcriptEl) {
    this.statusTextEl = statusTextEl;
    this.transcriptEl = transcriptEl;
  }

  setStatus(text) {
    if (this.statusTextEl) {
      this.statusTextEl.textContent = text;
    }
  }

  setUserTranscript(text) {
    if (this.transcriptEl) {
      this.transcriptEl.innerHTML = `<div class="bharathi-transcript-user">You: "${text}"</div>`;
    }
  }

  setAITranscript(userText, aiText) {
    if (this.transcriptEl) {
      this.transcriptEl.innerHTML = `
        <div class="bharathi-transcript-user">You: "${userText}"</div>
        <div class="bharathi-transcript-ai">"${aiText}"</div>
      `;
    }
  }
}

window.AssistantStatus = AssistantStatus;
