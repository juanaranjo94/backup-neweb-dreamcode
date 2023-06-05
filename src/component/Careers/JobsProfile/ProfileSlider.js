import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./profile-slider.css";
import { Navigation, Pagination } from "swiper";


function Advantage ({ img, text }) {
  
  return (
    <div className="col-lg-6 col-md-6">
      <div className='p-4'>
          <div className='pb-3 d-flex justify-content-center'>
              <img className="w-50" src={require(`../../../img/careers/advantageIconos/${img}`)} alt={text}/>
          </div>
          <div className='px_50 text-center'>
              <p className='p_color'>{text}</p>
          </div>
      </div>
    </div>  
  )
}

export default function ProfileSlider() {

const { t } = useTranslation('translation', { keyPrefix: 'profile_job.profile_advantage' });

  return (
    <>                            
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true, }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mt-3"
      >
        <SwiperSlide>
          <div className='row'>
            <Advantage img="Entorno-agil.png" text={t("advantage_flexibility")} />
            <Advantage img="Impulsaras-tu-carrera.png" text={t("advantage_future")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <Advantage img="Trabajaras-tecnologias.png" text={t("advantage_innovation")} />
            <Advantage img="Desarrollaras-potencial.png" text={t("advantage_iiversity")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <Advantage img="Generaras-impacto.png" text={t("advantage_impact")} />
            <Advantage img="Estaras-actualizado.png" text={t("advantage_update")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='row'>
            <Advantage img="Trabajaras-remoto.png" text={t("advantage_comfort")} />
            <Advantage img="Aprenderas-DreamCoders.png" text={t("advantage_mentoring")} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
