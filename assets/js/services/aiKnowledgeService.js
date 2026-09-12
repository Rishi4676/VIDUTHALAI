/**
 * aiKnowledgeService.js - Ultra-High Precision AI Knowledge & Intent Routing Engine
 * Deep Understanding & Comprehensive Coverage of Mahakavi Subramania Bharathiyar
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

    this.kb = [
      // 1. GREETINGS & INTRO
      {
        id: 'greeting',
        keywords: ['வணக்கம் பாரதி', 'வணக்கம்', 'vanakkam bharathi', 'vanakkam', 'hello bharathi', 'hi bharathi', 'hello', 'hi', 'nandri', 'thanks'],
        responseTamil: 'வணக்கம்! அன்புடன் வரவேற்கிறேன். மகாகவி பாரதியாரின் வாழ்க்கை, கவிதைகள், வரலாறு குறித்து எது வேண்டுமானாலும் கனிவுடன் கேளுங்கள்.',
        responseEnglish: 'Greetings! A very warm welcome. Please ask me anything about Mahakavi Bharathiyar\'s life, poetry, and history.'
      },

      // 2. GENERAL ABOUT BHARATHIYAR & COUNTRY CONTRIBUTION
      {
        id: 'about_bharathi',
        keywords: ['பாரதியாரைப் பற்றி சொல்லுங்கள்', 'பாரதியார் பற்றி சொல்லுங்க', 'about bharathiyar', 'about bharathi', 'tell me about bharathiyar', 'who is bharathi', 'bharathiyar yaar', 'யார் பாரதியார்', 'bharathiyar history', 'history of bharathiyar', 'வாழ்க்கை வரலாறு'],
        responseTamil: 'மகாகவி சுப்பிரமணிய பாரதியார் (1882–1921) இந்தியாவின் விடுதலைப் போராட்ட கவிஞர், பத்திரிகையாளர் மற்றும் சமூக புரட்சியாளர் ஆவார். 1882-ல் எட்டயபுரத்தில் பிறந்து, சுதந்திர உணர்ச்சியைத் தூண்டும் பாடல்கள், "இந்தியா" இதழ் மூலமாக தேசபக்தியையும், சாதி மறுப்பு மற்றும் பெண் விடுதலையையும் நாட்டிற்கு அளித்தார்.',
        responseEnglish: 'Mahakavi Subramania Bharathiyar (1882–1921) was India\'s legendary freedom poet, journalist, and social revolutionary who ignited patriotism through fiery anthems and championed equality.'
      },
      {
        id: 'country_contribution',
        keywords: ['what he done in the comtry', 'what he done in the country', 'contribution to country', 'country contribution', 'what he did for country', 'for india', 'சுதந்திரப் போராட்டம்', 'நாட்டிற்கு என்ன செய்தார்', 'தேசப்பணி', 'freedom fight', 'contribution'],
        responseTamil: 'பாரதியார் நாட்டிற்கு ஆற்றிய சேவைகள் மகத்தானவை: 1) "வந்தே மாதரம்", "அச்சமில்லை" போன்ற உணர்ச்சிமிக்க தேசிய பாடல்கள் மூலம் இந்திய விடுதலை உணர்ச்சியைத் தூண்டினார்; 2) "இந்தியா" இதழ் மூலம் பிரிட்டிஷ் அடக்குமுறையை எதிர்த்தார்; 3) தீண்டாமை மற்றும் சாதி வேறுபாடுகளை எதிர்த்து சமூக சமத்துவத்தை ஏற்படுத்தினார்; 4) பெண்களின் கல்வி மற்றும் உரிமைகளுக்காகக் குரல் கொடுத்தார்.',
        responseEnglish: 'Bharathiyar\'s contributions to India: 1) Awakened national freedom consciousness through fiery anthems like Vande Matharam & Achamillai; 2) Fought British colonialism via radical journalism in India weekly; 3) Eradicated untouchability & caste barriers; 4) Championed women\'s education and equality.'
      },

      // 3. BIRTH & ORIGINS
      {
        id: 'birth',
        keywords: ['birth', 'born', 'birthday', 'பிறந்த நாள்', 'பிறந்த தேதி', 'பிறந்தார்', 'எப்பொழுது பிறந்தார்', 'எட்டயபுரம்', 'ettayapuram', 'porandharu', 'porandha idam'],
        responseTamil: 'பாரதியார் 1882 டிசம்பர் 11 அன்று தூத்துக்குடி மாவட்டத்தில் உள்ள எட்டயபுரத்தில் பிறந்தார். பெற்றோர் சின்னச்சாமி ஐயர் மற்றும் இலட்சுமி அம்மாள்.',
        responseEnglish: 'Bharathiyar was born on December 11, 1882, in Ettayapuram, Tamil Nadu, to Chinnaswami Iyer and Lakshmi Ammal.'
      },

      // 4. PARENTS & FAMILY
      {
        id: 'parents',
        keywords: ['parents', 'father', 'mother', 'பெற்றோர்', 'தந்தை', 'தாய்', 'அம்மா', 'அப்பா', 'chinnaswami', 'lakshmi'],
        responseTamil: 'பாரதியாரின் தந்தை சின்னச்சாமி ஐயர், தாயார் இலட்சுமி அம்மாள். தமது ஐந்தாம் வயதிலேயே தாயாரை இழந்து தந்தையின் பராமரிப்பில் வளர்ந்தார்.',
        responseEnglish: 'Bharathiyar\'s father was Chinnaswami Iyer and his mother was Lakshmi Ammal. He lost his mother at age five.'
      },

      // 5. WIFE & CHILDREN
      {
        id: 'wife_family',
        keywords: ['wife', 'chellamma', 'manaivi', 'wife name', 'children', 'magal', 'மகள்கள்', 'செல்லம்மாள்', 'குடும்பம்', 'kids', 'daughters', 'thangammal', 'shakuntala'],
        responseTamil: 'பாரதியாரின் மனைவி செல்லம்மாள். இவர்களுக்கு தங்கம்மாள் மற்றும் சகுந்தலா என்ற இரண்டு மகள்கள் இருந்தனர்.',
        responseEnglish: 'Bharathiyar\'s wife was Chellamma. They had two daughters named Thangammal and Shakuntala.'
      },

      // 6. TITLE BHARATHI
      {
        id: 'title_bharathi',
        keywords: ['title', 'pattam', 'why named bharathi', 'bharathi pattam', '11 age', 'பட்டப்பெயர்', 'பாரதி பட்டம்', 'saraswathi'],
        responseTamil: '1893-ல் தமது 11-ஆம் வயதில், எட்டயபுர சமஸ்தான அரசவையில் புலவர்களை வியக்க வைக்கும் வகையில் கவிபாடியதால் "பாரதி" (கலைமகள்) என்ற பட்டம் வழங்கப்பட்டது.',
        responseEnglish: 'In 1893 at age 11, he was conferred the title "Bharathi" (Goddess of Learning) by the Ettayapuram royal court for his poetic genius.'
      },

      // 7. KASHI / VARANASI STAY
      {
        id: 'kashi_stay',
        keywords: ['kashi', 'banaras', 'varanasi', 'காசி', 'வாரணாசி', 'head dress', 'turban', 'mustache', 'மீசை', 'தலைப்பாகை'],
        responseTamil: '1898 முதல் 1902 வரை காசியில் வாழ்ந்த பாரதியார் சமஸ்கிருதம், இந்தி கற்றார். அங்குதான் தமது புகழ்பெற்ற முறுக்கு மீசையையும் தலைப்பாகையையும் அணியத் தொடங்கினார்.',
        responseEnglish: 'During his stay in Kashi (1898–1902), Bharathiyar learned Sanskrit and Hindi, and adopted his iconic turban and mustache style.'
      },

      // 8. SISTER NIVEDITA (SPIRITUAL GURU)
      {
        id: 'guru_nivedita',
        keywords: ['nivedita', 'guru', 'spiritual guru', 'sister nivedita', 'சகோதரி நிவேதிதா', 'ஞானகுரு', 'குரு யார்'],
        responseTamil: '1906-ல் விவேகானந்தரின் சீடரான சகோதரி நிவேதிதாவைச் சந்தித்த பாரதியார், அவரைத் தமது ஞானகுருவாக ஏற்றுக்கொண்டு பெண் விடுதலையின் முக்கியத்துவத்தை உணர்ந்தார்.',
        responseEnglish: 'In 1906, Bharathiyar met Sister Nivedita (disciple of Swami Vivekananda), accepted her as his spiritual Guru, and embraced gender equality.'
      },

      // 9. JOURNALISM & NEWSPAPERS
      {
        id: 'journalism',
        keywords: ['newspaper', 'journalism', 'india', 'swadesamitran', 'பத்திரிகை', 'இதழ்', 'இந்தியா', 'சுதேசமித்திரன்', 'vijaya', 'red paper'],
        responseTamil: 'பாரதியார் "சுதேசமித்திரன்" நாளிதழிலும், பிரிட்டிஷாரால் தடைசெய்யப்பட்டு சிவப்பு தாளில் அச்சிடப்பட்ட "இந்தியா" வார இதழிலும் ஆசிரியராகப் பணியாற்றி விடுதலை உணர்ச்சியை மூட்டினார்.',
        responseEnglish: 'Bharathiyar edited Swadesamitran and the radical weekly "India" (printed on red paper), driving freedom awareness across India.'
      },

      // 10. PONDICHERRY EXILE
      {
        id: 'pondicherry_exile',
        keywords: ['pondicherry', '1908', '1910', 'exile', 'sanctuary', 'பாண்டிச்சேரி', 'பிரெஞ்சு', 'ஆண்டு'],
        responseTamil: '1908 முதல் 1918 வரை 10 ஆண்டுகள் பிரிட்டிஷ் கைது நடவடிக்கையிலிருந்து தப்ப பாண்டிச்சேரியில் வாழ்ந்தார். அங்குதான் குயில் பாட்டு, கண்ணன் பாட்டு, பாஞ்சாலி சபதம் படைத்தார்.',
        responseEnglish: 'From 1908 to 1918, Bharathiyar lived in exile in French Pondicherry, where he wrote his greatest literary cantos.'
      },

      // 11. DEATH & ELEPHANT INCIDENT
      {
        id: 'death_details',
        keywords: ['death', 'died', 'passed away', 'மறைந்தார்', 'மறைந்த நாள்', 'இறப்பு', 'சென்னையில்', 'elephant', 'triplicane', 'parthasarathy', 'யானை', 'maranam', 'bayam'],
        responseTamil: '1921-ல் திருவல்லிக்கேணி பார்த்தசாரதி கோவில் யானை தாக்கியதில் உடலளவில் நலிவுற்று, 1921 செப்டம்பர் 11 அன்று தமது 38-வது வயதில் சென்னையில் மறைந்தார்.',
        responseEnglish: 'Bharathiyar passed away on September 11, 1921, in Chennai at age 38, following injuries sustained from the Triplicane Parthasarathy temple elephant.'
      },

      // 12. KUYIL PATTU
      {
        id: 'kuyil_pattu',
        keywords: ['kuyil pattu', 'குயில் பாட்டு', 'cuckoo', 'kadhal kadhal'],
        responseTamil: 'குயில் பாட்டு 1912-ல் இயற்றப்பட்ட கற்பனை காதல் காவியம். "காதல் காதல் காதல்; காதல் போயிற் காதல் போயிற் சாதல் சாதல் சாதல்!" என்பது இதன் அமர வரி.',
        responseEnglish: 'Kuyil Pattu (1912) is a romantic mystical masterpiece containing the immortal line: "Love, love, love; If love perisheth, then death!"'
      },

      // 13. KANNAN PATTU
      {
        id: 'kannan_pattu',
        keywords: ['kannan pattu', 'கண்ணன் பாட்டு', 'suttum vizhi', 'kannamma'],
        responseTamil: 'கண்ணன் பாட்டு 1917-ல் இயற்றப்பட்ட 23 பக்திப் பாடல்களின் தொகுப்பு. கண்ணனைத் தோழனாகவும், சேவகனாகவும், காதலனாகவும் பாவித்து எழுதியது.',
        responseEnglish: 'Kannan Pattu (1917) comprises 23 hymns depicting Lord Krishna as a friend, servant, mother, and beloved.'
      },

      // 14. PANCHALI SABATHAM
      {
        id: 'panchali_sabatham',
        keywords: ['panchali sabatham', 'பாஞ்சாலி சபதம்', 'draupadi', 'mahabharata'],
        responseTamil: 'பாஞ்சாலி சபதம் என்பது திரௌபதியின் சபதத்தைக் கொண்டு பாரத நாட்டின் அடிமைத்தனத்தையும் விடுதலைப் போராட்டத்தையும் உருவகப்படுத்திய காவியம்.',
        responseEnglish: 'Panchali Sabatham uses Draupadi\'s vow from Mahabharata as an allegory for India\'s struggle against colonial servitude.'
      },

      // 15. PUDHUMAI PENN & WOMEN LIBERATION
      {
        id: 'pudhumai_penn',
        keywords: ['pudhumai penn', 'புதுமைப் பெண்', 'women', 'pengal', 'nimirndha nannadai', 'liberation', 'pen viduthalai'],
        responseTamil: 'பாரதியார் "நிமிர்ந்த நன்னடை நேர்கொண்ட பார்வையும்" கொண்ட புதுமைப் பெண்ணைப் படைத்து பெண்களின் கல்வி மற்றும் உரிமைகளுக்காகக் குரல் கொடுத்தார்.',
        responseEnglish: 'Bharathiyar championed women\'s liberation and education, immortalizing the fearless modern woman in Pudhumai Penn.'
      },

      // 16. ACHAMILLAI ACHAMILLAI
      {
        id: 'achamillai',
        keywords: ['achamillai', 'அச்சமில்லை', 'fearless', 'fear'],
        responseTamil: 'அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே! உச்சிமீது வானிடிந்து வீழுகின்ற போதினும் அச்சமில்லை அச்சமென்பதில்லையே!',
        responseEnglish: 'Achamillai Achamillai — We fear not, even if the skies collapse upon our heads!'
      },

      // 17. SENTHAMIZH NAADENNUM
      {
        id: 'senthamizh_naadennum',
        keywords: ['senthamizh', 'செந்தமிழ் நாடென்னும்', 'tamil pride', 'praise tamil'],
        responseTamil: 'செந்தமிழ் நாடென்னும் போதினிலே — இன்பத் தேன்வந்து பாயுது காதினிலே! தமிழின் பெருமையைப் போற்றும் அமரப் பாடல்.',
        responseEnglish: 'Senthamizh Naadennum Podhinile — When the word Senthamizh Land is uttered, honeyed sweetness flows into our ears!'
      },

      // 18. CHINNANCHIRU KILIYE
      {
        id: 'chinnanchiru_kiliye',
        keywords: ['chinnanchiru kiliye', 'சின்னஞ்சிறு கிளியே', 'child song', 'kannamma child'],
        responseTamil: 'சின்னஞ்சிறு கிளியே கண்ணம்மா — செல்வக் களஞ்சியமே! குழந்தைப் பாசத்தையும் தூய்மையான அன்பையும் பொழியும் பாரதியாரின் பாடல்.',
        responseEnglish: 'Chinnanchiru Kiliye Kannamma — A tender devotional classic expressing divine love for a child.'
      },

      // 19. VANDE MATHARAM
      {
        id: 'vande_matharam',
        keywords: ['vande matharam', 'வந்தே மாதரம்', 'national salute'],
        responseTamil: 'வந்தே மாதரம் என்போம் — எங்கள் மாநிலத் தாயை வணங்குதும் என்போம்! பாரதியாரின் வீரம் செறிந்த தேசிய வணக்கம்.',
        responseEnglish: 'Vande Matharam We Chant — Bharathiyar\'s fiery patriotic salute to the Motherland.'
      },

      // 20. AADUVOME PALLU
      {
        id: 'aaduvome_pallu',
        keywords: ['aaduvome pallu', 'ஆடுவோமே பள்ளு', 'freedom celebration'],
        responseTamil: 'ஆடுவோமே பள்ளு பாடுவோமே — ஆனந்த சுதந்திரம் அடைந்துவிட்டோமென்று! இந்தியா சுதந்திரம் அடைவதற்கு முன்பே சுதந்திரத்தைக் கொண்டாடிய தீர்க்கதரிசனப் பாடல்.',
        responseEnglish: 'Aaduvome Pallu Paaduvome — A prophetic song celebrating India\'s independence years before it was achieved.'
      },

      // 21. GNANA RATHAM
      {
        id: 'gnana_ratham',
        keywords: ['gnana ratham', 'ஞான ரதம்', 'prose', 'chariot'],
        responseTamil: 'ஞான ரதம் (1906) தமிழின் முதல் கற்பனை உரைநடை நூல். மனதை சாரதியாகக் கொண்டு தத்துவ உலகங்களுக்குச் செல்லும் பயணம்.',
        responseEnglish: 'Gnana Ratham (1906) is the pioneer Tamil speculative prose work detailing a cosmic journey of the mind.'
      },

      // 22. LANGUAGES KNOWN
      {
        id: 'languages_known',
        keywords: ['languages', 'mozhigal', 'yamarindha mozhigalile', 'எத்தனை மொழி', 'மொழிகள்'],
        responseTamil: 'பாரதியாருக்கு தமிழ், சமஸ்கிருதம், இந்தி, தெலுங்கு, ஆங்கிலம், பிரெஞ்சு உட்பட பல மொழிகள் தெரியும். "யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்" என்றார்.',
        responseEnglish: 'Bharathiyar knew Tamil, Sanskrit, Hindi, Telugu, English, and French. He proclaimed Tamil as the sweetest of all languages.'
      },

      // 23. SOCIAL EQUALITY & CASTE REJECTION
      {
        id: 'caste_equality',
        keywords: ['caste', 'jaathi', 'samathuvam', 'dalit', 'kanakalingam', 'poonool', 'சாதி', 'சமத்துவம்'],
        responseTamil: 'பாரதியார் சாதி முறையை எதிர்த்து, "சாதி இரண்டொழிய வேறில்லை" என்றார். கனகலிங்கம் என்ற தலித் இளைஞருக்கு பூணூல் அணிவித்து புரட்சி செய்தார்.',
        responseEnglish: 'Bharathiyar rejected the caste system, declaring only two castes (virtuous & unvirtuous), and performed revolutionary social integration.'
      },

      // 24. MAHAKAVI TITLE GIVER
      {
        id: 'mahakavi_title',
        keywords: ['mahakavi', 'why mahakavi', 'desiya kavi', 'தேசியக் கவி', 'மகாகவி பட்டம்'],
        responseTamil: 'வ.ராமசாமி ஐயங்கார் (வ.ரா) பாரதியாரை "மகாகவி" என்று முதன்முதலில் போற்றினார். பாரதியார் தமிழ்நாட்டின் தேசியக் கவிஞர் ஆவார்.',
        responseEnglish: 'V. Ramaswamy Iyengar (Va. Ra) first honored Bharathiyar as "Mahakavi" (Great Poet).'
      },

      // 25. FAMOUS QUOTES
      {
        id: 'famous_quotes',
        keywords: ['quotes', 'lines', 'varigal', 'famous lines', 'பொன்மொழிகள்', 'வரிகள்'],
        responseTamil: '"தேடிச் சோறு நிதம் தின்று", "சென்றிடுவீர் எட்டுத் திக்கும்", "பட்டங்கள் ஆள்வதும் சட்டங்கள் செய்வதும் பாரினில் பெண்கள் நடத்த வந்தோம்" ஆகியவை பாரதியின் புகழ்பெற்ற வரிகள்.',
        responseEnglish: 'Key quotes: "Seek knowledge across 8 directions", "Women shall rule and make laws", and "We fear not death".'
      }
    ];
  }

  processQuery(input) {
    if (!input || !input.trim()) {
      return {
        type: 'SPEAK',
        response: 'வணக்கம்! அன்புடன் வரவேற்கிறேன். மகாகவி பாரதியாரின் வாழ்க்கை, கவிதைகள், வரலாறு குறித்து எது வேண்டுமானாலும் கனிவுடன் கேளுங்கள்.'
      };
    }

    const rawText = input.trim();
    const text = rawText.toLowerCase();
    const hasTamilScript = /[\u0B80-\u0BFF]/.test(rawText);

    // 1. Navigation Intent Routing
    if (text.includes('go to home') || text.includes('open home') || text.includes('முகப்பு')) {
      return { type: 'NAVIGATE', target: this.routes.home, response: 'முகப்புப் பக்கத்திற்கு அன்புடன் வழிகாட்டுகிறேன்.' };
    }
    if (text.includes('go to timeline') || text.includes('open timeline') || text.includes('வாழ்க்கை')) {
      return { type: 'NAVIGATE', target: this.routes.timeline, response: 'பாரதியாரின் வாழ்க்கை வரலாற்றுப் பக்கத்திற்கு வழிகாட்டுகிறேன்.' };
    }
    if (text.includes('go to poems') || text.includes('open poems') || text.includes('கவிதைகள்') || text.includes('works')) {
      return { type: 'NAVIGATE', target: this.routes.works, response: 'பாரதியாரின் கவிதைகள் பக்கத்திற்கு வழிகாட்டுகிறேன்.' };
    }

    // 2. Control Intent
    if (text.includes('stop') || text.includes('நிறுத்து') || text.includes('close') || text.includes('மூடு')) {
      return { type: 'CONTROL', action: 'STOP', response: 'சரி, நிறுத்துகிறேன்.' };
    }

    // 3. High Precision N-gram & Tanglish Semantic Search Engine
    const isPureEnglish = /[a-z]/i.test(text) && !hasTamilScript && 
      !text.includes('pathi') && !text.includes('sollu') && !text.includes('yaar') && 
      !text.includes('enna') && !text.includes('avanga') && !text.includes('unakku');

    let bestMatch = null;
    let maxMatchCount = 0;

    for (const item of this.kb) {
      let score = 0;
      for (const kw of item.keywords) {
        const kwLower = kw.toLowerCase();
        if (text.includes(kwLower)) {
          score += kwLower.length > 5 ? 6 : 3;
          if (text === kwLower) score += 10; // Exact match bonus
        }
      }
      if (score > maxMatchCount) {
        maxMatchCount = score;
        bestMatch = item;
      }
    }

    if (bestMatch && maxMatchCount > 0) {
      const reply = isPureEnglish ? bestMatch.responseEnglish : bestMatch.responseTamil;
      return { type: 'SPEAK', response: reply };
    }

    // 4. Intelligent Intent-Based Fallback Synthesizer
    // Handles custom or complex questions about Bharathiyar intelligently!
    if (text.includes('country') || text.includes('comtry') || text.includes('freedom') || text.includes('desam') || text.includes('naadu') || text.includes('contribution')) {
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
    if (text.includes('book') || text.includes('poem') || text.includes('kavithai') || text.includes('works') || text.includes('padaippugal')) {
      return { type: 'SPEAK', response: 'பாரதியாரின் முக்கிய படைப்புகள்: குயில் பாட்டு, கண்ணன் பாட்டு, பாஞ்சாலி சபதம், புதுமைப் பெண், சுதேச கீதங்கள் மற்றும் ஞான ரதம்.' };
    }
    if (text.includes('guru') || text.includes('nivedita')) {
      return { type: 'SPEAK', response: 'பாரதியாரின் ஞானகுரு சகோதரி நிவேதிதா ஆவார். அவரிடம் இருந்து தான் பெண் விடுதலை மற்றும் சமத்துவ உணர்வைப் பெற்றார்.' };
    }

    // 5. General Wise Tamil Guide Fallback
    return {
      type: 'SPEAK',
      response: 'மகாகவி பாரதியாரின் பிறப்பு, குடும்பம், கவிதைகள், பாண்டிச்சேரி வரலாறு, பத்திரிகை பணி, அல்லது தத்துவம் குறித்து எது வேண்டுமானாலும் தெளிவோடு கேளுங்கள்.'
    };
  }
}

window.AIKnowledgeService = AIKnowledgeService;
