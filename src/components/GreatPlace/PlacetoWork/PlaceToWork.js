import React from 'react';
import './place-to-work.css';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

function Reasonsitems ({ number , title , description , imglink, styleItem}) {

    return (
      <section className='great--place reason--items'>
        <div className='container'>
            <div className='row border-punteado'>
                <div className='col-lg-1'>
                    <div className='f_size_30 f_700'>{number}</div>
                </div>
                <div className='col-lg-5'>
                    <Fade left>
                        <div className='reason--title'>
                            <h2 className='f_size_30 f_700'>{title}</h2>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <figure className='mt-4 position-relative item--img'>
                            <img className='img-fluid' src={require(`../../../img/great-place/${imglink}`)}/>
                            <div className={`overlay ${styleItem}`}></div>
                        </figure>
                    </Fade>
                </div>
                <div className='col-lg-6'>
                    <Fade right>
                        <div className='reason--text'>
                            <p className='f_size_18 line-break'>{description}</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
      </section>
    )
};



export default function PlaceToWork() {

    const { t } = useTranslation();

  return (
    <>
        <Reasonsitems 
            number='1'
            styleItem='one'
            imglink='1-una-cultura-que-prioriza-a-las-personas.jpg'
            title={t('great-place.culture_title')}
            description={t('great-place.culture_description')}/>
        <Reasonsitems 
            number='2'
            styleItem='two'
            imglink='2-trabajar-en-dreamcode-es-motivo-de-orgullo.jpg'
            title={t('great-place.working_title')}
            description={t('great-place.working_description')}/>
        <Reasonsitems 
            number='3'
            styleItem='three'
            imglink='3-reconocer-el-talento-de-nuestro-equipo.jpg'
            title={t('great-place.recognizing_title')}
            description={t('great-place.recognizing_description')}/>
        <Reasonsitems 
            number='4'
            styleItem='four'
            imglink='4-un-liderazgo-humano-y-cercano.jpg'
            title={t('great-place.leadership_title')}
            description={t('great-place.leadership_description')}/>
        <Reasonsitems 
            number='5'
            styleItem='five'
            imglink='5-un-entorno-de-trabajo-formidable.jpg'
            title={t('great-place.environment_title')}
            description={t('great-place.environment_description')}/>
        <Reasonsitems 
            number='6'
            styleItem='six'
            imglink='6-Colaboración-y-equipo.jpg'
            title={t('great-place.collaboration_title')}
            description={t('great-place.collaboration_description')}/>
    </>
  )
}
