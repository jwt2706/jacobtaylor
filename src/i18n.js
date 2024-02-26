import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;

/*
create the json files

=-=-=-=-=-=-=-=-

import './i18n';

=-=-=-=-=-=-=-=-

import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return <p>{t('I write code.')}</p>;
}

=-=-=-=-=-=-=-=-

import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <button className="translate-button" onClick={() => i18n.changeLanguage('fr')}>
      Translate to French
    </button>
  );
}


*/