import React from 'react'
import { useTranslation } from 'react-i18next';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import ReactGA from 'react-ga';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants';
import BannerProcess from '../components/Process/BannerProcess/BannerProcess';
import DevopsItem from '../components/Process/Devops/DevopsItems';
import HowDevOpsWorks from '../components/Process/Devops/HowDevOpsWorks';
import BenefitsDevops from '../components/Process/Devops/BenefitsDevops';
import PracticesDevops from '../components/Process/Devops/PracticesDevops';


    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("/devops");

function Devops() {

  const { t } = useTranslation();

  return (
    <>
      <MetaDecorator 
        title={t('meta_datos.meta_title_devops')}
        description={t('meta_datos.meta_description_devops')}
        type='Website'
        url="devops" />
      <BannerProcess 
        title={t('devops.banner_title')}
        description={t('devops.banner_description')}
        img_process="img-devops-int.png"
      />
      <DevopsItem />
      <HowDevOpsWorks />
      <BenefitsDevops />
      <PracticesDevops />
    </>
  )
}

export default Devops;