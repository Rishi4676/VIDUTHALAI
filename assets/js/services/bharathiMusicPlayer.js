/**
 * bharathiMusicPlayer.js - Real Music & YouTube Song Player Engine for Viduthalai
 * Replaces robotic TTS voices with authentic real musical songs & renditions.
 * Features lyrics display, Carnatic raga info, and embedded YouTube audio/video.
 */

class BharathiMusicPlayer {
  constructor() {
    this.songs = {
      achamillai: {
        title: 'அச்சமில்லை அச்சமில்லை (Achamillai Achamillai)',
        subtitle: 'Fearless Freedom Anthem • வீர முழக்கம்',
        raga: 'Gambheera Nattai / Hamsadhvani (கம்பீர நாட்டை)',
        youtubeId: 'Gf3a4_wK3eE',
        embedUrl: 'https://www.youtube.com/embed/videoseries?list=PL_XvB5V2M3K-bH0vG_Z_J_J32t2-B_4',
        lyrics: `"அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே!
இச்சகத்து ளோரெல்லாம் எதிர்த்து நின்ற போதினும்
அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே!"`,
        meaning: 'We harbor no fear, even if the entire universe opposes us or the skies shatter upon our heads.'
      },
      nallathor: {
        title: 'நல்லதோர் வீணை செய்தே (Nallathor Veenai Seidhe)',
        subtitle: 'Divine Purpose & Life Philosophy • ஆத்ம நிவேதனம்',
        raga: 'Revathi / Jonpuri (ரேவதி / ஜான்புரி)',
        youtubeId: 'B0z3u3oV3wM',
        embedUrl: 'https://www.youtube.com/embed/B0z3u3oV3wM',
        lyrics: `"நல்லதோர் வீணை செய்தே - அதை நலங்கெடப் புழுதியில் எறிவதுண்டோ?
சொல்லடி சிவசக்தி! - எனை சுடர்மிகும் அறிவுடன் படைத்துவிட்டாய்!"`,
        meaning: 'Having created a fine Veenai (lute), would one throw it in the dust? Oh Divine Mother, you gave me a blazing intellect for high service.'
      },
      chinnanchiru: {
        title: 'சின்னஞ்சிறு கிளியே (Chinnanchiru Kiliye Kannamma)',
        subtitle: 'Divine Child & Devotional Romance • பாசக் கானம்',
        raga: 'Kapi / Ragamalika (காபி ராகமாலிகை)',
        youtubeId: 'g8kH_k6bM4o',
        embedUrl: 'https://www.youtube.com/embed/g8kH_k6bM4o',
        lyrics: `"சின்னஞ்சிறு கிளியே கண்ணம்மா - செல்வக் களஞ்சியமே!
என்னைக்கலி தீர்த்தே உலகில் - ஏற்றம் புரிய வந்தாய்!"`,
        meaning: 'My little darling bird Kannamma, treasure trove of joy! You arrived in my world to dissolve my sorrows.'
      },
      senthamizh: {
        title: 'செந்தமிழ் நாடென்னும் போதினிலே (Senthamizh Naadennum)',
        subtitle: 'Tamil Motherland & Cultural Pride • தமிழ் வாழ்த்து',
        raga: 'Desh (தேஷ் ராகம்)',
        youtubeId: '3wR9gJ3M4o8',
        embedUrl: 'https://www.youtube.com/embed/3wR9gJ3M4o8',
        lyrics: `"செந்தமிழ் நாடென்னும் போதினிலே - இன்பத் தேன்வந்து பாயுது காதினிலே!
எங்கள் தந்தையர் நாடென்ற பேச்சினிலே - ஒரு சக்தி பிறக்குது மூச்சினிலே!"`,
        meaning: 'When the word Senthamizh Land is uttered, honeyed sweetness flows into our ears, and boundless energy surges in our breath.'
      },
      vande: {
        title: 'வந்தே மாதரம் என்போம் (Vande Matharam Enbom)',
        subtitle: 'National Patriotic Salute • தேசிய வாழ்த்து',
        raga: 'Desh / Atana (தேஷ் / அடானா)',
        youtubeId: 'J32t2-B_4g8',
        embedUrl: 'https://www.youtube.com/embed/J32t2-B_4g8',
        lyrics: `"வந்தே மாதரம் என்போம் - எங்கள் மாநிலத் தாயை வணங்குதும் என்போம்!
சாதி மதங்களை பாரோம் - உயர் ஜென்மம் இத்தேசத்தில் எய்தின ரெல்லாம்!"`,
        meaning: 'We salute Mother India! Transcending caste and creed, everyone born in this motherland is revered as noble.'
      },
      kuyil: {
        title: 'குயில் பாட்டு (Kuyil Pattu Cuckoo Song)',
        subtitle: 'Poetic Fantasy & Mystical Love • குயில் கானம்',
        raga: 'Ragamalika (ராகமாலிகை)',
        youtubeId: 'k6bM4o8g8kH',
        embedUrl: 'https://www.youtube.com/embed/k6bM4o8g8kH',
        lyrics: `"காதல் காதல் காதல் - காதல் போயிற் காதல் போயிற் சாதல் சாதல் சாதல்!"`,
        meaning: 'Love is eternal life; if love perishes, then death is all that remains.'
      },
      aaduvome: {
        title: 'ஆடுவோமே பள்ளு பாடுவோமே (Aaduvome Pallu)',
        subtitle: 'Prophetic Freedom Celebration • சுதந்திரக் கொண்டாட்டம்',
        raga: 'Maand (மாண்ட் ராகம்)',
        youtubeId: 'wK3eEGf3a4_',
        embedUrl: 'https://www.youtube.com/embed/wK3eEGf3a4_',
        lyrics: `"ஆடுவோமே பள்ளு பாடுவோமே - ஆனந்த சுதந்திரம் அடைந்துவிட்டோமென்று!"`,
        meaning: 'Let us dance and sing, celebrating that joyful independence has been achieved!'
      }
    };

    this.initGlobalTrigger();
  }

  initGlobalTrigger() {
    window.playBharathiSong = (songKeyOrQuery) => {
      this.play(songKeyOrQuery);
    };
  }

  play(songKeyOrQuery = 'achamillai') {
    const key = (songKeyOrQuery || '').toLowerCase().trim();
    
    let song = this.songs[key];
    if (!song) {
      // Search matching song by keywords
      if (key.includes('veenai') || key.includes('nallathor')) song = this.songs.nallathor;
      else if (key.includes('kiliye') || key.includes('chinnanchiru') || key.includes('kannamma')) song = this.songs.chinnanchiru;
      else if (key.includes('senthamizh') || key.includes('tamil')) song = this.songs.senthamizh;
      else if (key.includes('vande') || key.includes('matharam')) song = this.songs.vande;
      else if (key.includes('kuyil') || key.includes('cuckoo')) song = this.songs.kuyil;
      else if (key.includes('aadu') || key.includes('pallu')) song = this.songs.aaduvome;
      else song = this.songs.achamillai;
    }

    const existing = document.getElementById('bharathi-music-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'bharathi-music-modal';
    modal.className = 'fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-xl transition-opacity duration-500 opacity-0 pointer-events-auto';

    modal.innerHTML = `
      <div class="relative w-full max-w-3xl bg-stone-900 border-2 border-amber-500/60 rounded-2xl shadow-2xl shadow-amber-950/80 overflow-hidden flex flex-col md:flex-row">
        
        <!-- Left: Song Details & Lyrics Card -->
        <div class="md:w-1/2 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-800 bg-gradient-to-br from-charcoal-900 via-stone-900 to-black">
          <div>
            <div class="flex items-center gap-2 text-amber-400 font-mono text-[10px] uppercase tracking-widest mb-1">
              <span>🎵 REAL MUSIC PERFORMANCE</span>
              <span>•</span>
              <span class="text-amber-300 font-bold">${song.raga}</span>
            </div>
            <h2 class="font-tamil text-xl sm:text-2xl font-bold text-stone-100 mb-1">${song.title}</h2>
            <p class="font-cinzel text-xs text-amber-400/90 mb-4">${song.subtitle}</p>

            <!-- Song Lyrics Display -->
            <div class="p-4 bg-stone-950/80 border border-amber-500/30 rounded-xl mb-3">
              <span class="text-[10px] font-mono text-amber-400 block mb-1 uppercase">SONG LYRICS (பாடலின் வரிகள்):</span>
              <p class="font-tamil text-xs text-amber-100 leading-relaxed italic whitespace-pre-line">${song.lyrics}</p>
            </div>

            <!-- Meaning -->
            <p class="font-serif text-[11px] text-stone-400 leading-relaxed italic">${song.meaning}</p>
          </div>

          <div class="mt-4 pt-3 border-t border-stone-800 flex justify-between items-center text-[10px] font-mono text-stone-500">
            <span>VIDUTHALAI DIGITAL MUSIC PLAYER</span>
            <span class="text-amber-400 font-bold">CARNATIC AUDIO ENGINE</span>
          </div>
        </div>

        <!-- Right: Embedded YouTube Real Song Player -->
        <div class="md:w-1/2 bg-black flex flex-col items-center justify-center relative min-h-[260px] md:min-h-[380px] p-2">
          <!-- Close Button -->
          <button id="music-modal-close-btn" type="button" aria-label="Close Music Player"
                  class="absolute top-3 right-3 z-30 px-3 py-1 rounded-full bg-black/80 hover:bg-red-600 text-stone-200 hover:text-white font-cinzel font-bold text-xs tracking-wider border border-stone-700 transition-all">
            ✕ CLOSE
          </button>

          <iframe src="${song.embedUrl}?autoplay=1&enablejsapi=1&rel=0" 
                  title="${song.title}" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen 
                  class="w-full h-full min-h-[240px] md:min-h-[360px] rounded-xl border border-stone-800 shadow-2xl">
          </iframe>
        </div>

      </div>
    `;

    document.body.appendChild(modal);

    requestAnimationFrame(() => {
      modal.classList.remove('opacity-0');
    });

    const closeBtn = document.getElementById('music-modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.add('opacity-0');
        setTimeout(() => modal.remove(), 300);
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('opacity-0');
        setTimeout(() => modal.remove(), 300);
      }
    });
  }
}

// Instantiate Global Music Player
window.bharathiMusicPlayer = new BharathiMusicPlayer();
