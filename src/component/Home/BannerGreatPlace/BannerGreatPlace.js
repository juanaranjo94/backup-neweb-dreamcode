import React from 'react';
import './banner-great.css';
import { useTranslation, Trans } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import {  NavLink } from 'react-router-i18n';

function BannerGreatPlace() {

    const { t } = useTranslation()

  return (
    <section className=' sec_pad'>
    <div className="container">
      <div className="great--content ">
        <Fade>
          <h1 className='position-relative line-break' >
            <Trans i18nKey="great-place.title_banner">
                The 99% of our <span>dreamcoders indicate</span>
              that we are <strong>an excellent <span>place to</span> <span>work</span></strong>
            </Trans>
          </h1>
        </Fade>
        <div className='grid--img'>
          <div className='grid--column grid--img-column'>
            <Fade bottom>
              <div className='great--img mod--1'>
              </div>
            </Fade>
            <Fade top>
              <div className='great--img mod--2'>
                <div className="img--hover"></div>
              </div>
            </Fade>
          </div>
        </div>
        <div className='great--place-area'>
        <Fade left>
          <div className='great--place-logo'>
            <img  src={require("../../../img/great-place/certification-great-place-to-work.png")} alt="Fondo Home" width="130" />
          </div>
        </Fade>
        </div>
      </div>
      <div className='d-flex align-items-center'>
        <NavLink className='d_color' activeclass="active" spy="true" offset={0} duration={500} to={`/great-place-to-work`}>
          <h3 className='d_color f_size_30'>
            {t('great-place.btn_link_home')}<i className="ti-angle-double-right"></i>
          </h3>
        </NavLink>
        </div>
    </div>
    </section>
  )
}

export default BannerGreatPlace;