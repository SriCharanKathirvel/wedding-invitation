/**
 * TAMIL WEDDING INVITATION - CLIENT JAVASCRIPT APPLICATION
 * Couple: Sri Charan & Pradeepika | Wedding Date: 15.11.2026 (Subamuhurtham)
 * Venue: Sri Velan Mahal, Avalpoondurai, Erode
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. BILINGUAL DICTIONARY (TAMIL & ENGLISH)
  // ==========================================================================
  const translations = {
    ta: {
      headerShloka: 'சரண் <span class="heart-icon">❤️</span> தீபு',
      headerSub: 'சுபமுகூர்த்த அழைப்பிதழ்',
      navHome: 'முகப்பு',
      navCountdown: 'கவுண்டவுன்',
      navSchedule: 'நிகழ்ச்சி நிரல்',
      navVenue: 'திருமண மண்டபம்',
      navBlessings: 'ஆசிகள்',
      audioPlay: 'மங்கல இசை',
      audioPause: 'இசை நிறுத்து',
      heroBlessing: 'வேலும் மயிலும் துணை',
      heroSubBlessing: 'இறைவன் திருவருளாலும் பெரியோர்களின் நல்லாசியாலும்',
      invitationSuper: 'மங்கலத் திருமண அழைப்பிதழ்',
      invitationMain: 'திருமண அழைப்பிதழ்',
      heroQuote: '"இரு மனங்கள் இணையும் இல்லறத் தொடக்க விழாவிற்கு தங்களை அன்போடு அழைக்கின்றோம்"',
      groomName: 'ஸ்ரீ சரண்',
      brideName: 'பிரதீபிகா',
      groomLabel: 'மணமகன்',
      groomParents: 'திரு. K. கதிர்வேல் & திருமதி. K. பூங்கொடி',
      groomParentsSub: 'அவர்களின் அன்புத் திருமகன் (ஈரோடு)',
      brideLabel: 'மணமகள்',
      brideParents: 'திரு. P. ரகுபதி & திருமதி. K. கலைவாணி',
      brideParentsSub: 'அவர்களின் அன்புத் திருமகள் (ஈரோடு)',
      heroDate: '15.11.2026 • ஞாயிற்றுக்கிழமை',
      heroTime: 'காலை 5.00 - 6.00 மணி',
      countdownTag: 'சுபமுகூர்த்த நல்வேளை',
      countdownTitle: 'சுபமுகூர்த்த கவுண்டவுன்',
      countdownSub: '15 நவம்பர் 2026 • ஞாயிற்றுக்கிழமை அதிகாலை 5:00 மணி',
      labelDays: 'நாட்கள்',
      labelHours: 'மணி',
      labelMinutes: 'நிமிடம்',
      labelSeconds: 'நொடி',
      btnAddToCalendar: 'காலெண்டரில் சேர்க்க',
      scheduleTag: 'சுப நிகழ்வுகள்',
      scheduleTitle: 'நிகழ்ச்சி நிரல்',
      scheduleSub: 'மங்கலத் திருமண விழாக்களின் விரிவான நேர அட்டவணை',
      tabAll: 'அனைத்து நிகழ்வுகள்',
      tabDay1: 'நாள் 1: 14.11.2026 (சனிக்கிழமை)',
      tabDay2: 'நாள் 2: 15.11.2026 (ஞாயிற்றுக்கிழமை)',
      day1Title: 'நாள் 1: 14.11.2026 - சனிக்கிழமை',
      day1Sub: 'சுப காரியங்கள் & மணமகள் - மணமகன் வரவேற்பு',
      day1Badge: 'நாள் 1 • சனிக்கிழமை',
      ev1Title: '1. நிச்சயதார்த்தம்',
      ev1Time: 'காலை 7.35 - 9.00 மணி',
      ev2Title: '2. முகூர்த்தக்கால்',
      ev2Time: 'காலை 10.30 - 11.00 மணி',
      ev3Title: '3. பட்டினிசாத விருந்து',
      ev3Time: 'மதியம் 12.30 - 1.30 மணி',
      ev4Title: '4. மாப்பிள்ளை அழைப்பு',
      ev4Time: 'மாலை 3.00 - 4.00 மணி',
      ev5Title: '5. வரவேற்பு',
      ev5Time: 'மாலை 6.00 - 9.00 மணி',
      day2Title: 'நாள் 2: 15.11.2026 - ஞாயிற்றுக்கிழமை',
      day2Sub: 'புனித சுபமுகூர்த்தம் & சம்பந்தி விருந்து',
      day2Badge: 'நாள் 2 • ஞாயிற்றுக்கிழமை',
      ev6Title: '1. சுபமுகூர்த்தம்',
      ev6Time: 'அதிகாலை 5.00 - 6.00 மணி',
      ev7Title: '2. சம்பந்தி விருந்து',
      ev7Time: 'மதியம் 12.00 மணி முதல்',
      scheduleFooterNote: '"தங்கள் நல்வரவை விரும்பும் - இல்லம் நிறைந்த சொந்தங்களும்... உள்ளம் நிறைந்த நண்பர்களும்..."',
      scheduleFooterSub: 'எங்கள் குடும்பத்தின் இந்த மகிழ்ச்சியான தருணத்தில் தங்களின் பொன்னான வருகையை வேண்டி விரும்பி அழைக்கின்றோம்.',
      venueTag: 'திருமண அரங்கம் & அமைவிடம்',
      venueTitle: 'திருமண மண்டபம்',
      venueSub: 'மங்களகரமான விழா நடைபெறும் அருள்மிகு அரங்கம்',
      venueName: 'ஸ்ரீ வேலன் மஹால்',
      venueAddress: 'காளிபாளையம் மெயின் ரோடு, அவல்பூந்துறை, ஈரோடு, தமிழ்நாடு - 638115',
      venueLandmark: 'அடையாளம்: அவல்பூந்துறை, ஈரோடு',
      btnDirections: 'வழிசெலுத்தல்',
      btnCopyAddress: 'முகவரியை நகலெடு',
      copiedSuccess: 'முகவரி வெற்றிகரமாக நகலெடுக்கப்பட்டது!',
      shlokaVerse: 'அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை<br>பண்பும் பயனும் அது.',
      shlokaMeaning: '"இல்வாழ்க்கை அன்பும் அறமும் உடையதாக விளங்குமானால், அதுவே அதன் பண்பும் பயனும் ஆகும்."',
      footerNames: 'சரண் <span class="heart-icon">❤️</span> தீபு',
      footerWelcome: 'தங்கள் வரவு எங்கள் வாழ்வின் வசந்தம்! அனைவரும் வருகை தந்து மணமக்களை வாழ்த்த வேண்டுகிறோம்.',
      footerKathirvel: 'கதிர்வேல் குடும்பத்தினர்',
      footerKathirvelLoc: 'ஈரோடு',
      footerRaghupathi: 'ரகுபதி குடும்பத்தினர்',
      footerRaghupathiLoc: 'ஈரோடு',
      footerCopyright: '15.11.2026 • சுபமுகூர்த்த நன்னாள் • வேலும் மயிலும் துணை'
    },
    en: {
      headerShloka: 'Charan <span class="heart-icon">❤️</span> Deepu',
      headerSub: 'Auspicious Wedding Invitation',
      navHome: 'Home',
      navCountdown: 'Countdown',
      navSchedule: 'Schedule',
      navVenue: 'Venue',
      navBlessings: 'Blessings',
      audioPlay: 'Wedding Music',
      audioPause: 'Pause Music',
      heroBlessing: 'VELUM MAYILUM THUNAI',
      heroSubBlessing: 'With the divine grace of Almighty and elders’ cherished blessings',
      invitationSuper: 'The Auspicious Union',
      invitationMain: 'Wedding Invitation',
      heroQuote: '"Two souls, one heart — we cordially invite you to celebrate the joyous dawn of our lifelong journey together."',
      groomName: 'Sri Charan',
      brideName: 'Pradeepika',
      groomLabel: 'Groom',
      groomParents: 'Mr. K. Kathirvel & Mrs. K. Poongodi',
      groomParentsSub: 'Beloved Son • Erode',
      brideLabel: 'Bride',
      brideParents: 'Mr. P. Raghupathi & Mrs. K. Kalaivani',
      brideParentsSub: 'Beloved Daughter • Erode',
      heroDate: '15th November 2026 • Sunday',
      heroTime: '5:00 AM - 6:00 AM IST',
      countdownTag: 'The Auspicious Moment',
      countdownTitle: 'Wedding Countdown',
      countdownSub: 'Sunday, 15th November 2026 • 5:00 AM IST',
      labelDays: 'Days',
      labelHours: 'Hours',
      labelMinutes: 'Minutes',
      labelSeconds: 'Seconds',
      btnAddToCalendar: 'Add to Calendar',
      scheduleTag: 'Sacred Ceremonies',
      scheduleTitle: 'Event Schedule',
      scheduleSub: 'Detailed itinerary of our two-day traditional wedding festivities',
      tabAll: 'All Events',
      tabDay1: 'Day 1: 14.11.2026 (Saturday)',
      tabDay2: 'Day 2: 15.11.2026 (Sunday)',
      day1Title: 'Day 1: 14.11.2026 - Saturday',
      day1Sub: 'Auspicious Preludes & Grand Evening Reception',
      day1Badge: 'Day 1 • Saturday',
      ev1Title: '1. Engagement Ceremony',
      ev1Time: '7:35 AM - 9:00 AM',
      ev2Title: '2. Muhurthakkal Ceremony',
      ev2Time: '10:30 AM - 11:00 AM',
      ev3Title: '3. Pattinisadha Feast',
      ev3Time: '12:30 PM - 1:30 PM',
      ev4Title: '4. Groom Reception',
      ev4Time: '3:00 PM - 4:00 PM',
      ev5Title: '5. Grand Evening Reception',
      ev5Time: '6:00 PM - 9:00 PM',
      day2Title: 'Day 2: 15.11.2026 - Sunday',
      day2Sub: 'The Holy Subamuhurtham & Sambandhi Royal Feast',
      day2Badge: 'Day 2 • Sunday',
      ev6Title: '1. Subamuhurtham',
      ev6Time: '5:00 AM - 6:00 AM IST',
      ev7Title: '2. Sambandhi Feast',
      ev7Time: '12:00 PM Onwards',
      scheduleFooterNote: '"Heartfelt welcome by loving family and friends..."',
      scheduleFooterSub: 'Your gracious presence and heartfelt blessings will be the greatest gift to us as we begin this new chapter.',
      venueTag: 'Wedding Venue & Location',
      venueTitle: 'The Wedding Venue',
      venueSub: 'The grand hall where sacred wedding vows will be solemnized',
      venueName: 'Sri Velan Mahal',
      venueAddress: 'Kalipalayam Main Street, Avalpoondurai, Erode, Tamil Nadu - 638115',
      venueLandmark: 'Landmark: Avalpoondurai, Erode',
      btnDirections: 'Get Directions (Google Maps)',
      btnCopyAddress: 'Copy Address',
      copiedSuccess: 'Address copied to clipboard successfully!',
      shlokaVerse: 'Anbum aranum udaiththaayin ilvaazhkkai<br>Panbum payanum adhu.',
      shlokaMeaning: '"When married life is guided by love and virtue, it attains true grace and purpose."',
      footerNames: 'Charan <span class="heart-icon">❤️</span> Deepu',
      footerWelcome: 'Your presence is our cherished blessing. We warmly invite you to join and celebrate with us.',
      footerKathirvel: 'Kathirvel Family',
      footerKathirvelLoc: 'Erode',
      footerRaghupathi: 'Raghupathi Family',
      footerRaghupathiLoc: 'Erode',
      footerCopyright: '15.11.2026 • Sacred Subamuhurtham • Velum Mayilum Thunai'
    }
  };

  let currentLang = 'en';

  // ==========================================================================
  // 2. DOM ELEMENTS
  // ==========================================================================
  const body = document.body;
  const btnLangTa = document.getElementById('btn-lang-ta');
  const btnLangEn = document.getElementById('btn-lang-en');
  const imgTraditional = document.getElementById('couple-img-traditional');
  const imgModern = document.getElementById('couple-img-modern');
  const weddingAudio = document.getElementById('wedding-audio');
  const btnAudio = document.getElementById('btn-audio-toggle');
  const audioBtnLabel = document.getElementById('audio-btn-label');
  const btnPetalToggle = document.getElementById('btn-petal-toggle');
  const petalsCanvas = document.getElementById('petals-canvas');
  const btnCalendarTrigger = document.getElementById('btn-calendar-trigger');
  const calendarDropdown = document.getElementById('calendar-dropdown-menu');
  const btnCopyAddress = document.getElementById('btn-copy-address');
  const toastNotify = document.getElementById('toast-notify');
  const toastMessage = document.getElementById('toast-message');

  // ==========================================================================
  // 3. LANGUAGE SWITCHER & SEAMLESS COUPLE CROSSFADE
  // ==========================================================================
  function setLanguage(lang) {
    currentLang = lang;

    // 1. Update active toggle buttons
    if (lang === 'ta') {
      btnLangTa.classList.add('active');
      btnLangTa.setAttribute('aria-pressed', 'true');
      btnLangEn.classList.remove('active');
      btnLangEn.setAttribute('aria-pressed', 'false');
      body.classList.remove('lang-en');
      body.classList.add('lang-ta');
      document.documentElement.lang = 'ta';

      // Couple Asset Crossfade: Traditional attire in Tamil mode
      imgTraditional.classList.add('active');
      imgModern.classList.remove('active');
    } else {
      btnLangEn.classList.add('active');
      btnLangEn.setAttribute('aria-pressed', 'true');
      btnLangTa.classList.remove('active');
      btnLangTa.setAttribute('aria-pressed', 'false');
      body.classList.remove('lang-ta');
      body.classList.add('lang-en');
      document.documentElement.lang = 'en';

      // Couple Asset Crossfade: Modern attire in English mode
      imgModern.classList.add('active');
      imgTraditional.classList.remove('active');
    }

    // 2. Dynamically replace all data-i18n text content
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (dict[key].includes('<')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 3. Update Audio button state label
    if (typeof audioPlayer !== 'undefined' && audioPlayer.isPlaying) {
      audioBtnLabel.textContent = dict.audioPause;
    } else {
      audioBtnLabel.textContent = dict.audioPlay;
    }

    // 4. Update calendar URLs
    updateCalendarLinks();
  }

  btnLangTa.addEventListener('click', () => setLanguage('ta'));
  btnLangEn.addEventListener('click', () => setLanguage('en'));

  // ==========================================================================
  // 4. LIVE WEDDING COUNTDOWN TIMER
  // Target: Subamuhurtham on 15.11.2026, 05:00:00 AM IST (UTC+05:30)
  // ==========================================================================
  // Target ISO: 2026-11-15T05:00:00+05:30
  const weddingDate = new Date('2026-11-15T05:00:00+05:30').getTime();

  const countDaysEl = document.getElementById('count-days');
  const countHoursEl = document.getElementById('count-hours');
  const countMinutesEl = document.getElementById('count-minutes');
  const countSecondsEl = document.getElementById('count-seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      countDaysEl.textContent = '00';
      countHoursEl.textContent = '00';
      countMinutesEl.textContent = '00';
      countSecondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countDaysEl.textContent = String(days).padStart(2, '0');
    countHoursEl.textContent = String(hours).padStart(2, '0');
    countMinutesEl.textContent = String(minutes).padStart(2, '0');
    countSecondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ==========================================================================
  // 5. ADD TO CALENDAR (GOOGLE CALENDAR, APPLE/OUTLOOK .ICS, YAHOO)
  // ==========================================================================
  function updateCalendarLinks() {
    const title = currentLang === 'ta' 
      ? 'ஸ்ரீ சரண் & பிரதீபிகா திருமண விழா (Subamuhurtham)' 
      : 'Sri Charan & Pradeepika Wedding (Subamuhurtham)';
    
    const details = currentLang === 'ta'
      ? 'சுபமுகூர்த்த நன்னாளில் ஸ்ரீ சரண் & பிரதீபிகா திருமண விழாவிற்கு அன்போடு அழைக்கின்றோம். 14.11.2026 நிச்சயதார்த்தம் & வரவேற்பு, 15.11.2026 சுபமுகூர்த்தம் (5:00 AM - 6:00 AM).'
      : 'Joyous Wedding Celebration of Sri Charan & Pradeepika. Day 1 (Nov 14): Engagement & Grand Reception; Day 2 (Nov 15): Holy Subamuhurtham (5:00 AM - 6:00 AM) & Sambandhi Feast.';

    const location = 'Sri Velan Mahal, Kalipalayam Main Street, Avalpoondurai, Erode, Tamil Nadu 638115';

    // Google Calendar Start & End in UTC:
    // Event start: Nov 14, 2026 07:35 IST = Nov 14, 2026 02:05 UTC
    // Event end: Nov 15, 2026 14:00 IST = Nov 15, 2026 08:30 UTC
    const googleStart = '20261114T020500Z';
    const googleEnd = '20261115T083000Z';

    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${googleStart}/${googleEnd}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    const yahooUrl = `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(title)}&st=${googleStart}&et=${googleEnd}&desc=${encodeURIComponent(details)}&in_loc=${encodeURIComponent(location)}`;

    const optGoogle = document.getElementById('cal-opt-google');
    const optYahoo = document.getElementById('cal-opt-yahoo');

    if (optGoogle) optGoogle.href = googleUrl;
    if (optYahoo) optYahoo.href = yahooUrl;
  }

  // Toggle Calendar Dropdown
  btnCalendarTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = calendarDropdown.classList.toggle('open');
    btnCalendarTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close calendar dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!calendarDropdown.contains(e.target) && e.target !== btnCalendarTrigger) {
      calendarDropdown.classList.remove('open');
      btnCalendarTrigger.setAttribute('aria-expanded', 'false');
    }
  });

  // Dynamic .ICS File Generator for Apple Calendar and Microsoft Outlook
  function downloadICS() {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sri Charan & Pradeepika//Tamil Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-sri-charan-pradeepika-20261115@invitation.local',
      'DTSTAMP:20260926T120000Z',
      'DTSTART;TZID=Asia/Kolkata:20261114T073500',
      'DTEND;TZID=Asia/Kolkata:20261115T140000',
      'SUMMARY:Sri Charan & Pradeepika Wedding (திருமண விழா)',
      'DESCRIPTION:Grand Wedding Festivities of Sri Charan & Pradeepika.\\nDay 1 (14.11.2026): Engagement (7:35 AM), Muhurthakkal (10:30 AM), Pattinisadha Feast (12:30 PM), Groom Reception (3:00 PM), Grand Reception (6:00 PM).\\nDay 2 (15.11.2026): Sacred Subamuhurtham (5:00 AM - 6:00 AM), Sambandhi Feast (12:00 PM).',
      'LOCATION:Sri Velan Mahal\\, Kalipalayam Main Street\\, Avalpoondurai\\, Erode\\, Tamil Nadu 638115',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Sri_Charan_Pradeepika_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(currentLang === 'ta' ? 'காலெண்டர் ஃபைல் (.ics) பதிவிறக்கம் செய்யப்பட்டது!' : 'Calendar event file (.ics) downloaded!');
    calendarDropdown.classList.remove('open');
  }

  document.getElementById('cal-opt-apple').addEventListener('click', downloadICS);
  document.getElementById('cal-opt-outlook').addEventListener('click', downloadICS);

  // ==========================================================================
  // 6. EVENT SCHEDULE FILTER TABS
  // ==========================================================================
  const tabAll = document.getElementById('tab-all');
  const tabDay1 = document.getElementById('tab-day1');
  const tabDay2 = document.getElementById('tab-day2');
  const blockDay1 = document.getElementById('block-day1');
  const blockDay2 = document.getElementById('block-day2');
  const scheduleTabs = [tabAll, tabDay1, tabDay2];

  scheduleTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      scheduleTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-tab');
      if (filter === 'all') {
        blockDay1.style.display = 'block';
        blockDay2.style.display = 'block';
      } else if (filter === 'day1') {
        blockDay1.style.display = 'block';
        blockDay2.style.display = 'none';
      } else if (filter === 'day2') {
        blockDay1.style.display = 'none';
        blockDay2.style.display = 'block';
      }
    });
  });

  // ==========================================================================
  // 7. COPY ADDRESS TO CLIPBOARD & TOAST NOTIFICATION
  // ==========================================================================
  function showToast(msg) {
    toastMessage.textContent = msg;
    toastNotify.classList.add('show');
    setTimeout(() => {
      toastNotify.classList.remove('show');
    }, 3500);
  }

  btnCopyAddress.addEventListener('click', () => {
    const venueAddress = 'Sri Velan Mahal, Kalipalayam Main Street, Avalpoondurai, Erode, Tamil Nadu - 638115';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(venueAddress).then(() => {
        showToast(translations[currentLang].copiedSuccess);
      }).catch(() => {
        fallbackCopyText(venueAddress);
      });
    } else {
      fallbackCopyText(venueAddress);
    }
  });

  function fallbackCopyText(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(translations[currentLang].copiedSuccess);
  }

  // ==========================================================================
  // 8. TRADITIONAL NADASWARAM & THAVIL MANGALA VATHIYAM AUDIO SYNTHESIZER
  // Generates authentic South Indian Kalyani Raga Auspicious Melody + Thavil Beats
  // Works offline and online without broken 404 links or CORS blocks!
  // ==========================================================================
  class MangalaVathiyamEngine {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.masterGain = null;
      this.timerId = null;
      this.droneNodes = [];
      this.currentNoteIndex = 0;

      // Authentic Swaras of Auspicious Raga Kalyani (C# base Sa = 277.18 Hz)
      // S, R2, G3, M2, P, D2, N3, S'
      this.swaras = [
        { name: 'Sa', freq: 277.18, dur: 0.8 },
        { name: 'Ri2', freq: 311.13, dur: 0.6 },
        { name: 'Ga3', freq: 349.23, dur: 1.0 },
        { name: 'Pa', freq: 415.30, dur: 0.8 },
        { name: 'Ma2', freq: 392.00, dur: 0.6 },
        { name: 'Ga3', freq: 349.23, dur: 0.8 },
        { name: 'Ri2', freq: 311.13, dur: 0.6 },
        { name: 'Sa', freq: 277.18, dur: 1.2 },
        // Celebratory Kalyana Malai phrase:
        { name: 'Pa', freq: 415.30, dur: 0.6 },
        { name: 'Dha2', freq: 466.16, dur: 0.6 },
        { name: 'Ni3', freq: 523.25, dur: 0.7 },
        { name: 'TaraSa', freq: 554.37, dur: 1.2 },
        { name: 'Ni3', freq: 523.25, dur: 0.6 },
        { name: 'Dha2', freq: 466.16, dur: 0.6 },
        { name: 'Pa', freq: 415.30, dur: 1.0 },
        { name: 'Ga3', freq: 349.23, dur: 0.8 },
        { name: 'Ri2', freq: 311.13, dur: 0.6 },
        { name: 'Sa', freq: 277.18, dur: 1.5 }
      ];
    }

    init() {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContextClass();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    startDrone() {
      // Tanpura Drone on Sa (138.59 Hz C#3) and Pa (207.65 Hz G#3)
      const baseSa = 138.59;
      const basePa = 207.65;
      const highSa = 277.18;

      [baseSa, basePa, highSa].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        // Slight detune for natural chorus
        osc.frequency.setValueAtTime(freq + (idx === 1 ? -0.5 : 0.5), this.ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.045, this.ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start();
        this.droneNodes.push({ osc, gain });
      });
    }

    playNadaswaramNote(freq, duration) {
      if (!this.isPlaying || !this.ctx) return;

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const bpf = this.ctx.createBiquadFilter();
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();

      // Nadaswaram double-reed timbre (sawtooth + square mix)
      osc1.type = 'sawtooth';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq, now);

      // Carnatic Gamaka vibrato (5.5 Hz)
      vibrato.frequency.setValueAtTime(5.5, now);
      vibratoGain.gain.setValueAtTime(freq * 0.022, now); // subtle pitch vibrato
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc1.frequency);
      vibratoGain.connect(osc2.frequency);
      vibrato.start(now);

      // Resonant formant filter for piercing, rich Nadaswaram bell tone
      bpf.type = 'bandpass';
      bpf.frequency.setValueAtTime(1900, now);
      bpf.Q.setValueAtTime(2.2, now);

      // Smooth breath envelope
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.14, now + 0.08); // attack
      noteGain.gain.setValueAtTime(0.14, now + duration - 0.1);
      noteGain.gain.linearRampToValueAtTime(0.001, now + duration); // release

      osc1.connect(bpf);
      osc2.connect(bpf);
      bpf.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc1.start(now);
      osc2.start(now);

      osc1.stop(now + duration);
      osc2.stop(now + duration);
      vibrato.stop(now + duration);
    }

    playThavilBeat(isBass) {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;

      if (isBass) {
        // Thoppi: Deep bass resonant boom with rapid downward pitch glide
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(55, now + 0.18);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.25);
      } else {
        // Valanthalai: Crisp stick crack with high resonance
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.1);
      }
    }

    scheduleNextLoop() {
      if (!this.isPlaying) return;

      const note = this.swaras[this.currentNoteIndex];
      this.playNadaswaramNote(note.freq, note.dur);

      // Thavil sync beats
      this.playThavilBeat(this.currentNoteIndex % 2 === 0);
      if (note.dur > 0.8) {
        setTimeout(() => {
          if (this.isPlaying) this.playThavilBeat(false);
        }, 300);
      }

      this.currentNoteIndex = (this.currentNoteIndex + 1) % this.swaras.length;
      this.timerId = setTimeout(() => {
        this.scheduleNextLoop();
      }, note.dur * 850);
    }

    play() {
      this.init();
      this.isPlaying = true;
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.85, this.ctx.currentTime + 1.2);
      this.startDrone();
      this.currentNoteIndex = 0;
      this.scheduleNextLoop();
    }

    pause() {
      this.isPlaying = false;
      if (this.timerId) clearTimeout(this.timerId);
      if (this.ctx && this.masterGain) {
        this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
        this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        this.droneNodes.forEach(({ osc }) => {
          try { osc.stop(); } catch (e) {}
        });
        this.droneNodes = [];
      }, 550);
    }

    toggle() {
      if (this.isPlaying) {
        this.pause();
        return false;
      } else {
        this.play();
        return true;
      }
    }
  }

  class WeddingAudioPlayer {
    constructor(audioEl, synthFallback) {
      this.audio = audioEl;
      this.synth = synthFallback;
      this.isPlaying = false;
      this.useSynth = false;

      if (this.audio) {
        this.audio.addEventListener('error', () => {
          this.useSynth = true;
        });
        this.audio.addEventListener('ended', () => {
          this.isPlaying = false;
          btnAudio.classList.remove('playing');
          audioBtnLabel.textContent = translations[currentLang].audioPlay;
        });
      } else {
        this.useSynth = true;
      }
    }

    play() {
      this.isPlaying = true;
      if (!this.useSynth && this.audio) {
        const promise = this.audio.play();
        if (promise !== undefined) {
          promise.catch((err) => {
            console.warn('Audio play failed, falling back to synth:', err);
            this.useSynth = true;
            this.synth.play();
          });
        }
      } else {
        this.synth.play();
      }
    }

    pause() {
      this.isPlaying = false;
      if (!this.useSynth && this.audio) {
        this.audio.pause();
      }
      this.synth.pause();
    }

    toggle() {
      if (this.isPlaying) {
        this.pause();
        return false;
      } else {
        this.play();
        return true;
      }
    }
  }

  const audioPlayer = new WeddingAudioPlayer(weddingAudio, new MangalaVathiyamEngine());

  btnAudio.addEventListener('click', () => {
    const isNowPlaying = audioPlayer.toggle();
    if (isNowPlaying) {
      btnAudio.classList.add('playing');
      audioBtnLabel.textContent = translations[currentLang].audioPause;
      showToast(currentLang === 'ta' ? 'மங்கல இசை ஒலிக்கிறது...' : 'Playing wedding music...');
    } else {
      btnAudio.classList.remove('playing');
      audioBtnLabel.textContent = translations[currentLang].audioPlay;
    }
  });

  // ==========================================================================
  // 9. FALLING JASMINE & MARIGOLD PETALS SIMULATION ENGINE
  // ==========================================================================
  class PetalParticle {
    constructor(w, h) {
      this.reset(w, h, true);
    }

    reset(w, h, initial = false) {
      this.x = Math.random() * w;
      this.y = initial ? Math.random() * h : -30;
      this.size = 10 + Math.random() * 12;
      this.speedY = 1.8 + Math.random() * 2.2;
      this.speedX = -0.6 + Math.random() * 1.2;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 3.5;
      this.oscillation = Math.random() * Math.PI * 2;
      this.oscSpeed = 0.03 + Math.random() * 0.04;
      
      // 55% Marigold (Gold/Saffron), 45% Jasmine (Pure White/Ivory)
      this.isMarigold = Math.random() > 0.45;
      if (this.isMarigold) {
        this.color = Math.random() > 0.5 ? '#F4A261' : '#E7A93B';
        this.opacity = 0.75 + Math.random() * 0.2;
      } else {
        this.color = '#FFFFFF';
        this.opacity = 0.8 + Math.random() * 0.2;
      }
    }

    update(w, h) {
      this.y += this.speedY;
      this.oscillation += this.oscSpeed;
      this.x += Math.sin(this.oscillation) * 1.2 + this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y > h + 30 || this.x < -30 || this.x > w + 30) {
        this.reset(w, h, false);
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.scale(Math.cos(this.oscillation), 1); // 3D flip effect

      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;

      if (this.isMarigold) {
        // Marigold (Sevvanthi) petal shape
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(this.size * 0.5, -this.size * 0.4, this.size * 0.5, this.size * 0.6, 0, this.size);
        ctx.bezierCurveTo(-this.size * 0.5, this.size * 0.6, -this.size * 0.5, -this.size * 0.4, 0, -this.size);
        ctx.fill();

        // Subtle center stroke
        ctx.strokeStyle = '#FFE8A3';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 0.7);
        ctx.lineTo(0, this.size * 0.7);
        ctx.stroke();
      } else {
        // Jasmine (Malli) delicate rounded white petal
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.45, this.size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        // Pale creamy base
        ctx.fillStyle = '#FFEBB3';
        ctx.beginPath();
        ctx.arc(0, this.size * 0.5, this.size * 0.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  class PetalShower {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.active = false;
      this.canvas.classList.add('paused');
      this.animId = null;

      this.resize();
      window.addEventListener('resize', () => this.resize());

      const count = window.innerWidth < 768 ? 20 : 35;
      for (let i = 0; i < count; i++) {
        this.particles.push(new PetalParticle(this.width, this.height));
      }

      this.loop = this.loop.bind(this);
      this.loop();
    }

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }

    toggle() {
      this.active = !this.active;
      if (this.active) {
        this.canvas.classList.remove('paused');
      } else {
        this.canvas.classList.add('paused');
      }
      return this.active;
    }

    loop() {
      if (this.active) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].update(this.width, this.height);
          this.particles[i].draw(this.ctx);
        }
      }
      this.animId = requestAnimationFrame(this.loop);
    }
  }

  const petalShower = new PetalShower(petalsCanvas);

  btnPetalToggle.addEventListener('click', () => {
    const isNowActive = petalShower.toggle();
    btnPetalToggle.classList.toggle('active', isNowActive);
    showToast(isNowActive 
      ? (currentLang === 'ta' ? 'பூமழை இயக்கப்பட்டது!' : 'Floral shower enabled!')
      : (currentLang === 'ta' ? 'பூமழை நிறுத்தப்பட்டது.' : 'Floral shower paused.')
    );
  });

  // ==========================================================================
  // 10. INITIALIZATION
  // ==========================================================================
  setLanguage('en');
  updateCalendarLinks();

})();
