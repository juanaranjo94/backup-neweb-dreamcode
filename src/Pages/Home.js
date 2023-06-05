import React from 'react'
import BannerHome from "../component/Home/BannerHome/BannerHome";
import ServicesHome from '../component/Home/ServicesHome/ServicesHome';
import OurProcess from '../component/Home/OurProcessHome/OurProcess';
import Testimonial from '../component/Home/Testimonial/Testimonial';
import SliderBlogHome from '../component/Home/SliderBlogHome.js/SliderBlogHome';
import OurClients from '../component/Home/OurClients/OurClients';
import BannerGreatPlace from '../component/Home/BannerGreatPlace/BannerGreatPlace';


function Home() {

  return (
    <div id='home'>
      <BannerHome />
      <ServicesHome />
      <OurProcess />
      <BannerGreatPlace />
      <Testimonial />
      <SliderBlogHome />
      <OurClients />
    </div>
  )
}

export default Home;