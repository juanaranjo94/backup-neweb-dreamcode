import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import ParallaxTitle from '../../Titles/ParallaxTitle';
import './scrum.css'

function ScrumEvents() {

    const { t } = useTranslation('translation', { keyPrefix:'scrum.ScrumEvents'});

    return(
        <section className="scrum_events_area sec_pad line-break" id='scrumEvents'>
            <div className="container">
                <div className="sec_title mb_70" data--delay="0.4s">
                <Fade left >                  
                    <ParallaxTitle 
                        Title={t('Title')}
                        Pclass="p_color"
                        Paragraph={t('Descrip')}
                        classDiv="text-center"
                        h2Class="t_color f_size_40 f_600"/>
                </Fade>
                </div>
                <ul className="nav  scrum_events_tab" id="myTab" role="tablist">
                    <Fade left >
                        <li className="nav-item">
                        <a className="nav-link active" id="sprint-tab" data-toggle="tab" href="#sprint" role="tab" aria-controls="sprint" aria-selected="true">  
                            <h3 className='f_size_18 f_700'>{t('event1')}</h3>
                        </a>
                        </li>
                    </Fade>
                    <Fade left  duration={1400}>
                        <li className="nav-item">
                            <a className="nav-link" id="daily-tab" data-toggle="tab" href="#daily" role="tab" aria-controls="daily" aria-selected="false">
                                <h3 className='f_size_18 f_700'>{t('event2')}</h3>
                            </a>
                        </li>
                    </Fade>
                    <Fade left  duration={2000}>
                        <li className="nav-item">
                            <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">
                                <h3 className='f_size_18 f_700'>{t('event3')}</h3>
                            </a>
                        </li>
                    </Fade>
                    <Fade left  duration={2400}>
                    <li className="nav-item">
                        <a className="nav-link" id="restrosp-tab" data-toggle="tab" href="#restrosp" role="tab" aria-controls="restrosp" aria-selected="false">
                            <h3 className='f_size_18 f_700'>{t('event4')}</h3>
                        </a>
                    </li>
                    </Fade>
                </ul>
                <div className="tab-content scrum_events_tab_content" id="myTabContent">
                    <div className="tab-pane fade show active" id="sprint" role="tabpanel" aria-labelledby="sprint-tab">
                        <div className="scrum_events_tab_img">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="text-scrum">                                             
                                            <p className='f_size_18 p_color f_500'>{t('event1Paragraph')}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="scrum_event_img">
                                            <img className="mw-100" src={require ('../../../img/process/sprint_planning.jpg')} alt=" Sprint"/></div>
                                    </div>
                                </div>
                            </div>                                  
                        </div>                               
                    </div>
                    <div className="tab-pane fade" id="daily" role="tabpanel" aria-labelledby="daily-tab">
                    <div className="scrum_events_tab_img">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="text-scrum">                                             
                                            <p className='f_size_18 p_color f_500'>{t('event2Paragraph')}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="scrum_event_img"><img className="mw-100" src={require ('../../../img/process/planing.png')} alt=" Planing"/></div>
                                    </div>
                                </div>
                            </div>                                  
                        </div>  
                    </div>
                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                    <div className="scrum_events_tab_img">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="text-scrum">                                             
                                            <p className='f_size_18 p_color f_500'>{t('event3Paragraph')}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="scrum_event_img"><img className="mw-100" src={require ('../../../img/process/sprint_review.jpg')} alt=" Sprint Review"/></div>
                                    </div>
                                </div>
                            </div>                                  
                        </div>  
                    </div>
                    <div className="tab-pane fade" id="restrosp" role="tabpanel" aria-labelledby="restrosp-tab">
                    <div className="scrum_events_tab_img">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="text-scrum">                                             
                                            <p className='f_size_18 p_color f_500'>{t('event4Paragraph')}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="scrum_event_img"><img className="mw-100" src={require ('../../../img/process/sprint_retrospectiva.jpg')} alt=" Sprint Retrospectiva"/></div>
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

export default ScrumEvents;