import React, {  useState } from "react";
import './slider-dreamcoders.css';
import { useTranslation } from 'react-i18next';
import { FreeMode, Navigation, Grid, Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

function TestimonialFormat({ testimonial, name, position}) {

  const { t } = useTranslation(); 

  return (
    <>
      <div className="testimonial_content w-100 text-left">
        <h2 className="f_size_20 f_600">{t('dreamcoders.dreamcoders_testimonials_title')}</h2>
        <p className="my-4 f_size_20 f_500 w_color mb-0">
          "{testimonial}"
        </p>
      </div>
      <div className="testimonial_author text-left position-relative">
        <h3 className="w_color f_600 f_size_20 ">{name}</h3>                                                                    
        <p className="m_color f_600 f_size_18 ">{position}</p>
      </div>
    </>
  );
}

export default function SliderDreamcoders() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { t } = useTranslation('translation', { keyPrefix: 'dreamcoders' });
    const testimonials = t('dreamcoders_testimonials', { returnObjects: true })

  return (
    <section className="sec_pad slider-dreamcoders">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <Swiper
              loop={true}
              spaceBetween={10}
              navigation={false}
              autoplay={{ delay: 160000, disableOnInteraction: false, }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Autoplay, FreeMode, Navigation, Thumbs]}
              className="testimonialFormat"
            >
              {
                testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialFormat
                      testimonial={testimonial.testimonial}
                      name={testimonial.name}
                      position={testimonial.position}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className="col-lg-6">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={2}
              grid={{ rows: 2 }}
              spaceBetween={10}
              freeMode={true}
              rewind={true}
              modules={[FreeMode, Grid, Navigation, Thumbs]}
              className="testimonialImg"
            >
              <SwiperSlide>
                <img src={require("../../../img/dreamcoders/Dreamcoder-Ered.png")}  alt="Dreamcoders Ered" width="160" height="160"/>
              </SwiperSlide>
              <SwiperSlide>
              <img src={require("../../../img/dreamcoders/Dreamcoder-Juan.png")} alt="Dreamcoders Juan" width="110" height="110"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../../img/dreamcoders/Dreamcoder-Viviana.png")} alt="Dreamcoders Viviana" width="110" height="110"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../../../img/dreamcoders/Dreamcoder-Eliana.png")} alt="Dreamcoders Eliana" width="160" height="160"/>
              </SwiperSlide>
            </Swiper>
            <img className="bg-img-absolute " src={require ('../../../img/dreamcoders/fondo-dreamcoders.png')}  alt="Fondo dreamcoders"/>
          </div>
        </div>
      </div>
    </section>
  )
}
