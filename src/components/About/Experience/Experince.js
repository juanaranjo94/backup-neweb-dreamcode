import React from 'react';
import './experience.css'
import { useTranslation } from 'react-i18next';
import SliderExperience from './SliderExperience';

function Experince() {

    const { t } = useTranslation('translation', { keyPrefix: 'aboutPage.expertise_about' });

  return (
    <section className="about-experience position-relative py_60" id="experience">
        <div className="container">
            <div className='row justify-content-center experience-content'>
                <div className="col-sm-12 col-xl-9">               
                    <div className="row justify-content-start">
                        <div className="col-xl-9">
                            <div className='row align-items-center flex-nowrap'>
                                <div className="col w_color">
                                    <h2 className="f_size_70 f_sm_40 f_600">{t("expertise_title")}</h2>  
                                </div> 
                                <div className="col about-icon text-left">
                                    <img className="animation-rotateLeft" src={require("../../../img/about/Figura-blanca.svg").default} alt="Fondo Home" height="100"/>
                                </div>     
                            </div>
                            <div className="row align-items-baseline flex-nowrap">
                                <div className="col order-1">
                                    <img className="animation-rotate" src={require("../../../img/about/Figura-aguamarina.svg").default} alt="Fondo Home"  />
                                </div>
                                <div className="col-8 order-2 w_color">
                                    <h2 className="f_size_70 f_sm_40 f_600">{t("expertise_title2")}</h2>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <SliderExperience />
                </div>
                
            </div>
            
        </div>
    </section>
  )
}

export default Experince;