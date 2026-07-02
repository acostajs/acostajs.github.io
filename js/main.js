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

function setupMobileMenu() {
  const burgerToggle = document.getElementById('burger-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (!burgerToggle || !navMenu) {
    return;
  }

  function toggleMenu(event) {
    if (event) {
      event.stopPropagation();
    }
    const isOpen = navMenu.classList.toggle('open');
    burgerToggle.classList.toggle('open', isOpen);
    burgerToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    burgerToggle.classList.remove('open');
    burgerToggle.setAttribute('aria-expanded', 'false');
  }

  burgerToggle.addEventListener('click', toggleMenu);

  const navLinks = navMenu.querySelectorAll('.nav-link');
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', closeMenu);
  }

  document.addEventListener('click', function (event) {
    const isClickInside = burgerToggle.contains(event.target) || navMenu.contains(event.target);
    if (!isClickInside && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      burgerToggle.focus();
    }
  });
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

  setupMobileMenu();
  startTerminalSimulation();
  highlightNav();
  setupImagePopup();
}

function setupImagePopup() {
  const popup = document.getElementById('imagePopup');
  const popupImg = document.getElementById('popupImage');
  if (!popup || !popupImg) {
    return;
  }

  // Event delegation: intercept click events on valid project screenshots or gallery images
  document.addEventListener('click', function (event) {
    const img = event.target.closest('.stark-hero-image img, .stark-card--gallery img');
    if (!img) {
      return;
    }

    popupImg.src = img.src; // Dynamically grab the same source
    popupImg.alt = img.alt || 'Enlarged view';
    popup.classList.add('active');
  });

  // Close the popup when clicking on the overlay
  popup.addEventListener('click', function () {
    popup.classList.remove('active');

    // Clear src after transition to prevent a visual flash next time it opens
    setTimeout(function () {
      if (!popup.classList.contains('active')) {
        popupImg.src = '';
      }
    }, 300);
  });
}

document.addEventListener('DOMContentLoaded', init);
