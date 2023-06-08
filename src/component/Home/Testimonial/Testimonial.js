import React  from 'react';
import ParallaxTitle from '../../Titles/ParallaxTitle';
import "./testimonial.css"
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next';

function Testimonial (){

    const { t } = useTranslation('translation', { keyPrefix: 'testimonios' });
    const testimonial = t('testimoniosItems', { returnObjects: true })
    
    return(
            <section className=" sec_pad " id="testimonial">
                    <ParallaxTitle  
                        Title={t('testim_title')} 
                        classDiv="pb-4 text-center" 
                        h2Class="t_color f_size_40 f_600" />
                <div className="container ">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={false}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 2,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Pagination, Navigation]}
                        className="swiper-testimonios"
                    >
                        {
                            testimonial.map((item, i) => {
                                return (
                                    <SwiperSlide className='testimonial' key={i}>                          
                                        <div className="testimonial--item ">
                                            <div className="content"><p>{item.DescripT}</p></div>
                                                <div className={`media ${item.testImg}`}>
                                                    <div className="media-body">
                                                        <h5>{item.NameTestimonio}</h5>
                                                        <p>{item.Position}</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        )
   }

export default Testimonial;

