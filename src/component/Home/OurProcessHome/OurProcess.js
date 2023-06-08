import React from 'react';
import {  NavLink } from 'react-router-i18n';
import ParallaxTitle from '../../Titles/ParallaxTitle';
import { useTranslation } from 'react-i18next';
import "./ourProcess.css"

function OurProcess () {

        const { t } = useTranslation();
        
        return(
        
            <section className="our--process-area sec_pad" id="process">
                <div className='container'>
                    <ParallaxTitle 
                        classDiv="text-center"
                        Pclass="p_color text-center mb-4"
                        h2Class="t_color f_size_40 f_600"
                        Title={t('process_home.process_title')}
                        Paragraph={t('process_home.process_subtitle')}
                     />
                </div>
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center " >
                            <div className="our--process-feedback position-relative col_scrum"> 
                                <div className="clients--feedback-item">
                                        <div className="feedback_body">
                                        <h3 className="f_name text-left">Agile Scrum</h3>
                                            <p className="text-left f_size_15 w_color f_700">{t('process_home.scrumDescription')}</p>
                                            <NavLink to={'/scrum'} exact className="learn_btn mt-4 "><strong>{t('process_home.read_more')}</strong></NavLink>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center " >
                            <div className="our--process-feedback position-relative col_devops">
                                <div className="clients--feedback-item">
                                    <div className="feedback_body">
                                        <h3 className="f_name text-right">DevOps</h3>
                                        <p className="text-right f_size_15 w_color f_700">{t('process_home.devopsDescription')}</p>
                                        <NavLink className="learn_btn mt-4 " exact to={'/devops'}><strong>{t('process_home.read_more')}</strong></NavLink>
                                    </div>               
                                </div>                                  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        );
    }


export default OurProcess;

