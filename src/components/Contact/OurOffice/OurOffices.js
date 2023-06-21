import React, { useState } from 'react';
import './ourOffices.css'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Autoplay, Thumbs } from "swiper";

function OurOffice() {

  const { t } = useTranslation('translation', { keyPrefix: 'contactsPage' });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className='office-about  bg_color'>
        <div className='row'>
            <div className='col-lg-5 col-sm-12'>
                <div className='office-about-info'>
                    <h2 className='f_size_40 mb-5'>{t("contact_our_office")}</h2>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true
                            
                            }}
                        autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Autoplay, FreeMode, Pagination, Thumbs]}
                        className="OfficeSwiper h-75"
                    >
                        <SwiperSlide>
                            <div>
                                <h3>Cali, Colombia</h3>
                                <p>Carrera 100 #16-321, <br></br>Centro de Negocios Jardin Central, Oficina 1202</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h2>San Francisco, United States</h2>
                                <p>50 California Street, 15th Floor</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='col-lg-7 col-sm-12'>
                <div className='office-about-img'>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        navigation={false}
                        freeMode={false}
                        rewind={false}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="OfficeSwiper2"
                    >

                        <SwiperSlide>
                            <div className='item'>
                                <div className='office-item w-45'>
                                    <img src={require('../../../img/contacts/sede-cali-1.jpg')} width="300" alt=""/>
                                </div>
                                <div className='office-item w-55'>
                                    <img src={require('../../../img/contacts/sede-cali-2.jpg')} width="300" alt=""/>
                                </div>
                                <div className='office-item w-55'>
                                    <img src={require('../../../img/contacts/sede-cali-3.jpg')} width="300" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='item'>
                                <div className='office-item w-45'>
                                    <img src={require('../../../img/contacts/sede-san-francisco-1.jpeg')} width="300" alt=""/>
                                </div>
                                <div className='office-item w-55'>
                                    <img src={require('../../../img/contacts/sede-san-francisco-2.jpeg')} width="300" alt=""/>
                                </div>
                                <div className='office-item w-55'>
                                    <img src={require('../../../img/contacts/sede-san-francisco-3.jpeg')} width="300" alt=""/>
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

export default OurOffice;