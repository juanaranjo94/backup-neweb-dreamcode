import React from 'react';
import BannerDreamcoders from '../component/Dreamcoders/Banner/BannerDreamcoders';
import Talents from '../component/Dreamcoders/Talents/Talents';
import SliderDreamcoders from '../component/Dreamcoders/Testimonios/SliderDreamcoders';

function Dreamcoders() {

  return (
    <div className="dreamcoders bg-darkblue" id="Dreamcoders">
      <div className="position-relative">
        <div className="position-absolute top-0 start-0">
            <img src={require ('../img/dreamcoders/fondo-bn-dreamcoders.png')}  alt="Fondo DreamCoders" height="1000"/>
        </div>
      </div>   
      <BannerDreamcoders />
      <Talents />
      <SliderDreamcoders />


    </div>
  )
}

export default Dreamcoders;