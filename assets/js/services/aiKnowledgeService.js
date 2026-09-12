/**
 * aiKnowledgeService.js - Comprehensive AI Knowledge & Voice Command Engine
 * Enables 100% hands-free voice control across all site pages, 25 interactive features,
 * and answers every question about Mahakavi Subramania Bharathiyar in Tamil, English, and Tanglish.
 */

class AIKnowledgeService {
  constructor() {
    this.routes = {
      home: '/index.html',
      timeline: '/pages/life-and-timeline.html',
      journey: '/pages/journey-map.html',
      works: '/pages/works-and-poems.html',
      sanctum: '/pages/enter-1910.html',
      ai: '/pages/ai-bharathi.html',
      learn: '/pages/learn-hub.html'
    };

    // Pre-indexed comprehensive Bharathiyar & Viduthalai Site Knowledge Base
    this.kb = [
      // 1. GREETINGS & INTRODUCTIONS
      {
        id: 'greeting',
        keywords: ['வணக்கம் பாரதி', 'வணக்கம்', 'vanakkam bharathi', 'vanakkam', 'hello bharathi', 'hi bharathi', 'hello', 'hi', 'nandri', 'thanks', 'thank you'],
        responseTamil: 'வணக்கம்! அன்புடன் வரவேற்கிறேன். மகாகவி பாரதியாரின் வாழ்க்கை, கவிதைகள், வரலாறு மற்றும் இணையதளத்தின் 25 நவீன அம்சங்கள் குறித்து எது வேண்டுமானாலும் கனிவுடன் கேளுங்கள்.',
        responseEnglish: 'Greetings! A very warm welcome. Please ask me anything about Mahakavi Bharathiyar\'s life, poetry, history, or our 25 interactive site features.'
      },

      // 2. SITE FEATURES & VOICE CONTROL GUIDE
      {
        id: 'site_features',
        keywords: ['features', 'site features', 'what features', 'enna features', 'அம்சங்கள்', 'கண்டுபிடிப்புகள்', 'innovations', 'suite', 'features list', 'how to control'],
        responseTamil: 'விடுதலை தளத்தில் 25 பிரத்யேக அம்சங்கள் உள்ளன: AI கவிதை அரங்கம், 3D நினைவிடங்கள், AR கேமரா சிலை, VR அருங்காட்சியகம், 1907 அச்சுக்கூடம், ஹார்மோனியம், குரல் அலைவரிசை, 8D குயில் பாட்டு மற்றும் பன்மொழி AI ஆய்வகம்.',
        responseEnglish: 'VIDUTHALAI features 25 interactive digital innovations including AI Poetry Prosody, 3D Memorials, AR Camera Projection, VR 1910 Museum, 1907 Press Simulator, Harmonium Raga Studio, and Voice Spectrum Analyzer.'
      },

      // 3. ABOUT BHARATHIYAR & FREEDOM CONTRIBUTION
      {
        id: 'about_bharathi',
        keywords: ['about bharathiyar', 'about bharathi', 'tell me about bharathiyar', 'who is bharathi', 'bharathiyar yaar', 'யார் பாரதியார்', 'bharathiyar history', 'history of bharathiyar', 'வாழ்க்கை வரலாறு', 'சுப்பிரமணிய பாரதி'],
        responseTamil: 'மகாகவி சி. சுப்பிரமணிய பாரதியார் (1882–1921) தமிழ்நாட்டின் மாபெரும் புரட்சிக் கவிஞர், பத்திரிகையாளர், இந்திய விடுதலைப் போராட்ட வீரர் மற்றும் சமூக சீர்திருத்தவாதி ஆவார். எட்டயபுரத்தில் பிறந்து "வந்தே மாதரம்", "அச்சமில்லை" போன்ற கவிதைகள் மூலமாக இந்திய சுதந்திர வேட்கையைத் தூண்டினார்.',
        responseEnglish: 'Mahakavi C. Subramania Bharathiyar (1882–1921) was India\'s legendary freedom poet, radical journalist, and social reformer who ignited patriotism and equality through immortal poetry.'
      },

      // 4. COUNTRY CONTRIBUTION
      {
        id: 'country_contribution',
        keywords: ['contribution to country', 'country contribution', 'what he did for country', 'for india', 'சுதந்திரப் போராட்டம்', 'நாட்டிற்கு என்ன செய்தார்', 'தேசப்பணி', 'freedom fight', 'desapani'],
        responseTamil: 'பாரதியார் நாட்டிற்கு ஆற்றிய சேவைகள்: 1) "வந்தே மாதரம்" மற்றும் "அச்சமில்லை" பாடல்கள் மூலம் இந்திய சுதந்திர உணர்ச்சியைத் தூண்டினார்; 2) "இந்தியா" நாளிதழ் மூலம் பிரிட்டிஷ் அடக்குமுறையை எதிர்த்தார்; 3) சாதி வேறுபாடுகளை எதிர்த்து சமூக சமத்துவத்தை நிலைநாட்டினார்; 4) பெண் கல்விக்காகக் குரல் கொடுத்தார்.',
        responseEnglish: 'Bharathiyar\'s contributions: 1) Awakened national freedom movement through fiery anthems; 2) Fought British colonialism via radical journalism in India weekly; 3) Eradicated caste discrimination; 4) Pioneered women\'s empowerment.'
      },

      // 5. BIRTH & ORIGINS
      {
        id: 'birth',
        keywords: ['birth', 'born', 'birthday', 'பிறந்த நாள்', 'பிறந்த தேதி', 'பிறந்தார்', 'எப்பொழுது பிறந்தார்', 'எட்டயபுரம்', 'ettayapuram', 'porandharu', 'porandha idam'],
        responseTamil: 'பாரதியார் 1882 டிசம்பர் 11 அன்று தூத்துக்குடி மாவட்டத்தில் உள்ள எட்டயபுரத்தில் பிறந்தார். பெற்றோர் சின்னச்சாமி ஐயர் மற்றும் இலட்சுமி அம்மாள்.',
        responseEnglish: 'Bharathiyar was born on December 11, 1882, in Ettayapuram, Tamil Nadu, to Chinnaswami Iyer and Lakshmi Ammal.'
      },

      // 6. PARENTS & CHILDHOOD
      {
        id: 'parents',
        keywords: ['parents', 'father', 'mother', 'பெற்றோர்', 'தந்தை', 'தாய்', 'அம்மா', 'அப்பா', 'chinnaswami', 'lakshmi'],
        responseTamil: 'பாரதியாரின் தந்தை சின்னச்சாமி ஐயர், தாயார் இலட்சுமி அம்மாள். தமது ஐந்தாம் வயதிலேயே தாயாரை இழந்து தந்தையின் பராமரிப்பில் வளர்ந்தார்.',
        responseEnglish: 'Bharathiyar\'s father was Chinnaswami Iyer and his mother was Lakshmi Ammal. He lost his mother at age five.'
      },

      // 7. WIFE & DAUGHTERS
      {
        id: 'family',
        keywords: ['wife', 'chellamma', 'manaivi', 'wife name', 'children', 'magal', 'மகள்கள்', 'செல்லம்மாள்', 'குடும்பம்', 'kids', 'daughters', 'thangammal', 'shakuntala'],
        responseTamil: 'பாரதியாரின் மனைவி செல்லம்மாள். இவர்களுக்கு தங்கம்மாள் மற்றும் சகுந்தலா என்ற இரண்டு மகள்கள் இருந்தனர்.',
        responseEnglish: 'Bharathiyar\'s wife was Chellamma. They had two daughters named Thangammal and Shakuntala.'
      },

      // 8. TITLE BHARATHI AT AGE 11
      {
        id: 'title_bharathi',
        keywords: ['title', 'pattam', 'why named bharathi', 'bharathi pattam', '11 age', 'பட்டப்பெயர்', 'பாரதி பட்டம்', 'saraswathi'],
        responseTamil: '1893-ல் தமது 11-ஆம் வயதில், எட்டயபுர அரசவையில் புலவர்களை வியக்கும் வண்ணம் கவிபாடியதால் "பாரதி" (கலைமகள்) என்ற பட்டம் வழங்கப்பட்டது.',
        responseEnglish: 'In 1893 at age 11, he was conferred the title "Bharathi" (Goddess of Learning) by the Ettayapuram royal court.'
      },

      // 9. KASHI STAY & ICONIC TURBAN / MUSTACHE
      {
        id: 'kashi_stay',
        keywords: ['kashi', 'banaras', 'varanasi', 'காசி', 'வாரணாசி', 'turban', 'mustache', 'மீசை', 'தலைப்பாகை'],
        responseTamil: '1898 முதல் 1902 வரை காசியில் வாழ்ந்த பாரதியார் சமஸ்கிருதம், இந்தி கற்றார். அங்குதான் தமது புகழ்பெற்ற முறுக்கு மீசையையும் தலைப்பாகையையும் அணியத் தொடங்கினார்.',
        responseEnglish: 'During his stay in Kashi (1898–1902), Bharathiyar learned Sanskrit and Hindi, adopting his iconic turban and mustache.'
      },

      // 10. GURU SISTER NIVEDITA
      {
        id: 'guru_nivedita',
        keywords: ['nivedita', 'guru', 'spiritual guru', 'sister nivedita', 'சகோதரி நிவேதிதா', 'ஞானகுரு', 'குரு யார்'],
        responseTamil: '1906-ல் விவேகானந்தரின் சீடரான சகோதரி நிவேதிதாவைச் சந்தித்த பாரதியார், அவரைத் தமது ஞானகுருவாக ஏற்றுக்கொண்டு பெண் விடுதலையின் முக்கியத்துவத்தை உணர்ந்தார்.',
        responseEnglish: 'In 1906, Bharathiyar met Sister Nivedita, accepted her as his spiritual Guru, and embraced total gender equality.'
      },

      // 11. PONDICHERRY EXILE 1908-1918
      {
        id: 'pondicherry_exile',
        keywords: ['pondicherry', '1908', '1910', 'exile', 'sanctuary', 'பாண்டிச்சேரி', 'பிரெஞ்சு', 'ஆண்டு'],
        responseTamil: '1908 முதல் 1918 வரை 10 ஆண்டுகள் பிரிட்டிஷ் கைது நடவடிக்கையிலிருந்து தப்ப பாண்டிச்சேரியில் தலைமறைவாக வாழ்ந்தார். அங்குதான் குயில் பாட்டு, கண்ணன் பாட்டு, பாஞ்சாலி சபதம் படைத்தார்.',
        responseEnglish: 'From 1908 to 1918, Bharathiyar lived in exile in French Pondicherry, where he wrote his immortal epic masterpieces.'
      },

      // 12. DEATH & ELEPHANT INCIDENT
      {
        id: 'death_details',
        keywords: ['death', 'died', 'passed away', 'மறைந்தார்', 'மறைந்த நாள்', 'இறப்பு', 'elephant', 'triplicane', 'parthasarathy', 'யானை', 'maranam'],
        responseTamil: '1921-ல் திருவல்லிக்கேணி பார்த்தசாரதி கோவில் யானை தாக்கியதில் உடலளவில் நலிவுற்று, 1921 செப்டம்பர் 11 அன்று தமது 38-வது வயதில் சென்னையில் மறைந்தார்.',
        responseEnglish: 'Bharathiyar passed away on September 11, 1921, in Chennai at age 38, following injuries sustained from the Triplicane temple elephant.'
      },

      // 13. KUYIL PATTU
      {
        id: 'kuyil_pattu',
        keywords: ['kuyil pattu', 'குயில் பாட்டு', 'cuckoo', 'kadhal kadhal'],
        responseTamil: 'குயில் பாட்டு 1912-ல் இயற்றப்பட்ட கற்பனை காதல் காவியம். "காதல் காதல் காதல்; காதல் போயிற் காதல் போயிற் சாதல் சாதல் சாதல்!" என்பது இதன் அமர வரி.',
        responseEnglish: 'Kuyil Pattu (1912) is a romantic mystical masterpiece containing the immortal line: "Love, love, love; If love perisheth, then death!"'
      },

      // 14. KANNAN PATTU
      {
        id: 'kannan_pattu',
        keywords: ['kannan pattu', 'கண்ணன் பாட்டு', 'suttum vizhi', 'kannamma'],
        responseTamil: 'கண்ணன் பாட்டு 1917-ல் இயற்றப்பட்ட 23 பக்திப் பாடல்களின் தொகுப்பு. கண்ணனைத் தோழனாகவும், சேவகனாகவும், காதலனாகவும் பாவித்து எழுதியது.',
        responseEnglish: 'Kannan Pattu (1917) comprises 23 hymns depicting Lord Krishna as a friend, servant, and beloved.'
      },

      // 15. PANCHALI SABATHAM
      {
        id: 'panchali_sabatham',
        keywords: ['panchali sabatham', 'பாஞ்சாலி சபதம்', 'draupadi', 'mahabharata'],
        responseTamil: 'பாஞ்சாலி சபதம் என்பது திரௌபதியின் சபதத்தைக் கொண்டு பாரத நாட்டின் அடிமைத்தனத்தையும் விடுதலைப் போராட்டத்தையும் உருவகப்படுத்திய காவியம்.',
        responseEnglish: 'Panchali Sabatham uses Draupadi\'s vow as an allegory for India\'s struggle against colonial servitude.'
      },

      // 16. PUDHUMAI PENN
      {
        id: 'pudhumai_penn',
        keywords: ['pudhumai penn', 'புதுமைப் பெண்', 'women', 'pengal', 'nimirndha nannadai', 'liberation', 'pen viduthalai'],
        responseTamil: 'பாரதியார் "நிமிர்ந்த நன்னடை நேர்கொண்ட பார்வையும்" கொண்ட புதுமைப் பெண்ணைப் படைத்து பெண்களின் கல்வி மற்றும் உரிமைகளுக்காகக் குரல் கொடுத்தார்.',
        responseEnglish: 'Bharathiyar championed women\'s liberation and education, immortalizing the fearless modern woman in Pudhumai Penn.'
      },

      // 17. ACHAMILLAI ACHAMILLAI
      {
        id: 'achamillai',
        keywords: ['achamillai', 'அச்சமில்லை', 'fearless', 'fear'],
        responseTamil: 'அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே! உச்சிமீது வானிடிந்து வீழுகின்ற போதினும் அச்சமில்லை அச்சமென்பதில்லையே!',
        responseEnglish: 'Achamillai Achamillai — We fear not, even if the skies collapse upon our heads!'
      },

      // 18. LANGUAGES KNOWN
      {
        id: 'languages_known',
        keywords: ['languages', 'mozhigal', 'yamarindha mozhigalile', 'எத்தனை மொழி', 'மொழிகள்'],
        responseTamil: 'பாரதியாருக்கு தமிழ், சமஸ்கிருதம், இந்தி, தெலுங்கு, ஆங்கிலம், பிரெஞ்சு உட்பட 14 மொழிகள் தெரியும். "யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்" என்றார்.',
        responseEnglish: 'Bharathiyar was a polyglot who mastered 14 languages, declaring Tamil as the sweetest of all.'
      },

      // 19. SOCIAL EQUALITY & CASTE REJECTION
      {
        id: 'caste_equality',
        keywords: ['caste', 'jaathi', 'samathuvam', 'dalit', 'kanakalingam', 'poonool', 'சாதி', 'சமத்துவம்'],
        responseTamil: 'பாரதியார் சாதி முறையை எதிர்த்து, "சாதி இரண்டொழிய வேறில்லை" என்றார். கனகலிங்கம் என்ற இளைஞருக்கு பூணூல் அணிவித்து புரட்சி செய்தார்.',
        responseEnglish: 'Bharathiyar rejected the caste system, declaring only two castes (virtuous & unvirtuous), performing revolutionary social integration.'
      },

      // 20. GNANA RATHAM
      {
        id: 'gnana_ratham',
        keywords: ['gnana ratham', 'ஞான ரதம்', 'prose', 'chariot'],
        responseTamil: 'ஞான ரதம் (1906) தமிழின் முதல் கற்பனை உரைநடை நூல். மனதை சாரதியாகக் கொண்டு தத்துவ உலகங்களுக்குச் செல்லும் பயணம்.',
        responseEnglish: 'Gnana Ratham (1906) is the pioneer Tamil speculative prose work detailing a cosmic journey of the mind.'
      }
    ];
  }

  /**
   * Main Process Query Handler
   * Returns { type: 'NAVIGATE'|'FEATURE'|'ACTION'|'SPEAK'|'CONTROL', target?, response }
   */
  processQuery(input) {
    if (!input || !input.trim()) {
      return {
        type: 'SPEAK',
        response: 'வணக்கம்! அன்புடன் வரவேற்கிறேன். மகாகவி பாரதியாரின் வாழ்க்கை, கவிதைகள், வரலாறு மற்றும் இணையதளத்தின் 25 அம்சங்கள் குறித்து எது வேண்டுமானாலும் கேளுங்கள்.'
      };
    }

    const rawText = input.trim();
    const text = rawText.toLowerCase();
    const hasTamilScript = /[\u0B80-\u0BFF]/.test(rawText);
    const isPureEnglish = /[a-z]/i.test(text) && !hasTamilScript && 
      !text.includes('pathi') && !text.includes('sollu') && !text.includes('yaar') && 
      !text.includes('enna') && !text.includes('avanga') && !text.includes('unakku') && !text.includes('epdi');

    // 1. PAGE NAVIGATION COMMANDS
    if (text.includes('go to home') || text.includes('open home') || text.includes('home page') || text.includes('முகப்பு')) {
      return { type: 'NAVIGATE', target: this.routes.home, response: 'முகப்புப் பக்கத்திற்கு வழிகாட்டுகிறேன்.' };
    }
    if (text.includes('go to timeline') || text.includes('open timeline') || text.includes('life history') || text.includes('வாழ்க்கை')) {
      return { type: 'NAVIGATE', target: this.routes.timeline, response: 'பாரதியாரின் வாழ்க்கை வரலாற்றுப் பக்கத்திற்கு வழிகாட்டுகிறேன்.' };
    }
    if (text.includes('go to poems') || text.includes('open poems') || text.includes('works page') || text.includes('கவிதைகள்')) {
      return { type: 'NAVIGATE', target: this.routes.works, response: 'பாரதியாரின் கவிதைகள் பக்கத்திற்கு வழிகாட்டுகிறேன்.' };
    }
    if (text.includes('go to 1910') || text.includes('open 1910') || text.includes('pondicherry sanctum') || text.includes('பாண்டிச்சேரி')) {
      return { type: 'NAVIGATE', target: this.routes.sanctum, response: '1910 பாண்டிச்சேரி வரலாற்றுப் பக்கத்திற்கு வழிகாட்டுகிறேன்.' };
    }
    if (text.includes('go to journey') || text.includes('open map') || text.includes('journey map') || text.includes('வரைபடம்')) {
      return { type: 'NAVIGATE', target: this.routes.journey, response: 'பாரதியாரின் பயண வரைபட பக்கத்திற்கு வழிகாட்டுகிறேன்.' };
    }
    if (text.includes('go to ai') || text.includes('open ai') || text.includes('ai lab') || text.includes('ஆய்வகம்')) {
      return { type: 'NAVIGATE', target: this.routes.ai, response: 'AI பாரதி ஆய்வகத்திற்கு வழிகாட்டுகிறேன்.' };
    }

    // 2. REAL MUSIC & YOUTUBE SONG PLAYER VOICE COMMAND
    const songKeywords = ['play song', 'play music', 'sing song', 'paattu paadu', 'paattu', 'பாடலை இசை', 'பாட்டு பாடு', 'achamillai', 'nallathor', 'chinnanchiru', 'senthamizh', 'vande matharam', 'kuyil pattu', 'aaduvome'];
    if (songKeywords.some(k => text.includes(k))) {
      let songKey = 'achamillai';
      if (text.includes('veenai') || text.includes('nallathor')) songKey = 'nallathor';
      else if (text.includes('kiliye') || text.includes('chinnanchiru') || text.includes('kannamma')) songKey = 'chinnanchiru';
      else if (text.includes('senthamizh') || text.includes('tamil')) songKey = 'senthamizh';
      else if (text.includes('vande') || text.includes('matharam')) songKey = 'vande';
      else if (text.includes('kuyil') || text.includes('cuckoo')) songKey = 'kuyil';
      else if (text.includes('aadu') || text.includes('pallu')) songKey = 'aaduvome';
      else if (text.includes('acham') || text.includes('achamillai')) songKey = 'achamillai';

      if (typeof window.playBharathiSong === 'function') {
        window.playBharathiSong(songKey);
      }
      return { 
        type: 'MUSIC', 
        songKey: songKey,
        response: 'மகாகவி பாரதியாரின் அசல் இசைப் பதிவை ஒளிபரப்புகிறேன்...' 
      };
    }

    // 3. SITE INTRO VIDEO VOICE COMMAND
    if (text.includes('intro video') || text.includes('play intro') || text.includes('show intro') || text.includes('அறிமுக வீடியோ')) {
      if (typeof window.showBharathiIntro === 'function') {
        window.showBharathiIntro();
      }
      return { type: 'ACTION', response: 'அறிமுக வீடியோவை ஒளிபரப்புகிறேன்.' };
    }

    // 3. VOICE CONTROL FOR 25 INTERACTIVE SUITE FEATURES (Tab Switching & Live Execution)
    const featureMap = [
      { kw: ['poetry workbench', 'prosody workbench', 'கவிதை அரங்கம்', 'f1'], tab: 'f1', title: 'AI POETRY WORKBENCH' },
      { kw: ['3d landmarks', 'landmark explorer', '3d நினைவிடங்கள்', 'f2'], tab: 'f2', title: '3D LANDMARKS' },
      { kw: ['1907 press', 'press room', 'india weekly', 'அச்சுக்கூடம்', 'f3'], tab: 'f3', title: '1907 PRESS ROOM' },
      { kw: ['poster generator', 'quote generator', 'daily quote', 'poster', 'f4'], tab: 'f4', title: 'POSTER GENERATOR' },
      { kw: ['voice archive', 'voice wall', 'recitation wall', 'f5'], tab: 'f5', title: 'VOICE ARCHIVE' },
      { kw: ['raga synth', 'carnatic raga', 'raga explorer', 'f6'], tab: 'f6', title: 'RAGA SYNTH' },
      { kw: ['world poetry', 'poetry radar', 'vs tagore', 'f7'], tab: 'f7', title: 'WORLD POETRY RADAR' },
      { kw: ['pudhumai penn matrix', 'pudhumai penn feature', 'f8'], tab: 'f8', title: 'PUDHUMAI PENN' },
      { kw: ['kutti viduthalai', 'kids arena', 'paappa paattu', 'f9'], tab: 'f9', title: 'KUTTI VIDUTHALAI' },
      { kw: ['manuscript magnifier', 'facsimile', 'f10'], tab: 'f10', title: 'MANUSCRIPT MAGNIFIER' },
      { kw: ['handwriting studio', 'ink stroke', 'kaiyezhuthu', 'f11'], tab: 'f11', title: 'HANDWRITING STUDIO' },
      { kw: ['verse oracle', 'wisdom card', 'asareeri', 'f12'], tab: 'f12', title: 'VERSE ORACLE' },
      { kw: ['cid cipher', 'secret press game', 'ulavu koppu', 'f13'], tab: 'f13', title: '1910 CID CIPHER GAME' },
      { kw: ['kuyil binaural', '8d soundscape', 'iyarkai oasai', 'f14'], tab: 'f14', title: 'KUYIL BINAURAL RAGAS' },
      { kw: ['14 lang polyglot', 'polyglot matrix', 'panmozhi', 'f15'], tab: 'f15', title: '14-LANG POLYGLOT' },
      { kw: ['ar 3d memorial', 'ar camera', '3d statue', 'ar hologram', 'f16'], tab: 'f16', title: 'AR 3D MEMORIAL' },
      { kw: ['1907 press simulator', 'lever press', 'broadsheet', 'f17'], tab: 'f17', title: '1907 PRESS SIMULATOR' },
      { kw: ['chhandas analyzer', 'yaappilakkanam', 'prosody parser', 'f18'], tab: 'f18', title: 'CHHANDAS ANALYZER' },
      { kw: ['voice spectrum', 'raga pitch match', 'frequency analyzer', 'f19'], tab: 'f19', title: 'VOICE SPECTRUM' },
      { kw: ['global freedom matrix', 'world revolutions', 'french revolution', 'f20'], tab: 'f20', title: 'GLOBAL FREEDOM MATRIX' },
      { kw: ['vr museum', 'virtual reality', '360 walkthrough', 'f21'], tab: 'f21', title: 'VR MUSEUM 1910' },
      { kw: ['panchaali opera', 'draupadi vow', 'bheema fury', 'f22'], tab: 'f22', title: 'PANCHAALI OPERA' },
      { kw: ['gnanaratham simulator', 'chariot of wisdom', 'dharma lokam', 'f23'], tab: 'f23', title: 'GNANARATHAM SIMULATOR' },
      { kw: ['underground map', 'clandestine map', 'maritime courier', 'f24'], tab: 'f24', title: 'UNDERGROUND MAP' },
      { kw: ['harmonium studio', 'play harmonium', 'swara keyboard', 'f25'], tab: 'f25', title: 'HARMONIUM STUDIO' }
    ];

    for (const feat of featureMap) {
      if (feat.kw.some(k => text.includes(k))) {
        if (window.viduthalaiSuite) {
          window.viduthalaiSuite.switchTab(feat.tab);

          // Execute specific actions dynamically based on feature requested
          if (feat.tab === 'f12' && window.viduthalaiSuite.drawOracleCard) window.viduthalaiSuite.drawOracleCard();
          if (feat.tab === 'f16' && window.viduthalaiSuite.toggleARMode) window.viduthalaiSuite.toggleARMode();
          if (feat.tab === 'f17' && window.viduthalaiSuite.pullPressLever) window.viduthalaiSuite.pullPressLever();
          if (feat.tab === 'f19' && window.viduthalaiSuite.startVoiceSpectrum) window.viduthalaiSuite.startVoiceSpectrum();
          if (feat.tab === 'f21' && window.viduthalaiSuite.launchVRMuseum) window.viduthalaiSuite.launchVRMuseum();
          if (feat.tab === 'f25' && window.viduthalaiSuite.playHarmoniumKey) window.viduthalaiSuite.playHarmoniumKey('Sa');
        }
        return {
          type: 'FEATURE',
          response: `${feat.title} அம்சத்திற்கு உடனடியாக மாற்றுகிறேன்.`
        };
      }
    }

    // 4. CONTROL COMMANDS
    if (text.includes('stop') || text.includes('நிறுத்து') || text.includes('close') || text.includes('மூடு')) {
      return { type: 'CONTROL', action: 'STOP', response: 'சரி, குரல் சேவையை இடைநிறுத்துகிறேன்.' };
    }

    // 5. KNOWLEDGE BASE SEMANTIC SEARCH MATCH
    let bestMatch = null;
    let maxScore = 0;

    for (const item of this.kb) {
      let score = 0;
      for (const kw of item.keywords) {
        const kwLower = kw.toLowerCase();
        if (text.includes(kwLower)) {
          score += kwLower.length > 5 ? 6 : 3;
          if (text === kwLower) score += 10;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && maxScore > 0) {
      const reply = isPureEnglish ? bestMatch.responseEnglish : bestMatch.responseTamil;
      return { type: 'SPEAK', response: reply };
    }

    // 6. INTELLIGENT FALLBACK SYNTHESIZER FOR CUSTOM QUESTION TYPES
    if (text.includes('country') || text.includes('freedom') || text.includes('desam') || text.includes('naadu') || text.includes('contribution')) {
      return {
        type: 'SPEAK',
        response: isPureEnglish ?
          'Bharathiyar contributed immensely to India through freedom anthems like Vande Matharam, fighting British rule via his India newspaper, and championing social equality.' :
          'பாரதியார் "வந்தே மாதரம்", "அச்சமில்லை" போன்ற தேசிய பாடல்கள் மூலமாகவும், "இந்தியா" இதழ் மூலமாகவும் சுதந்திர உணர்ச்சியைத் தூண்டி, சாதி மறுப்பு மற்றும் பெண் விடுதலையை நாட்டிற்கு அளித்தார்.'
      };
    }
    if (text.includes('history') || text.includes('varalaru') || text.includes('story') || text.includes('life')) {
      return {
        type: 'SPEAK',
        response: isPureEnglish ?
          'Subramania Bharathiyar was born in 1882 in Ettayapuram. He led radical freedom journalism, lived 10 years in Pondicherry exile creating immortal poetry, and passed away in 1921.' :
          'பாரதியார் 1882-ல் எட்டயபுரத்தில் பிறந்தார். சென்னை மற்றும் பாண்டிச்சேரியில் சுதந்திரப் போராட்டத்தையும் தமிழ் இலக்கியத்தையும் வளர்த்து, 1921-ல் தமது 38-வது வயதில் மறைந்தார்.'
      };
    }
    if (text.includes('wife') || text.includes('manaivi') || text.includes('family') || text.includes('kudumbam')) {
      return { type: 'SPEAK', response: 'பாரதியாரின் மனைவி செல்லம்மாள். இவர்களுக்கு தங்கம்மாள் மற்றும் சகுந்தலா என்ற இரு மகள்கள் இருந்தனர்.' };
    }
    if (text.includes('born') || text.includes('birth') || text.includes('porandharu') || text.includes('ettayapuram')) {
      return { type: 'SPEAK', response: 'பாரதியார் 1882 டிசம்பர் 11 அன்று எட்டயபுரத்தில் பிறந்தார்.' };
    }
    if (text.includes('death') || text.includes('died') || text.includes('maranam') || text.includes('yaanai') || text.includes('elephant')) {
      return { type: 'SPEAK', response: 'பாரதியார் 1921 செப்டம்பர் 11 அன்று பார்த்தசாரதி கோவில் யானை காயப்படுத்தியதனால் தமது 38-வது வயதில் சென்னையில் மறைந்தார்.' };
    }
    if (text.includes('book') || text.includes('poem') || text.includes('kavithai') || text.includes('works')) {
      return { type: 'SPEAK', response: 'பாரதியாரின் முக்கிய படைப்புகள்: குயில் பாட்டு, கண்ணன் பாட்டு, பாஞ்சாலி சபதம், புதுமைப் பெண், சுதேச கீதங்கள் மற்றும் ஞான ரதம்.' };
    }

    // 7. DEFAULT POLITE WISE GUIDE FALLBACK
    return {
      type: 'SPEAK',
      response: 'மகாகவி பாரதியாரின் பிறப்பு, குடும்பம், கவிதைகள், பாண்டிச்சேரி வரலாறு, பத்திரிகை பணி, அல்லது தளத்தின் 25 அம்சங்கள் குறித்து எது வேண்டுமானாலும் தெளிவோடு கேளுங்கள்.'
    };
  }
}

window.AIKnowledgeService = AIKnowledgeService;
