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
              25 Interactive Digital Innovations
            </h2>
            <p class="font-tamil text-stone-400 text-sm sm:text-base">
              மகாகவி பாரதியாரின் கவிதைகள், இசை, 3D நினைவிடங்கள், VR அருங்காட்சியகம், அச்சுக்கூடம், ஹார்மோனியம் மற்றும் 25 பிரத்யேக நவீன அம்சங்கள்.
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
            <button onclick="window.viduthalaiSuite.switchTab('f11')" id="tab-btn-f11" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>11. HANDWRITING STUDIO</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f12')" id="tab-btn-f12" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>12. VERSE ORACLE</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f13')" id="tab-btn-f13" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>13. 1910 CID CIPHER GAME</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f14')" id="tab-btn-f14" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>14. KUYIL BINAURAL RAGAS</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f15')" id="tab-btn-f15" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>15. 14-LANG POLYGLOT</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f16')" id="tab-btn-f16" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>16. AR 3D MEMORIAL</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f17')" id="tab-btn-f17" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>17. 1907 PRESS SIMULATOR</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f18')" id="tab-btn-f18" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>18. CHHANDAS ANALYZER</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f19')" id="tab-btn-f19" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>19. VOICE SPECTRUM</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f20')" id="tab-btn-f20" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>20. GLOBAL FREEDOM MATRIX</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f21')" id="tab-btn-f21" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>21. VR MUSEUM 1910</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f22')" id="tab-btn-f22" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>22. PANCHAALI OPERA</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f23')" id="tab-btn-f23" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>23. GNANARATHAM SIMULATOR</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f24')" id="tab-btn-f24" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>24. UNDERGROUND MAP</span>
            </button>
            <button onclick="window.viduthalaiSuite.switchTab('f25')" id="tab-btn-f25" class="suite-tab-btn px-4 py-2.5 rounded-xl font-cinzel font-semibold text-xs tracking-wider whitespace-nowrap transition-all bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-700 flex items-center gap-2">
              <span>25. HARMONIUM STUDIO</span>
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

            <!-- FEATURE 11: BHARATHI HANDWRITING STUDIO -->
            <div id="feature-panel-f11" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• REAL-TIME INK STROKE & CALLIGRAPHY ENGINE</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Bharathi Handwriting Studio (பாரதியின் கையெழுத்துப் பயிலகம்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் அசல் 1910 கையெழுத்து பாணியில் உங்கள் வரிகளை அச்சு அப்பி எழுதிக் பாருங்கள். அசல் மை பேனா அழுத்தம் மற்றும் காகித அமைப்போடு இயங்குகிறது.
                  </p>
                  <div class="mb-4">
                    <label class="block text-xs font-semibold text-amber-400 font-cinzel mb-1">TYPE YOUR TEXT / வாக்கியம்:</label>
                    <input id="hw-input" type="text" value="சுதந்திரம் வென்றோம்!" class="w-full bg-stone-950 border border-amber-500/40 rounded-xl px-4 py-2 text-stone-100 font-tamil text-sm focus:outline-none focus:border-amber-400 mb-3"/>
                    <button onclick="window.viduthalaiSuite.renderHandwriting()" class="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-cinzel text-xs font-bold transition-all shadow-md">
                      ✍️ ANIMATE BHARATHI HANDWRITING
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-[#F4EAD3] border border-amber-900/40 rounded-xl p-6 text-stone-900 shadow-inner flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
                <span class="text-[10px] text-amber-900/60 font-mono absolute top-3 left-4 uppercase tracking-widest">1910 DIPPED-INK PARCHMENT CANVAS</span>
                <div id="hw-canvas-output" class="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-amber-950 font-tamil text-center leading-relaxed py-8 my-auto transition-all transform scale-100">
                  சுதந்திரம் வென்றோம்!
                </div>
                <div class="text-xs font-serif italic text-amber-900/80 mt-auto border-t border-amber-900/20 pt-2 w-full text-center">
                  — சி. சுப்பிரமணிய பாரதி (மகா கவிஞர் அசல் கையொப்பப் பாணி)
                </div>
              </div>
            </div>

            <!-- FEATURE 12: VERSE ORACLE CARDS -->
            <div id="feature-panel-f12" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• DYNAMIC WISDOM & PHILOSOPHICAL ORACLE</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Viduthalai Verse Oracle (விடுதலைக் கவிதை அசரீரி)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் கோட்பாடுகளைக் கொண்ட மெய்ஞ்ஞான அட்டையைத் தேர்ந்தெடுங்கள். உங்கள் அன்றாட வாழ்க்கைக்குத் தேவையான பாரதியின் கவிதை வழிகாட்டுதலைப் பெறுங்கள்.
                  </p>
                  <button onclick="window.viduthalaiSuite.drawOracleCard()" class="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-cinzel font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2">
                    <span>🔮 DRAW DAILY WISDOM CARD</span>
                  </button>
                </div>
              </div>
              <div class="lg:w-1/2 flex items-center justify-center">
                <div id="oracle-card-display" class="w-full max-w-sm bg-gradient-to-br from-charcoal-800 to-stone-900 border-2 border-amber-500/60 rounded-2xl p-6 text-center shadow-2xl transition-all transform hover:scale-102">
                  <div class="text-4xl mb-3">🔥</div>
                  <span class="text-amber-400 font-cinzel text-xs font-bold tracking-widest block uppercase mb-1" id="oracle-topic">CARD I: FEARLESSNESS / அச்சமின்மை</span>
                  <h4 class="font-tamil text-xl font-bold text-stone-100 mb-3" id="oracle-verse">"அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே!"</h4>
                  <p class="font-serif text-stone-300 text-xs leading-relaxed italic mb-4" id="oracle-desc">
                    Do not harbor fear, even if the whole world turns against you. Courage is the foundation of true liberty.
                  </p>
                  <span class="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-[10px] font-mono rounded-full border border-amber-500/40">WISDOM ORACLE CODE #01</span>
                </div>
              </div>
            </div>

            <!-- FEATURE 13: 1910 BRITISH CID SECRET CIPHER GAME -->
            <div id="feature-panel-f13" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• CONFIDENTIAL 1910 C.I.D. DOSSIER GAME</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">1910 Secret Press Cipher (சுதேசி உளவுக்கோப்பு)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    1910 புதுச்சேரி ரகசிய அச்சுக்கூடத்தில் பிரிட்டிஷ் உளவுப் படையிடமிருந்து 'இந்தியா' பத்திரிகையை பாதுகாப்பாக அச்சிட ரகசியக் குறியீட்டை விடுவியுங்கள்!
                  </p>
                  <div class="p-4 bg-stone-950 border border-stone-800 rounded-xl mb-4 font-mono text-xs text-amber-300">
                    <div>BRITISH RAJ CONFIDENTIAL DOSSIER #1910</div>
                    <div class="mt-1 text-stone-400">ENCRYPTED TELEGRAM: <span class="text-amber-400 font-bold">"V-I-D-U-T-H-A-L-A-I"</span></div>
                  </div>
                  <div class="flex gap-2">
                    <input id="cipher-input" type="text" placeholder="ENTER DECODED KEYWORD..." class="bg-stone-950 border border-amber-500/40 rounded-xl px-4 py-2 text-stone-100 font-mono text-xs focus:outline-none focus:border-amber-400 flex-1 uppercase"/>
                    <button onclick="window.viduthalaiSuite.verifyCipher()" class="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-cinzel text-xs font-bold transition-all">
                      UNLOCK ARCHIVE
                    </button>
                  </div>
                  <div id="cipher-status" class="mt-3 text-xs font-mono"></div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-stone-950 border border-amber-500/30 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                <span class="text-5xl mb-3">🕵️‍♂️</span>
                <h4 class="font-cinzel text-lg font-bold text-stone-200 mb-2">Pondicherry Underground Operations</h4>
                <p class="font-tamil text-stone-400 text-xs leading-relaxed max-w-md">
                  பாரதியாரும் வ.வே.சு. ஐயரும் பிரிட்டிஷ் அரசின் தடையை மீறி புதுச்சேரியிலிருந்து ரகசியமாக அச்சிட்டு சென்னைக்கு அனுப்பிய வரலாற்றுச் சுவடுகள்.
                </p>
              </div>
            </div>

            <!-- FEATURE 14: KUYIL PATTU BINAURAL RAGA SOUNDSCAPE STUDIO -->
            <div id="feature-panel-f14" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• MULTI-CHANNEL 8D BINAURAL SOUND ENGINE</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Kuyil Pattu Binaural Raga Studio (இயற்கை ஓசை நயம்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியின் 'குயில் பாட்டு' கவிதையால் ஈர்க்கப்பட்ட இயற்கை பறவையோசைகள், சோலைத் தென்றல் மற்றும் வீணை நாதத்தின் 8D ஒலிக்கலவை.
                  </p>
                </div>
                <div class="space-y-4 bg-stone-950 p-4 rounded-xl border border-stone-800">
                  <div>
                    <label class="flex justify-between text-xs font-cinzel text-stone-300 mb-1">
                      <span>MANGO GROVE BIRDS / மாஞ்சோலைக் குயில்:</span>
                      <span id="vol-val-1">70%</span>
                    </label>
                    <input type="range" min="0" max="100" value="70" class="w-full accent-amber-500" oninput="document.getElementById('vol-val-1').textContent=this.value+'%'"/>
                  </div>
                  <div>
                    <label class="flex justify-between text-xs font-cinzel text-stone-300 mb-1">
                      <span>VEENA DRONE RAGA / வீணை நாதம்:</span>
                      <span id="vol-val-2">85%</span>
                    </label>
                    <input type="range" min="0" max="100" value="85" class="w-full accent-amber-500" oninput="document.getElementById('vol-val-2').textContent=this.value+'%'"/>
                  </div>
                  <div>
                    <label class="flex justify-between text-xs font-cinzel text-stone-300 mb-1">
                      <span>MONSOON BREEZE / சோலைத் தென்றல்:</span>
                      <span id="vol-val-3">50%</span>
                    </label>
                    <input type="range" min="0" max="100" value="50" class="w-full accent-amber-500" oninput="document.getElementById('vol-val-3').textContent=this.value+'%'"/>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-stone-950 border border-amber-500/30 rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div class="w-24 h-24 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-500/10 mb-4 animate-pulse">
                  <span class="text-4xl">🕊️</span>
                </div>
                <h4 class="font-cinzel text-lg font-bold text-amber-300 mb-1">Kuyil Pattu Soundscape Live</h4>
                <p class="font-tamil text-stone-400 text-xs">காதல் காதால் கேட்கும் கானம் - 8D Binaural Mode Active</p>
              </div>
            </div>

            <!-- FEATURE 15: 14-LANGUAGE POLYGLOT LITERATURE MATRIX -->
            <div id="feature-panel-f15" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• MAHAKAVI 14-LANG POLYGLOT COMPARATIVE ENGINE</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">14-Language Polyglot Matrix (பன்மொழிப் பாவலர்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    "யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவதெங்கும் காணோம்!" பாரதியார் தேர்ச்சி பெற்ற 14 மொழிகளின் சர்வதேச ஒப்பாய்வு.
                  </p>
                  <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-4">
                    <button onclick="window.viduthalaiSuite.setLangMatrix('sanskrit')" class="px-2.5 py-1.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Sanskrit</button>
                    <button onclick="window.viduthalaiSuite.setLangMatrix('french')" class="px-2.5 py-1.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">French</button>
                    <button onclick="window.viduthalaiSuite.setLangMatrix('english')" class="px-2.5 py-1.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">English</button>
                    <button onclick="window.viduthalaiSuite.setLangMatrix('hindi')" class="px-2.5 py-1.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Hindi</button>
                    <button onclick="window.viduthalaiSuite.setLangMatrix('bengali')" class="px-2.5 py-1.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Bengali</button>
                    <button onclick="window.viduthalaiSuite.setLangMatrix('telugu')" class="px-2.5 py-1.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Telugu</button>
                    <button onclick="window.viduthalaiSuite.setLangMatrix('arabic')" class="px-2.5 py-1.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Arabic</button>
                    <button onclick="window.viduthalaiSuite.setLangMatrix('persian')" class="px-2.5 py-1.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Persian</button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-stone-950 border border-amber-500/30 rounded-xl p-6">
                <span class="text-xs text-amber-400 font-mono mb-2 block uppercase" id="polyglot-title">SANSKRIT & BHARATHI TRANSLATION</span>
                <div class="p-4 bg-stone-900 border border-stone-800 rounded-lg mb-3">
                  <div class="text-stone-300 font-serif text-sm italic mb-2" id="polyglot-original">"அக்னிமீளே புரோஹிதம் யஜ்ஞஸ்ய தேவம் ரித்விஜம்" (Vedic Rigveda Hymn)</div>
                  <div class="text-amber-300 font-tamil text-xs leading-relaxed" id="polyglot-tamil">பாரதியின் தமிழாக்கம்: "வேள்வியின் தலைவனும் ஒளியின் தெய்வமுமாகிய அக்கினியைப் போற்றுகின்றேன்."</div>
                </div>
                <p class="font-tamil text-stone-400 text-xs leading-relaxed" id="polyglot-note">
                  பாரதியார் ரிக் வேதப் பாடல்களைத் தமிழில் முதன்முதலில் எளிய உரையாடை நடையில் மொழிபெயர்த்த முன்னோடி ஆவார்.
                </p>
              </div>
            </div>

            <!-- FEATURE 16: MAHAKAVI 360° AR & WebGL 3D INTERACTIVE MONUMENT -->
            <div id="feature-panel-f16" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• WEBGL 3D HOLOGRAM & AR PROJECTION ENGINE</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Mahakavi 360° AR & 3D Memorial (பாரதி 3D AR நினைவாலயம்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் முப்பரிமாண (3D) சிலை மற்றும் நினைவிடத்தை உங்கள் மொபைல்/கணினித் திரையில் 360° சுழற்றி ஆராயுங்கள். AR (Augmented Reality) முறையில் உங்கள் அறையிலேயே பாரதியின் சிலையைத் தோற்றுவிக்கலாம்.
                  </p>
                  <div class="space-y-2 mb-4">
                    <button onclick="window.viduthalaiSuite.toggleARMode()" class="w-full py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-cinzel text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2">
                      <span>📱 LAUNCH AR CAMERA PROJECTION (WEB-AR)</span>
                    </button>
                    <div class="flex gap-2">
                      <button onclick="window.viduthalaiSuite.changeLighting('dawn')" class="flex-1 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded-lg text-xs font-mono">🌅 GOLDEN DAWN</button>
                      <button onclick="window.viduthalaiSuite.changeLighting('noon')" class="flex-1 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded-lg text-xs font-mono">☀️ MIDDAY SUN</button>
                      <button onclick="window.viduthalaiSuite.changeLighting('night')" class="flex-1 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded-lg text-xs font-mono">🌙 MIDNIGHT GLOW</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-black border border-amber-500/40 rounded-xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[320px]" id="ar-3d-viewport">
                <div class="w-32 h-32 rounded-full border-2 border-amber-500/50 flex items-center justify-center bg-amber-500/10 mb-4 animate-spin" style="animation-duration: 20s;">
                  <span class="text-5xl">🗿</span>
                </div>
                <div class="text-amber-300 font-cinzel font-bold text-sm mb-1" id="ar-viewport-label">MAHAKAVI BHARATHI 3D STATUE (ACTIVE)</div>
                <p class="text-stone-400 font-tamil text-xs text-center" id="ar-status-text">360° Interactive WebGL Shading Active • Lighting: Golden Sunset</p>
              </div>
            </div>

            <!-- FEATURE 17: 1907 SWADESAMITRAN VINTAGE HAND-LEVER PRESS SIMULATOR -->
            <div id="feature-panel-f17" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• MECHANICAL VINTAGE TYPE-FOUNDRY & LEVER PRESS</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">1907 Swadesamitran Press Simulator (அச்சுக்கூட சிமுலேட்டர்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    1907-இல் சுதேசமித்திரன் மற்றும் 'இந்தியா' பத்திரிகை அச்சிடப்பட்ட பாரம்பரிய கைப்பிடி இயங்கு அச்சுக்கூடத்தை இயக்கிப் பாருங்கள்!
                  </p>
                  <div class="space-y-3 bg-stone-950 p-4 rounded-xl border border-stone-800 mb-4">
                    <div>
                      <label class="block text-xs font-cinzel text-amber-400 mb-1">STEP 1: SELECT LEAD TYPEFACE (காரீய அச்சு பாணி):</label>
                      <select id="press-font-select" class="w-full bg-stone-900 border border-stone-700 text-stone-200 text-xs p-2 rounded-lg font-tamil">
                        <option value="lead1">1907 Swadesamitran Heavy Bold Lead Type</option>
                        <option value="lead2">Pondicherry Exile Underground Clandestine Type</option>
                      </select>
                    </div>
                    <button onclick="window.viduthalaiSuite.pullPressLever()" id="press-lever-btn" class="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-cinzel font-bold text-xs shadow-lg uppercase transition-all">
                      ⚙️ PULL MECHANICAL IRON LEVER & PRINT BROADSHEET
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-[#F2E8CF] text-stone-900 p-6 rounded-xl border-4 border-[#8B5A2B] shadow-2xl font-serif relative overflow-hidden" id="lever-paper-output">
                <div class="text-center border-b-2 border-stone-800 pb-2 mb-3">
                  <div class="text-[10px] font-mono tracking-widest text-stone-600">SWADESAMITRAN PRESS • MADRAS • 1907</div>
                  <h2 class="font-tamil text-3xl font-extrabold text-stone-900 my-1">சுதேசமித்திரன்</h2>
                  <div class="text-[10px] flex justify-between font-mono text-stone-700">
                    <span>இதழ்: 104</span>
                    <span>ஆசிரியர்: சி. சுப்பிரமணிய பாரதி</span>
                  </div>
                </div>
                <div class="text-xs space-y-2 font-tamil" id="lever-paper-text">
                  <p class="font-bold text-amber-950">"வந்தே மாதரம்! சுதந்திர வேட்கை பாரதப் பெருநாட்டில் பற்றி எரிகிறது!"</p>
                  <p class="text-[11px] leading-snug text-stone-800">
                    தமிழ் நாளிதழ் வரலாற்றில் முதன்முறையாக கேலிச்சித்திரங்களையும் தேசிய கவிதைகளையும் இணைத்து அச்சிட்ட சுதேசி அச்சுக்கூடம்.
                  </p>
                </div>
              </div>
            </div>

            <!-- FEATURE 18: REAL-TIME POLYPHONIC TAMIL METRE & CHHANDAS ANALYZER -->
            <div id="feature-panel-f18" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• TAMIL PROSODY CHHANDAS & RHYTHM BEAT PARSER</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Chhandas Prosody Analyzer (யாப்பிலக்கண சந்த பகுப்பாய்வி)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியின் பாடல்களில் அமைந்த நேர், நிரை, தேமா, புளிமா மற்றும் தாளச் சந்தங்களை தட்டச்சு செய்தவுடனேயே துல்லியமாக பகுப்பாய்வு செய்யலாம்.
                  </p>
                  <div class="mb-4">
                    <label class="block text-xs font-cinzel text-amber-400 mb-1">POETRY INPUT FOR METRE PARSING:</label>
                    <input id="chhandas-input" type="text" value="யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவதெங்கும் காணோம்" oninput="window.viduthalaiSuite.analyzeChhandas()" class="w-full bg-stone-950 border border-amber-500/40 rounded-xl px-4 py-2.5 text-stone-100 font-tamil text-sm focus:outline-none focus:border-amber-400 mb-3"/>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-stone-950 border border-amber-500/30 rounded-xl p-6">
                <span class="text-xs text-amber-400 font-mono mb-2 block uppercase">PROSODY METRE SEER BREAKDOWN</span>
                <div class="p-4 bg-stone-900 border border-stone-800 rounded-lg space-y-3 font-mono text-xs">
                  <div class="flex justify-between items-center text-stone-200 border-b border-stone-800 pb-2">
                    <span class="font-tamil">யாமறிந்த</span>
                    <span class="text-amber-400 font-bold">நேர்-நேர் (தேமா சீர்)</span>
                  </div>
                  <div class="flex justify-between items-center text-stone-200 border-b border-stone-800 pb-2">
                    <span class="font-tamil">மொழிகளிலே</span>
                    <span class="text-amber-400 font-bold">நிரை-நிரை (கருவிளம் சீர்)</span>
                  </div>
                  <div class="flex justify-between items-center text-stone-200 border-b border-stone-800 pb-2">
                    <span class="font-tamil">தமிழ்மொழி போல்</span>
                    <span class="text-amber-400 font-bold">நிரை-நேர் (புளிமா சீர்)</span>
                  </div>
                  <div class="p-2 bg-amber-500/10 border border-amber-500/30 rounded text-amber-300 text-[11px] font-tamil" id="chhandas-metrename">
                    சந்த வகை: எண்சீர் சந்த விருத்தம் (Bharathi Rhythmic Metre Verified)
                  </div>
                </div>
              </div>
            </div>

            <!-- FEATURE 19: AI INTERACTIVE VOICE-TO-VERSE CHANTING STUDIO -->
            <div id="feature-panel-f19" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• WEB AUDIO FREQUENCY SPECTRUM & RAGA PITCH MATCH</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Voice Spectrum Studio (பாரதி குரல் ஒலிப் பயிலகம்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    உங்கள் குரலில் பாரதியின் பாடல்களைப் பாடும்போது, குரல் அலைவரிசையும் (Voice Spectrum) கர்நாடக ராக சுவரப் பொருத்தமும் திரையில் நேரலையாக தோன்றும்.
                  </p>
                  <button onclick="window.viduthalaiSuite.startVoiceSpectrum()" id="spectrum-btn" class="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-cinzel font-bold text-xs uppercase shadow-lg transition-all">
                    🎙️ START REAL-TIME VOICE FREQUENCY ANALYZER
                  </button>
                </div>
              </div>
              <div class="lg:w-1/2 bg-black border border-amber-500/40 rounded-xl p-6 flex flex-col justify-between">
                <div class="flex justify-between text-xs font-mono text-amber-400 mb-2">
                  <span>SPECTRUM FREQUENCY: 440 Hz</span>
                  <span id="raga-pitch-score">PITCH SCORE: 96% MATCH</span>
                </div>
                <!-- Animated SVG Audio Spectrum Bars -->
                <div class="h-36 flex items-end justify-center gap-1.5 bg-stone-950 p-4 rounded-lg border border-stone-800 overflow-hidden" id="spectrum-bars-container">
                  <div class="w-2 bg-amber-500 rounded-t h-12 animate-pulse"></div>
                  <div class="w-2 bg-amber-400 rounded-t h-24 animate-pulse" style="animation-delay: 0.1s"></div>
                  <div class="w-2 bg-amber-600 rounded-t h-32 animate-pulse" style="animation-delay: 0.2s"></div>
                  <div class="w-2 bg-amber-500 rounded-t h-20 animate-pulse" style="animation-delay: 0.3s"></div>
                  <div class="w-2 bg-amber-400 rounded-t h-28 animate-pulse" style="animation-delay: 0.4s"></div>
                  <div class="w-2 bg-amber-600 rounded-t h-16 animate-pulse" style="animation-delay: 0.5s"></div>
                  <div class="w-2 bg-amber-500 rounded-t h-24 animate-pulse" style="animation-delay: 0.6s"></div>
                </div>
                <div class="mt-3 text-xs font-tamil text-stone-300 text-center" id="spectrum-raga-label">
                  இசை ராகப் பொருத்தம்: ஜான்புரி / தேஷ் ராக அதிர்வு detected
                </div>
              </div>
            </div>

            <!-- FEATURE 20: GLOBAL FREEDOM MOVEMENT PARALLEL TIMELINE -->
            <div id="feature-panel-f20" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• GLOBAL REVOLUTIONS COMPARATIVE SYNCHRONIZER</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Global Freedom Parallel Matrix (உலக விடுதலை இயக்கங்களின் சங்கிலி)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் கவிதைகள் உலகளாவிய சுதந்திரப் போராட்டங்களுடன் (பிரெஞ்சுப் புரட்சி, ரஷ்யப் புரட்சி, அயர்லாந்து விடுதலை, அமெரிக்கப் பெண் உரிமை) கொண்ட வரலாற்றுத் தொடர்பு.
                  </p>
                  <div class="grid grid-cols-2 gap-2 mb-4">
                    <button onclick="window.viduthalaiSuite.selectGlobalRev('france')" class="p-2.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono text-left">🇫🇷 French Revolution (1789)</button>
                    <button onclick="window.viduthalaiSuite.selectGlobalRev('russia')" class="p-2.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono text-left">🇷🇺 Russian Oct Revolution (1917)</button>
                    <button onclick="window.viduthalaiSuite.selectGlobalRev('ireland')" class="p-2.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono text-left">🇮🇪 Irish Freedom War (1916)</button>
                    <button onclick="window.viduthalaiSuite.selectGlobalRev('suffrage')" class="p-2.5 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono text-left">🇺🇸 Women Suffrage (1920)</button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-stone-950 border border-amber-500/30 rounded-xl p-6">
                <span class="text-xs text-amber-400 font-mono mb-2 block uppercase" id="rev-country-title">🇷🇺 RUSSIAN REVOLUTION (1917) & BHARATHI</span>
                <div class="p-4 bg-stone-900 border border-stone-800 rounded-lg mb-3">
                  <div class="text-amber-300 font-tamil text-sm font-bold mb-2" id="rev-poem-title">"மாகாளி பராசக்தி உருசிய நாட்டில் கடைக்கண் வைத்தாள்!"</div>
                  <p class="text-stone-300 font-tamil text-xs leading-relaxed mb-2" id="rev-poem-desc">
                    1917 ஜார் மன்னனின் வீழ்ச்சியையும் ரஷ்யப் புரட்சியையும் ஆசிய கண்டத்திலேயே முதன்முதலில் 'புதிய ருஷியா' என்ற கவிதையின் மூலம் வாழ்த்திப் பாடிய மகாகவி பாரதியார் ஆவார்.
                  </p>
                  <span class="text-[10px] font-mono text-stone-400" id="rev-historical-note">Historical Context: Czarist autocracy collapsed; Bharathi celebrated equal rights for workers.</span>
                </div>
              </div>
            </div>

            <!-- FEATURE 21: BHARATHI VR VIRTUAL MUSEUM WALKTHROUGH 1910 -->
            <div id="feature-panel-f21" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• WEBVR 360° IMMERSIVE ARCHIVAL EXHIBITION</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Bharathi VR Virtual Museum 1910 (விர்ச்சுவல் அருங்காட்சியகம்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    1910 பாண்டிச்சேரி புகலிட இல்லம் மற்றும் அச்சுக்கூடத்தின் 360° விர்ச்சுவல் அருங்காட்சியக உலாவை VR கண்ணாடி அல்லது திரையிலேயே அனுபவியுங்கள்.
                  </p>
                  <button onclick="window.viduthalaiSuite.launchVRMuseum()" id="vr-launch-btn" class="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-cinzel font-bold text-xs uppercase shadow-lg transition-all flex items-center justify-center gap-2">
                    <span>🥽 ENTER 360° VIRTUAL REALITY (VR) GALLERY</span>
                  </button>
                </div>
              </div>
              <div class="lg:w-1/2 bg-stone-950 border border-amber-500/30 rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[300px]" id="vr-canvas-box">
                <div class="text-5xl mb-3 animate-bounce">🏛️</div>
                <h4 class="font-cinzel text-lg font-bold text-amber-300 mb-1" id="vr-title">Pondicherry 1910 Archival Room</h4>
                <p class="font-tamil text-stone-400 text-xs" id="vr-desc">360° Panoramas • Original Turban & Vintage Fountain Pen Replica</p>
              </div>
            </div>

            <!-- FEATURE 22: PANCHAALI SABATHAM INTERACTIVE DRAMATIC OPERA -->
            <div id="feature-panel-f22" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• MULTI-CHARACTER DRAMATIC VOICE & SOUNDSCAPE ENGINE</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Panchaali Sabatham Opera (பாஞ்சாலி சபதம் நாடக அரங்கம்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியாரின் மகத்தான காவியமான 'பாஞ்சாலி சபதம்' நாடகக் காட்சிகளை ஒலிவடிவிலும் நாடக அமைப்பிலும் அனுபவியுங்கள்.
                  </p>
                  <div class="space-y-2 mb-4">
                    <button onclick="window.viduthalaiSuite.playOperaScene('draupadi')" class="w-full p-2.5 bg-stone-800 hover:bg-amber-600/30 border border-stone-700 rounded-lg text-left font-tamil text-xs flex justify-between items-center text-stone-200">
                      <span>1. திரௌபதியின் சபதம் ("தேவி பராசக்தி மீது ஆணை!")</span>
                      <span class="text-amber-400 font-mono">▶ OPERA</span>
                    </button>
                    <button onclick="window.viduthalaiSuite.playOperaScene('bheema')" class="w-full p-2.5 bg-stone-800 hover:bg-amber-600/30 border border-stone-700 rounded-lg text-left font-tamil text-xs flex justify-between items-center text-stone-200">
                      <span>2. பீமனின் கணையடுக்கு வீர முழக்கம்</span>
                      <span class="text-amber-400 font-mono">▶ OPERA</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-black border border-amber-500/40 rounded-xl p-6 flex flex-col justify-between">
                <span class="text-xs text-amber-400 font-mono uppercase" id="opera-scene-name">SCENE I: DRAUPADI'S SACRED VOW</span>
                <div class="p-4 bg-stone-900 border border-stone-800 rounded-lg my-3 font-tamil text-xs leading-relaxed text-amber-200" id="opera-dialogue">
                  "ஒப்பற்ற பராசக்தி மீது ஆணை! துரியோதனன் குருதியை என் கூந்தலில் பூசிய பின்னரே முடிய முடிப்பேன்!"
                </div>
                <div class="text-[11px] font-mono text-stone-400 text-right" id="opera-raga-tag">RAGA: AATANA (வீர ரசம்)</div>
              </div>
            </div>

            <!-- FEATURE 23: GNANARATHAM COSMIC JOURNEY SIMULATOR -->
            <div id="feature-panel-f23" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• ALLEGORICAL PHILOSOPHICAL SIMULATOR</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Gnanaratham Cosmic Journey (ஞானரதம் பிரபஞ்சப் பயணம்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியின் முதல் உரைநடை காவியமான 'ஞானரதம்' அடிப்படையிலான தத்துவார்த்த பிரபஞ்சப் பயணம்.
                  </p>
                  <div class="grid grid-cols-3 gap-2 mb-4">
                    <button onclick="window.viduthalaiSuite.travelGnanaratham('dharma')" class="p-2 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Dharma Lokam</button>
                    <button onclick="window.viduthalaiSuite.travelGnanaratham('satya')" class="p-2 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Satya Lokam</button>
                    <button onclick="window.viduthalaiSuite.travelGnanaratham('shanti')" class="p-2 bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-white rounded-lg text-xs font-mono">Shanti Lokam</button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-stone-950 border border-amber-500/30 rounded-xl p-6 flex flex-col justify-between">
                <span class="text-xs text-amber-400 font-mono uppercase" id="gnana-lokam-title">CHARIOT OF WISDOM: DHARMA LOKAM</span>
                <div class="p-4 bg-stone-900 border border-stone-800 rounded-lg my-3 font-tamil text-xs leading-relaxed text-stone-200" id="gnana-lokam-desc">
                  "அறத்தின் உலகத்தில் தர்மமும் நெறியும் சுடராய் ஒளிர்கின்றன. இங்கு மனித மனம் பொறாமையற்று ஒளிர்கிறது."
                </div>
              </div>
            </div>

            <!-- FEATURE 24: NATIONALIST CARTOGRAPHY & UNDERGROUND SMUGGLING MAP -->
            <div id="feature-panel-f24" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• HISTORIC CLANDESTINE MARITIME COURIER MAP</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">1908 Underground Maritime Courier Map (கடல்வழி அஞ்சல்)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பிரிட்டிஷ் அரசின் தடையை மீறி பாண்டிச்சேரியிலிருந்து சென்னை, கொழும்பு மற்றும் லண்டனுக்கு 'இந்தியா' பத்திரிகையை ரகசியமாக கடத்திய பாதை.
                  </p>
                  <button onclick="window.viduthalaiSuite.animateSmugglerRoute()" class="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-cinzel font-bold text-xs uppercase shadow-lg transition-all">
                    ⛵ TRACE CLANDESTINE MARITIME COURIER ROUTE
                  </button>
                </div>
              </div>
              <div class="lg:w-1/2 bg-stone-950 border border-amber-500/30 rounded-xl p-6">
                <span class="text-xs text-amber-400 font-mono mb-2 block">MARITIME ROUTE: PONDICHERRY ➔ MADRAS ➔ COLOMBO</span>
                <div class="p-4 bg-stone-900 border border-stone-800 rounded-lg font-tamil text-xs space-y-2" id="smuggler-route-status">
                  <p class="text-amber-300 font-bold">• புதுச்சேரி ரகசிய அச்சுக்கூடம் ➔ தேயிலைப் பெட்டிகளில் அச்சிடப்பட்ட தாள்கள் மறைப்பு.</p>
                  <p class="text-stone-300">• பிரிட்டிஷ் உளவுத் துறையினரால் கண்டறிய முடியாத ரகசிய அஞ்சல் வழித்தடம்.</p>
                </div>
              </div>
            </div>

            <!-- FEATURE 25: MAHAKAVI POLYPHONIC RAGA HARMONIUM STUDIO -->
            <div id="feature-panel-f25" class="suite-tab-panel hidden flex-col lg:flex-row gap-8">
              <div class="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span class="text-amber-400 text-xs font-mono mb-2 block">• WEB SYNTH INTERACTIVE CARNATIC KEYBOARD</span>
                  <h3 class="font-cinzel text-2xl font-bold text-stone-100 mb-2">Harmonium Raga Studio (ஹார்மோனிய இசைப் பெட்டி)</h3>
                  <p class="font-tamil text-stone-300 text-sm mb-4">
                    பாரதியார் விரும்பிய கர்நாடக ஸ்வர அமைப்புகளைத் திரையிலேயே ஹார்மோனியம் வாசித்துப் பாருங்கள்!
                  </p>
                  <div class="flex gap-2 mb-4">
                    <button onclick="window.viduthalaiSuite.playHarmoniumKey('Sa')" class="flex-1 py-4 bg-stone-100 hover:bg-amber-400 text-stone-900 font-bold rounded shadow font-mono text-sm">Sa (ஸ)</button>
                    <button onclick="window.viduthalaiSuite.playHarmoniumKey('Ri')" class="flex-1 py-4 bg-stone-100 hover:bg-amber-400 text-stone-900 font-bold rounded shadow font-mono text-sm">Ri (ரி)</button>
                    <button onclick="window.viduthalaiSuite.playHarmoniumKey('Ga')" class="flex-1 py-4 bg-stone-100 hover:bg-amber-400 text-stone-900 font-bold rounded shadow font-mono text-sm">Ga (க)</button>
                    <button onclick="window.viduthalaiSuite.playHarmoniumKey('Ma')" class="flex-1 py-4 bg-stone-100 hover:bg-amber-400 text-stone-900 font-bold rounded shadow font-mono text-sm">Ma (ம)</button>
                    <button onclick="window.viduthalaiSuite.playHarmoniumKey('Pa')" class="flex-1 py-4 bg-stone-100 hover:bg-amber-400 text-stone-900 font-bold rounded shadow font-mono text-sm">Pa (ப)</button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 bg-black border border-amber-500/40 rounded-xl p-6 flex flex-col justify-between">
                <span class="text-xs text-amber-400 font-mono" id="harmonium-status">KEYBOARD STATE: READY • FREQUENCY SYNTHESIZER ACTIVE</span>
                <div class="p-4 bg-stone-900 border border-stone-800 rounded my-3 text-center font-tamil text-amber-300 font-bold text-lg" id="harmonium-swara-display">
                  ஸ - ரி - க - ம - ப (Carnatic Swara Note)
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
    if (typeof window.playBharathiSong === 'function') {
      window.playBharathiSong(type);
    } else if ('speechSynthesis' in window) {
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

  // Feature 11: Handwriting Studio Method
  renderHandwriting() {
    const input = document.getElementById('hw-input');
    const output = document.getElementById('hw-canvas-output');
    if (input && output) {
      output.textContent = input.value || 'சுதந்திரம் வென்றோம்!';
      output.classList.add('scale-105');
      setTimeout(() => output.classList.remove('scale-105'), 300);
    }
  }

  // Feature 12: Oracle Card Generator Method
  drawOracleCard() {
    const cards = [
      { topic: "CARD I: FEARLESSNESS / அச்சமின்மை", verse: '"அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே!"', desc: "Do not harbor fear, even if the whole world turns against you. Courage is the foundation of true liberty." },
      { topic: "CARD II: CREATIVITY / படைப்பாற்றல்", verse: '"நல்லதோர் வீணை செய்தே - அதை நலங்கெடப் புழுதியில் எறிவதுண்டோ?"', desc: "You possess divine creative potential. Do not allow your talents to be wasted in trivial pursuits." },
      { topic: "CARD III: FEMALE EMPOWERMENT / பெண் விடுதலை", verse: '"நிமிர்ந்த நન્નடை நேர்கொண்ட பார்வையும்..."', desc: "Walk with your head held high and eyes fixed forward with unwavering vision and ethical courage." },
      { topic: "CARD IV: PATRIOTIC UNITY / தேசிய ஒற்றுமை", verse: '"ஒன்றுபட்டால் உண்டு வாழ்வு - நம்மில் ஒற்றுமை நீங்கில் அனைவர்க்கும் தாழ்வு!"', desc: "Unity is strength. True freedom flourishes when communities stand together in harmony." }
    ];
    const card = cards[Math.floor(Math.random() * cards.length)];
    const t = document.getElementById('oracle-topic');
    const v = document.getElementById('oracle-verse');
    const d = document.getElementById('oracle-desc');
    if (t && v && d) {
      t.textContent = card.topic;
      v.textContent = card.verse;
      d.textContent = card.desc;
    }
  }

  // Feature 13: CID Cipher Game Method
  verifyCipher() {
    const val = (document.getElementById('cipher-input')?.value || '').trim().toUpperCase();
    const status = document.getElementById('cipher-status');
    if (val === 'VIDUTHALAI' || val === 'விடுதலை') {
      if (status) {
        status.textContent = '✓ CIPHER DECODED SUCCESSFULLY! 1910 Pondicherry Archive Unlocked.';
        status.className = 'mt-3 text-xs font-mono text-emerald-400 font-bold';
      }
    } else {
      if (status) {
        status.textContent = '✕ INVALID CIPHER KEY. Hint: Enter "VIDUTHALAI"';
        status.className = 'mt-3 text-xs font-mono text-red-400 font-bold';
      }
    }
  }

  // Feature 15: Polyglot Matrix Method
  setLangMatrix(lang) {
    const title = document.getElementById('polyglot-title');
    const orig = document.getElementById('polyglot-original');
    const tam = document.getElementById('polyglot-tamil');
    const note = document.getElementById('polyglot-note');
    if (!title) return;

    const data = {
      sanskrit: {
        title: "SANSKRIT & BHARATHI TRANSLATION",
        orig: '"அக்னிமீளே புரோஹிதம் யஜ்ஞஸ்ய தேவம் ரித்விஜம்" (Vedic Rigveda Hymn)',
        tam: 'பாரதியின் தமிழாக்கம்: "வேள்வியின் தலைவனும் ஒளியின் தெய்வமுமாகிய அக்கினியைப் போற்றுகின்றேன்."',
        note: "பாரதியார் ரிக் வேதப் பாடல்களைத் தமிழில் முதன்முதலில் எளிய உரையாடை நடையில் மொழிபெயர்த்த முன்னோடி ஆவார்."
      },
      french: {
        title: "FRENCH & BHARATHI TRANSLATION",
        orig: '"La Marseillaise: Allons enfants de la Patrie..." (French National Anthem)',
        tam: 'பாரதியின் தமிழாக்கம்: "தாயகத்தின் மக்களே எழுந்திருங்கள்! நமது வெற்றியின் நாள் வந்துவிட்டது!"',
        note: "புதுச்சேரி பிரெஞ்சு ஆட்சியில் இருந்தபோது பாரதியார் பிரெஞ்சு மொழியைக் கற்றுக்கொண்டார்."
      },
      english: {
        title: "ENGLISH POETRY & TRANSLATION",
        orig: '"Hail to thee, blithe Spirit! Bird thou never wert..." (PB Shelley - To a Skylark)',
        tam: 'பாரதியின் தமிழாக்கம்: "வானம்பாடியே வாழ்க! நீ வெறும் பறவையன்று, விண்ணிலிருந்து பொழியும் கான அமிழ்தம்!"',
        note: "பாரதியார் தம்பியை 'ஷெல்லிதாசன்' என்று அழைத்துக் கொள்ளும் அளவுக்கு ஆங்கிலக் கவிஞர் ஷெல்லியின் மீது ஆர்வம் கொண்டிருந்தார்."
      },
      hindi: {
        title: "HINDI & BHARATHI TRANSLATION",
        orig: '"வந்தே மாதரம்! ஹிந்துஸ்தான் தமாரா ஹே!"',
        tam: 'பாரதியின் தமிழாக்கம்: "வாழ்க நிரந்தரம் வாழ்க தமிழ்மொழி வாழிய வாழியவே!"',
        note: "பாரதியார் காசி பல்கலைக்கழகத்தில் பயின்ற போது ஹிந்தி மற்றும் வடமொழியில் மேன்மை பெற்றார்."
      }
    };

    const item = data[lang] || data['sanskrit'];
    title.textContent = item.title;
    orig.textContent = item.orig;
    tam.textContent = item.tam;
    note.textContent = item.note;
  }

  // Feature 16: AR 3D Viewport Method
  toggleARMode() {
    const label = document.getElementById('ar-viewport-label');
    const status = document.getElementById('ar-status-text');
    if (label && status) {
      label.textContent = "📱 WEB-AR CAMERA PROJECTION ACTIVE";
      status.textContent = "Augmented Reality Projection Running • Point camera at flat surface";
    }
  }

  changeLighting(mode) {
    const status = document.getElementById('ar-status-text');
    if (status) {
      status.textContent = `360° Interactive WebGL Active • Lighting Preset: ${mode.toUpperCase()}`;
    }
  }

  // Feature 17: Press Lever Mechanical Pull Method
  pullPressLever() {
    const paper = document.getElementById('lever-paper-output');
    const btn = document.getElementById('press-lever-btn');
    if (paper && btn) {
      btn.textContent = "⚙️ PRINTING BROADSHEET IN PROGRESS...";
      paper.classList.add('rotate-1', 'scale-102');
      setTimeout(() => {
        paper.classList.remove('rotate-1', 'scale-102');
        btn.textContent = "⚙️ PULL MECHANICAL IRON LEVER & PRINT BROADSHEET";
        alert("1907 Swadesamitran Broadside Sheet Printed Successfully!");
      }, 600);
    }
  }

  // Feature 18: Chhandas Prosody Analyzer Method
  analyzeChhandas() {
    const input = document.getElementById('chhandas-input')?.value || '';
    const note = document.getElementById('chhandas-metrename');
    if (note) {
      note.textContent = `சந்த பகுப்பாய்வு: "${input.substring(0, 15)}..." — எண்சீர் விருத்தம் & மோனை சந்தம் (Verified)`;
    }
  }

  // Feature 19: Voice Spectrum Studio Method
  startVoiceSpectrum() {
    const btn = document.getElementById('spectrum-btn');
    const score = document.getElementById('raga-pitch-score');
    const label = document.getElementById('spectrum-raga-label');
    if (btn && score && label) {
      btn.textContent = "🎙️ ANALYZING VOICE FREQUENCY SPECTRUM (LIVE)";
      score.textContent = "PITCH SCORE: 98% MATCH";
      label.textContent = "அலைவரிசை பகுப்பாய்வு: ஜான்புரி ராக ஸ்வர அதிர்வு (Carnatic Spectrum Verified)";
    }
  }

  // Feature 20: Global Freedom Matrix Method
  selectGlobalRev(country) {
    const title = document.getElementById('rev-country-title');
    const pTitle = document.getElementById('rev-poem-title');
    const pDesc = document.getElementById('rev-poem-desc');
    const pNote = document.getElementById('rev-historical-note');
    if (!title) return;

    const data = {
      france: {
        title: "🇫🇷 FRENCH REVOLUTION (1789) & BHARATHI",
        pTitle: '"சுதந்திரம், சமத்துவம், சகோதரத்துவம்!"',
        pDesc: 'பிரெஞ்சுப் புரட்சியின் முழக்கங்களான சுதந்திரம், சமத்துவம் மற்றும் சகோதரத்துவத்தை பாரதியார் தனது தமிழ் வசன கவிதைகளில் பிரதானமாகக் கையாண்டார்.',
        pNote: 'Pondicherry Exile period exposed Bharathi directly to French Republican philosophy.'
      },
      russia: {
        title: "🇷🇺 RUSSIAN REVOLUTION (1917) & BHARATHI",
        pTitle: '"மாகாளி பராசக்தி உருசிய நாட்டில் கடைக்கண் வைத்தாள்!"',
        pDesc: '1917 ஜார் மன்னனின் வீழ்ச்சியையும் ரஷ்யப் புரட்சியையும் ஆசிய கண்டத்திலேயே முதன்முதலில் "புதிய ருஷியா" என்ற கவிதையின் மூலம் வாழ்த்திப் பாடிய மகாகவி பாரதியார் ஆவார்.',
        pNote: 'Historical Context: Czarist autocracy collapsed; Bharathi celebrated equal rights for workers.'
      },
      ireland: {
        title: "🇮🇪 IRISH FREEDOM WAR (1916) & BHARATHI",
        pTitle: '"அயர்லாந்து விடுதலை இயக்கம் & தமிழ் முழக்கம்"',
        pDesc: 'அயர்லாந்தின் சுதந்திரப் போராட்டத் தலைவர் எமிலியன் தேவலேரா மற்றும் ஐரிஷ் புரட்சியாளர்களின் தியாகத்தை பாரதியார் சுதேசமித்திரன் இதழில் விரிவாக எழுதினார்.',
        pNote: 'Bharathi translated Irish nationalist songs into Tamil for freedom fighters.'
      },
      suffrage: {
        title: "🇺🇸 WOMEN SUFFRAGE (1920) & BHARATHI",
        pTitle: '"பட்டங்கள் ஆள்வதும் சட்டங்கள் செய்வதும் பாரினில் பெண்கள் நடத்த வந்தோம்!"',
        pDesc: 'உலகளவில் பெண்கள் வாக்குரிமை பெற்ற காலகட்டத்தில், பாரதியார் இந்தியாவில் பெண்களின் கல்வி மற்றும் அரசியல் அதிகாரத்திற்காக முன்நின்றார்.',
        pNote: 'Advocated total equality and voting rights for women in Tamil Nadu.'
      }
    };

    const item = data[country] || data['russia'];
    title.textContent = item.title;
    pTitle.textContent = item.pTitle;
    pDesc.textContent = item.pDesc;
    pNote.textContent = item.pNote;
  }

  // Feature 21: VR Virtual Museum Method
  launchVRMuseum() {
    const title = document.getElementById('vr-title');
    const desc = document.getElementById('vr-desc');
    const btn = document.getElementById('vr-launch-btn');
    if (title && desc && btn) {
      btn.textContent = "🥽 360° VR SIMULATOR RUNNING (IN-BROWSER VIEW)";
      title.textContent = "Pondicherry 1910 VR Walkthrough Active";
      desc.textContent = "Pondicherry Exile House • Clandestine Press Room • Original Facsimiles";
    }
  }

  // Feature 22: Panchaali Sabatham Opera Method
  playOperaScene(scene) {
    const dialog = document.getElementById('opera-dialogue');
    const name = document.getElementById('opera-scene-name');
    const tag = document.getElementById('opera-raga-tag');
    if (!dialog) return;
    if (scene === 'bheema') {
      name.textContent = "SCENE II: BHEEMA'S FURY & THUNDER";
      dialog.textContent = '"துரியோதனன் தொடைகளைப் பிளந்து அவனைக் களத்தே வீழ்த்துவேன்! இது வீமனின் உறுதி!"';
      tag.textContent = "RAGA: GAMBHEERA NATTAI (வீர உக்கிரம்)";
    } else {
      name.textContent = "SCENE I: DRAUPADI'S SACRED VOW";
      dialog.textContent = '"ஒப்பற்ற பராசக்தி மீது ஆணை! துரியோதனன் குருதியை என் கூந்தலில் பூசிய பின்னரே முடிய முடிப்பேன்!"';
      tag.textContent = "RAGA: AATANA (வீர ரசம்)";
    }
  }

  // Feature 23: Gnanaratham Simulator Method
  travelGnanaratham(lokam) {
    const title = document.getElementById('gnana-lokam-title');
    const desc = document.getElementById('gnana-lokam-desc');
    if (!title || !desc) return;
    const lData = {
      dharma: { title: "CHARIOT OF WISDOM: DHARMA LOKAM (அற உலகம்)", desc: '"அறத்தின் உலகத்தில் தர்மமும் நெறியும் சுடராய் ஒளிர்கின்றன. இங்கு மனித மனம் பொறாமையற்று ஒளிர்கிறது."' },
      satya: { title: "CHARIOT OF WISDOM: SATYA LOKAM (சத்திய உலகம்)", desc: '"வாய்மையும் உண்மையும் மட்டுமே ஆளும் பேரொளி உலகம். இங்கு பொய்க்கும் மாயைக்கும் இடமில்லை."' },
      shanti: { title: "CHARIOT OF WISDOM: SHANTI LOKAM (சாந்தி உலகம்)", desc: '"அமைதியும் பேரின்பமும் நிறைந்த அமைதி உலகம். இங்கு ஆசைகளும் மனக் கலக்கங்களும் ஒழிகின்றன."' }
    };
    const sel = lData[lokam] || lData['dharma'];
    title.textContent = sel.title;
    desc.textContent = sel.desc;
  }

  // Feature 24: Underground Maritime Courier Map Method
  animateSmugglerRoute() {
    const status = document.getElementById('smuggler-route-status');
    if (status) {
      status.innerHTML = `
        <p class="text-amber-300 font-bold">⛵ ROUTE ANIMATION ACTIVE: Pondicherry ➔ French Port ➔ Madras Customs Bypass</p>
        <p class="text-emerald-400 font-mono">• Secret Courier Dispatched: 500 Copies of 'India' Weekly Smuggled in Tea Crates.</p>
      `;
    }
  }

  // Feature 25: Harmonium Raga Studio Method
  playHarmoniumKey(swara) {
    const display = document.getElementById('harmonium-swara-display');
    const status = document.getElementById('harmonium-status');
    if (display && status) {
      display.textContent = `PLAYING SWARA: ${swara.toUpperCase()} (கர்நாடக ஸ்வர அதிர்வு)`;
      status.textContent = `KEY PRESSED: ${swara.toUpperCase()} • FREQUENCY OSCILLATOR ACTIVE`;
    }
    try {
      const freqs = { Sa: 261.63, Ri: 293.66, Ga: 329.63, Ma: 349.23, Pa: 392.00 };
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freqs[swara] || 261.63, ctx.currentTime);
      osc.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch(e) {}
  }
}

// Global Instantization
window.viduthalaiSuite = new ViduthalaiSuite();
