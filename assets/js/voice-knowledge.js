/**
 * VoiceKnowledge - Knowledge Engine & Intent Router
 * Understands Tamil, English, and Tanglish queries. Maps commands to site routes.
 */
class VoiceKnowledge {
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

    // Pre-indexed Q&A knowledge base
    this.kb = [
      {
        keywords: ['who is', 'yaar', 'யார்', 'biography', 'about bharathi', 'profile'],
        responseTamil: 'மகாகவி சி. சுப்பிரமணிய பாரதியார் (1882–1921) தமிழ்நாட்டின் மாபெரும் புரட்சிக் கவிஞர், பத்திரிகையாளர், இந்திய விடுதலைப் போராட்ட வீரர் மற்றும் சமூக சீர்திருத்தவாதி ஆவார்.',
        responseEnglish: 'Mahakavi C. Subramania Bharati (1882–1921) was a legendary Tamil poet, revolutionary journalist, freedom fighter, and visionary social reformer.'
      },
      {
        keywords: ['women', 'pengal', 'பெண்கள்', 'pudumai penn', 'புதுமைப் பெண்', 'liberation', 'viduthalai'],
        responseTamil: 'பாரதியார் பெண்களின் கல்வி மற்றும் முழுமையான சுதந்திரத்திற்காக உறுதியாகக் குரல் கொடுத்தார். "நிமிர்ந்த நன்னடை நேர்கொண்ட பார்வையும்" கொண்ட புதுமைப் பெண்ணை உலகிற்கு அறிமுகப்படுத்தினார்.',
        responseEnglish: 'Bharati strongly championed women\'s education and absolute sovereignty, introducing the vision of the modern independent woman ("Pudumai Penn").'
      },
      {
        keywords: ['1910', 'pondicherry', 'பாண்டிச்சேரி', 'exile', 'sanctuary', '1908'],
        responseTamil: '1908-1918 காலகட்டத்தில் ஆங்கிலேய அரசின் கைது நடவடிக்கையிலிருந்து தப்ப பாரதியார் பாண்டிச்சேரியில் தலைமறைவு வாழ்க்கை வாழ்ந்தார். அங்கு தான் குயில் பாட்டு மற்றும் பாஞ்சாலி சபதம் போன்ற காவியங்களைப் படைத்தார்.',
        responseEnglish: 'From 1908 to 1918, Bharati lived in exile in Pondicherry, where he wrote iconic masterpieces including Kuyil Pattu and Panchali Sabatham.'
      },
      {
        keywords: ['works', 'poems', 'kavithai', 'கவிதை', 'books', 'hymns', 'achamillai', 'அச்சமில்லை'],
        responseTamil: 'பாரதியாரின் முதன்மை படைப்புகள்: பாஞ்சாலி சபதம், குயில் பாட்டு, கண்ணன் பாட்டு, புதுமைப் பெண் மற்றும் அச்சமில்லை அச்சமில்லை போன்ற தேசியப் பாடல்கள் ஆகும்.',
        responseEnglish: 'Bharati\'s major works include Panchali Sabatham, Kuyil Pattu, Kannan Pattu, Pudumai Penn, and patriotic anthems like Achamillai Achamillai.'
      },
      {
        keywords: ['swadesamitran', 'india', 'newspaper', 'journal', 'பத்திரிகை', 'சக்ரவர்த்தினி'],
        responseTamil: 'பாரதியார் சுதேசிமித்திரன் பத்திரிகையில் உதவி ஆசிரியராகவும், இந்தியா மற்றும் சக்ரவர்த்தினி ஆகிய இதழ்களில் முதன்மை ஆசிரியராகவும் பணியாற்றி விடுதலை உணர்வைத் தூண்டினார்.',
        responseEnglish: 'Bharati served as sub-editor of Swadesamitran and chief editor of India and Chakravarthini magazines, inspiring anti-colonial sentiment.'
      }
    ];
  }

  /** Process user spoken query and return intent/response */
  processQuery(input) {
    const text = input.toLowerCase().trim();

    // 1. Navigation Commands
    if (text.includes('home') || text.includes('முகப்பு') || text.includes('முதல் பக்கம்')) {
      return { type: 'NAVIGATE', target: this.routes.home, response: 'முகப்புப் பக்கத்திற்கு செல்கிறேன்.' };
    }
    if (text.includes('timeline') || text.includes('life') || text.includes('வாழ்க்கை') || text.includes('வரலாறு')) {
      return { type: 'NAVIGATE', target: this.routes.timeline, response: 'வாழ்க்கை வரலாற்றுப் பக்கத்திற்கு செல்கிறேன்.' };
    }
    if (text.includes('poem') || text.includes('works') || text.includes('கவிதை') || text.includes('படைப்புகள்')) {
      return { type: 'NAVIGATE', target: this.routes.works, response: 'பாரதியாரின் கவிதைகள் பக்கத்திற்கு செல்கிறேன்.' };
    }
    if (text.includes('1910') || text.includes('exile') || text.includes('பாண்டிச்சேரி')) {
      return { type: 'NAVIGATE', target: this.routes.sanctum, response: '1910 பாண்டிச்சேரி வரலாற்றுப் பக்கத்திற்கு செல்கிறேன்.' };
    }
    if (text.includes('journey') || text.includes('map') || text.includes('வரைபடம்')) {
      return { type: 'NAVIGATE', target: this.routes.journey, response: 'பயண வரைபட பக்கத்திற்கு செல்கிறேன்.' };
    }
    if (text.includes('ai') || text.includes('search') || text.includes('ஆய்வகம்')) {
      return { type: 'NAVIGATE', target: this.routes.ai, response: 'AI பாரதி மெய்யறிவு ஆய்வகத்திற்கு செல்கிறேன்.' };
    }
    if (text.includes('learn') || text.includes('study') || text.includes('கற்றல்')) {
      return { type: 'NAVIGATE', target: this.routes.learn, response: 'கற்றல் மையப் பக்கத்திற்கு செல்கிறேன்.' };
    }

    // 2. Control Commands
    if (text.includes('stop') || text.includes('நிறுத்து') || text.includes('close')) {
      return { type: 'CONTROL', action: 'STOP', response: 'சரி, நிறுத்துகிறேன்.' };
    }

    // 3. Knowledge Base Match
    for (const item of this.kb) {
      if (item.keywords.some(kw => text.includes(kw))) {
        // Detect language preference (English vs Tamil/Tanglish)
        const isEnglish = /[a-z]/i.test(text) && !text.includes('pathi') && !text.includes('sollu') && !text.includes('yaar');
        const reply = isEnglish ? item.responseEnglish : item.responseTamil;
        return { type: 'SPEAK', response: reply };
      }
    }

    // 4. Default Fallback
    return {
      type: 'SPEAK',
      response: 'வணக்கம்! மகாகவி பாரதியாரின் வாழ்க்கை, கவிதைகள், 1910 பாண்டிச்சேரி காலம் குறித்து எது வேண்டுமானாலும் கேட்கலாம்.'
    };
  }
}

window.VoiceKnowledge = VoiceKnowledge;
