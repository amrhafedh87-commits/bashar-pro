// i18n Manager for BasharSec Academy
class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('basharsec_lang') || 'en';
    this.translations = typeof translations !== 'undefined' ? translations : { ar: {}, en: {} };
  }

  init() {
    this.setLanguage(this.currentLang);
  }

  setLanguage(lang) {
    if (lang !== 'ar' && lang !== 'en') lang = 'ar';
    this.currentLang = lang;
    localStorage.setItem('basharsec_lang', lang);

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (lang === 'ar') {
      html.classList.add('lang-ar');
      html.classList.remove('lang-en');
    } else {
      html.classList.add('lang-en');
      html.classList.remove('lang-ar');
    }

    this.updateStaticTexts();

    // Trigger custom event so active lesson, courses catalog, exam, and views re-render
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  t(key) {
    const dict = this.translations[this.currentLang] || this.translations.ar || {};
    return dict[key] !== undefined ? dict[key] : key;
  }

  updateStaticTexts() {
    // 1. Text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text !== undefined && text !== null && text !== key) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', text);
          }
        } else {
          el.innerHTML = text;
        }
      }
    });

    // 2. Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text && text !== key) {
        el.setAttribute('placeholder', text);
      }
    });

    // 3. Title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key);
      if (text && text !== key) {
        el.setAttribute('title', text);
      }
    });

    // 4. Update Language Toggle Button UI
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      langBtn.innerHTML = this.currentLang === 'ar' ? '🌐 English' : '🌐 العربية';
    }
  }

  toggleLanguage() {
    const next = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(next);
  }
}

const i18n = new I18nManager();
if (typeof window !== 'undefined') window.i18n = i18n;
