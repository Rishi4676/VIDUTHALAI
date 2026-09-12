/**
 * BharathiIntroModal.js - Site Opening Video Intro Player with Vercel Autoplay & Session Fixes
 * Plays generate_the_intro_video.mp4 on initial visit per session with interactive skip & play controls.
 * Bharathi 360 Digital Archive
 */

class BharathiIntroModal {
  constructor() {
    this.storageKey = 'bharathi_intro_shown';
    this.init();
  }

  init() {
    // Expose global trigger for manual replay anytime (e.g. from INTRO button in header)
    window.showBharathiIntro = (force = true) => {
      this.render(force);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.checkAndRender());
    } else {
      this.checkAndRender();
    }
  }

  checkAndRender() {
    // Only check sessionStorage so new sessions/visits on Vercel show the intro video
    const hasSeenIntro = sessionStorage.getItem(this.storageKey);
    if (!hasSeenIntro) {
      this.render(false);
    }
  }

  render(force = false) {
    if (!force) {
      const hasSeenIntro = sessionStorage.getItem(this.storageKey);
      if (hasSeenIntro) {
        return;
      }
    }

    const existing = document.getElementById('bharathi-intro-overlay');
    if (existing) {
      existing.remove();
    }

    const overlay = document.createElement('div');
    overlay.id = 'bharathi-intro-overlay';
    overlay.className = 'fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-xl transition-opacity duration-500 opacity-0 pointer-events-auto';

    // Determine correct relative video path based on URL location
    const isSubpage = window.location.pathname.includes('/pages/');
    const basePath = isSubpage ? '../' : './';
    
    const vPath1 = `${basePath}assets/videos/generate_the_intro_video.mp4`;
    const vPath2 = `${basePath}generate_the_intro_video.mp4`;
    const vPath3 = `${basePath}assets/videos/0912(3).mp4`;
    const avatarPath = `${basePath}assets/images/viduthalai-logo.png`;

    overlay.innerHTML = `
      <div id="bharathi-intro-card" class="relative w-full max-w-2xl bg-stone-900/98 border-2 border-amber-500/60 rounded-2xl shadow-2xl shadow-amber-950/50 overflow-hidden flex flex-col items-center transition-all transform scale-95 duration-500">
        
        <!-- Video Container -->
        <div class="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden border-b border-stone-800 group">
          <video id="bharathi-intro-video" class="w-full h-full object-cover" playsinline preload="auto">
            <source src="${vPath1}" type="video/mp4">
            <source src="${vPath2}" type="video/mp4">
            <source src="${vPath3}" type="video/mp4">
            <source src="/assets/videos/generate_the_intro_video.mp4" type="video/mp4">
            Your browser does not support HTML5 video playback.
          </video>
          
          <!-- Big Central Play Button Overlay (Visible if Autoplay is blocked by browser) -->
          <button id="intro-center-play-btn" type="button" aria-label="Play Intro Video"
                  class="hidden absolute inset-0 m-auto w-20 h-20 rounded-full bg-amber-600/90 hover:bg-amber-500 text-white font-bold shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 border-2 border-amber-300 z-30">
            <svg class="w-10 h-10 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>

          <!-- Top Floating Skip Pill Button -->
          <button id="intro-skip-top-btn" type="button" aria-label="Skip Intro Video" 
                  class="absolute top-3.5 right-3.5 z-40 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-amber-600 text-stone-100 hover:text-white font-cinzel font-semibold text-xs tracking-wider transition-all shadow-2xl flex items-center gap-2 border border-stone-700 hover:border-amber-400 hover:scale-105">
            <span>SKIP / கடந்துசெல்</span>
            <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Intro Footer Bar with Title & Explore Action Button -->
        <div class="w-full p-4 sm:p-5 bg-charcoal-900 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
          <!-- Left: Avatar & Title Alignment -->
          <div class="flex items-center gap-3 text-left w-full sm:w-auto">
            <div class="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-500/70 shadow-md">
              <img src="${avatarPath}" alt="Mahakavi Bharathi" class="w-full h-full object-contain p-0.5 bg-stone-950"/>
            </div>
            <div class="flex flex-col">
              <span class="font-tamil text-stone-100 font-bold text-sm sm:text-base leading-tight">மகாகவி பாரதியார் — அறிமுக வீடியோ</span>
              <span class="font-cinzel text-[11px] text-amber-400/90 font-medium tracking-wider">Mahakavi Subramania Bharathiyar Intro Video</span>
            </div>
          </div>

          <!-- Right: Explore Action Button Alignment -->
          <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end shrink-0">
            <button id="intro-explore-btn" type="button" 
                    class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-cinzel font-bold text-xs tracking-wider uppercase shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 border border-amber-500/40">
              <span>EXPLORE ARCHIVE</span>
              <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(overlay);

    const videoEl = document.getElementById('bharathi-intro-video');
    const playBtn = document.getElementById('intro-center-play-btn');

    // Fade-in animation
    requestAnimationFrame(() => {
      overlay.classList.remove('opacity-0');
      const card = document.getElementById('bharathi-intro-card');
      if (card) card.classList.remove('scale-95');
    });

    // Dismiss Modal Function
    const dismissModal = () => {
      try {
        sessionStorage.setItem(this.storageKey, 'true');
      } catch (e) {}
      if (videoEl) {
        try { videoEl.pause(); } catch (e) {}
      }
      overlay.classList.add('opacity-0');
      setTimeout(() => overlay.remove(), 400);
    };

    // Auto dismiss when video ends
    if (videoEl) {
      videoEl.addEventListener('ended', dismissModal);

      // Attempt Play with Muted Autoplay Fallback for Vercel/Browsers
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Autoplay blocked by browser policy, trying muted fallback:", err);
          videoEl.muted = true;
          videoEl.play().catch(e => {
            console.warn("Muted autoplay also blocked, showing play button overlay:", e);
            if (playBtn) playBtn.classList.remove('hidden');
          });
        });
      }
    }

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        playBtn.classList.add('hidden');
        if (videoEl) {
          videoEl.muted = false;
          videoEl.play().catch(e => {});
        }
      });
    }

    // Event Listeners for Skip / Explore
    const topSkipBtn = document.getElementById('intro-skip-top-btn');
    const exploreBtn = document.getElementById('intro-explore-btn');
    if (topSkipBtn) topSkipBtn.addEventListener('click', dismissModal);
    if (exploreBtn) exploreBtn.addEventListener('click', dismissModal);

    // Keyboard ESC or Space to skip video
    const keyHandler = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        dismissModal();
        document.removeEventListener('keydown', keyHandler);
      }
    };
    document.addEventListener('keydown', keyHandler);
  }
}

// Auto Instantiate on Page Load
new BharathiIntroModal();
