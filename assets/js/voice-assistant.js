/**
 * voice-assistant.js - Pure Floating Character Companion (NO Rectangular Box/Panel)
 * Features direct ON/OFF click toggling on the floating avatar character itself.
 */
class VoiceAssistant {
  constructor() {
    this.isOn = false;
    this.currentState = 'IDLE';
    
    // Services
    this.ttsService = null;
    this.sttService = null;
    this.knowledgeService = null;

    this.initDOM();
  }

  initDOM() {
    const initialImgSrc = window.getBharathiAsset('idle');

    const container = document.createElement('div');
    container.className = 'bharathi-voice-container';
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', 'Digital Bharathiyar Voice Companion');

    container.innerHTML = `
      <button type="button" class="bharathi-avatar-btn state-idle" id="bharathi-toggle-btn"
              aria-expanded="false" aria-label="Toggle Bharathiyar Voice Assistant ON or OFF">
        <span class="bharathi-pulse-ring" id="bharathi-pulse-ring"></span>
        <span class="bharathi-speech-wave-ring" id="bharathi-wave-ring"></span>
        <img src="${initialImgSrc}" alt="Digital Bharathiyar Character Avatar" class="bharathi-avatar-img" id="bharathi-avatar-img" />
        
        <div class="bharathi-thinking-particles" id="bharathi-particles">
          <span class="bharathi-particle">✒️</span>
          <span class="bharathi-particle">✨</span>
          <span class="bharathi-particle">📖</span>
        </div>

        <div class="bharathi-floating-speech-bubble" id="bharathi-speech-bubble" aria-live="polite">
          <span id="bharathi-bubble-text">பாரதியாரிடம் பேச கிளிக் செய்யவும் (Click to Speak)</span>
        </div>
      </button>
    `;

    document.body.appendChild(container);
    this.bindEvents();
    this.setupReadAloudButtons();
  }

  lazyInitServices() {
    if (!this.ttsService) {
      this.ttsService = new window.VoiceService({
        onStart: () => {
          this.updateState('SPEAKING', 'பதில் அளிக்கிறது...');
        },
        onPause: () => {
          this.updateState('SPEAKING', 'இடைநிறுத்தப்பட்டது');
        },
        onResume: () => {
          this.updateState('SPEAKING', 'பதில் அளிக்கிறது...');
        },
        onEnd: () => {
          if (this.isOn) {
            this.updateState('IDLE', 'மீண்டும் பேச கிளிக் செய்ய வேண்டும்.');
          }
        }
      });

      this.sttService = new window.SpeechRecognitionService({
        onStart: () => {
          if (this.ttsService) this.ttsService.stopSpeaking();
          this.updateState('LISTENING', 'கேட்கிறேன்...');
        },
        onResult: (text, isFinal) => this.handleVoiceInput(text, isFinal),
        onError: (err) => this.handleError(err),
        onEnd: () => {
          if (this.currentState === 'LISTENING') {
            this.updateState('IDLE', 'மீண்டும் கேட்கலாம்.');
          }
        }
      });

      this.knowledgeService = new window.AIKnowledgeService();
    }
  }

  bindEvents() {
    const toggleBtn = document.getElementById('bharathi-toggle-btn');
    toggleBtn.addEventListener('click', () => this.toggleOnOff());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOn) {
        this.turnOff();
      }
    });
  }

  toggleOnOff() {
    if (this.isOn) {
      this.turnOff();
    } else {
      this.turnOn();
    }
  }

  turnOn() {
    this.lazyInitServices();
    this.isOn = true;
    const toggleBtn = document.getElementById('bharathi-toggle-btn');
    toggleBtn.setAttribute('aria-expanded', 'true');

    // Turn ON -> Greet & Start Listening Immediately
    this.updateState('GREETING', 'வணக்கம்! கேளுங்கள்...');
    const greetingMsg = "வணக்கம்! அன்பான நல்வரவு. மகாகவி பாரதியாரின் சிந்தனைகளால் இயங்கும் AI உதவியாளன் நான். கனிவுடன் கேளுங்கள்.";
    
    this.ttsService.speak(greetingMsg, () => {
      if (this.isOn) {
        this.sttService.start();
      }
    });
  }

  turnOff() {
    this.isOn = false;
    const toggleBtn = document.getElementById('bharathi-toggle-btn');
    toggleBtn.setAttribute('aria-expanded', 'false');

    if (this.sttService) this.sttService.stop();
    if (this.ttsService) this.ttsService.stopSpeaking();
    
    this.updateState('IDLE', 'பாரதியாரிடம் பேச கிளிக் செய்யவும்');
  }

  updateState(state, statusText) {
    this.currentState = state;
    const stateLower = (state || 'idle').toLowerCase();

    const toggleBtn = document.getElementById('bharathi-toggle-btn');
    const avatarImg = document.getElementById('bharathi-avatar-img');
    const bubbleText = document.getElementById('bharathi-bubble-text');

    toggleBtn.className = 'bharathi-avatar-btn state-' + stateLower;

    // Update character avatar image using centralized asset dictionary
    if (avatarImg && typeof window.getBharathiAsset === 'function') {
      const assetUrl = window.getBharathiAsset(stateLower);
      if (avatarImg.getAttribute('src') !== assetUrl) {
        avatarImg.setAttribute('src', assetUrl);
      }
    }

    if (bubbleText && statusText) {
      bubbleText.textContent = statusText;
    }
  }

  handleVoiceInput(text, isFinal) {
    const bubbleText = document.getElementById('bharathi-bubble-text');
    if (bubbleText) bubbleText.textContent = text;

    if (isFinal) {
      if (this.sttService) this.sttService.stop();
      this.updateState('THINKING', 'சிந்திக்கிறேன்...');
      this.processQuery(text);
    }
  }

  processQuery(queryText) {
    this.updateState('THINKING', 'சிந்திக்கிறேன்...');

    setTimeout(() => {
      const result = this.knowledgeService.processQuery(queryText);
      
      const bubbleText = document.getElementById('bharathi-bubble-text');
      if (bubbleText) bubbleText.textContent = result.response;

      if (result.type === 'NAVIGATE') {
        this.updateState('HAPPY', 'பக்கத்திற்கு வழிகாட்டுகிறேன்...');
        this.ttsService.speak(result.response, () => {
          window.location.href = result.target;
        });
      } else if (result.type === 'FEATURE' || result.type === 'ACTION') {
        this.updateState('HAPPY', result.response);
        this.ttsService.speak(result.response, () => {
          if (this.isOn && this.sttService) {
            setTimeout(() => this.sttService.start(), 300);
          }
        });
      } else if (result.type === 'MUSIC') {
        this.updateState('HAPPY', result.response);
        this.ttsService.speak(result.response, () => {
          if (typeof window.playBharathiSong === 'function') {
            window.playBharathiSong(result.songKey);
          }
        });
      } else if (result.type === 'SPEAK') {
        this.updateState('SPEAKING', result.response);
        this.ttsService.speak(result.response, () => {
          if (this.isOn && this.sttService) {
            setTimeout(() => this.sttService.start(), 300);
          }
        });
      } else if (result.type === 'CONTROL' && result.action === 'STOP') {
        this.turnOff();
      } else {
        this.updateState('CONFUSED', 'மன்னிக்கவும், மீண்டும் கேட்கவும்.');
        if (this.isOn && this.sttService) {
          setTimeout(() => this.sttService.start(), 1000);
        }
      }
    }, 300);
  }

  handleError(errMsg) {
    const bubbleText = document.getElementById('bharathi-bubble-text');
    if (bubbleText) bubbleText.textContent = errMsg;
    this.updateState('ERROR', errMsg);
  }

  setupReadAloudButtons() {
    document.querySelectorAll('blockquote, .poem-block, .read-aloud-target').forEach(block => {
      if (block.querySelector('.bharathi-read-aloud-btn')) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bharathi-read-aloud-btn';
      btn.setAttribute('aria-label', 'Read poem aloud in Tamil');
      btn.innerHTML = `<span class="material-symbols-outlined text-[14px]">volume_up</span> பாரதி வாசிக்க`;

      btn.addEventListener('click', () => {
        this.lazyInitServices();
        const textToRead = block.innerText.replace('பாரதி வாசிக்க', '').trim();
        this.isOn = true;
        this.updateState('THINKING', 'சிந்திக்கிறேன்...');
        setTimeout(() => {
          this.updateState('SPEAKING', textToRead);
          this.ttsService.speak(textToRead);
        }, 300);
      });

      block.appendChild(btn);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new VoiceAssistant());
} else {
  new VoiceAssistant();
}
