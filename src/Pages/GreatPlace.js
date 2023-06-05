import React from 'react';
import './../component/GreatPlace/great-place.css';
import { useTranslation, Trans } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import PlaceToWork from '../component/GreatPlace/PlacetoWork/PlaceToWork';

function GreatPlace() {

  const { t } = useTranslation();

  return (
    <>
      <section className='great--place min-vh-100'>
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
                <img  src={require("../img/great-place/certification-great-place-to-work.png")} alt="Fondo Home" width="130" />
              </div>
            </Fade>
            </div>
          </div>
        </div>
      </section>

      <section className='great--place h-75'>
        <div className="container">
          <div className='row border-top border-dark'>
            <div className='col-lg-4 col-md-6 col-sm-12 '>
            <Fade left>
              <div className='content--intro'>
                <h2 className='f_size_40 f_700'>2023</h2>
              </div>
            </Fade>
            </div>
            <div className='col-lg-8 col-md6- col-sm-12'>
            <Fade right>
                <div className='content--intro'>
                  <p className='f_size_18 line-break'>{t('great-place.2023')}</p>
                </div>
              </Fade>
            </div>
            <div className='line mod--lines'>
              <div className='lines--line mod--line-1'></div>
            </div>
          </div>
        </div>
      </section>
      <PlaceToWork />
    </>
  )
}

export default GreatPlace;