import React from 'react';
import BannerDreamcoders from '../components/Dreamcoders/Banner/BannerDreamcoders';
import Talents from '../components/Dreamcoders/Talents/Talents';
import SliderDreamcoders from '../components/Dreamcoders/Testimonios/SliderDreamcoders';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants';

    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("/dreamcoders");

function Dreamcoders() {

  const { t } = useTranslation('translation', { keyPrefix: 'meta_datos' });

  return (
    <div className="dreamcoders bg-darkblue" id="Dreamcoders">
      <MetaDecorator 
        title={t('meta_title_Dreamcoders')}
        description={t('meta_description_Dreamcoders')}
        type='Website'
        url="dreamcoders" />
      <div className="position-relative">
        <figure className="position-absolute top-0 start-0">
            <img src={require ('../img/dreamcoders/fondo-bn-dreamcoders.png')}  alt="Fondo DreamCoders" height="1000"/>
        </figure>
      </div>   
      <BannerDreamcoders />
      <Talents />
      <SliderDreamcoders />


    </div>
  )
}

export default Dreamcoders;