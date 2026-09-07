import { globalTranslations } from './global.js';
import { indexTranslations } from './index.js';
import { contactTranslations } from './contact.js';
import { ceramicShopTranslations } from './ceramic-shop-django.js';
import { customKeyboardTranslations } from './custom-keyboard-collective.js';
import { pozoleTranslations } from './pozole-flask-api.js';

export const translations = {
  en: {
    ...globalTranslations.en,
    ...indexTranslations.en,
    ...contactTranslations.en,
    ...ceramicShopTranslations.en,
    ...customKeyboardTranslations.en,
    ...pozoleTranslations.en
  },
  fr: {
    ...globalTranslations.fr,
    ...indexTranslations.fr,
    ...contactTranslations.fr,
    ...ceramicShopTranslations.fr,
    ...customKeyboardTranslations.fr,
    ...pozoleTranslations.fr
  }
};
