import React, {  useState } from "react";
import './values.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Thumbs, EffectCreative } from "swiper";
import { useTranslation } from 'react-i18next';
import "swiper/css/grid";

function Values() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { t } = useTranslation('translation', { keyPrefix: 'aboutPage.values_about' });


  return (
    <section className="about-values overflow-hidden position-relative py_50 " id="values">
        <div className="container">
            <div className="bubble b_two"></div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-xl-5">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView={3}
                        grid={{
                          rows: 3,
                        }}
                        modules={[Thumbs, Grid,]}
                        className="swiper-values"
                    >
                        <SwiperSlide><h2 className="f_600">{t("values_performance")}</h2></SwiperSlide>
                        <SwiperSlide><h2 className="f_600">{t("values_motivation")}</h2></SwiperSlide>
                        <SwiperSlide><h2 className="f_600">{t("values_innovation")}</h2></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='row justify-content-center values-content f_p' id="Values">
                <div className="col-sm-12 col-xl-6">               
                <Swiper
                    thumbs={{ swiper: thumbsSwiper }}
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-125%", -300, -500],
                            scale: 0.9
                        },
                        next: {
                            shadow: true,
                            translate: ["125%", 350, -500],
                            
                        }
                        }}                             
                    modules={[ EffectCreative, Thumbs]}
                    className="myswiper-values"
                >
                    <SwiperSlide>
                        <div className='our_values'>
                            <div className='text-left'>
                                <h2 className='w-75 f_size_40 f_600 mb-3'>{t("values_performance")}</h2>
                                <p className='f_size_20'>{t("values_performance_descrip")}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='our_values'>
                            <div className='text-left'>
                                <h2 className='w-75 f_size_40 f_600 mb-3'>{t("values_motivation")}</h2>
                                <p className='f_size_20'>{t("values_motivation_descrip")}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='our_values'>
                            <div className='text-left'>
                                <h2 className='w-75 f_size_40 f_600 mb-3'>{t("values_innovation")}</h2>
                                <p className='f_size_20'>{t("values_innovation_descrip")}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Values;