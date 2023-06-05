import React from 'react';
import './team.css'
import { useTranslation } from 'react-i18next';

function Team() {

    const { t } = useTranslation('translation', { keyPrefix: 'aboutPage.team_about' });

  return (
    <section className="position-relative about-team bg-white mt_60 overflow-hidden" id="team">
        <div className="container"> 
            <div className="row ">
                <div className="col-lg-12 mt_20 mb_60">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-xl-12 mb_30">
                            <div className='position-absolute'>
                                <h2 className="f_600 f_size_60 text-center d_color">{t("team_title")}</h2>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-12 mt-5">
                            <div className="row team-content">
                                <div className="col-6 col-md-3">
                                    <img className='img-fluid' src={require("../../../img/about/team/horacio-team.png")} alt=""/>
                                    <div className="text-left my-3">
                                        <h3 className="f_p m-0 f_size_20 f_600 color2">Horacio Borrero</h3>
                                        <h5 className='f_size_15 d_color'>{t("team_horacio_name")}</h5>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <img className='img-fluid' src={require("../../../img/about/team/francisco-team.png")} alt=""/>
                                    <div className="text-left my-3">
                                        <h3 className="f_p m-0 f_size_20 f_600 color1">Francisco Chaves</h3>
                                        <h5 className='f_size_15 d_color'>{t("team_francisco_name")}</h5>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <img className='img-fluid' src={require("../../../img/about/team/jonathan-team.png")} alt=""/>
                                    <div className="text-left my-3">
                                        <h3 className="f_p m-0 f_size_20 f_600 color3">Jonathan Ortiz</h3>
                                        <h5 className='f_size_15 d_color'>{t("team_jonathan_name")}</h5>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <img className='img-fluid' src={require("../../../img/about/team/leonardo-team.png")} alt=""/>
                                    <div className="text-left my-3">
                                        <h3 className="f_p m-0 f_size_20 f_600 color4">Leonardo Vargas</h3>
                                        <h5 className='f_size_15 d_color'>{t("team_leonardo_name")}</h5>
                                    </div>
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

export default Team;