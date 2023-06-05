import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './bannerServ.css'
import Banner from '../../Banner/Banner';

function BannerServices() {

  const { t } = useTranslation();

  return (
    <Banner classBanner= "banner_services" typeScroll="white" >
      <div className='col-lg-12'>
          <h1 className={`mb-5 f_size_60 f_700 w_color line-break`}>
            <Trans i18nKey="servicePage.title_banner_Services">
              <span>Tailored</span>Technological Solutions
            </Trans>
          </h1>
      </div>
      <div className='col-lg-12'>
          <p className={`fadeInUp mb-5 w_color f_size_20 f_400`} data--delay="0.5s">
              {t('servicePage.descri_banner_Services')}
          </p>
      </div>            
    </Banner>
  )
}

export default BannerServices;