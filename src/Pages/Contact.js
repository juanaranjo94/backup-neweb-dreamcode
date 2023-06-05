import React from 'react'
import { useTranslation } from 'react-i18next';


function Contact(props) {

  const { t } = useTranslation();

  return (
    <div className='App'>
        <div className='App-header'>
            <h1>{t('contact')}</h1>
            <p>Lang:  {t('locale')}</p>
        </div>
    </div>
  )
}

export default Contact;