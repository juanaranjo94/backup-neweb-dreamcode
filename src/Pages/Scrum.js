import React from 'react'
import { useTranslation } from 'react-i18next';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import ReactGA from 'react-ga';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants';
import BannerProcess from '../components/Process/BannerProcess/BannerProcess';
import ScrumEvents from '../components/Process/Scrum/ScrumEvents';
import ScrumTeam from '../components/Process/Scrum/ScrumTeam';
import ScrumArtifacts from '../components/Process/Scrum/ScrumArtifacts';


    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("/scrum");

function Scrum() {

  const { t } = useTranslation();

  return (
    <>
      <MetaDecorator 
        title={t('meta_datos.meta_title_scrum')}
        description={t('meta_datos.meta_description_scrum')}
        type='website'
        url="scrum" />
      <BannerProcess 
        title={t('scrum.banner_title')}
        description={t('scrum.banner_description')}
        img_process="img-scrum-int.png"
      />
      <ScrumEvents />
      <ScrumTeam />
      <ScrumArtifacts />
      
    </>
  )
}

export default Scrum;