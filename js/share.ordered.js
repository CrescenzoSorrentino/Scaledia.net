/*!
  share — Ordered Build
  Generated: 2025-08-24T11:38:45
  Notes:
  - File riordinato per leggibilità e performance (IIFE, 'use strict').
  - La logica resta invariata.
*/

(function(){
'use strict';
// === share · Imports ===

// === share · Costanti/Variabili ===
    const t = (key, def) => i18next.t(key, { defaultValue: def });
      const p = c.querySelector('p');
      const setAria = (sel, key, def) => {
        const el = c.querySelector(sel);
      const nativeBtn = c.querySelector('[data-share="native"]');
      const copyBtn = c.querySelector('[data-share="copy"]');
      const containers = document.querySelectorAll('.share-article');
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      const url = canonicalEl ? canonicalEl.getAttribute('href') : location.href;
      const title = (ogTitleEl ? ogTitleEl.getAttribute('content') : document.title) || '';
      const u = encodeURIComponent(url);
      const t = encodeURIComponent(title);
      const copyToClipboard = (text) => {
            const ta = document.createElement('textarea');
        const setHref = (key, href) => {
          const el = c.querySelector(`[data-share="${key}"]`);
        const nativeBtn = c.querySelector('[data-share="native"]');
          const row = c.querySelector('.d-flex.flex-wrap.gap-2') || c.querySelector('.d-flex') || c;
          const copyBtn = document.createElement('button');
          const tCopy = (k, def)=> (window.i18next ? i18next.t(k,{ defaultValue: def }) : def);
            const ok = await copyToClipboard(url);
            let ok = false;

// === share · Classi ===

// === share · Funzioni ===
  function translateShareUI() {
    document.querySelectorAll('.share-article').forEach((c) => {
  function initShare() {
            return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
        return new Promise((resolve) => {
      containers.forEach((c) => {
              navigator.share({ title, url }).catch(() => {});
            setTimeout(() => {

// === share · Eventi ===
            nativeBtn.addEventListener('click', (e) => {
          copyBtn.addEventListener('click', async (e) => {
    document.addEventListener('DOMContentLoaded', initShare, { once: true });

// === share · Altri frammenti ===
'use strict';
(function(){
    if (!window.i18next) return;
      if (p) p.textContent = t('share.label', 'Condividi:');
        if (!el) return;
        el.setAttribute('aria-label', t(key, def));
      };
      setAria('[data-share="whatsapp"]', 'share.whatsapp_aria', 'Condividi su WhatsApp');
      setAria('[data-share="telegram"]', 'share.telegram_aria', 'Condividi su Telegram');
      setAria('[data-share="facebook"]', 'share.facebook_aria', 'Condividi su Facebook');
      setAria('[data-share="linkedin"]', 'share.linkedin_aria', 'Condividi su LinkedIn');
      if (nativeBtn) {
        nativeBtn.textContent = t('share.native', 'Condividi');
        nativeBtn.setAttribute('aria-label', t('share.native', 'Condividi'));
      }
      if (copyBtn) {
        copyBtn.setAttribute('aria-label', t('share.copy', 'Copia link'));
        if (copyBtn.dataset.state !== 'feedback') {
          copyBtn.textContent = t('share.copy', 'Copia link');
        }
      }
    });
  }
    try {
      if (!containers.length) return;
        try {
          if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          }
        } catch (_) {}
          try {
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.position = 'absolute';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            ta.setSelectionRange(0, ta.value.length);
            try { ok = document.execCommand('copy'); } catch (_) {}
            document.body.removeChild(ta);
            resolve(!!ok);
          } catch (_) {
            resolve(false);
          }
        });
      };
          if (!el) return;
          if (el.tagName && el.tagName.toLowerCase() === 'a') {
            el.setAttribute('href', href);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
          } else {
            el.dataset.href = href;
          }
        };
        setHref('whatsapp', `https://api.whatsapp.com/send?text=${t}%20${u}`);
        setHref('telegram', `https://t.me/share/url?url=${u}&text=${t}`);
        setHref('facebook', `https://www.facebook.com/sharer/sharer.php?u=${u}`);
        setHref('linkedin', `https://www.linkedin.com/sharing/share-offsite/?url=${u}`);
        if (nativeBtn) {
          if (navigator.share) {
              e.preventDefault();
            }, { once: true });
          } else {
            nativeBtn.classList.add('d-none');
          }
        }
        if (!c.querySelector('[data-share="copy"]')) {
          copyBtn.type = 'button';
          copyBtn.className = 'btn btn-outline-secondary btn-sm';
          copyBtn.setAttribute('data-share', 'copy');
          copyBtn.setAttribute('aria-label', tCopy('share.copy','Copia link'));
          copyBtn.textContent = tCopy('share.copy','Copia link');
            e.preventDefault();
            copyBtn.dataset.state = 'feedback';
            copyBtn.textContent = ok ? tCopy('share.copied','Copiato!') : tCopy('share.error','Errore');
            try { copyBtn.disabled = true; } catch (_) {}
              delete copyBtn.dataset.state;
              copyBtn.textContent = tCopy('share.copy','Copia link');
              try { copyBtn.disabled = false; } catch (_) {}
            }, 1200);
          });
          row.appendChild(copyBtn);
        }
      });
    } catch (_) { /* no-op */ }
  }
  window.ShareUI = {
    translate: translateShareUI,
    init: initShare
  };
  if (document.readyState === 'loading') {
  } else {
    initShare();
  }
})();

// === share · Export ===
})();
