import React from 'react';
import { NavLink } from 'react-router-i18n';
import { useTranslation } from 'react-i18next';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import ReactGA from 'react-ga';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants'

    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("/404");


function Page404 () {

  const { t } = useTranslation('translation', { keyPrefix: 'meta_datos' });

  return (

    <div>
      <MetaDecorator 
        title={t('meta_title_404')}
        description={t('meta_description_404')}
        url="404" />
      <section className="error_two_area min-vh-100">
        <div className="container flex">
          <div className="text-center">
            <h1 className='t_color f_size_60 f_700'>Error 404. We can’t find the page you’re looking for.</h1>
            <p className='p_color f_600 f_size_20'>Sorry for the inconvenience. </p>
            <NavLink to="/" className="read_more_btn"> Back to Home Page<i className="ti-arrow-right"></i></NavLink>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Page404;