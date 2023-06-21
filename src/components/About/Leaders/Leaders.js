import React from 'react';
import './leaders.css'
import { useTranslation } from 'react-i18next';
import ParallaxTitle from '../../Titles/ParallaxTitle'

function Leaders() {

    const { t } = useTranslation('translation', { keyPrefix: 'aboutPage.story_about' });

  return (
    <section className="position-relative bg-white overflow-hidden" id="leaders">
        <div className="container">
            <div className="line-color-about position-relative">
                <div className="position-absolute top-0 left-0">
                    <img src={require ('../../../img/about/Linea-de-fondo.svg')}  alt="Fondo DreamCoders" height="1500"/>
                </div>
            </div>  
            <div className="row ">
                <div className="col-lg-12 mt_60 mb_60">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-xl-7">
                            <h1 className="f_600 f_size_40 d_color">{t("story_title_banner")}</h1>
                            <div className="header-img cover-bg about-leaders" ></div>
                        <div className="row justify-content-end">
                            <div className="col-xl-7 col-sm-7 offset-md-3">
                                <div >
                                    <p className='d_color f_size_18 text-justify pt-3'>{t("story_description_banner")}</p>
                                </div>
                            </div> 
                        </div>
                        </div>                                                          
                    </div>
                </div>
                <div className="col-lg-12 mb_60 history-content ">
                    <div className='row justify-content-center'>
                        <div className="col-sm-12 col-xl-9">
                            <div className="row justify-content-start">
                                <div className="col-xl-6">
                                    <ParallaxTitle 
                                        Title={t("story_title_birth")}
                                        classDiv="mb-4"
                                        Paragraph={t("story_description_birth")}
                                        Pclass="d_color text-left f_500" 
                                        h2Class="d_color f_size_30 f_600"/>
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <div className="col-xl-4 col-sm-12 offset-md-3">
                                    <h3 className="text-right f_size_25 d_color font-italic mt-3 mb-3">{t("story_offices_text")}</h3>
                                </div>
                            </div>
                            <div className="row justify-content-start mt-3">
                                <div className="col-xl-9 col-sm-12">
                                    <h3 className="text-left f_size_20 font-italic d_color "> {t("story_talent_human")}</h3>
                                </div>
                            </div>
                            <div className="row justify-content-start mt_100">
                                <div className="col-xl-9">
                                    <ParallaxTitle 
                                        Title={t("story_build_title")}
                                        Paragraph={t("story_build_description")}
                                        Pclass="d_color text-left f_500" 
                                        h2Class="d_color f_size_30 f_600"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Leaders;