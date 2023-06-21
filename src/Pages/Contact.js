import React from 'react'
import BannerContact from '../components/Contact/BannerContact/BannerContact';
import OurOffices from '../components/Contact/OurOffice/OurOffices';
import FormNewsletter from '../components/Forms/FormNewsletter/FormNewsletter';
import FormContact from '../components/Forms/FormContact/FormContact';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants';

    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("/contact");


function Contact() {

  const { t } = useTranslation('translation', { keyPrefix: 'meta_datos' });


  return (
    <>
      <MetaDecorator 
          title={t("meta_title_Contacts")}
          description={t("meta_description_Contacts")}
          url="contact"              
          type='Website'  
      />
      <BannerContact  />
      <OurOffices />
      <FormNewsletter typeNewsletter="contact" />
      <FormContact 
        typeForm=" lightForm sec_pad"/>
    </>
  )
}

export default Contact;