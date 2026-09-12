/**
 * BharathiIntroModal.js - Site Opening Video Intro Player with Guaranteed Autoplay
 * Automatically plays the introduction video on site opening / homepage visit.
 * Bharathi 360 Digital Archive
 */

class BharathiIntroModal {
  constructor() {
    this.storageKey = 'bharathi_intro_shown';
    this.init();
  }

  init() {
    // Clear old localStorage keys to ensure intro isn't permanently blocked on devices
    try {
      localStorage.removeItem(this.storageKey);
    } catch (e) {}

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
    const hasSeenIntro = sessionStorage.getItem(this.storageKey);
    const isSubpage = window.location.pathname.includes('/pages/');

    // Auto-trigger on homepage or when not yet shown in this session
    if (!hasSeenIntro || !isSubpage) {
      if (!hasSeenIntro) {
        this.render(false);
      }
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
          <video id="bharathi-intro-video" class="w-full h-full object-cover" autoplay playsinline muted preload="auto">
            <source src="${vPath1}" type="video/mp4">
            <source src="${vPath2}" type="video/mp4">
            <source src="${vPath3}" type="video/mp4">
            <source src="/assets/videos/generate_the_intro_video.mp4" type="video/mp4">
            Your browser does not support HTML5 video playback.
          </video>
          
          <!-- Sound Unmute Pill Button -->
          <button id="intro-unmute-btn" type="button" aria-label="Unmute Video Audio"
                  class="absolute bottom-3.5 left-3.5 z-40 px-3 py-1.5 rounded-full bg-amber-600/90 hover:bg-amber-500 text-white font-cinzel font-semibold text-xs tracking-wider transition-all shadow-2xl flex items-center gap-1.5 border border-amber-300 animate-pulse">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
            <span id="unmute-btn-text">UNMUTE SOUND / ஒலி இயக்க</span>
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
    const unmuteBtn = document.getElementById('intro-unmute-btn');
    const unmuteTxt = document.getElementById('unmute-btn-text');

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

    // Auto play video immediately
    if (videoEl) {
      videoEl.addEventListener('ended', dismissModal);

      // Attempt unmuted play first, then muted play for 100% autoplay guarantee
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoEl.muted = true;
          videoEl.play().catch(e => {});
        });
      }
    }

    // Toggle Unmute sound button
    if (unmuteBtn && videoEl) {
      unmuteBtn.addEventListener('click', () => {
        if (videoEl.muted) {
          videoEl.muted = false;
          if (unmuteTxt) unmuteTxt.textContent = "SOUND ACTIVE / ஒலி இயக்கத்தில்";
          unmuteBtn.classList.remove('animate-pulse');
        } else {
          videoEl.muted = true;
          if (unmuteTxt) unmuteTxt.textContent = "UNMUTE SOUND / ஒலி இயக்க";
          unmuteBtn.classList.add('animate-pulse');
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
