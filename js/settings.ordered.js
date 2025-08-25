/*!
  settings — Ordered Build
  Generated: 2025-08-24T11:38:45
  Notes:
  - File riordinato per leggibilità e performance (IIFE, 'use strict').
  - La logica resta invariata.
*/

(function(){
'use strict';
// === settings · Imports ===

// === settings · Costanti/Variabili ===
  const STORAGE_KEYS = { theme: 'scaledia_theme', themeAuto: 'scaledia_theme_auto', lang: 'scaledia_lang', a11yContrast: 'scaledia_a11y_contrast', a11yMotion: 'scaledia_reduce_motion', a11yLargeText: 'scaledia_large_text', a11yUnderlineLinks: 'scaledia_underline_links', a11yTextSpacing: 'scaledia_text_spacing', a11yDyslexic: 'scaledia_dyslexic_font' };
  const THEMES = { LIGHT: 'light', DARK: 'dark' };
  const DEFAULT_LANG = 'it';
  const savedLang = (localStorage.getItem(STORAGE_KEYS.lang) || DEFAULT_LANG).toLowerCase();
  const savedTheme = (localStorage.getItem(STORAGE_KEYS.theme) || THEMES.LIGHT).toLowerCase();
  const savedThemeAuto = localStorage.getItem(STORAGE_KEYS.themeAuto) === 'true';
    const hc = localStorage.getItem(STORAGE_KEYS.a11yContrast) === 'true';
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const root = document.documentElement;
      const hasHC = localStorage.getItem(STORAGE_KEYS.a11yContrast) === 'true';
      const style = document.createElement('style');
      const style = document.createElement('style');
    const root = document.documentElement;
    const hcActive = root.classList.contains('a11y-contrast') || localStorage.getItem(STORAGE_KEYS.a11yContrast) === 'true';
    const requested = theme === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT;
    const val = hcActive ? THEMES.LIGHT : requested;
    const el = document.querySelector(selector);
    const langSelect = document.querySelector('#selectLang');
      const optIt = langSelect.querySelector('option[value="it"]');
      const optEn = langSelect.querySelector('option[value="en"]');
      const optEs = langSelect.querySelector('option[value="es"]');
    const val = i18next.t(key, { defaultValue: def || '' });
    const scope = root || document;
      const el = scope && scope.nodeType === 1 ? scope : null;
      const key = el.getAttribute('data-i18n');
      const current = el.textContent;
      const val = tWithDefault(key, current || '');
      const attrs = (el.getAttribute('data-i18n-attr') || '')
        const aKey = el.getAttribute(`data-i18n-${attr}`) || key;
        const curAttr = el.getAttribute(attr) || '';
        const aVal = tWithDefault(aKey, curAttr);
      const key = el.getAttribute('data-i18n-html');
      const currentHtml = el.innerHTML;
      const val = tWithDefault(key, currentHtml || '');
      const attrs = (el.getAttribute('data-i18n-attr') || '')
        const aKey = el.getAttribute(`data-i18n-${attr}`);
        const curAttr = el.getAttribute(attr) || '';
        const aVal = tWithDefault(aKey, curAttr);
    const scope = root || document;
    const currentLang =
      const iso = (t.getAttribute('datetime') || '').trim();
      const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        const y = parseInt(m[1], 10),
      const tSettingsTitle = tWithDefault('settingsTitle', 'Impostazioni');
      const tDarkMode = tWithDefault('darkMode', 'Tema scuro');
      const tLanguage = tWithDefault('language', 'Lingua');
      const tLangIt = tWithDefault('lang_it', 'Italiano');
      const tLangEn = tWithDefault('lang_en', 'Inglese');
      const tLangEs = tWithDefault('lang_es', 'Spagnolo');
      const tAccessibility = tWithDefault('accessibility', 'Accessibilità');
        const wrapS = document.createElement('div');
    const navList = document.querySelector('.navbar .navbar-nav');
      const li = document.createElement('li');
      const moreText = tWithDefault('more', 'Altro');
      const tClientsTitle = tWithDefault('clients_title', 'I nostri clienti');
      const tSettingsTitle = tWithDefault('settings', 'Impostazioni');
    const autoToggle = document.getElementById('toggleThemeAuto');
    const darkToggle = document.getElementById('toggleDarkMode');
    const rootHasHC = () => document.documentElement.classList.contains('a11y-contrast') || localStorage.getItem(STORAGE_KEYS.a11yContrast) === 'true';
    const attachThemeMql = () => {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => {
    const detachThemeMql = () => {
        const { mql, handler } = themeMqlObj;
      const hcActive = rootHasHC();
      const savedAuto = localStorage.getItem(STORAGE_KEYS.themeAuto) === 'true';
        const hcNow = rootHasHC();
      const hcActive = rootHasHC();
        const hcNow = rootHasHC();
      const el = document.getElementById(id);
      const root = document.documentElement;
      const saved = localStorage.getItem(storageKey) === 'true';
            const darkToggle = document.getElementById('toggleDarkMode');
            const autoToggle = document.getElementById('toggleThemeAuto');
            const darkToggle = document.getElementById('toggleDarkMode');
            const autoToggle = document.getElementById('toggleThemeAuto');
    const langSel = document.getElementById('selectLang');
      const currentLang =
    const safeLang = (typeof lang === 'string' && lang.trim()) ? lang.trim() : DEFAULT_LANG;
      const s = document.createElement('script');
      const pending = new Set();
      const scheduleFlush = () => {
        const run = () => {
          const nodes = Array.from(pending);
      const observer = new MutationObserver((mutations) => {
      const target = document.body || document.documentElement;
    const i18n = window.i18next;
    const a = e.target && e.target.closest ? e.target.closest('a[href="#"]') : null;
      var t = (theme === THEMES.DARK || theme === 'dark') ? 'dark' : 'light';
      var doc = document;
      var el = doc.getElementById('cusdis_thread');
      var host = (el && (el.getAttribute('data-host') || 'https://cusdis.com')) || 'https://cusdis.com';
      var iframe = el && el.querySelector('iframe');
      var current = (document.documentElement.getAttribute('data-bs-theme') === 'dark') ? THEMES.DARK : THEMES.LIGHT;
    let formatter;
      let date;
    let themeMqlObj = null; // { mql, handler }
      let scheduled = false;
      var y = String(new Date().getFullYear());
      var nodes = document.querySelectorAll('time#year');
    var KEY = 'scaledia_service_notice_dismissed';
      var bar = document.createElement('div');
      var inner = document.createElement('div');
      var btn = document.createElement('button');
      var body = document.body || document.documentElement;

// === settings · Classi ===

// === settings · Funzioni ===
  function applyTheme(theme) {
  function updateCusdisTheme(theme) {
  function setText(selector, text) {
  function translateCommonUI() {
  function tWithDefault(key, def) {
  function applyDataI18n(root) {
    scope.querySelectorAll('[data-i18n]').forEach((el) => {
        .map((s) => s.trim())
      attrs.forEach((attr) => {
    scope.querySelectorAll('[data-i18n-html]').forEach((el) => {
    scope.querySelectorAll('[data-i18n-attr]:not([data-i18n])').forEach((el) => {
        .map((s) => s.trim())
      attrs.forEach((attr) => {
  function formatDates(root) {
    scope.querySelectorAll('time[datetime]:not(#year)').forEach((t) => {
  function injectSettingsUI() {
    function bindA11yToggle(id, className, storageKey) {
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      s.onerror = () => reject(new Error('Failed to load ' + src));
  function setupI18nObserver() {
            m.addedNodes.forEach((node) => {
  function initI18next() {
      .then(() => {
        i18next.on('languageChanged', () => {
      .then(() => initI18next())
      .catch((err) => {
  function updateFooterYear() {
    function injectNotice() {

// === settings · Eventi ===
  html.a11y-reduce-motion * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  document.addEventListener('DOMContentLoaded', function () {
            <form class="vstack gap-4" onsubmit="return false;">
      if (mql.addEventListener) mql.addEventListener('change', handler);
        if (mql.removeEventListener) mql.removeEventListener('change', handler);
      autoToggle.addEventListener('change', () => {
      darkToggle.addEventListener('change', () => {
      el.addEventListener('change', () => {
      langSel.addEventListener('change', () => {
        changeLanguage(langSel.value);
  function changeLanguage(lang) {
    if (window.i18next && typeof i18next.changeLanguage === 'function') {
      i18next.changeLanguage(lang).then(() => {
      s.onload = () => resolve();
          document.addEventListener('DOMContentLoaded', () => {
          document.addEventListener('DOMContentLoaded', injectSettingsUI, { once: true });
    document.addEventListener('DOMContentLoaded', updateFooterYear, { once: true });
  document.addEventListener('click', function (e) {
      btn.addEventListener('click', function(){
      document.addEventListener('DOMContentLoaded', injectNotice, { once: true });

// === settings · Altri frammenti ===
/*
  Settings UI: Dark mode + Language (IT/EN)
  - Injects a navbar "Impostazioni/Settings" item that opens an offcanvas
  - Persists theme and language in localStorage
  - Applies Bootstrap 5.3 color mode via data-bs-theme on <html>
  - Uses i18next (+ http-backend + language detector) for translations
  - Translates common navbar labels and Settings UI
*/
(function () {
  'use strict';
  window.CUSDIS_APP_ID = window.CUSDIS_APP_ID || '5d4b1f03-575d-4fb3-93fc-f18bed01d7df';
  try { document.documentElement.classList.add('js-enabled'); } catch (_) {}
  try {
    if (!hc && savedThemeAuto && typeof window.matchMedia === 'function') {
      applyTheme(prefersDark ? THEMES.DARK : THEMES.LIGHT);
    } else {
      applyTheme(savedTheme);
    }
  } catch (_) {
    applyTheme(savedTheme);
  }
  document.documentElement.setAttribute('lang', savedLang);
  (function applyEarlyA11yPrefs(){
    try {
      if (hasHC) {
        root.classList.add('a11y-contrast');
        applyTheme(THEMES.LIGHT);
      }
      if (localStorage.getItem(STORAGE_KEYS.a11yMotion) === 'true') root.classList.add('a11y-reduce-motion');
      if (localStorage.getItem(STORAGE_KEYS.a11yLargeText) === 'true') root.classList.add('a11y-large-text');
      if (localStorage.getItem(STORAGE_KEYS.a11yUnderlineLinks) === 'true') root.classList.add('a11y-underline-links');
      if (localStorage.getItem(STORAGE_KEYS.a11yTextSpacing) === 'true') root.classList.add('a11y-text-spacing');
      if (localStorage.getItem(STORAGE_KEYS.a11yDyslexic) === 'true') root.classList.add('a11y-dyslexic');
    } catch (_) {}
    if (!document.getElementById('a11yPrefsStyles')) {
      style.id = 'a11yPrefsStyles';
      style.textContent = `
html.a11y-large-text { font-size: 112.5%; }
html.a11y-underline-links a { text-decoration: underline !important; }
html.a11y-text-spacing { letter-spacing: 0.0125em; word-spacing: 0.16em; line-height: 1.6; }
html.a11y-dyslexic { font-family: "OpenDyslexic", "Atkinson Hyperlegible", "Comic Sans MS", "Arial", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important; }
@media (prefers-reduced-motion: no-preference) {
}
html.a11y-contrast { --bs-body-color: #000; --bs-body-bg: #fff; --bs-link-color: #003399; --bs-border-color: #000; }
`;
      document.head.appendChild(style);
    }
  })();
  (function injectSettingsTypography(){
    if (!document.getElementById('settingsTypographyStyles')) {
      style.id = 'settingsTypographyStyles';
      style.textContent = `
#offcanvasSettings .offcanvas-title { font-size: 1.25rem; line-height: 1.3; font-weight: 700; letter-spacing: 0.005em; color: var(--bs-heading-color); }
#offcanvasSettings .offcanvas-header { padding-bottom: 0.75rem; }
#offcanvasSettings .offcanvas-body { font-size: 1rem; line-height: 1.6; letter-spacing: 0.005em; }
#offcanvasSettings fieldset + fieldset { margin-top: 1rem; }
#offcanvasSettings legend { font-size: 1rem; font-weight: 600; color: var(--bs-heading-color); letter-spacing: 0.01em; margin-bottom: 0.5rem; }
#offcanvasSettings .form-check-label, #offcanvasSettings label.form-label { font-weight: 500; line-height: 1.5; }
#offcanvasSettings .form-check { margin-bottom: 0.25rem; }
#offcanvasSettings .form-select { font-size: 1rem; }
`;
      document.head.appendChild(style);
    }
  })();
    if (root.getAttribute('data-bs-theme') !== val) {
      root.setAttribute('data-bs-theme', val);
    }
    try {
      localStorage.setItem(STORAGE_KEYS.theme, val);
    } catch (_) {}
    try { if (typeof updateCusdisTheme === 'function') updateCusdisTheme(val); } catch (_) {}
  }
    try {
      if (el) {
        try { el.setAttribute('data-theme', t); } catch (_) {}
      }
      try {
        if (window.CUSDIS && typeof window.CUSDIS.setTheme === 'function') {
          window.CUSDIS.setTheme(t);
          return;
        }
      } catch (_) {}
      if (iframe && iframe.contentWindow) {
        try {
          iframe.contentWindow.postMessage({ type: 'set-theme', theme: t }, host);
          return;
        } catch (_) {}
      }
      if (!updateCusdisTheme._retries) updateCusdisTheme._retries = 0;
      if (updateCusdisTheme._retries < 10) {
        updateCusdisTheme._retries += 1;
        setTimeout(function () { updateCusdisTheme(theme); }, 300);
      }
    } catch (_) {}
  }
    try {
      updateCusdisTheme(current);
    } catch (_) {}
  });
    if (el && typeof text === 'string') el.textContent = text;
  }
    if (!window.i18next) {
      formatDates();
      return;
    }
    setText('a.nav-link[href$="index.html"]', i18next.t('nav.home'));
    setText('a.nav-link[href$="articoli.html"]', i18next.t('nav.articles'));
    setText('a.nav-link[href$="servizi.html"]', i18next.t('nav.services'));
    setText('a.nav-link[href$="chi-siamo.html"]', i18next.t('nav.about'));
    setText('a.nav-link[href$="contatti.html"]', i18next.t('nav.contact'));
    setText('a.visually-hidden-focusable[href^="#"]', i18next.t('skip'));
    setText('#moreDropdown', i18next.t('more'));
    setText('#menuSettings', i18next.t('settings'));
    setText('#offcanvasSettingsLabel', i18next.t('settingsTitle'));
    setText('label[for="toggleThemeAuto"]', i18next.t('followSystem'));
    setText('label[for="toggleDarkMode"]', i18next.t('darkMode'));
    setText('label[for="toggleHighContrast"]', i18next.t('highContrast'));
    setText('label[for="toggleReduceMotion"]', i18next.t('reduceMotion'));
    setText('label[for="toggleLargeText"]', i18next.t('largeText'));
    setText('label[for="toggleUnderlineLinks"]', i18next.t('underlineLinks'));
    setText('label[for="toggleTextSpacing"]', i18next.t('textSpacing'));
    setText('label[for="toggleDyslexicFont"]', i18next.t('dyslexicFont'));
    setText('label[for="selectLang"]', i18next.t('language'));
    if (langSelect) {
      if (optIt) optIt.textContent = i18next.t('lang_it');
      if (optEn) optEn.textContent = i18next.t('lang_en');
      if (optEs) optEs.textContent = i18next.t('lang_es');
      langSelect.setAttribute('aria-label', i18next.t('language'));
    }
    applyDataI18n();
    if (window.ShareUI && typeof window.ShareUI.translate === 'function') { window.ShareUI.translate(); }
    formatDates();
  }
    if (!window.i18next) return def || '';
    return typeof val === 'string' ? val : (def || '');
  }
    if (!window.i18next) return;
    try {
      if (!(((el && (el.hasAttribute('data-i18n') || el.hasAttribute('data-i18n-html') || el.hasAttribute('data-i18n-attr')))) || scope.querySelector('[data-i18n],[data-i18n-html],[data-i18n-attr]'))) {
        return;
      }
    } catch (_) {}
      if (!key) return;
      if (typeof val === 'string' && val !== current) el.textContent = val;
        .split(',')
        .filter(Boolean);
        if (typeof aVal === 'string' && aVal !== curAttr) el.setAttribute(attr, aVal);
      });
    });
      if (!key) return;
      if (typeof val === 'string' && val !== currentHtml) el.innerHTML = val;
    });
        .split(',')
        .filter(Boolean);
        if (!aKey) return;
        if (typeof aVal === 'string' && aVal !== curAttr) el.setAttribute(attr, aVal);
      });
    });
  }
      (window.i18next && (i18next.resolvedLanguage || i18next.language)) ||
      document.documentElement.getAttribute('lang') ||
      'it';
    try {
      formatter = new Intl.DateTimeFormat(currentLang, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
    } catch (_) {
      formatter = new Intl.DateTimeFormat('it', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
    }
      if (!iso) return;
      if (m) {
          mo = parseInt(m[2], 10) - 1,
          d = parseInt(m[3], 10);
        date = new Date(y, mo, d);
      } else {
        date = new Date(iso);
      }
      if (isNaN(date)) return;
      t.textContent = formatter.format(date);
    });
  }
    (function injectOffcanvasMenus(){
      if (!document.getElementById('offcanvasSettings')) {
        wrapS.innerHTML = `
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasSettings" aria-labelledby="offcanvasSettingsLabel">
        <div class="offcanvas-header">
          <h2 class="offcanvas-title h5" id="offcanvasSettingsLabel">${tSettingsTitle}</h2>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <section>
              <fieldset>
                <legend class="h6 mb-2" data-i18n="appearance">${tWithDefault('appearance','Aspetto')}</legend>
                <div class="form-check form-switch mb-2">
                  <input class="form-check-input" type="checkbox" role="switch" id="toggleThemeAuto">
                  <label class="form-check-label" for="toggleThemeAuto">${tWithDefault('followSystem','Segui sistema')}</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="toggleDarkMode">
                  <label class="form-check-label" for="toggleDarkMode">${tDarkMode}</label>
                </div>
              </fieldset>
              <fieldset>
                <legend class="h6 mb-2" data-i18n="accessibility">${tAccessibility}</legend>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="toggleHighContrast">
                  <label class="form-check-label" for="toggleHighContrast">${tWithDefault('highContrast','Alto contrasto')}</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="toggleReduceMotion">
                  <label class="form-check-label" for="toggleReduceMotion">${tWithDefault('reduceMotion','Riduci animazioni')}</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="toggleLargeText">
                  <label class="form-check-label" for="toggleLargeText">${tWithDefault('largeText','Testo grande')}</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="toggleUnderlineLinks">
                  <label class="form-check-label" for="toggleUnderlineLinks">${tWithDefault('underlineLinks','Sottolinea i link')}</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="toggleTextSpacing">
                  <label class="form-check-label" for="toggleTextSpacing">${tWithDefault('textSpacing','Spaziatura del testo aumentata')}</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="toggleDyslexicFont">
                  <label class="form-check-label" for="toggleDyslexicFont">${tWithDefault('dyslexicFont','Font per dislessia')}</label>
                </div>
              </fieldset>
              <fieldset>
                <legend class="h6 mb-2" data-i18n="language">${tLanguage}</legend>
                <select id="selectLang" class="form-select" aria-label="${tLanguage}">
                  <option value="it">${tLangIt}</option>
                  <option value="en">${tLangEn}</option>
                  <option value="es">${tLangEs}</option>
                </select>
              </fieldset>
            </form>
          </section>
        </div>
      </div>`;
        document.body.appendChild(wrapS.firstElementChild);
      }
    })();
    if (navList && !document.getElementById('moreDropdown')) {
      li.className = 'nav-item dropdown';
      li.innerHTML = `
        <a id="moreDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${moreText}</a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a id="menuSettings" class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSettings" aria-controls="offcanvasSettings">${tSettingsTitle}</a></li>
        </ul>`;
      navList.appendChild(li);
    }
      if (typeof window.matchMedia !== 'function') return;
        if (!rootHasHC() && (localStorage.getItem(STORAGE_KEYS.themeAuto) === 'true')) {
          applyTheme(mql.matches ? THEMES.DARK : THEMES.LIGHT);
        }
      };
      else if (mql.addListener) mql.addListener(handler);
      themeMqlObj = { mql, handler };
      handler();
    };
      if (themeMqlObj && themeMqlObj.mql) {
        else if (mql.removeListener) mql.removeListener(handler);
      }
      themeMqlObj = null;
    };
    if (autoToggle) {
      autoToggle.checked = savedAuto && !hcActive;
      if (hcActive) {
        autoToggle.disabled = true;
      }
      if (autoToggle.checked) {
        if (darkToggle) darkToggle.disabled = true;
        attachThemeMql();
      }
        if (hcNow) {
          autoToggle.checked = false;
          autoToggle.disabled = true;
          try { localStorage.setItem(STORAGE_KEYS.themeAuto, 'false'); } catch (_) {}
          if (darkToggle) { darkToggle.disabled = true; darkToggle.checked = false; }
          applyTheme(THEMES.LIGHT);
          detachThemeMql();
          return;
        }
        if (autoToggle.checked) {
          try { localStorage.setItem(STORAGE_KEYS.themeAuto, 'true'); } catch (_) {}
          if (darkToggle) darkToggle.disabled = true;
          attachThemeMql();
        } else {
          try { localStorage.setItem(STORAGE_KEYS.themeAuto, 'false'); } catch (_) {}
          detachThemeMql();
          if (darkToggle) darkToggle.disabled = false;
          if (darkToggle) {
            applyTheme(darkToggle.checked ? THEMES.DARK : THEMES.LIGHT);
          }
        }
      });
    }
    if (darkToggle) {
      darkToggle.checked = (localStorage.getItem(STORAGE_KEYS.theme) || THEMES.LIGHT) === THEMES.DARK;
      if (hcActive) {
        darkToggle.checked = false;
        darkToggle.disabled = true;
      }
      if (autoToggle && autoToggle.checked) darkToggle.disabled = true;
        if (hcNow) {
          darkToggle.checked = false;
          applyTheme(THEMES.LIGHT);
          return;
        }
        if (autoToggle && autoToggle.checked) {
          autoToggle.checked = false;
          autoToggle.disabled = false;
          try { localStorage.setItem(STORAGE_KEYS.themeAuto, 'false'); } catch (_) {}
          detachThemeMql();
        }
        applyTheme(darkToggle.checked ? THEMES.DARK : THEMES.LIGHT);
      });
    }
      if (!el) return;
      el.checked = saved;
      if (saved) root.classList.add(className);
        if (el.checked) {
          root.classList.add(className);
          try { localStorage.setItem(storageKey, 'true'); } catch (_) {}
          if (storageKey === STORAGE_KEYS.a11yContrast) {
            if (darkToggle) {
              darkToggle.checked = false;
              darkToggle.disabled = true;
            }
            if (autoToggle) {
              autoToggle.checked = false;
              autoToggle.disabled = true;
              try { localStorage.setItem(STORAGE_KEYS.themeAuto, 'false'); } catch (_) {}
            }
            applyTheme(THEMES.LIGHT);
          }
        } else {
          root.classList.remove(className);
          try { localStorage.setItem(storageKey, 'false'); } catch (_) {}
          if (storageKey === STORAGE_KEYS.a11yContrast) {
            if (darkToggle) {
              darkToggle.disabled = false;
            }
            if (autoToggle) {
              autoToggle.disabled = false;
            }
          }
        }
      });
    }
    bindA11yToggle('toggleHighContrast', 'a11y-contrast', STORAGE_KEYS.a11yContrast);
    bindA11yToggle('toggleReduceMotion', 'a11y-reduce-motion', STORAGE_KEYS.a11yMotion);
    bindA11yToggle('toggleLargeText', 'a11y-large-text', STORAGE_KEYS.a11yLargeText);
    bindA11yToggle('toggleUnderlineLinks', 'a11y-underline-links', STORAGE_KEYS.a11yUnderlineLinks);
    bindA11yToggle('toggleTextSpacing', 'a11y-text-spacing', STORAGE_KEYS.a11yTextSpacing);
    bindA11yToggle('toggleDyslexicFont', 'a11y-dyslexic', STORAGE_KEYS.a11yDyslexic);
    if (langSel) {
        (window.i18next && (i18next.resolvedLanguage || i18next.language)) ||
        document.documentElement.getAttribute('lang') ||
        (typeof savedLang === 'string' ? savedLang : DEFAULT_LANG) ||
        DEFAULT_LANG;
      langSel.value = currentLang;
      });
    }
    translateCommonUI();
  }
        try {
          localStorage.setItem(STORAGE_KEYS.lang, i18next.language);
        } catch (_) {}
        document.documentElement.setAttribute('lang', i18next.language || DEFAULT_LANG);
        translateCommonUI();
      });
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEYS.lang, safeLang);
    } catch (_) {}
    document.documentElement.setAttribute('lang', safeLang);
    translateCommonUI();
  }
      s.src = src;
      s.async = true; // ensure non-blocking for dynamically injected scripts
      document.head.appendChild(s);
    });
  }
    if (window.__i18nObserver) return; // singleton
    try {
        if (scheduled) return;
        scheduled = true;
          scheduled = false;
          pending.clear();
          for (const n of nodes) {
            applyDataI18n(n);
            formatDates(n);
          }
        };
        if (typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(run, { timeout: 200 });
        } else if (typeof window.requestAnimationFrame === 'function') {
          window.requestAnimationFrame(run);
        } else {
          setTimeout(run, 0);
        }
      };
        for (const m of mutations) {
          if (m.type === 'childList') {
              if (node && node.nodeType === 1) {
                pending.add(node);
              }
            });
          } else if (m.type === 'attributes') {
            if (m.attributeName && m.attributeName.indexOf('data-i18n') === 0) {
              if (m.target && m.target.nodeType === 1) pending.add(m.target);
            }
          }
        }
        if (pending.size) scheduleFlush();
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          'data-i18n',
          'data-i18n-html',
          'data-i18n-attr',
          'data-i18n-title',
          'data-i18n-placeholder',
          'data-i18n-aria-label',
          'data-i18n-content'
        ],
      });
      window.__i18nObserver = observer;
    } catch (_) {
    }
  }
    if (!window.i18next) return Promise.reject(new Error('i18next not available'));
    if (window.i18nextHttpBackend) i18n.use(window.i18nextHttpBackend);
    if (window.i18nextBrowserLanguageDetector) i18n.use(window.i18nextBrowserLanguageDetector);
    return i18n
      .init({
        fallbackLng: DEFAULT_LANG,
        supportedLngs: ['it', 'en', 'es'],
        debug: false,
        backend: { loadPath: '/assets/i18n/{{lng}}.json' },
        detection: {
          order: ['querystring', 'localStorage', 'htmlTag', 'navigator'],
          caches: ['localStorage'],
          lookupQuerystring: 'lng',
          lookupLocalStorage: STORAGE_KEYS.lang,
        },
      })
        document.documentElement.setAttribute('lang', i18next.language || DEFAULT_LANG);
        translateCommonUI();
          try {
            localStorage.setItem(STORAGE_KEYS.lang, i18next.language);
          } catch (_) {}
          document.documentElement.setAttribute('lang', i18next.language || DEFAULT_LANG);
          translateCommonUI();
        });
        if (document.readyState === 'loading') {
            injectSettingsUI();
            setupI18nObserver();
          }, { once: true });
        } else {
          injectSettingsUI();
          setupI18nObserver();
        }
      });
  }
  (function boot() {
    Promise.all([
      loadScript('https://unpkg.com/i18next@23.11.5/dist/umd/i18next.min.js'),
      loadScript('https://unpkg.com/i18next-http-backend@2.6.1/i18nextHttpBackend.min.js'),
      loadScript('https://unpkg.com/i18next-browser-languagedetector@7.2.0/i18nextBrowserLanguageDetector.min.js')
    ])
        console.error('i18next load/init failed', err);
        if (document.readyState === 'loading') {
        } else {
          injectSettingsUI();
        }
      });
  })();
    try {
      if (!nodes || !nodes.length) return;
      nodes.forEach(function (el) {
        el.textContent = y;
        try { el.setAttribute('datetime', y); } catch (_) {}
      });
    } catch (_) {}
  }
  if (document.readyState === 'loading') {
  } else {
    updateFooterYear();
  }
    if (a) {
      e.preventDefault();
    }
  }, true);
  (function setupServiceNotice(){
      try { if (sessionStorage.getItem(KEY) === '1') return; } catch (_) {}
      if (document.getElementById('globalServiceNotice')) return;
      bar.id = 'globalServiceNotice';
      bar.className = 'alert alert-warning alert-dismissible fade show mb-0 text-center small';
      bar.setAttribute('role', 'alert');
      inner.className = 'container';
      inner.innerHTML = '<strong>Avviso:</strong> il servizio front‑end non è ancora attivo, ma puoi comunque goderti il nostro blog gratuito.';
      btn.type = 'button';
      btn.className = 'btn-close';
      btn.setAttribute('aria-label', 'Chiudi avviso');
        try { sessionStorage.setItem(KEY, '1'); } catch (_) {}
        if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
      });
      bar.appendChild(inner);
      bar.appendChild(btn);
      if (body.firstChild) {
        body.insertBefore(bar, body.firstChild);
      } else {
        body.appendChild(bar);
      }
    }
    if (document.readyState === 'loading') {
    } else {
      injectNotice();
    }
  })();
})();

// === settings · Export ===
})();


/* ---- Privacy & Cookie preferences (Enzuzo) ---- */
(function () {
  'use strict';
  function openCookiePreferences() {
    try {
      if (window.EnzuzoCMP && typeof window.EnzuzoCMP.openPreferences === 'function') {
        window.EnzuzoCMP.openPreferences();
        return;
      }
      if (window.enzuzo && typeof window.enzuzo.open === 'function') {
        try { window.enzuzo.open('preferences'); return; } catch (_) {}
      }
      var trigger = document.querySelector('[data-enzuzo-open],[data-cookie-preferences],[data-enz-open]');
      if (trigger) { trigger.click(); return; }
    } catch (e) {}
    try {
      document.cookie.split(';').forEach(function (c) {
        var k = c.trim().split('=')[0];
        if (/^cookies\-/i.test(k)) {
          document.cookie = k + '=; Max-Age=0; path=/';
        }
      });
    } catch (_) {}
    location.reload();
  }

  function addPrivacyItem() {
    var dropdown = document.getElementById('moreDropdown');
    var menu = dropdown ? dropdown.parentElement.querySelector('.dropdown-menu') : null;
    if (!menu) return;
    if (!document.getElementById('menuPrivacy')) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.id = 'menuPrivacy';
      a.className = 'dropdown-item';
      a.href = '#privacy';
      a.setAttribute('role','button');
      a.textContent = 'Privacy & cookie';
      a.addEventListener('click', function (ev) { ev.preventDefault(); openCookiePreferences(); });
      li.appendChild(a);
      menu.appendChild(li);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addPrivacyItem, { once: true });
  } else {
    addPrivacyItem();
  }
  setTimeout(addPrivacyItem, 500);
  setTimeout(addPrivacyItem, 1500);

  window.openCookiePreferences = openCookiePreferences;
})();
