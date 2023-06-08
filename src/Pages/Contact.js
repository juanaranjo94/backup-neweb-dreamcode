import React from 'react'
import BannerContact from '../component/Contact/BannerContact/BannerContact';
import OurOffices from '../component/Contact/OurOffice/OurOffices';
import FormNewsletter from '../component/Forms/FormNewsletter/FormNewsletter';
import FormContact from '../component/Forms/FormContact/FormContact';

function Contact() {

  return (
    <>
      <BannerContact  />
      <OurOffices />
      <FormNewsletter typeNewsletter="contact" />
      <FormContact 
        typeForm=" lightForm sec_pad"/>
    </>
  )
}

export default Contact;