import React from 'react';
import Banner from '../../Banner/Banner';
import {useTranslation} from'react-i18next';
import './bannerDreamcoders.css';

function BannerDreamcoders() {

    const { t } = useTranslation('translation', { keyPrefix: 'dreamcoders' });

  return (
    <Banner classBanner="min-vh-100 text-center bg-dreamcoders">
        <div className="col-lg-7 col-md-12col-sm-12">
            <h1 className="f_size_80 l_height09 w_color f_700 z-index99">DreamCoders</h1>
            <p className={`f_size_40 l_height09 w_color mb-5 pr_0`} data--delay="0.5s">
                {t('dreamcoders_description')}
            </p>
        </div>
        <div className="col-lg-5 col-md-8 col-sm-7">
            <img className='img-fluid' src={require ('../../../img/dreamcoders/cohete-dreamcoders.png')}/>
        </div>
  </Banner>
  )
}

export default BannerDreamcoders;