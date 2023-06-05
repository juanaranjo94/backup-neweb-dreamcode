import React from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from "swiper";
import ServiceItems from "./SliderServicesItem";
import "./sliderServices.css"

function SliderServices () {

    const { t } = useTranslation('translation', { keyPrefix: 'servicePage' });

        return (
            <section className="slider-services">
                <div className="sm-vh-100 ms-vh-50 vh-80 w-100 container">
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        mousewheel={{ releaseOnEdges: true }} 
                        modules={[Mousewheel, Pagination]}
                        className="mySwiper">
                        <SwiperSlide>                
                            <ServiceItems                         
                                TitleServ = {t('service_soft_title')}
                                DescrServ = {t('service_soft_description')}
                                styleColor ="software" 
                                image="Icono-Software.png"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceItems                         
                                TitleServ = {t('service_mobile_title')}
                                DescrServ = {t('service_mobile_description')}
                                styleColor ="software" 
                                image="Icono-Web-and-Mobile-App.png"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceItems                         
                                TitleServ = {t('service_data_title')}
                                DescrServ = {t('service_data_description')}
                                styleColor ="software" 
                                image="Icono-Database-Services.png"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceItems                         
                                TitleServ = {t('service_techn_title')}
                                DescrServ = {t('service_techn_description')}
                                styleColor ="software" 
                                image="Icono-Consulting.png"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        );
    }


export default SliderServices;