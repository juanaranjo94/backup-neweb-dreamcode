import React from 'react'
import BannerServices from '../components/Services/BannerServices/BannerServ';
import SliderService from '../components/Services/SliderServices/SliderServices';
import Brochures from '../components/Services/Brochures/Brochures';
import './../components/Services/services.css'
import FormContact from '../components/Forms/FormContact/FormContact';
import { useTranslation } from 'react-i18next';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import ReactGA from 'react-ga';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants'

    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("/services");

function Services() {

  const { t } = useTranslation('translation', { keyPrefix: 'meta_datos' });

  return (
    <div className='bg_serv animeServ' id='services'>
      <MetaDecorator 
        title={t('meta_title_Services')}
        type='website'
        description={t('meta_description_Services')}
        url="services" />
        {/* <div id="ball"></div>   */}
        <BannerServices />
        <SliderService />
        <Brochures />
        <FormContact typeForm="dark py_50 mb-4" />
    </div>
  )
}

export default Services;