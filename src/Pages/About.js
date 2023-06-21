import React from 'react';
import Leaders from '../components/About/Leaders/Leaders';
import Experince from '../components/About/Experience/Experince';
import Clients from '../components/About/Clients/Clients';
import Values from '../components/About/Values/Values';
import Team from '../components/About/Team/Team';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants'

    // Configuración de Google Analytics
    ReactGA.initialize (ID_GOOGLE_ANALYTICS); 
    ReactGA.pageview ("/about");

function About() {

  const { t } = useTranslation('translation', { keyPrefix: 'meta_datos' });

  return (
    <div className="body_wrapper about  " id="about_us">
      <MetaDecorator 
        title={t("meta_title_About")}
        type='Website'
        description={t("meta_description_About")}
        url="about" />
      <Leaders />
      <Experince />
      <Clients />
      <Values />
      <Team />
    </div>
  );
}

export default About;

