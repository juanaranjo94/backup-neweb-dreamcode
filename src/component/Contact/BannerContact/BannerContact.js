import React from 'react';
import Banner from '../../Banner/Banner';
import { useTranslation } from 'react-i18next';

function BannerContact() {

    const { t } = useTranslation('translation', { keyPrefix: 'contactsPage.banner_about' });

  return (
    <Banner classBanner="min-vh-100 text-center" typeScroll="dark">
        <div className='col-lg-12'>
            <h1 className={`mb-5 f_size_60 f_700 t_color `} >
                {t('contact_title_banner')}
            </h1>
        </div>
        <div className='col-lg-12'>
            <p className={`fadeInUp mb-5 pr_120 pl_120 p_color f_size_20 f_600`} data--delay="0.5s">
                {t('contact_description_banner')}
            </p>
        </div>
    </Banner>
    
  )
}

export default BannerContact;