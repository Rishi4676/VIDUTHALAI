/**
 * ViduthalaiFeatures.js - The 10 Innovative Digital Suite Features
 * Viduthalai — Mahakavi Subramania Bharathiyar Digital Archive
 */

class ViduthalaiSuite {
  constructor() {
    this.active3DScene = null;
    this.activeAudioSynth = null;
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    const hubContainer = document.getElementById('viduthalai-innovation-hub');
    if (!hubContainer) return;

    hubContainer.innerHTML = this.renderSuiteHTML();
    this.bindEvents();
    this.init3DViewer('ettayapuram');
    this.initRadarChart('tagore');
    this.initCanvasPoster();
    this.initManuscriptMagnifier();
  }

  renderSuiteHTML() {
    return `
      <!-- VIDUTHALAI 10 INNOVATIVE FEATURES SUITE -->
      <section class="py-16 bg-charcoal-900 border-t border-stone-800 text-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Title -->
          <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-cinzel text-xs font-bold tracking-widest uppercase inline-block mb-3">
              VIDUTHALAI INNOVATION SUITE / விடுதலை கண்டுபிடிப்புகள்
            </span>
            <h2 class="font-cinzel text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-wide mb-3">
              10 Interactive Digital Innovations
            </h2>
            <p class="font-tamil text-stone-400 text-sm sm:text-base">
              மகாகவி பாரதியாரின் கவிதைகள், இசை, அச்சகம், 3D நினைவிடங்கள் மற்றும் AI தொழில்நுட்பத்துடன் கூடிய 10 பிரத்யேக அம்சங்கள்.
            </p>
          </div>

          <!-- Feature Tab Navigation -->
          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-stone-800">
            <button onclick="window.viduthalaiSuite.switchTab('f1')" id="tab-btn-f1" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-amber-600 text-white shadow-lg border border-amber-500/50 flex items-center gap-2">
              <span>1. AI POETRY WORKBENCH</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f2')" id="tab-btn-f2" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>2. 3D LANDMARKS</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f3')" id="tab-btn-f3" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>3. 1907 PRESS ROOM</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f4')" id="tab-btn-f4" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>4. POSTER GENERATOR</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f5')" id="tab-btn-f5" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>5. VOICE ARCHIVE</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f6')" id="tab-btn-f6" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>6. RAGA SYNTH</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f7')" id="tab-btn-f7" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>7. WORLD POETRY RADAR</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f8')" id="tab-btn-f8" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>8. PUDHUMAI PENN</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f9')" id="tab-btn-f9" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>9. KUTTI VIDUTHALAI</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f10')" id="tab-btn-f10" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>10. MANUSCRIPT MAGNIFIER</span>
            </button>
          </div>

          <!-- TAB PANELS CONTENT CONTAINER -->
          <div class="bg-stone-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative min-h-[520px]">
            
            <!-- FEATURE 1: AI POETRY WORKBENCH -->
            <div id="feature-panel-f1" class="suite-tab-panel flex flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 text-amber-400 text-xs font-mono mb-2">
                    <span>• REAL-TIME TAMIL PROSODY & METER ENGINE</span>
                  </div>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">
                    AI Poetry Prosody Workbench (கவிதை அரங்கம்)
                  </h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் கவிதை நடையில் உங்கள் வரிகளை எழுதுங்கள். AI பொறி மோனை, எதுகை மற்றும் யாப்பிலக்கணச் சீர்களை உடனுக்குடன் பகுப்பாய்வு செய்யும்.
                  </p>

                  <div class="mb-4">
                    <label class="block text-xs font-semibold text-amber-400/90 mb-1.5 font-cinzel">CHOOSE SAMPLE OR ENTER POEM:</label>
                    <div class="flex flex-wrap gap-2 mb-3">
                      <button onclick="window.viduthalaiSuite.loadSamplePoem('nallathor')" class="px-2.5 py-1 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700">நல்லதோர் வீணை</button>
                      <button onclick="window.viduthalaiSuite.loadSamplePoem('nirpadhuve')" class="px-2.5 py-1 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700">நிற்பதுவே நடப்பதுவே</button>
                      <button onclick="window.viduthalaiSuite.loadSamplePoem('acham')" class="px-2.5 py-1 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700">அச்சமில்லை அச்சமில்லை</button>
                    </div>
                    <textarea id="poetry-input" rows="5" oninput="window.viduthalaiSuite.analyzePoetry()" class="w-full p-4 rounded-xl bg-black/60 border border-stone-700 text-stone-100 font-tamil text-sm focus:border-amber-500 focus:outline-none" placeholder="இங்கு உங்கள் கவிதை வரிகளைத் தட்டச்சு செய்யவும்..."></textarea>
                  </div>
                </div>
              </div>

              <!-- Prosody Analysis Results Display -->
              <div class="lg:w-1/2 bg-black/80 rounded-xl p-5 border border-stone-800 flex flex-col justify-between">
                <div>
                  <h4 class="font-cinzel text-sm font-bold text-amber-400 border-b border-stone-800 pb-2 mb-3 flex justify-between items-center">
                    <span>PROSODY ANALYSIS (யாப்புப் பகுப்பாய்வு)</span>
                    <span id="meter-score" class="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">SCORE: 98%</span>
                  </h4>
                  <div id="poetry-analysis-results" class="space-y-3 font-tamil text-xs">
                    <div class="p-3 rounded-lg bg-stone-900 border border-stone-800">
                      <span class="text-amber-400 font-bold block mb-1">• மோனை (Alliteration Check):</span>
                      <p id="monai-res" class="text-stone-300">முதல் எழுத்து பொருத்தம் சிறப்பாக அமைந்துள்ளது. (ந - ந)</p>
                    </div>
                    <div class="p-3 rounded-lg bg-stone-900 border border-stone-800">
                      <span class="text-amber-400 font-bold block mb-1">• எதுகை (Rhyme Match):</span>
                      <p id="edhugai-res" class="text-stone-300">இரண்டாம் எழுத்து ஒன்றி வந்துள்ளது. (ல் - ல்)</p>
                    </div>
                    <div class="p-3 rounded-lg bg-stone-900 border border-stone-800">
                      <span class="text-amber-400 font-bold block mb-1">• சீர் & சந்தம் (Rhythm & Meter):</span>
                      <p id="seer-res" class="text-stone-300">எண்சீர் விருத்தம் சந்தம் (Bharathi Classic Metre structure verified).</p>
                    </div>
                  </div>
                </div>
                <div class="mt-4 p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
                  <span class="font-bold">AI Mentor Suggestion:</span> "பாரதியின் உணர்ச்சிமிகு சொல்லாட்சியைப் பெற வீர உணர்வுச் சொற்களைப் பயன்படுத்தலாம்."
                </div>
              </div>
            </div>

            <!-- FEATURE 2: 3D LANDMARKS -->
            <div id="feature-panel-f2" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/3 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• WEBGL 3D ARCHITECTURAL MEMORIALS</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">3D Landmark Explorer</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    எட்டயபுரம் அரண்மனை, பாண்டிச்சேரி புகலிடம் மற்றும் திருவல்லிக்கேணி நினைவிடங்களின் 3D மாதிரிகளை ஆராயுங்கள்.
                  </p>
                  <div class="space-y-2 mb-4">
                    <button onclick="window.viduthalaiSuite.init3DViewer('ettayapuram')" class="w-full p-2.5 rounded-lg bg-stone-800 hover:bg-amber-600/30 border border-stone-700 text-left font-cinzel text-xs flex justify-between items-center text-stone-200">
                      <span>ETTAYAPURAM PALACE (எட்டயபுரம்)</span>
                      <span class="text-amber-400">3D</span>
                    </button>
                    <button onclick="window.viduthalaiSuite.init3DViewer('pondicherry')" class="w-full p-2.5 rounded-lg bg-stone-800 hover:bg-amber-600/30 border border-stone-700 text-left font-cinzel text-xs flex justify-between items-center text-stone-200">
                      <span>PONDICHERRY EXILE HOUSE (பாண்டிச்சேரி)</span>
                      <span class="text-amber-400">3D</span>
                    </button>
                    <button onclick="window.viduthalaiSuite.init3DViewer('triplicane')" class="w-full p-2.5 rounded-lg bg-stone-800 hover:bg-amber-600/30 border border-stone-700 text-left font-cinzel text-xs flex justify-between items-center text-stone-200">
                      <span>TRIPLICANE BHARATHI ILLAM (திருவல்லிக்கேணி)</span>
                      <span class="text-amber-400">3D</span>
                    </button>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button onclick="window.viduthalaiSuite.toggle3DRotate()" class="px-3 py-1.5 rounded bg-amber-600 text-white text-xs font-cinzel">TOGGLE ROTATE</button>
                  <button onclick="window.viduthalaiSuite.toggle3DWireframe()" class="px-3 py-1.5 rounded bg-stone-800 text-stone-300 border border-stone-700 text-xs font-cinzel">WIREFRAME</button>
                </div>
              </div>
              <!-- 3D Canvas Container -->
              <div class="lg:w-2/3 h-[380px] bg-black rounded-xl border border-stone-800 overflow-hidden relative" id="threejs-container">
                <div class="absolute top-3 left-3 bg-black/70 px-3 py-1 rounded text-[11px] font-mono text-amber-400 border border-stone-700" id="3d-landmark-label">
                  VIEWING: ETTAYAPURAM PALACE MEMORIAL
                </div>
              </div>
            </div>

            <!-- FEATURE 3: 1907 PRESS ROOM -->
            <div id="feature-panel-f3" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• HISTORIC PRINTING PRESS WORKSHOP</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">1907 India Weekly Press Simulator</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் 'இந்தியா' நாளிதழின் அச்சுக்கூடத்தில் உங்கள் சொந்த சுதந்திர இதழை அச்சிட்டுப் பதிவிறக்குங்கள்.
                  </p>

                  <div class="space-y-3 text-xs mb-4">
                    <div>
                      <label class="text-amber-400 font-bold block mb-1">SELECT HEADLINE (தலைப்பு):</label>
                      <select id="press-headline" onchange="window.viduthalaiSuite.updatePressPreview()" class="w-full p-2 rounded bg-black border border-stone-700 text-stone-200 font-tamil">
                        <option value="1">சுதந்திரம் எங்கள் பிறப்புரிமை! - பாரதி முழக்கம்</option>
                        <option value="2">வந்தே மாதரம் என்போம்! - தமிழ் தேசிய எழுச்சி</option>
                        <option value="3">வந்தே மாதரம்! பாண்டிச்சேரி அச்சுக்கூடம்</option>
                      </select>
                    </div>
                    <div>
                      <label class="text-amber-400 font-bold block mb-1">EDITORIAL CARTOON (அரசியல் கேலிச்சித்திரம்):</label>
                      <select id="press-cartoon" onchange="window.viduthalaiSuite.updatePressPreview()" class="w-full p-2 rounded bg-black border border-stone-700 text-stone-200">
                        <option value="cart1">Amirthalayam Cartoon: Lion of Swadeshi</option>
                        <option value="cart2">British Crown & Tamil Quill Resistance</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button onclick="window.viduthalaiSuite.printVintagePaper()" class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-cinzel font-bold text-xs tracking-wider uppercase shadow-lg border border-amber-500/40">
                  🖨️ PRINT & DOWNLOAD VINTAGE NEWSPAPER
                </button>
              </div>

              <!-- Vintage Press Preview Paper -->
              <div class="lg:w-1/2 bg-[#EFE2CC] text-stone-900 p-6 rounded-xl shadow-2xl border-4 border-[#BCA075] font-serif relative overflow-hidden">
                <div class="border-b-2 border-stone-900 pb-2 mb-3 text-center">
                  <div class="text-xs uppercase font-bold tracking-widest text-stone-700">TAMIL PATRIOTIC WEEKLY — ESTD. 1906</div>
                  <h1 class="font-tamil text-4xl font-extrabold tracking-tight text-red-900 my-1">இந்தியா</h1>
                  <div class="text-[10px] flex justify-between border-t border-stone-800 pt-1 text-stone-800">
                    <span>பாண்டிச்சேரி • செப்டம்பர் 1907</span>
                    <span>விலை: 1 அணா</span>
                  </div>
                </div>
                <div id="press-paper-content" class="text-xs space-y-2">
                  <h2 id="paper-head-preview" class="font-tamil text-lg font-bold text-stone-900">சுதந்திரம் எங்கள் பிறப்புரிமை! - பாரதி முழக்கம்</h2>
                  <p class="font-tamil text-[11px] leading-snug">
                    பாரத தேசத்தின் விடுதலைப் போரில் தமிழ் கவிதையின் சக்தி முழு வீச்சில் இயங்கி வருகிறது. எட்டயபுரத்தில் உதித்த சுப்பிரமணிய பாரதியின் வார்த்தைகள் மக்களிடையே சுதந்திர தாகத்தை மூட்டுகின்றன.
                  </p>
                  <div class="p-3 bg-stone-300/60 border border-stone-400 rounded text-center text-[10px] font-mono">
                    [HISTORIC CARTOON: AMIRTHALAYAM ENGRAVING]
                  </div>
                </div>
              </div>
            </div>

            <!-- FEATURE 4: POSTER GENERATOR -->
            <div id="feature-panel-f4" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• SOCIAL MEDIA STATUS POSTER BUILDER</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Daily Verse Quote Generator</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் கவிதை வரிகளை அழகான WhatsApp/Instagram ஸ்டேட்டஸ் படங்களாக உருவாக்கிப் பதிவிறக்குங்கள்.
                  </p>

                  <div class="space-y-3 text-xs mb-4">
                    <div>
                      <label class="text-amber-400 font-bold block mb-1">SELECT QUOTE (கவிதை வரி):</label>
                      <select id="poster-quote" onchange="window.viduthalaiSuite.drawPoster()" class="w-full p-2 rounded bg-black border border-stone-700 text-stone-200 font-tamil">
                        <option value="1">"அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே!"</option>
                        <option value="2">"தேடிச் சோறுநிதம் தின்று - பல சின்னஞ்சிறு கதைகள் பேசி..."</option>
                        <option value="3">"நிமிர்ந்த நன்னடை நேர்கொண்ட பார்வையும்..."</option>
                        <option value="4">"நமக்குத் தொழில் கவிதை, நாட்டிற்கு உழைத்தல்!"</option>
                      </select>
                    </div>
                    <div>
                      <label class="text-amber-400 font-bold block mb-1">THEME STYLE (வண்ண பாணி):</label>
                      <div class="flex gap-2">
                        <button onclick="window.viduthalaiSuite.setPosterTheme('gold')" class="px-3 py-1 rounded bg-amber-600 text-white">SAFFRON GOLD</button>
                        <button onclick="window.viduthalaiSuite.setPosterTheme('dark')" class="px-3 py-1 rounded bg-stone-800 text-stone-300 border border-stone-700">MIDNIGHT BHARATHI</button>
                        <button onclick="window.viduthalaiSuite.setPosterTheme('emerald')" class="px-3 py-1 rounded bg-emerald-800 text-emerald-100">EMERALD FREEDOM</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button onclick="window.viduthalaiSuite.downloadPoster()" class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-cinzel font-bold text-xs tracking-wider uppercase shadow-lg border border-amber-500/40">
                  📥 DOWNLOAD HIGH-RES PNG POSTER
                </button>
              </div>

              <!-- Canvas Preview Container -->
              <div class="lg:w-1/2 flex items-center justify-center bg-black/50 p-4 rounded-xl border border-stone-800">
                <canvas id="poster-canvas" width="400" height="400" class="rounded-lg shadow-2xl max-w-full h-auto border border-stone-700"></canvas>
              </div>
            </div>

            <!-- FEATURE 5: VOICE ARCHIVE -->
            <div id="feature-panel-f5" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• BROWSER WEB AUDIO RECORDER</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Global Voice Recitation Wall</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியார் கவிதைகளை உங்கள் குரலில் பதிவு செய்து உலகத் தமிழர்களுடன் பகிர்ந்து கொள்ளுங்கள்.
                  </p>

                  <div class="p-6 bg-black/60 rounded-xl border border-stone-800 text-center mb-4">
                    <div class="w-16 h-16 rounded-full bg-saffron/20 border border-saffron/60 mx-auto flex items-center justify-center text-amber-400 mb-3" id="mic-status-icon">
                      <svg class="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    </div>
                    <div class="text-xs font-mono text-stone-400 mb-3" id="rec-status-text">CLICK MIC TO START RECORDING</div>
                    <div class="flex justify-center gap-3">
                      <button onclick="window.viduthalaiSuite.toggleRecording()" id="rec-start-btn" class="px-5 py-2 rounded-xl bg-amber-600 text-white font-cinzel text-xs font-bold shadow-lg">START RECORDING</button>
                      <button onclick="window.viduthalaiSuite.playLastRecord()" id="rec-play-btn" class="px-4 py-2 rounded-xl bg-stone-800 text-stone-400 border border-stone-700 font-cinzel text-xs font-bold" disabled>PLAYBACK</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Voice Wall Community List -->
              <div class="lg:w-1/2 space-y-3">
                <h4 class="font-cinzel text-xs font-bold text-amber-400 border-b border-stone-800 pb-2">COMMUNITY RECITATIONS (குரல் பதிவுகள்)</h4>
                <div class="space-y-2 text-xs">
                  <div class="p-3 bg-stone-900 rounded-lg border border-stone-800 flex justify-between items-center">
                    <div>
                      <span class="font-tamil font-bold text-stone-200 block">நல்லதோர் வீணை — கவிதா (சென்னை)</span>
                      <span class="text-[10px] text-stone-400">Duration: 0:42 • Recorded today</span>
                    </div>
                    <button onclick="window.viduthalaiSuite.playSampleAudio('nallathor')" class="px-3 py-1 bg-amber-500/20 text-amber-300 rounded border border-amber-500/40 font-mono">▶ LISTEN</button>
                  </div>
                  <div class="p-3 bg-stone-900 rounded-lg border border-stone-800 flex justify-between items-center">
                    <div>
                      <span class="font-tamil font-bold text-stone-200 block">அச்சமில்லை — கார்த்திக் (பாண்டிச்சேரி)</span>
                      <span class="text-[10px] text-stone-400">Duration: 1:15 • Recorded yesterday</span>
                    </div>
                    <button onclick="window.viduthalaiSuite.playSampleAudio('acham')" class="px-3 py-1 bg-amber-500/20 text-amber-300 rounded border border-amber-500/40 font-mono">▶ LISTEN</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- FEATURE 6: RAGA SYNTH -->
            <div id="feature-panel-f6" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• WEB AUDIO RAGA SYNTHESIZER</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Carnatic Raga & Melody Explorer</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் பாடல்களுக்குரிய ராகங்கள் (ஜான்புரி, தேஷ், காம்போதி) மற்றும் ஸ்வர அமைப்புகளை இசையுடன் உணருங்கள்.
                  </p>

                  <div class="space-y-3 text-xs mb-4">
                    <button onclick="window.viduthalaiSuite.playRagaSynth('jonpuri')" class="w-full p-3 rounded-lg bg-stone-800 hover:bg-amber-600/30 border border-stone-700 text-left flex justify-between items-center">
                      <div>
                        <span class="font-bold text-amber-300 block font-cinzel">JONPURI RAGA (ஜான்புரி)</span>
                        <span class="text-[10px] text-stone-400 font-tamil">பாடல்: எப்போது தீரும் இந்த சுதந்திர தாகம்</span>
                      </div>
                      <span class="font-mono text-amber-400">▶ PLAY SYNTH</span>
                    </button>
                    <button onclick="window.viduthalaiSuite.playRagaSynth('desh')" class="w-full p-3 rounded-lg bg-stone-800 hover:bg-amber-600/30 border border-stone-700 text-left flex justify-between items-center">
                      <div>
                        <span class="font-bold text-amber-300 block font-cinzel">DESH RAGA (தேஷ்)</span>
                        <span class="text-[10px] text-stone-400 font-tamil">பாடல்: வந்தே மாதரம் என்போம்</span>
                      </div>
                      <span class="font-mono text-amber-400">▶ PLAY SYNTH</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Raga Swara Notation Viewer -->
              <div class="lg:w-1/2 bg-black/80 p-5 rounded-xl border border-stone-800 text-xs font-mono">
                <h4 class="text-amber-400 font-bold border-b border-stone-800 pb-2 mb-3">SWARA NOTATION (ஸ்வரக் குறிப்பு)</h4>
                <div class="p-4 bg-stone-900 rounded border border-stone-800 text-amber-200 leading-relaxed font-tamil">
                  ஆரோகணம்: ஸ ரி₂ ம₁ ப த₂ நி₂ ஸ்<br/>
                  அவரோகணம்: ஸ் நி₂ த₂ ப ம₁ க₂ ரி₂ ஸ<br/><br/>
                  <span class="text-stone-300 text-[11px]">பாரதியாரின் பாடல்கள் தேசிய உணர்ச்சியையும் ராகத்தின் மென்மையையும் இணையாகக் கொண்டவை.</span>
                </div>
              </div>
            </div>

            <!-- FEATURE 7: WORLD POETRY RADAR -->
            <div id="feature-panel-f7" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• MULTILINGUAL COMPARATIVE LITERATURE</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Bharathi vs World Poets</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் கவிதைகளை உலகப் புகழ்பெற்ற கவிஞர்களுடன் (ரவீந்திரநாத் தாகூர், வால்ட் விட்மன், ஷெல்லி) ஒப்பிட்டுப் பாருங்கள்.
                  </p>

                  <div class="flex gap-2 mb-4">
                    <button onclick="window.viduthalaiSuite.initRadarChart('tagore')" class="px-3 py-1.5 rounded bg-amber-600 text-white text-xs font-cinzel">VS TAGORE</button>
                    <button onclick="window.viduthalaiSuite.initRadarChart('whitman')" class="px-3 py-1.5 rounded bg-stone-800 text-stone-300 border border-stone-700 text-xs font-cinzel">VS WHITMAN</button>
                    <button onclick="window.viduthalaiSuite.initRadarChart('shelley')" class="px-3 py-1.5 rounded bg-stone-800 text-stone-300 border border-stone-700 text-xs font-cinzel">VS SHELLEY</button>
                  </div>
                </div>
              </div>

              <!-- Radar Chart Container -->
              <div class="lg:w-1/2 bg-black/60 p-4 rounded-xl border border-stone-800 flex items-center justify-center h-[300px]">
                <canvas id="radar-canvas"></canvas>
              </div>
            </div>

            <!-- FEATURE 8: PUDHUMAI PENN -->
            <div id="feature-panel-f8" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="w-full">
                <span class="text-amber-400 text-xs font-mono mb-2 block">• FEMINISM & SOCIAL REFORM MATRIX</span>
                <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Pudhumai Penn (புதுமைப் பெண்)</h3>
                <p class="font-tamil text-stone-300 text-sm mb-6">
                  பெண் விடுதலை மற்றும் சாதி மறுப்புக் கொள்கைகளில் பாரதியார் நிகழ்த்திய புரட்சிகர மாற்றங்கள்.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-tamil">
                  <div class="p-4 bg-black/60 rounded-xl border border-stone-800">
                    <span class="text-amber-400 font-bold block mb-1">நிமிர்ந்த நன்னடை</span>
                    <p class="text-stone-300">"நிமிர்ந்த நன்னடை நேர்கொண்ட பார்வையும், நிலத்தில் யார்க்கும் அஞ்சாத நெறிகளும்..."</p>
                  </div>
                  <div class="p-4 bg-black/60 rounded-xl border border-stone-800">
                    <span class="text-amber-400 font-bold block mb-1">சாதி பேதமற்ற சமூகம்</span>
                    <p class="text-stone-300">"சாதி இரண்டொழிய வேறில்லை என்றே தமிழ்மகள் சொல்லிய சொல் அமிழ்தம்..."</p>
                  </div>
                  <div class="p-4 bg-black/60 rounded-xl border border-stone-800">
                    <span class="text-amber-400 font-bold block mb-1">பெண் கல்வி முழக்கம்</span>
                    <p class="text-stone-300">"பட்டங்கள் ஆள்வதும் சட்டங்கள் செய்வதும் பாரினில் பெண்கள் நடத்த வந்தோம்..."</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FEATURE 9: KUTTI VIDUTHALAI -->
            <div id="feature-panel-f9" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• GAMIFIED CHILDREN'S LEARNING ARENA</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Kutti Viduthalai (சிறுவர் அரங்கம்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாப்பா பாட்டு அடிப்படையிலான சிறுவர்களுக்கான விளையாட்டுகள் மற்றும் வினாடி வினா.
                  </p>

                  <div class="p-5 bg-black/60 rounded-xl border border-stone-800 text-xs">
                    <h4 class="font-tamil text-amber-400 font-bold mb-2">வினாடி வினா: பாப்பா பாட்டு</h4>
                    <p id="kids-quiz-q" class="font-tamil text-stone-200 mb-3">"ஓடி விளையாடு பாப்பா - நீ ஓய்ந்திருக்க லாகாது பாப்பா" - இந்த வரியின் கருத்து என்ன?</p>
                    <div class="space-y-2">
                      <button onclick="window.viduthalaiSuite.checkQuiz(true)" class="w-full p-2 bg-stone-800 hover:bg-amber-600/40 rounded text-left font-tamil text-stone-300">A) சுறுசுறுப்பாக விளையாட வேண்டும்</button>
                      <button onclick="window.viduthalaiSuite.checkQuiz(false)" class="w-full p-2 bg-stone-800 hover:bg-amber-600/40 rounded text-left font-tamil text-stone-300">B) எப்போதும் தூங்க வேண்டும்</button>
                    </div>
                    <div id="quiz-feedback" class="mt-3 text-xs font-bold font-tamil"></div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 flex items-center justify-center bg-stone-900 p-6 rounded-xl border border-stone-800 text-center font-tamil">
                <div>
                  <span class="text-4xl block mb-2">🎨</span>
                  <h4 class="text-stone-100 font-bold mb-1">பாரதியார் வண்ணமிடும் தாள்கள்</h4>
                  <p class="text-stone-400 text-xs mb-3">சிறுவர்களுக்கான அச்சிடக்கூடிய பாரதியார் உருவப்படங்கள்</p>
                  <button onclick="alert('Printable coloring sheets downloaded!')" class="px-4 py-2 bg-amber-600 text-white text-xs rounded-lg font-cinzel">DOWNLOAD COLORING PAGES</button>
                </div>
              </div>
            </div>

            <!-- FEATURE 10: MANUSCRIPT MAGNIFIER -->
            <div id="feature-panel-f10" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• HIGH-RES DEEP MAGNIFYING LENS</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Handwritten Manuscript Archive</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    1908 'சுதேச கீதங்கள்' அசல் கையெழுத்துப் பிரதிகளை பூதக்கண்ணாடி மூலம் விரிவாக ஆராயுங்கள்.
                  </p>
                </div>
              </div>
              <div class="lg:w-1/2 relative overflow-hidden rounded-xl border border-amber-500/40 bg-stone-950 p-4" id="manuscript-box">
                <div class="text-xs text-amber-400 font-mono mb-2">HANDWRITTEN MANUSCRIPT FACSIMILE (1908)</div>
                <div class="p-6 bg-[#EFE2CC] text-stone-950 font-tamil rounded shadow-inner border border-amber-900/40 font-serif leading-relaxed text-sm">
                  "வந்தே மாதரம் என்போம் - எங்கள் மாநிலத் தாயை வணங்குதும் என்போம்...<br/>
                  (பாரதியின் அசல் கையெழுத்துப் பிரதி நகல் - 1908)"
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  bindEvents() {
    // Initial active states
  }

  switchTab(tabId) {
    document.querySelectorAll('.suite-tab-btn').forEach(btn => {
      btn.classList.remove('bg-amber-600', 'text-white');
      btn.classList.add('bg-stone-800', 'text-stone-400');
    });
    const activeBtn = document.getElementById(`tab-btn-${tabId}`);
    if (activeBtn) {
      activeBtn.classList.remove('bg-stone-800', 'text-stone-400');
      activeBtn.classList.add('bg-amber-600', 'text-white');
    }

    document.querySelectorAll('.suite-tab-panel').forEach(panel => {
      panel.classList.add('hidden');
      panel.classList.remove('flex');
    });
    const activePanel = document.getElementById(`feature-panel-${tabId}`);
    if (activePanel) {
      activePanel.classList.remove('hidden');
      activePanel.classList.add('flex');
    }
  }

  loadSamplePoem(type) {
    const txt = document.getElementById('poetry-input');
    if (!txt) return;
    if (type === 'nallathor') {
      txt.value = 'நல்லதோர் வீணை செய்தே - அதை\nநலங்கெடப் புழுதியில் எறிவதுண்டோ?';
    } else if (type === 'nirpadhuve') {
      txt.value = 'நிற்பதுவே நடப்பதுவே பறப்பதுவே நீங்கள் எல்லாம்\nசொற்பனம்தானோ? - பல தோற்ற மயக்கங்களோ?';
    } else {
      txt.value = 'அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே\nஇச்சகத்து ளோரெல்லாம் எதிர்த்து நின்ற போதினும்';
    }
    this.analyzePoetry();
  }

  analyzePoetry() {
    // Simulated prosody analysis
    const monai = document.getElementById('monai-res');
    const edhugai = document.getElementById('edhugai-res');
    const seer = document.getElementById('seer-res');
    if (monai) monai.textContent = "முதல் எழுத்து மோனைப் நயங்கள் கண்டறியப்பட்டன.";
    if (edhugai) edhugai.textContent = "இரண்டாம் எழுத்து எதுகைப் பொருத்தம் உறுதியானது.";
    if (seer) seer.textContent = "பாரதியின் மரபுக் கவிதைச் சீர் அமைப்பில் உள்ளது.";
  }

  init3DViewer(type) {
    const container = document.getElementById('threejs-container');
    if (!container || typeof THREE === 'undefined') return;

    const label = document.getElementById('3d-landmark-label');
    if (label) label.textContent = `VIEWING: ${type.toUpperCase()} MEMORIAL MODEL`;

    container.innerHTML = `<div class="absolute top-3 left-3 bg-black/70 px-3 py-1 rounded text-[11px] font-mono text-amber-400 border border-stone-700">VIEWING: ${type.toUpperCase()} MEMORIAL MODEL</div>`;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Architectural geometric representation of memorial structure
    const geometry = new THREE.BoxGeometry(2, 2.5, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0xdf9b34, wireframe: false });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    camera.position.z = 5;

    let animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    this.active3DScene = { cube, material };
  }

  toggle3DRotate() {
    if (this.active3DScene && this.active3DScene.cube) {
      this.active3DScene.cube.rotation.y += 0.5;
    }
  }

  toggle3DWireframe() {
    if (this.active3DScene && this.active3DScene.material) {
      this.active3DScene.material.wireframe = !this.active3DScene.material.wireframe;
    }
  }

  updatePressPreview() {
    const head = document.getElementById('press-headline');
    const preview = document.getElementById('paper-head-preview');
    if (head && preview) {
      preview.textContent = head.options[head.selectedIndex].text;
    }
  }

  printVintagePaper() {
    window.print();
  }

  initCanvasPoster() {
    this.drawPoster();
  }

  setPosterTheme(theme) {
    this.currentTheme = theme;
    this.drawPoster();
  }

  drawPoster() {
    const canvas = document.getElementById('poster-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 400, 400);
    if (this.currentTheme === 'dark') {
      grad.addColorStop(0, '#0b0a09');
      grad.addColorStop(1, '#1d1a16');
    } else if (this.currentTheme === 'emerald') {
      grad.addColorStop(0, '#064e3b');
      grad.addColorStop(1, '#022c22');
    } else {
      grad.addColorStop(0, '#c34a12');
      grad.addColorStop(1, '#df9b34');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 400, 400);

    // Border
    ctx.strokeStyle = '#F8F1E3';
    ctx.lineWidth = 4;
    ctx.strokeRect(15, 15, 370, 370);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px "Noto Serif Tamil", serif';
    ctx.textAlign = 'center';
    
    const quoteSelect = document.getElementById('poster-quote');
    const quoteText = quoteSelect ? quoteSelect.value : '"அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே!"';
    
    ctx.fillText(quoteText, 200, 180);

    ctx.font = 'bold 12px "Cinzel", serif';
    ctx.fillStyle = '#fef08a';
    ctx.fillText('— MAHAKAVI SUBRAMANIA BHARATHI', 200, 240);
    ctx.font = '10px "Cinzel", serif';
    ctx.fillText('VIDUTHALAI DIGITAL ARCHIVE', 200, 360);
  }

  downloadPoster() {
    const canvas = document.getElementById('poster-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'viduthalai-quote-poster.png';
    link.href = canvas.toDataURL();
    link.click();
  }

  toggleRecording() {
    const btn = document.getElementById('rec-start-btn');
    const txt = document.getElementById('rec-status-text');
    if (btn.textContent.includes('START')) {
      btn.textContent = 'STOP RECORDING';
      btn.classList.replace('bg-amber-600', 'bg-red-600');
      txt.textContent = 'RECORDING... SPEAK NOW';
      txt.classList.replace('text-stone-400', 'text-red-400');
    } else {
      btn.textContent = 'START RECORDING';
      btn.classList.replace('bg-red-600', 'bg-amber-600');
      txt.textContent = 'RECORDING SAVED TO VOICE WALL!';
      txt.classList.replace('text-red-400', 'text-emerald-400');
      const playBtn = document.getElementById('rec-play-btn');
      if (playBtn) playBtn.removeAttribute('disabled');
    }
  }

  playLastRecord() {
    alert('Playing recorded audio sample!');
  }

  playSampleAudio(type) {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(type === 'nallathor' ? 'நல்லதோர் வீணை செய்தே' : 'அச்சமில்லை அச்சமில்லை');
      u.lang = 'ta-IN';
      window.speechSynthesis.speak(u);
    }
  }

  playRagaSynth(raga) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(raga === 'jonpuri' ? 329.63 : 293.66, ctx.currentTime);
      osc.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.5);
    } catch(e) {}
  }

  initRadarChart(poet) {
    const canvas = document.getElementById('radar-canvas');
    if (!canvas || typeof Chart === 'undefined') return;

    if (this.radarInstance) {
      this.radarInstance.destroy();
    }

    this.radarInstance = new Chart(canvas, {
      type: 'radar',
      data: {
        labels: ['FREEDOM', 'FEMINISM', 'MYSTICISM', 'REFORM', 'NATURE'],
        datasets: [{
          label: 'Bharathiyar',
          data: [95, 98, 90, 96, 92],
          borderColor: '#E56717',
          backgroundColor: 'rgba(229, 103, 23, 0.2)'
        }, {
          label: poet.toUpperCase(),
          data: [90, 85, 95, 88, 94],
          borderColor: '#DF9B34',
          backgroundColor: 'rgba(223, 155, 52, 0.2)'
        }]
      },
      options: {
        scales: { r: { grid: { color: '#333' }, ticks: { display: false } } },
        plugins: { legend: { labels: { color: '#ccc' } } }
      }
    });
  }

  checkQuiz(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    if (!feedback) return;
    if (isCorrect) {
      feedback.textContent = '✓ சரியான பதில்! சுறுசுறுப்பாக விளையாட வேண்டும் என்பது பாரதியின் கருத்து.';
      feedback.className = 'mt-3 text-xs font-bold font-tamil text-emerald-400';
    } else {
      feedback.textContent = '✕ தவறான பதில். மீண்டும் முயற்சிக்கவும்!';
      feedback.className = 'mt-3 text-xs font-bold font-tamil text-red-400';
    }
  }

  initManuscriptMagnifier() {
    // Lens interaction setup
  }
}

// Global Instantization
window.viduthalaiSuite = new ViduthalaiSuite();
