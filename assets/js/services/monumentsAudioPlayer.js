/**
 * monumentsAudioPlayer.js - Real-Time Real Song Audio Player & 3-Page Monuments Grid Engine
 * Mahakavi Subramania Bharathiyar Digital Archive
 */

window.MonumentsData = [
  // --- PAGE 1: MASTERWORKS & ANTHEMS (1-6) ---
  {
    page: 1,
    id: 'kuyil-pattu',
    titleTamil: 'குயில் பாட்டு',
    titleEnglish: 'Kuyil Pattu — Song of the Cuckoo',
    folio: '#KP-09',
    yearTag: '1912 • PONDICHERRY',
    badgeTamil: 'காதல் காவியம் • 9 அத்தியாயங்கள்',
    badgeEnglish: 'ROMANTIC MYSTICAL ALLEGORY',
    quoteTamil: '“காதல் காதல் காதல்; காதல் போயிற் காதல் போயிற் சாதல் சாதல் சாதல்!”',
    quoteEnglish: '“Love, love, love; If love perisheth, then death, death, death!”',
    raga: 'Raga Karaharapriya',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASCY3Jo79BHlGqmNfGNETB4SwUdVuT1DSahHnPVCXVGCJL9EJV6WEtCnuWCUerfrrf1Pdj7rj8UWTDGDzdp7K5XNkW-Fe_skzq9tv5NlqwAKA64roZgTpe1F6ztEKsUBSR1dYe2qoiUhmk4CiLkawfOGwNcdZkNKkelbXK1F-0k1VeXmRaJXETH2f1ktnIkfCXjcSvd9esuiQalV_RiHiKJUNKe1qqrBEm30I7q-0xlRB_sHewmA6Q',
    accentColor: 'primary',
    notes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
  },
  {
    page: 1,
    id: 'kannan-pattu',
    titleTamil: 'கண்ணன் பாட்டு',
    titleEnglish: 'Kannan Pattu — Krishna as Friend, Mother & Servant',
    folio: '#KN-23',
    yearTag: '1917 • 23 HYMNS',
    badgeTamil: 'தெய்வீகக் காதல் • பக்தி அமுது',
    badgeEnglish: 'RADICAL DEVOTIONAL POETRY',
    quoteTamil: '“சுட்டும் விழிச் சுடர்தான் கண்ணம்மா — சூரிய சந்திரரோ?<br/>வட்டக் கரிய விழி கண்ணம்மா — நள்ளிருள் சீரோ?”',
    quoteEnglish: '“Thy piercing radiant gaze, Kannamma — Is it the Sun and Moon?”',
    raga: 'Raga Kapi',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDOFPY_aAf1NgdIRk4ks_SyPizoytNMw3ochSc_ZqvAEPZdr0hxL5Ld7TEeS244jc34gR57nRc9nqAfdfEBnuC_nUXtIC-YZrTMxr2uVJm6wRwQCXQPINRC_H5QBNSZXfOX5nrr-Y2bPoXDKAWVX58W52zIaimLqX-yfODKkYNBxvw6k3ilx5LkT27b2Ij8nJRRreNbFqJq9RY5miuzXItkY2VzPRCwU0yy-pWGB4tiVfLRXGekD2C',
    accentColor: 'secondary',
    notes: [293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
  },
  {
    page: 1,
    id: 'pudhumai-penn',
    titleTamil: 'புதுமைப் பெண்',
    titleEnglish: 'Pudhumai Penn — Awakening of Vanguard Women',
    folio: '#PP-01',
    yearTag: '1910 • MANIFESTO',
    badgeTamil: 'பெண்ணியம் • சமத்துவம்',
    badgeEnglish: 'REVOLUTIONARY FEMINISM',
    quoteTamil: '“நிமிர்ந்த நન્નடை நேர்கொண்ட பார்வையும்,<br/>நிலத்தில் யார்க்கும் அஞ்சாத நெறிகளும்!”',
    quoteEnglish: '“An upright gait, an unswerving direct gaze, bowing to no earthly power.”',
    raga: 'Raga Nattai',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsi4AqxWmYi1Ur0H1tSR5FvZRtJl3qg5ttv3ZOwlxhxWwXqH4kosbbNBmgI-0ck7te_4MnFGNwDYbwB_qKOPugWBSXieEGof4AyB5sAuCNuqQJHpI3dfVtYU4Tz0-EfOT9iqO6EzI1UTkLDe04jlJtEkDtQDhOFFZlARf_c3iyhwLwlT-6DgPatdVS9PBxsmr6J1d091zFcF1usEymBTfNq3oSVrY347Fur4MN6ei_0XfncZ3vQhIY',
    accentColor: 'tertiary',
    notes: [261.63, 311.13, 349.23, 392.00, 466.16, 523.25]
  },
  {
    page: 1,
    id: 'swadesha-geethangal',
    titleTamil: 'சுதேச கீதங்கள்',
    titleEnglish: 'Swadesha Geethangal — Anthems of Freedom',
    folio: '#SG-08',
    yearTag: '1908 • CHENNAI',
    badgeTamil: 'சுதந்திரப் முரசு • புரட்சி',
    badgeEnglish: 'BANNED ANTHEM OF DEFIANCE',
    quoteTamil: '“என்று தணியும் இந்த சுதந்திர தாகம்?<br/>என்று மடியும் எங்கள் அடிமையின் மோகம்?”',
    quoteEnglish: '“When will this raging thirst for freedom be quenched?”',
    raga: 'Raga Bilahari',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCktqmIi_bz20nZBCboBkHGWrTJl7LompgoR01YdrVqVBe99C0nj_1ducprFB459eVmW3CyxQ2otDVnTVz0EbLm9th7Pk7ogOk8l7tfEiu2-ov3wov4mW1f5COcDhF-ZwMJeftu0ZFe1FldHaQslhy864VO4F3W3R-t9t9YLm5BCv01v6VUJZ4T0vDlpM2XxSIhl1w39hNK0AzouacyIFUs2YzXl7it4Gh2bcpt4K2ES2nlZqnq9skU',
    accentColor: 'secondary',
    notes: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]
  },
  {
    page: 1,
    id: 'achamillai',
    titleTamil: 'அச்சமில்லை அச்சமில்லை',
    titleEnglish: 'Achamillai Achamillai — Fearless War Cry',
    folio: '#AM-01',
    yearTag: '1914 • WAR CRY',
    badgeTamil: 'வீர முழக்கம் • அச்சமின்மை',
    badgeEnglish: 'FEARLESS IMMORTAL CHANT',
    quoteTamil: '“அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே!<br/>உச்சிமீது வானிடிந்து வீழுகின்ற போதினும்!”',
    quoteEnglish: '“We fear not, we fear not, even if the skies collapse upon our heads!”',
    raga: 'Raga Gambhiranattai',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxmlUhHTaio5Pogc1fWUFbl7xeowmCR3Wtnt4Q5Kf_THQQkFRILxoP4GSrvWfS0XyVSp1fLq2F8hNHo0hQMPlARhD8Ye1OY0Za-6dI1K1LWK9RXW3cazXjB32oOqtDYb3UyHK98B8ZMu6ZY0Hi8zfuS2DtAnneDEA5gduzOMcuI4K7bl2zRiVp7j9iOEllzk_MgUwXQZjBm9caaDKgZW_Em33liEYPn301L5kEj-VmZCJ9_OkSSzBG',
    accentColor: 'primary',
    notes: [261.63, 329.63, 349.23, 392.00, 493.88, 523.25]
  },
  {
    page: 1,
    id: 'bharathi-66',
    titleTamil: 'பாரதி அறுபத்தாறு',
    titleEnglish: 'Bharathi 66 — Treatises on Invincibility',
    folio: '#BA-66',
    yearTag: '1919 • PHILOSOPHIC',
    badgeTamil: 'அத்வைத தத்துவம் • ஆன்மீகம்',
    badgeEnglish: 'VEDANTIC ADVAITA TREATISE',
    quoteTamil: '“காக்கை சிறகினிலே நந்தலாலா — நின்றன்<br/>கரிய நிறம் தோன்றுதையே நந்தலாலா!”',
    quoteEnglish: '“In the raven\'s ebony wing, O Nandalala — Thy sacred black radiance shines through!”',
    raga: 'Raga Brindavani',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Gjiq7gvgTWYxnHyhw3Kq1OkVSd0MTP0OYn6idcGkJ9oKgS-FA_Zim4kosdfT8Q-4rco_4--1Dz32isN05h0LHkNZm02xBUVdnZbkEeD552HiCO5M-AQKSbtPaHqfNfDEYwJyqTJhuneU5tjhq3xKxOM0M3Z3UeTmCyS7g1Jd4LBcU2A3xHgMp3KwhcOnkikGeWSjn0ujqFnx8No7fjpXAyb7eJID2DLFqC_EOP7iK5VWkGrvviYl',
    accentColor: 'tertiary',
    notes: [293.66, 349.23, 392.00, 440.00, 523.25]
  },

  // --- PAGE 2: REVOLUTIONARY & PATRIOTIC SONGS (7-12) ---
  {
    page: 2,
    id: 'vande-matharam',
    titleTamil: 'வந்தே மாதரம்',
    titleEnglish: 'Vande Matharam — Sovereign Motherland Salute',
    folio: '#VM-02',
    yearTag: '1907 • PATRIOTIC',
    badgeTamil: 'தேசிய வணக்கம் • தாய்ப்பாசம்',
    badgeEnglish: 'SOVEREIGN NATIONAL SALUTE',
    quoteTamil: '“வந்தே மாதரம் என்போம் — எங்கள்<br/>மாநிலத் தாயை வணங்குதும் என்போம்!”',
    quoteEnglish: '“Vande Matharam we chant — We bow with reverence to our Motherland!”',
    raga: 'Raga Desh',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCktqmIi_bz20nZBCboBkHGWrTJl7LompgoR01YdrVqVBe99C0nj_1ducprFB459eVmW3CyxQ2otDVnTVz0EbLm9th7Pk7ogOk8l7tfEiu2-ov3wov4mW1f5COcDhF-ZwMJeftu0ZFe1FldHaQslhy864VO4F3W3R-t9t9YLm5BCv01v6VUJZ4T0vDlpM2XxSIhl1w39hNK0AzouacyIFUs2YzXl7it4Gh2bcpt4K2ES2nlZqnq9skU',
    accentColor: 'primary',
    notes: [261.63, 293.66, 349.23, 392.00, 493.88, 523.25]
  },
  {
    page: 2,
    id: 'senthamizh-naadennum',
    titleTamil: 'செந்தமிழ் நாடென்னும் போதினிலே',
    titleEnglish: 'Senthamizh Naadennum — Praise of Tamil Heritage',
    folio: '#ST-05',
    yearTag: '1910 • ANTHEM',
    badgeTamil: 'தமிழ்வாழ்த்து • தேன்மொழி',
    badgeEnglish: 'GLORY OF TAMIL LANGUAGE',
    quoteTamil: '“செந்தமிழ் நாடென்னும் போதினிலே — இன்பத்<br/>தேன்வந்து பாயுது காதினிலே!”',
    quoteEnglish: '“When the word Senthamizh Land is uttered, honeyed sweetness flows into our ears!”',
    raga: 'Raga Mohanam',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASCY3Jo79BHlGqmNfGNETB4SwUdVuT1DSahHnPVCXVGCJL9EJV6WEtCnuWCUerfrrf1Pdj7rj8UWTDGDzdp7K5XNkW-Fe_skzq9tv5NlqwAKA64roZgTpe1F6ztEKsUBSR1dYe2qoiUhmk4CiLkawfOGwNcdZkNKkelbXK1F-0k1VeXmRaJXETH2f1ktnIkfCXjcSvd9esuiQalV_RiHiKJUNKe1qqrBEm30I7q-0xlRB_sHewmA6Q',
    accentColor: 'secondary',
    notes: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]
  },
  {
    page: 2,
    id: 'aaduvome-pallu',
    titleTamil: 'ஆடுவோமே பள்ளு பாடுவோமே',
    titleEnglish: 'Aaduvome Pallu Paaduvome — Celebration of Freedom',
    folio: '#AP-12',
    yearTag: '1918 • JOY OF FREEDOM',
    badgeTamil: 'சுதந்திரக் கொண்டாட்டம்',
    badgeEnglish: 'PROPHECY OF INDEPENDENCE',
    quoteTamil: '“ஆடுவோமே பள்ளு பாடுவோமே — ஆனந்த<br/>சுதந்திரம் அடைந்துவிட்டோமென்று!”',
    quoteEnglish: '“Let us dance, let us sing in joy — For we have attained glorious freedom!”',
    raga: 'Raga Reethigowla',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDOFPY_aAf1NgdIRk4ks_SyPizoytNMw3ochSc_ZqvAEPZdr0hxL5Ld7TEeS244jc34gR57nRc9nqAfdfEBnuC_nUXtIC-YZrTMxr2uVJm6wRwQCXQPINRC_H5QBNSZXfOX5nrr-Y2bPoXDKAWVX58W52zIaimLqX-yfODKkYNBxvw6k3ilx5LkT27b2Ij8nJRRreNbFqJq9RY5miuzXItkY2VzPRCwU0yy-pWGB4tiVfLRXGekD2C',
    accentColor: 'tertiary',
    notes: [261.63, 311.13, 349.23, 392.00, 466.16, 523.25]
  },
  {
    page: 2,
    id: 'thaayin-manikkodi',
    titleTamil: 'தாயின் மணிக்கொடி',
    titleEnglish: 'Thaayin Manikkodi — Sacred National Banner',
    folio: '#TM-04',
    yearTag: '1909 • PONDICHERRY',
    badgeTamil: 'கொடி வணக்கம் • தேசிய வீரம்',
    badgeEnglish: 'SACRED BANNER OF LIBERTY',
    quoteTamil: '“தாயின் மணிக்கொடி பாரீர் — அதைத்<br/>தாழ்ந்து பணிந்து புகழ்ந்திட வாரீர்!”',
    quoteEnglish: '“Behold the sacred banner of our Mother — Bow low and sing her glory!”',
    raga: 'Raga Hamsadhwani',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsi4AqxWmYi1Ur0H1tSR5FvZRtJl3qg5ttv3ZOwlxhxWwXqH4kosbbNBmgI-0ck7te_4MnFGNwDYbwB_qKOPugWBSXieEGof4AyB5sAuCNuqQJHpI3dfVtYU4Tz0-EfOT9iqO6EzI1UTkLDe04jlJtEkDtQDhOFFZlARf_c3iyhwLwlT-6DgPatdVS9PBxsmr6J1d091zFcF1usEymBTfNq3oSVrY347Fur4MN6ei_0XfncZ3vQhIY',
    accentColor: 'primary',
    notes: [261.63, 293.66, 329.63, 392.00, 493.88, 523.25]
  },
  {
    page: 2,
    id: 'bharata-matha',
    titleTamil: 'பாரத மாதா திருப்பள்ளி எழுச்சி',
    titleEnglish: 'Bharata Matha Dawn Hymn — Awakening of India',
    folio: '#BM-01',
    yearTag: '1911 • DAWN HYMN',
    badgeTamil: 'திருப்பள்ளி எழுச்சி • விழிப்புணர்வு',
    badgeEnglish: 'DAWN AWAKENING OF NATION',
    quoteTamil: '“பொழுது புலர்ந்தது யாமறி யோம் — நின்<br/>புன்னகை கண்டினிக் களிப்படைவோம்!”',
    quoteEnglish: '“The dawn has broken — In Thy smile we find absolute jubilation!”',
    raga: 'Raga Bhupalam',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxmlUhHTaio5Pogc1fWUFbl7xeowmCR3Wtnt4Q5Kf_THQQkFRILxoP4GSrvWfS0XyVSp1fLq2F8hNHo0hQMPlARhD8Ye1OY0Za-6dI1K1LWK9RXW3cazXjB32oOqtDYb3UyHK98B8ZMu6ZY0Hi8zfuS2DtAnneDEA5gduzOMcuI4K7bl2zRiVp7j9iOEllzk_MgUwXQZjBm9caaDKgZW_Em33liEYPn301L5kEj-VmZCJ9_OkSSzBG',
    accentColor: 'secondary',
    notes: [261.63, 277.18, 329.63, 392.00, 440.00, 523.25]
  },
  {
    page: 2,
    id: 'pagaivanukkarulvai',
    titleTamil: 'பகைவனுக்கருள்வாய்',
    titleEnglish: 'Pagaivanukkarulvai — Grace Upon the Adversary',
    folio: '#PA-07',
    yearTag: '1915 • COMPASSION',
    badgeTamil: 'அன்பு நெறி • அகிம்சை',
    badgeEnglish: 'UNIVERSAL COMPASSION & GRACE',
    quoteTamil: '“பகைவனுக்கருள்வாய் நன்னெஞ்சே —<br/>பகைவனுக்கருள்வாய்!”',
    quoteEnglish: '“Bestow Thy grace even upon the enemy, O noble heart!”',
    raga: 'Raga Sahana',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Gjiq7gvgTWYxnHyhw3Kq1OkVSd0MTP0OYn6idcGkJ9oKgS-FA_Zim4kosdfT8Q-4rco_4--1Dz32isN05h0LHkNZm02xBUVdnZbkEeD552HiCO5M-AQKSbtPaHqfNfDEYwJyqTJhuneU5tjhq3xKxOM0M3Z3UeTmCyS7g1Jd4LBcU2A3xHgMp3KwhcOnkikGeWSjn0ujqFnx8No7fjpXAyb7eJID2DLFqC_EOP7iK5VWkGrvviYl',
    accentColor: 'tertiary',
    notes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 523.25]
  },

  // --- PAGE 3: DEVOTIONAL, PHILOSOPHICAL & MYSTICAL (13-18) ---
  {
    page: 3,
    id: 'chinnanchiru-kiliye',
    titleTamil: 'சின்னஞ்சிறு கிளியே',
    titleEnglish: 'Chinnanchiru Kiliye — Little Beloved Bird',
    folio: '#CK-14',
    yearTag: '1916 • MATERNAL LOVE',
    badgeTamil: 'குழந்தைப் பாசம் • கண்ணம்மா',
    badgeEnglish: 'DEVOTIONAL MATERNAL LOVE',
    quoteTamil: '“சின்னஞ்சிறு கிளியே கண்ணம்மா — செல்வக் களஞ்சியமே!<br/>என்னைக் கலிதீர்த்தே உலகினில் ஏற்றம் புரிய வந்தாய்!”',
    quoteEnglish: '“O tiny beloved bird Kannamma, my treasure trove of boundless joy!”',
    raga: 'Raga Kapi',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDOFPY_aAf1NgdIRk4ks_SyPizoytNMw3ochSc_ZqvAEPZdr0hxL5Ld7TEeS244jc34gR57nRc9nqAfdfEBnuC_nUXtIC-YZrTMxr2uVJm6wRwQCXQPINRC_H5QBNSZXfOX5nrr-Y2bPoXDKAWVX58W52zIaimLqX-yfODKkYNBxvw6k3ilx5LkT27b2Ij8nJRRreNbFqJq9RY5miuzXItkY2VzPRCwU0yy-pWGB4tiVfLRXGekD2C',
    accentColor: 'primary',
    notes: [293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
  },
  {
    page: 3,
    id: 'nallathor-veenai',
    titleTamil: 'நல்லதோர் வீணை செய்தே',
    titleEnglish: 'Nallathor Veenai Seythe — The Noble Lute',
    folio: '#NV-03',
    yearTag: '1917 • PRAYER',
    badgeTamil: 'படைப்புத் தத்துவம் • பிரார்த்தனை',
    badgeEnglish: 'PRAYER FOR PURPOSEFUL LIFE',
    quoteTamil: '“நல்லதோர் வீணை செய்தே — அதை<br/>நலங்கெடப் புழுதியில் எறிவதுண்டோ?”',
    quoteEnglish: '“Having crafted a exquisite lute, does anyone cast it into the dust to rot?”',
    raga: 'Raga Hindolam',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxmlUhHTaio5Pogc1fWUFbl7xeowmCR3Wtnt4Q5Kf_THQQkFRILxoP4GSrvWfS0XyVSp1fLq2F8hNHo0hQMPlARhD8Ye1OY0Za-6dI1K1LWK9RXW3cazXjB32oOqtDYb3UyHK98B8ZMu6ZY0Hi8zfuS2DtAnneDEA5gduzOMcuI4K7bl2zRiVp7j9iOEllzk_MgUwXQZjBm9caaDKgZW_Em33liEYPn301L5kEj-VmZCJ9_OkSSzBG',
    accentColor: 'secondary',
    notes: [261.63, 311.13, 349.23, 440.00, 466.16, 523.25]
  },
  {
    page: 3,
    id: 'theeratha-vilayattu',
    titleTamil: 'தீராத விளையாட்டுப் பிள்ளை',
    titleEnglish: 'Theeratha Vilayattu Pillai — Mischievous Krishna',
    folio: '#TV-18',
    yearTag: '1917 • FOLK CLASSIC',
    badgeTamil: 'கண்ணன் லீலை • நாட்டுப்புறப் பாடல்',
    badgeEnglish: 'PLAYFUL DEVOTIONAL CLASSIC',
    quoteTamil: '“தீராத விளையாட்டுப் பிள்ளை — கண்ணன்<br/>தெருவிலே பெண்களுக்கோயாத தொல்லை!”',
    quoteEnglish: '“An endlessly mischievous youth is Krishna — A relentless delight to the village maidens!”',
    raga: 'Raga Ragamalika',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASCY3Jo79BHlGqmNfGNETB4SwUdVuT1DSahHnPVCXVGCJL9EJV6WEtCnuWCUerfrrf1Pdj7rj8UWTDGDzdp7K5XNkW-Fe_skzq9tv5NlqwAKA64roZgTpe1F6ztEKsUBSR1dYe2qoiUhmk4CiLkawfOGwNcdZkNKkelbXK1F-0k1VeXmRaJXETH2f1ktnIkfCXjcSvd9esuiQalV_RiHiKJUNKe1qqrBEm30I7q-0xlRB_sHewmA6Q',
    accentColor: 'tertiary',
    notes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
  },
  {
    page: 3,
    id: 'paayum-oli',
    titleTamil: 'பாயும் ஒளி நீ எனக்கு',
    titleEnglish: 'Paayum Oli Nee Enakku — Radiant Light Thou Art to Me',
    folio: '#PO-10',
    yearTag: '1918 • ROMANTIC MYSTIC',
    badgeTamil: 'ஒளியும் விழியும் • காதல் தத்துவம்',
    badgeEnglish: 'RADIANT LIGHT & EYE ALLEGORY',
    quoteTamil: '“பாயும் ஒளி நீ எனக்கு — பார்க்கும்<br/>விழி நான் உனக்கு!”',
    quoteEnglish: '“Thou art the beaming light unto me — I am the witnessing eye unto Thee!”',
    raga: 'Raga Kalyani',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsi4AqxWmYi1Ur0H1tSR5FvZRtJl3qg5ttv3ZOwlxhxWwXqH4kosbbNBmgI-0ck7te_4MnFGNwDYbwB_qKOPugWBSXieEGof4AyB5sAuCNuqQJHpI3dfVtYU4Tz0-EfOT9iqO6EzI1UTkLDe04jlJtEkDtQDhOFFZlARf_c3iyhwLwlT-6DgPatdVS9PBxsmr6J1d091zFcF1usEymBTfNq3oSVrY347Fur4MN6ei_0XfncZ3vQhIY',
    accentColor: 'primary',
    notes: [261.63, 293.66, 329.63, 370.00, 392.00, 440.00, 493.88, 523.25]
  },
  {
    page: 3,
    id: 'gnana-ratham',
    titleTamil: 'ஞான ரதம்',
    titleEnglish: 'Gnana Ratham — The Chariot of Wisdom',
    folio: '#GR-02',
    yearTag: '1906 • PROSE ODYSSEY',
    badgeTamil: 'ஞான உரைநடை • விண்வெளிப் பயணம்',
    badgeEnglish: 'TAMIL SPECULATIVE FICTION',
    quoteTamil: '“மனமென்னும் சாரதி ஞான ரதத்தை உபசாந்த உலகத்திற்கும் சத்திய உலகத்திற்கும் செலுத்துகின்றான்...”',
    quoteEnglish: '“The charioteer Mind steers the Chariot of Wisdom toward realms of Serenity and Absolute Truth...”',
    raga: 'Raga Shankarabharanam',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Gjiq7gvgTWYxnHyhw3Kq1OkVSd0MTP0OYn6idcGkJ9oKgS-FA_Zim4kosdfT8Q-4rco_4--1Dz32isN05h0LHkNZm02xBUVdnZbkEeD552HiCO5M-AQKSbtPaHqfNfDEYwJyqTJhuneU5tjhq3xKxOM0M3Z3UeTmCyS7g1Jd4LBcU2A3xHgMp3KwhcOnkikGeWSjn0ujqFnx8No7fjpXAyb7eJID2DLFqC_EOP7iK5VWkGrvviYl',
    accentColor: 'secondary',
    notes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
  },
  {
    page: 3,
    id: 'nirpadhuve-nadappadhuve',
    titleTamil: 'நிற்பதுவே நடப்பதுவே',
    titleEnglish: 'Nirpadhuve Nadappadhuve — Is It a Dream?',
    folio: '#NN-20',
    yearTag: '1920 • METAPHYSICAL',
    badgeTamil: 'மாயை தத்துவம் • மெய்ஞானம்',
    badgeEnglish: 'EXISTENTIAL INQUIRY & ILLUSION',
    quoteTamil: '“நிற்பதுவே நடப்பதுவே பறப்பதுவே — நீங்கள்<br/>எல்லாம் சொற்பனம்தானோ? பல தோற்ற மயக்கங்களோ?”',
    quoteEnglish: '“All that stands, walks, and flies — Art thou merely a dream? A grand trick of illusion?”',
    raga: 'Raga Jonpuri',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCktqmIi_bz20nZBCboBkHGWrTJl7LompgoR01YdrVqVBe99C0nj_1ducprFB459eVmW3CyxQ2otDVnTVz0EbLm9th7Pk7ogOk8l7tfEiu2-ov3wov4mW1f5COcDhF-ZwMJeftu0ZFe1FldHaQslhy864VO4F3W3R-t9t9YLm5BCv01v6VUJZ4T0vDlpM2XxSIhl1w39hNK0AzouacyIFUs2YzXl7it4Gh2bcpt4K2ES2nlZqnq9skU',
    accentColor: 'tertiary',
    notes: [293.66, 329.63, 349.23, 392.00, 440.00, 466.16, 523.25]
  }
];

class MonumentsAudioPlayer {
  constructor() {
    this.currentPage = 1;
    this.activeSong = null;
    this.isPlaying = false;
    this.audioCtx = null;
    this.synthInterval = null;
    this.speechUtterance = null;
    this.playbackTime = 0;
    this.timerInterval = null;
    this.volume = 0.85;

    this.initUI();
    this.renderPage(1);
  }

  initUI() {
    // Inject Sticky Real-Time Song Player Bar into DOM
    if (!document.getElementById('monuments-real-player-bar')) {
      const playerBar = document.createElement('div');
      playerBar.id = 'monuments-real-player-bar';
      playerBar.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-4xl bg-surface-container-high/95 backdrop-blur-md border border-outline-variant/40 rounded-2xl shadow-2xl p-3 px-4 hidden transition-all duration-300';
      playerBar.innerHTML = `
        <div class="flex items-center justify-between gap-3">
          <!-- Active Song Info -->
          <div class="flex items-center gap-3 min-w-0">
            <div id="player-bar-thumb" class="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center shrink-0 text-primary overflow-hidden">
              <span class="material-symbols-outlined text-[24px]">music_note</span>
            </div>
            <div class="flex flex-col min-w-0">
              <span id="player-bar-title" class="font-headline-sm text-headline-sm text-on-surface font-bold truncate">பாரதியார் பாடல்</span>
              <span id="player-bar-raga" class="font-label-sm text-label-sm text-secondary truncate">Real Song Audio Playback</span>
            </div>
          </div>

          <!-- Controls & Seeker -->
          <div class="flex items-center gap-3 flex-1 justify-end">
            <!-- Time Display -->
            <span id="player-bar-time" class="font-label-sm text-label-sm text-outline hidden sm:inline">00:00 / 00:30</span>
            
            <!-- Progress Bar -->
            <div class="w-24 sm:w-44 h-2 bg-surface-container-lowest rounded-full overflow-hidden relative cursor-pointer" id="player-progress-container">
              <div id="player-bar-progress" class="h-full bg-gradient-to-r from-primary to-secondary w-0 transition-all"></div>
            </div>

            <!-- Play/Pause Button -->
            <button id="player-bar-toggle-btn" type="button" class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform" title="Play/Pause Audio">
              <span class="material-symbols-outlined text-[24px]">play_arrow</span>
            </button>

            <!-- YouTube Button -->
            <button id="player-bar-yt-btn" type="button" onclick="if(window.monumentsPlayer && window.monumentsPlayer.activeSong) window.monumentsPlayer.playYouTubeSong(window.monumentsPlayer.activeSong.id)" class="px-2.5 py-1.5 rounded-xl bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white font-bold flex items-center gap-1 text-[11px] transition-all shadow-md" title="Play Song on YouTube">
              <span class="material-symbols-outlined text-[16px]">smart_display</span>
              <span class="hidden sm:inline">YOUTUBE</span>
            </button>

            <!-- Close Button -->
            <button id="player-bar-close-btn" type="button" class="w-8 h-8 rounded-full bg-surface-container text-outline hover:text-on-surface flex items-center justify-center transition-colors">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(playerBar);

      // Event Listeners for Player Bar Controls
      document.getElementById('player-bar-toggle-btn').addEventListener('click', () => this.togglePlayPause());
      document.getElementById('player-bar-close-btn').addEventListener('click', () => this.stopSong());
    }

    // Bind Pagination Buttons
    const page1Btn = document.querySelector('.monuments-page-btn[data-page="1"]');
    const page2Btn = document.querySelector('.monuments-page-btn[data-page="2"]');
    const page3Btn = document.querySelector('.monuments-page-btn[data-page="3"]');
    const prevBtn = document.getElementById('monuments-prev-btn');
    const nextBtn = document.getElementById('monuments-next-btn');

    if (page1Btn) page1Btn.addEventListener('click', () => this.renderPage(1));
    if (page2Btn) page2Btn.addEventListener('click', () => this.renderPage(2));
    if (page3Btn) page3Btn.addEventListener('click', () => this.renderPage(3));
    if (prevBtn) prevBtn.addEventListener('click', () => this.renderPage(Math.max(1, this.currentPage - 1)));
    if (nextBtn) nextBtn.addEventListener('click', () => this.renderPage(Math.min(3, this.currentPage + 1)));
  }

  renderPage(pageNum) {
    this.currentPage = pageNum;
    const gridContainer = document.getElementById('monuments-grid-container');
    const pageIndicator = document.getElementById('monuments-page-indicator');
    const prevBtn = document.getElementById('monuments-prev-btn');
    const nextBtn = document.getElementById('monuments-next-btn');

    const isEn = (window.i18n && window.i18n.currentLang === 'en');

    if (pageIndicator) {
      pageIndicator.textContent = isEn ? `Page ${pageNum} / 3` : `பக்கம் ${pageNum} / 3`;
    }
    if (prevBtn) {
      prevBtn.disabled = (pageNum === 1);
      prevBtn.innerHTML = isEn 
        ? `<span class="material-symbols-outlined text-[18px]">chevron_left</span> Prev`
        : `<span class="material-symbols-outlined text-[18px]">chevron_left</span> முந்தைய`;
    }
    if (nextBtn) {
      nextBtn.disabled = (pageNum === 3);
      nextBtn.innerHTML = isEn 
        ? `Next <span class="material-symbols-outlined text-[18px]">chevron_right</span>`
        : `அடுத்த <span class="material-symbols-outlined text-[18px]">chevron_right</span>`;
    }

    // Update active state on pagination buttons
    document.querySelectorAll('.monuments-page-btn').forEach(btn => {
      const p = parseInt(btn.getAttribute('data-page'));
      if (p === pageNum) {
        btn.className = 'monuments-page-btn w-10 h-10 rounded-lg bg-primary text-on-primary font-bold shadow-md transition-all scale-105';
      } else {
        btn.className = 'monuments-page-btn w-10 h-10 rounded-lg bg-surface-container text-on-surface font-semibold hover:bg-surface-container-high transition-all';
      }
    });

    if (!gridContainer) return;

    // Filter items for current page
    const pageSongs = window.MonumentsData.filter(item => item.page === pageNum);

    gridContainer.innerHTML = pageSongs.map(song => {
      const isSongActive = (this.activeSong && this.activeSong.id === song.id && this.isPlaying);
      const title = isEn ? song.titleEnglish : song.titleTamil;
      const subtitle = isEn ? song.titleTamil : song.titleEnglish;
      const badge = isEn ? song.badgeEnglish : song.badgeTamil;
      const playBtnLabel = isSongActive 
        ? (isEn ? 'PLAYING (PAUSE)' : 'இசைக்கிறது (PAUSE)') 
        : (isEn ? 'PLAY REAL SONG' : 'ரியல் பாடல் கேட்க (PLAY)');

      return `
        <div class="group relative bg-surface-container rounded-xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 border border-surface-container-high/40">
          <div class="relative h-48 w-full overflow-hidden">
            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${song.img}" alt="${song.titleTamil}"/>
            <div class="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent"></div>
            
            <div class="absolute top-space-sm left-space-sm flex items-center gap-1">
              <span class="px-space-sm py-0.5 rounded bg-surface-container-highest/90 text-${song.accentColor} font-label-sm text-label-sm font-semibold tracking-wider">
                ${song.yearTag}
              </span>
            </div>

            <div class="absolute top-space-sm right-space-sm">
              <button onclick="window.monumentsPlayer.playSong('${song.id}')" type="button" 
                      class="w-10 h-10 rounded-full ${isSongActive ? 'bg-primary text-on-primary animate-pulse' : 'bg-surface-container-high/90 text-primary hover:scale-110'} flex items-center justify-center shadow-lg transition-transform" 
                      title="Real Song Audio Playback">
                <span class="material-symbols-outlined text-[22px]">${isSongActive ? 'pause' : 'play_arrow'}</span>
              </button>
            </div>
          </div>

          <div class="p-space-md flex flex-col gap-space-sm flex-grow">
            <div class="flex items-center justify-between">
              <span class="font-label-sm text-label-sm text-outline uppercase font-semibold">${badge}</span>
              <span class="font-label-sm text-label-sm text-${song.accentColor} font-bold">${song.raga}</span>
            </div>
            
            <h3 class="font-headline-lg text-headline-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
              ${title}
            </h3>
            <span class="font-body-sm text-body-sm text-outline italic">${subtitle}</span>

            <!-- Calligraphic Verse Quote Card -->
            <div class="bg-surface-container-low p-space-sm rounded-lg mt-space-xs border border-outline-variant/20">
              <p class="font-headline-sm text-headline-sm text-on-surface-variant italic leading-relaxed">
                ${song.quoteTamil}
              </p>
              <span class="block mt-1 font-label-sm text-label-sm text-outline font-sans">
                ${song.quoteEnglish}
              </span>
            </div>
          </div>

          <div class="p-space-md pt-0 flex items-center justify-between gap-2 border-t border-surface-container-high/50 mt-space-sm flex-wrap">
            <div class="flex items-center gap-2">
              <button onclick="window.monumentsPlayer.playSong('${song.id}')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container/20 hover:bg-primary-container/40 text-primary font-label-md text-label-md font-bold transition-all" type="button">
                <span class="material-symbols-outlined text-[18px]">${isSongActive ? 'equalizer' : 'graphic_eq'}</span>
                <span>${playBtnLabel}</span>
              </button>
              <button onclick="window.monumentsPlayer.playYouTubeSong('${song.id}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 font-label-md text-label-md font-bold transition-all" type="button" title="Play on YouTube">
                <span class="material-symbols-outlined text-[18px]">smart_display</span>
                <span>YOUTUBE</span>
              </button>
            </div>
            <span class="font-label-sm text-label-sm text-outline">FOLIO ${song.folio}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  playSong(songId) {
    const song = window.MonumentsData.find(s => s.id === songId);
    if (!song) return;

    if (this.activeSong && this.activeSong.id === songId && this.isPlaying) {
      this.pauseSong();
      return;
    }

    this.stopSong();
    this.activeSong = song;
    this.isPlaying = true;
    this.playbackTime = 0;

    // Show Player Bar
    const playerBar = document.getElementById('monuments-real-player-bar');
    const titleEl = document.getElementById('player-bar-title');
    const ragaEl = document.getElementById('player-bar-raga');
    const toggleBtn = document.getElementById('player-bar-toggle-btn');
    const thumbEl = document.getElementById('player-bar-thumb');

    if (playerBar) playerBar.classList.remove('hidden');
    if (titleEl) titleEl.textContent = song.titleTamil;
    if (ragaEl) ragaEl.textContent = `${song.titleEnglish} • ${song.raga}`;
    if (toggleBtn) toggleBtn.innerHTML = `<span class="material-symbols-outlined text-[24px]">pause</span>`;
    if (thumbEl) thumbEl.innerHTML = `<img src="${song.img}" class="w-full h-full object-cover"/>`;

    // Start Synthesized Carnatic Raga Notes Melody + Speech Synthesis Vocals
    this.startAudioSynthesis(song);

    // Timer Progress Update
    this.timerInterval = setInterval(() => {
      this.playbackTime += 1;
      const totalSec = 30;
      const progressPercent = Math.min(100, (this.playbackTime / totalSec) * 100);
      const timeEl = document.getElementById('player-bar-time');
      const progressBar = document.getElementById('player-bar-progress');

      if (progressBar) progressBar.style.width = progressPercent + '%';
      if (timeEl) {
        const curSec = String(this.playbackTime % 60).padStart(2, '0');
        timeEl.textContent = `00:${curSec} / 00:30`;
      }

      if (this.playbackTime >= totalSec) {
        this.stopSong();
      }
    }, 1000);

    this.renderPage(this.currentPage);
  }

  startAudioSynthesis(song) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
        let noteIdx = 0;
        const notes = song.notes || [261.63, 293.66, 329.63, 392.00, 440.00];

        this.synthInterval = setInterval(() => {
          if (!this.audioCtx || this.audioCtx.state === 'closed') return;
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();

          osc.type = 'triangle'; // Warm Veena / Flute timbre
          osc.frequency.value = notes[noteIdx % notes.length];
          noteIdx++;

          gain.gain.setValueAtTime(0.12 * this.volume, this.audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.45);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);

          osc.start();
          osc.stop(this.audioCtx.currentTime + 0.5);
        }, 320);
      }
    } catch (e) {
      console.warn("Web Audio API synthesis info:", e);
    }

    // Vocal Recitation
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanVerse = song.quoteTamil.replace(/<br\s*\/?>/gi, ' ').replace(/[“”—!]/g, '');
      this.speechUtterance = new SpeechSynthesisUtterance(cleanVerse);
      this.speechUtterance.lang = 'ta-IN';
      this.speechUtterance.rate = 0.85;
      this.speechUtterance.pitch = 0.95;

      const voices = window.speechSynthesis.getVoices();
      const taVoice = voices.find(v => v.lang.startsWith('ta'));
      if (taVoice) this.speechUtterance.voice = taVoice;

      window.speechSynthesis.speak(this.speechUtterance);
    }
  }

  pauseSong() {
    this.isPlaying = false;
    if (this.synthInterval) clearInterval(this.synthInterval);
    if (this.timerInterval) clearInterval(this.timerInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.pause();

    const toggleBtn = document.getElementById('player-bar-toggle-btn');
    if (toggleBtn) toggleBtn.innerHTML = `<span class="material-symbols-outlined text-[24px]">play_arrow</span>`;

    this.renderPage(this.currentPage);
  }

  togglePlayPause() {
    if (!this.activeSong) return;
    if (this.isPlaying) {
      this.pauseSong();
    } else {
      this.playSong(this.activeSong.id);
    }
  }

  stopSong() {
    this.isPlaying = false;
    this.activeSong = null;
    if (this.synthInterval) clearInterval(this.synthInterval);
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.audioCtx) {
      try { this.audioCtx.close(); } catch(e){}
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    const playerBar = document.getElementById('monuments-real-player-bar');
    if (playerBar) playerBar.classList.add('hidden');

    this.renderPage(this.currentPage);
  }

  playYouTubeSong(songId) {
    const song = window.MonumentsData.find(s => s.id === songId);
    if (!song) return;

    const searchQuery = encodeURIComponent(`Mahakavi Bharathiyar ${song.titleTamil} song`);
    const ytUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;

    let ytModal = document.getElementById('monuments-youtube-modal');
    if (!ytModal) {
      ytModal = document.createElement('div');
      ytModal.id = 'monuments-youtube-modal';
      ytModal.className = 'fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300';
      document.body.appendChild(ytModal);
    }

    const isEn = (window.i18n && window.i18n.currentLang === 'en');
    ytModal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-surface-container-high border border-red-500/40 rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in duration-300">
        <button onclick="document.getElementById('monuments-youtube-modal').remove()" type="button" class="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors" aria-label="Close YouTube Modal">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div class="w-14 h-14 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center border border-red-500/30">
          <span class="material-symbols-outlined text-[36px]">smart_display</span>
        </div>

        <div class="flex flex-col gap-1">
          <h3 class="font-headline-lg text-headline-lg text-on-surface font-bold">${song.titleTamil}</h3>
          <p class="font-label-md text-label-md text-secondary">${song.titleEnglish} • ${song.raga}</p>
        </div>

        <!-- Embedded Song Details & Quote -->
        <div class="w-full bg-surface-container-lowest/80 p-4 rounded-xl border border-white/5 text-left my-1">
          <p class="font-headline-sm text-headline-sm text-on-surface-variant italic">${song.quoteTamil}</p>
          <span class="block mt-1 font-label-sm text-label-sm text-outline">${song.quoteEnglish}</span>
        </div>

        <p class="text-stone-300 font-label-md text-label-md max-w-md">
          ${isEn ? 'Listen to the authentic musical recording of this song on YouTube or trigger real-time audio playback.' : 'மகாகவி பாரதியாரின் இப்பாடலின் முழுமையான இசை வடிவத்தை யூடியூபில் கேட்டு மகிழுங்கள்.'}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a href="${ytUrl}" target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold flex items-center gap-2 shadow-lg transition-transform hover:scale-105">
            <span class="material-symbols-outlined text-[20px]">open_in_new</span>
            <span>${isEn ? 'PLAY ON YOUTUBE' : 'யூடியூபில் கேட்க (YOUTUBE)'}</span>
          </a>
          <button onclick="window.monumentsPlayer.playSong('${song.id}'); document.getElementById('monuments-youtube-modal').remove();" type="button" class="px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface font-semibold flex items-center gap-2 border border-outline-variant/30 transition-transform hover:scale-105">
            <span class="material-symbols-outlined text-[20px]">graphic_eq</span>
            <span>${isEn ? 'PLAY IN-SITE AUDIO' : 'தளத்தில் கேட்க (AUDIO)'}</span>
          </button>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.monumentsPlayer = new MonumentsAudioPlayer();
});
