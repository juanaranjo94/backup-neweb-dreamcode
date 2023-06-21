import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxTitle from '../../Titles/ParallaxTitle';

function ScrumArtifacts() {

    const { t } = useTranslation('translation', { keyPrefix:'scrum.ScrumArtifacts'});

    return(
        <section className="scrum_artifacts_area sec_pad" id='scrumArti'>
            <div className="container">
                <ParallaxTitle 
                    Title={t('Title')}
                    classDiv="text-center" 
                    h2Class="w_color f_size_50 f_600"
                    Paragraph={t('Descrip')}
                />
                <div className="scrum_artifacts_content">
                    <div className="row mt-5 justify-content-between">
                        <div className="col-lg-5 align-items-center">
                            <div className="mt_80 w_color">
                                <div className="fadeInUp">
                                    <h5 className='f_size_40 f_600 mb-3'>{t('Artf1')}</h5>                              
                                </div>
                                <div className="txt_artif">
                                    <p className='f_size_18 f_500 text-justify'>{t('Artf1Descrip')}</p>
                                </div>
                            </div>  
                            <div className="mt_100">
                                <div className="fadeInUp">
                                    <h5 className='f_size_40 f_600 mb-3'>{t('Artf3')}</h5>                              
                                </div>
                                <div className="txt_artif">
                                    <p className='f_size_18 f_500 text-justify'>{t('Artf3Descrip')}</p>
                                </div> 
                            </div>  
                        </div>
                        <div className="col-lg-5 align-items-center align-self-center">
                            <div className="mt_40 w_color">
                                <div className="fadeInUp">
                                    <h5 className='f_size_40 f_600 mb-3'>{t('Artf2')}</h5>                              
                                </div>
                                <div className="txt_artif">
                                    <p className='f_size_18 f_500 text-justify'>{t('Artf2Descrip')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        )
}

export default ScrumArtifacts;