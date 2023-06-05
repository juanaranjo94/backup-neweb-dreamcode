import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import enTranslation from "./en.json";
import esTranslation from "./es.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en", //default language
    fallbackLng: 'en'
  });

export default i18n;