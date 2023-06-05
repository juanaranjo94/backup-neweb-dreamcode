import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('aboutPage.title')}</h1>
        <p>{t('aboutPage.text')}</p>
        <p>{t('aboutPage.btn.text')}</p>
      </header>
    </div>
  );
}

export default About;

