import { startTerminalSimulation } from './terminal-simulation.js';
import { translations } from './translations/registry.js';

window.translations = translations;

let currentLang = 'en';

function translatePage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = lang === 'en' ? 'FR' : 'EN';
    langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to French' : 'Passer à l\'anglais');
  }

  const dict = window.translations ? window.translations[lang] : null;
  if (!dict) {
    return;
  }

  const elements = document.querySelectorAll('[data-i18n]');
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', dict[key]);
      } else if (el.tagName === 'IMG') {
        el.setAttribute('alt', dict[key]);
      } else {
        el.innerHTML = dict[key];
      }
    }
  }
}

function toggleLanguage() {
  const nextLang = currentLang === 'en' ? 'fr' : 'en';
  translatePage(nextLang);
}

function highlightNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  for (let i = 0; i < navLinks.length; i++) {
    const link = navLinks[i];
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }
}

function init() {
  const savedLang = localStorage.getItem('lang');
  const browserLang = navigator.language || navigator.userLanguage;
  const initialLang = savedLang || (browserLang && browserLang.startsWith('fr') ? 'fr' : 'en');

  translatePage(initialLang);

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  startTerminalSimulation();
  highlightNav();
}

document.addEventListener('DOMContentLoaded', init);
