import React from 'react'
import BannerServices from '../component/Services/BannerServices/BannerServ';
import SliderService from '../component/Services/SliderServices/SliderServices';
import Brochures from '../component/Services/Brochures/Brochures';
import './../component/Services/services.css'
import FormContact from '../component/Forms/FormContact/FormContact';

function Services() {

  return (
    <div className='bg_serv animeServ' id='services'>
        {/* <div id="ball"></div>   */}
        <BannerServices />
        <SliderService />
        <Brochures />
        <FormContact typeForm="dark py_50" />
    </div>
  )
}

export default Services;