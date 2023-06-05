import React from 'react'
import { useTranslation } from 'react-i18next';


function Scrum() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <div className="App-header">
        <h1>{t('homePage.title')}</h1>
        <p>{t('homePage.text')}</p>
      </div>
    </div>
  )
}

export default Scrum;