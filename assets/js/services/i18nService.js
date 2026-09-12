/**
 * i18nService.js - Complete Bilingual (Tamil <-> English) Translation Engine
 * Viduthalai — Mahakavi Subramania Bharathiyar Digital Archive
 * Translates header, navigation, hero titles, cards, footers, modals, and voice assistant.
 */

window.I18N_DICTIONARY = {
  // Navigation & Header
  "HOME": { ta: "முகப்பு", en: "HOME" },
  "VIDUTHALAI": { ta: "விடுதலை", en: "VIDUTHALAI" },
  "VIDUTHALAI CULTURAL INITIATIVE": { ta: "விடுதலைக் கலாச்சாரத் திட்டம்", en: "VIDUTHALAI CULTURAL INITIATIVE" },
  "Mahakavi Bharathiyar Digital Archive": { ta: "மகாகவி பாரதியார் டிஜிட்டல் ஆவணம்", en: "Mahakavi Bharathiyar Digital Archive" },
  "LIFE & TIMELINE": { ta: "வாழ்க்கை & காலக்கோடு", en: "LIFE & TIMELINE" },
  "JOURNEY MAP": { ta: "பயண வரைபடம்", en: "JOURNEY MAP" },
  "WORKS & POEMS": { ta: "படைப்புகள் & கவிதைகள்", en: "WORKS & POEMS" },
  "ENTER 1910": { ta: "1910 சன்னதி", en: "ENTER 1910" },
  "AI BHARATHI": { ta: "ஏஐ பாரதியார்", en: "AI BHARATHI" },
  "LEARN HUB": { ta: "கற்றல் மையம்", en: "LEARN HUB" },
  "THE LIVING WORLD OF MAHAKAVI BHARATHIYAR": { ta: "மகாகவி பாரதியாரின் வாழும் உலகம்", en: "THE LIVING WORLD OF MAHAKAVI BHARATHIYAR" },
  "ARCHIVE INDEX": { ta: "ஆவணக் கோப்பகம்", en: "ARCHIVE INDEX" },
  "IMMORTAL POETRY & PROSE": { ta: "அழியாத கவிதைகளும் உரைநடைகளும்", en: "IMMORTAL POETRY & PROSE" },
  "CHRONOLOGICAL INDEX": { ta: "காலவரிசை அட்டவணை", en: "CHRONOLOGICAL INDEX" },
  "PONDICHERRY SANCTUARY": { ta: "பாண்டிச்சேரி புகலிடம்", en: "PONDICHERRY SANCTUARY" },
  "KAVITHAI COMPENDIUM": { ta: "கவிதைத் திரட்டு", en: "KAVITHAI COMPENDIUM" },
  "INDIA NEWSPAPER FACSIMILES": { ta: "இந்தியா இதழ் நகல்கள்", en: "INDIA NEWSPAPER FACSIMILES" },
  "THE 1910 PRESS ROOM": { ta: "1910 அச்சுக்கூடம்", en: "THE 1910 PRESS ROOM" },
  "NEURAL DIALOGUE RAG": { ta: "செயற்கை நுண்ணறிவு உரையாடல்", en: "NEURAL DIALOGUE RAG" },
  "SCHOLARLY DISSERTATIONS": { ta: "ஆய்வுக் கட்டுரைகள்", en: "SCHOLARLY DISSERTATIONS" },
  "CURATOR EDUCATION KITS": { ta: "கல்விப் பெட்டகம்", en: "CURATOR EDUCATION KITS" },
  "ARCHIVE VAULT": { ta: "ஆவணக் காப்பகம்", en: "ARCHIVE VAULT" },
  "DIGITAL MONUMENTS": { ta: "டிஜிட்டல் நினைவிடங்கள்", en: "DIGITAL MONUMENTS" },
  "INSTITUTIONAL PARTNERS": { ta: "நிறுவனக் கூட்டாளர்கள்", en: "INSTITUTIONAL PARTNERS" },
  "ARCHIVAL RIGHTS": { ta: "ஆவண உரிமைகள்", en: "ARCHIVAL RIGHTS" },
  "CURATORIAL CITATIONS": { ta: "ஆய்வுச் சான்றுகள்", en: "CURATORIAL CITATIONS" },
  "ETHICS & RAG ENGINE": { ta: "அறநெறி & ஏஐ பொறி", en: "ETHICS & RAG ENGINE" },

  // Works & Poems Titles
  "Monuments of Tamil Renaissance": { ta: "தமிழ் மறுமலர்ச்சியின் அமரப் படைப்புகள்", en: "Monuments of Tamil Renaissance" },
  "Immortal Works & Hymns": { ta: "அழியாத படைப்புகளும் கவிதைகளும்", en: "Immortal Works & Hymns" },
  "CHRONOLOGICAL TREASURY": { ta: "காலவரிசைப் பெட்டகம்", en: "CHRONOLOGICAL TREASURY" },
  "SHOWING 1 TO 6 OF 148 REGISTERED POEMS": { ta: "148 பதிவு செய்யப்பட்ட கவிதைகளில் 6 காண்பிக்கப்படுகின்றன", en: "SHOWING 1 TO 6 OF 148 REGISTERED POEMS" },

  // Buttons & Controls
  "படிக்க / READ CANTO": { ta: "படிக்க / READ CANTO", en: "READ CANTO" },
  "READ CANTO": { ta: "படிக்க", en: "READ CANTO" },
  "Launch Focus Reader": { ta: "வாசிப்புத் திரையைத் திறக்குக", en: "Launch Focus Reader" },
  "Download PDF Facsimiles": { ta: "PDF நகல்களைப் பதிவிறக்குக", en: "Download PDF Facsimiles" },
  "SKIP / கடந்துசெல்": { ta: "SKIP / கடந்துசெல்", en: "SKIP / DISMISS" },
  "ஆவணத்தைக் காண்க / EXPLORE": { ta: "ஆவணத்தைக் காண்க / EXPLORE", en: "EXPLORE ARCHIVE →" },
  "SKIP INTRO": { ta: "முன்னுரையைத் தவிர்க்க", en: "SKIP INTRO" },

  // Voice Assistant UI Status Texts
  "பாரதியாரிடம் பேச கிளிக் செய்யவும்": { ta: "பாரதியாரிடம் பேச கிளிக் செய்யவும்", en: "Click to speak with Bharathiyar" },
  "கேட்கிறேன்...": { ta: "கேட்கிறேன்...", en: "Listening..." },
  "சிந்திக்கிறேன்...": { ta: "சிந்திக்கிறேன்...", en: "Thinking..." },
  "பதில் அளிக்கிறது...": { ta: "பதில் அளிக்கிறது...", en: "Responding..." },
  "மீண்டும் கேட்கலாம்.": { ta: "மீண்டும் கேட்கலாம்.", en: "Click to ask again." },

  // Subpage Titles
  "Historical Sanctum 1910": { ta: "1910 வரலாற்றுச் சன்னதி", en: "Historical Sanctum 1910" },
  "Interactive Journey Map": { ta: "வரலாற்றுப் பயண வரைபடம்", en: "Interactive Journey Map" },
  "Neural Knowledge System": { ta: "செயற்கை நுண்ணறிவு மையம்", en: "Neural Knowledge System" },
  "Idea Constellation Learning Hub": { ta: "கற்றல் & சிந்தனை மையம்", en: "Idea Constellation Learning Hub" }
};

class I18nService {
  constructor() {
    this.currentLang = localStorage.getItem('bharathi_lang') || 'ta';
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.bindToggles();
        this.applyLanguage(this.currentLang);
      });
    } else {
      this.bindToggles();
      this.applyLanguage(this.currentLang);
    }
  }

  bindToggles() {
    // Find all language toggle buttons in header or body
    const langBtns = document.querySelectorAll('button:has(span), .lang-toggle-btn');
    
    document.body.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const txt = btn.textContent.trim();
      if (txt.includes('தமிழ்') || txt.includes('EN') || btn.classList.contains('lang-toggle-btn')) {
        // Toggle language
        const newLang = (this.currentLang === 'ta') ? 'en' : 'ta';
        this.setLanguage(newLang);
      }
    });
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('bharathi_lang', lang);
    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    document.documentElement.lang = lang;
    const isTa = (lang === 'ta');

    // Update Header Toggle Labels Highlight
    document.querySelectorAll('header button, .lang-toggle-btn').forEach(btn => {
      if (btn.textContent.includes('தமிழ்') || btn.textContent.includes('EN')) {
        btn.innerHTML = isTa 
          ? `<span class="font-label-sm text-label-sm text-secondary font-bold">தமிழ்</span><span class="text-outline text-label-sm mx-1">/</span><span class="font-label-sm text-label-sm text-on-surface-variant/60">EN</span>`
          : `<span class="font-label-sm text-label-sm text-on-surface-variant/60">தமிழ்</span><span class="text-outline text-label-sm mx-1">/</span><span class="font-label-sm text-label-sm text-secondary font-bold">EN</span>`;
      }
    });

    // Translate all elements with data-ta / data-en attributes
    document.querySelectorAll('[data-ta][data-en]').forEach(el => {
      el.textContent = isTa ? el.getAttribute('data-ta') : el.getAttribute('data-en');
    });

    // Translate elements matching dictionary
    const dict = window.I18N_DICTIONARY;
    const textNodes = [];

    const walkTextNodes = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue.trim();
        if (text && dict[text]) {
          textNodes.push({ node, entry: dict[text] });
        }
      } else {
        // Skip script and style tags
        if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
          for (let child of node.childNodes) walkTextNodes(child);
        }
      }
    };

    walkTextNodes(document.body);

    textNodes.forEach(({ node, entry }) => {
      node.nodeValue = isTa ? entry.ta : entry.en;
    });

    // Notify Voice Services of Language Change
    if (window.speechSynthesisService) {
      window.speechSynthesisService.options.lang = isTa ? 'ta-IN' : 'en-IN';
    }
    if (window.speechRecognitionService) {
      window.speechRecognitionService.setLocale(isTa ? 'ta-IN' : 'en-IN');
    }
  }
}

// Global Singleton Instance
window.i18n = new I18nService();
