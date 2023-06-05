import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper";

import "./sliderServices.css"
import "swiper/css/pagination";

function SliderServices () {

        return (
            <div className="vh-100 min-vh-100 w-100 d-block">
                <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    mousewheel={{ releaseOnEdges: true }} 
                    modules={[Mousewheel]}
                    className="mySwiper">
                        <SwiperSlide>                
                            Slider 1
                        </SwiperSlide>
                        <SwiperSlide>
                            Slider 2
                        </SwiperSlide>
                        <SwiperSlide>
                            Slider 3
                        </SwiperSlide>
                        <SwiperSlide>
                            Slider 4
                        </SwiperSlide>
                </Swiper>
            </div>
        );
    }


export default SliderServices;