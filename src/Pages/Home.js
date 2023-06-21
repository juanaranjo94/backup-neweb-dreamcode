import React from 'react'
import BannerHome from "../components/Home/BannerHome/BannerHome";
import ServicesHome from '../components/Home/ServicesHome/ServicesHome';
import OurProcess from '../components/Home/OurProcessHome/OurProcess';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import SliderBlogHome from '../components/Home/SliderBlogHome.js/SliderBlogHome';
import OurClients from '../components/Home/OurClients/OurClients';
import BannerGreatPlace from '../components/Home/BannerGreatPlace/BannerGreatPlace';
import ReactGA from 'react-ga';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants';
import { useTranslation } from 'react-i18next';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';

    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("/");

function Home() {

    const { t } = useTranslation('translation', { keyPrefix: 'meta_datos' });

  return (
    <>
      <MetaDecorator 
        title={t('meta_title_Home')}
        description={t('meta_description_Home')}
        url="" />
      <BannerHome />
      <ServicesHome />
      <OurProcess />
      <BannerGreatPlace />
      <Testimonial />
      <SliderBlogHome />
      <OurClients />
    </>
  )
}

export default Home;