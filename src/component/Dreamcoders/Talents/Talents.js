import React from 'react';
import {useTranslation, Trans} from'react-i18next';
import './talents.css'

function Talents() {

    const {t} = useTranslation();

  return (
    <section className='sec_pad '>
        <div className="container box-color px_50 py_50">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center w_color f_size_30 f_700 line-break">
                        <Trans i18nKey="dreamcoders.talents_title" >
                            We are in constant movement,<span className='f_500'>we create a future that turns the invisible into the visible, we are protagonists of the materialization of ideas, we are:</span>
                        </Trans >
                    </h2>
                </div>
            </div>
        </div>
        <div className='container mt_80'>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="text-center img-fondo py-3 mb-3">
                        <img src={require("../../../img/dreamcoders/simbolo-Humanos.png")}   alt={t("dreamcoders.talents_humans_title")} height="200"/>
                        <h4 className='w_color f_size_30 f_600'>{t("dreamcoders.talents_humans_title")}</h4>
                        <p className='w_color'>{t("dreamcoders.talents_humans_description")}</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="text-center img-fondo py-3 mb-3">
                        <img src={require("../../../img/dreamcoders/simbolo-" + `${t("dreamcoders.talents_Innovators_title")}` + ".png")} alt={t("dreamcoders.talents_Innovators_title")} height="200"/>
                        <h4 className='w_color f_size_30 f_600'>{t("dreamcoders.talents_Innovators_title")}</h4>
                        <p className='w_color'>{t("dreamcoders.talents_Innovators_description")}</p>
                    </div>                   
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="text-center img-fondo py-3 mb-3">
                        <img src={require("../../../img/dreamcoders/simbolo-Agiles.png")} alt={t("dreamcoders.talents_Agile_title")} height="200"/>
                        <h4 className='w_color f_size_30 f_600'>{t("dreamcoders.talents_Agile_title")}</h4>
                        <p className='w_color'>{t("dreamcoders.talents_Agile_description")}</p>                    
                    </div>                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="text-center img-fondo py-3 mb-3">
                        <img className='' src={require("../../../img/dreamcoders/simbolo-Motivados.png")} alt={t("dreamcoders.talents_Motivated_title")} height="200"/>
                        <h4 className='w_color f_size_30 f_600'>{t("dreamcoders.talents_Motivated_title")}</h4>
                        <p className='w_color line-break'>{t("dreamcoders.talents_Motivated_description")}</p>                   
                    </div>           
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="text-center py-3 mb-3">
                        <img src={require("../../../img/dreamcoders/simbolo-Soñadores.png")} alt={t("dreamcoders.talents_Dreamers_title")} height="200"/>
                        <h4 className='w_color f_size_30 f_600'>{t("dreamcoders.talents_Dreamers_title")}</h4>
                        <p className='w_color'>{t("dreamcoders.talents_Dreamers_description")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Talents;