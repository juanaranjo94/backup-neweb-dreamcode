import React, {  useState } from "react";
import './sliderExperience.css'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid, Autoplay, Thumbs, Pagination, Mousewheel } from "swiper";

function SliderExperience() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { t } = useTranslation('translation', { keyPrefix: 'aboutPage.expertise_about' });

  return (
    <div className="row justify-content-end" id="sliderExper">
        <div className="col-sm-12 col-xl-8">
            <div className="row justify-content-end">
                <div className="col-sm-3 col-md-6 col-xl-6">  
                    <Swiper
                    loop={true}
                    spaceBetween={5}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: true,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Autoplay, Pagination, Navigation, Thumbs]}
                    className="SliderExper"
                    >
                        <SwiperSlide >
                            <div><h2 className="f_size_20 d_color mb-0 text-right">{t("expertise_agile")}</h2></div>                            
                        </SwiperSlide>
                        <SwiperSlide >
                            <div><h2 className="f_size_20 d_color mb-0 text-right">{t("expertise_api")}</h2></div>                            
                        </SwiperSlide>
                        <SwiperSlide >
                            <div><h2 className="f_size_20 d_color mb-0 text-right">{t("expertise_cloud")}</h2></div>                            
                        </SwiperSlide>
                        <SwiperSlide >
                            <div><h2 className="f_size_20 d_color mb-0 text-right">{t("expertise_devops")}</h2></div>                            
                        </SwiperSlide>
                        <SwiperSlide >
                            <div><h2 className="f_size_20 d_color mb-0 text-right">{t("expertise_full")}</h2></div>                            
                        </SwiperSlide>
                        <SwiperSlide >
                            <div><h2 className="f_size_20 d_color mb-0 text-right">{t("expertise_micro")}</h2></div>                            
                        </SwiperSlide>
                        <SwiperSlide >
                            <div><h2 className="f_size_20 d_color mb-0 text-right">{t("expertise_soft")}</h2></div>                            
                        </SwiperSlide>
                        <SwiperSlide >
                            <div><h2 className="f_size_20 d_color mb-0 text-right">{t("expertise_web")}</h2></div>                            
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                <div className="col-sm col-xl"></div>
					<div className="col-sm-5 col-md-5 col-xl-5">  
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView={1}
                        loop={false}
                        mousewheel={true}
                        keyboard={true}
                        cssMode={true}
                        spaceBetween={3}						
                        modules={[ Grid, Thumbs, Mousewheel]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="rotate" src={require("../../../img/about/iconos/AgilSoft.svg").default}  alt="" width="160" height="160"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="tada" src={require("../../../img/about/iconos/APIDesign.svg").default} alt="" width="160" height="160"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="flipInX" src={require("../../../img/about/iconos/CloudNative.svg").default} alt="" width="160" height="160"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="tada" src={require("../../../img/about/iconos/DevOpsIcon.svg").default} alt="" width="160" height="160"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="flipInY" src={require("../../../img/about/iconos/FullStackDev.svg").default} alt="" width="160" height="160"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="slideInDown" src={require("../../../img/about/iconos/MicroServ.svg").default} alt="" width="160" height="160"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="pulse" src={require("../../../img/about/iconos/SoftArchite.svg").default} alt="" width="160" height="160"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swing" src={require("../../../img/about/iconos/WebFrontEnd.svg").default} alt="" width="160" height="160"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default SliderExperience;