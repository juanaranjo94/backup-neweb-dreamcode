import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from 'react-reveal/Fade';
import "./servicesHome.css"
import { Navigation, Autoplay } from "swiper";
import { useTranslation } from 'react-i18next';

function  ServicesHome() {

    const { t } = useTranslation('translation', { keyPrefix: 'service_home' });
    const services = t('servitems', { returnObjects: true })

    return(
        
        <section className="homeServices sec_pad bg-light" id='home-services'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-center">
                        <div className="home-services-title position-relative">
                        <Fade bottom cascade>
                            <div className=" fadeInUp" data--delay="0.3s">
                                <h2 className="t_color f_600 f_size_40">{t('service_title')}</h2>
                                <p className="p_color f_600 f_size_18">{t('service_subtitle')}</p>
                                <a className="t_color mt-3 f_500 f_size_20 f_p" href="/services"><strong>{t('read_more')}</strong></a>                                    
                            </div>
                        </Fade>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 ">
                        
                        <div className="sliderContent d-flex align-items-center">
                          
                          <Swiper
                            autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="swiper-services-home"
                          >
                              {  services.map((item) => { 
                                return(
                                    <SwiperSlide className="ServItem ">
                                        <div className='w-50 ml-4'>
                                            <h5 className='text-center f_600 mb-3 mx-4'>{item.servTitle}</h5>
                                        </div>                                                  
                                        <div className='mx-4'>
                                            <p className='mx-4 text-center f_size_20'>{item.servDescrip}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                                })
                              }
                            </Swiper>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ServicesHome;