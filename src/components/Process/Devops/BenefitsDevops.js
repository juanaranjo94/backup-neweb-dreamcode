import React from 'react';
import ParallaxTitle from '../../Titles/ParallaxTitle';
import "./devops.css"
import { useTranslation } from 'react-i18next';


function BenefitsDevopsItem({ image, title, description}) {

    return (
        <div className="col-lg-4 col-sm-6  fadeInUp" data--delay="0.4s">
            <div className="software_featured_item text-left mb_20">
                <img src={require ("../../../img/process/" + image)} width="100" alt={title}/>
                <h3 className="f_600 pink_color f_size_30 my-4">{title}</h3>
                <p className=" f_size_15 mb_40">{description}</p>
            </div>
        </div>
    )
    
}

export default function BenefitsDevops() {

    const { t } = useTranslation('translation', { keyPrefix:'devops.BenefitsDevOps'});

        return(
            <section className="devops_benefits_area pb-5 sec_pad" id='devopsBenefits'>
                <div className="container">
                    <ParallaxTitle 
                        Title={t('Title')}
                        classDiv="text-center pb-4" h2Class="t_color f_size_40 f_600" />
                    <div className="row devops_benefits_info">
                        <BenefitsDevopsItem  
                            title={t('Benefits1Title')}
                            description={t('Benefits1Descrip')}
                            image="speed.png"/>
                        <BenefitsDevopsItem  
                            title={t('Benefits2Title')}
                            description={t('Benefits2Descrip')}
                            image="delivery.png"/>
                        <BenefitsDevopsItem  
                            title={t('Benefits3Title')}
                            description={t('Benefits3Descrip')}
                            image="relibility.png"/>
                        <BenefitsDevopsItem  
                            title={t('Benefits4Title')}
                            description={t('Benefits4Descrip')}
                            image="scale.png"/>
                        <BenefitsDevopsItem  
                            title={t('Benefits5Title')}
                            description={t('Benefits5Descrip')}
                            image="improved.png"/>
                        <BenefitsDevopsItem  
                            title={t('Benefits6Title')}
                            description={t('Benefits6Descrip')}
                            image="security.png"/>
                    </div>
                </div>
            </section>
        )
    }

