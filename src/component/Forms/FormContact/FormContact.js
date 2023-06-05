import React, {useRef} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Trans, useTranslation } from 'react-i18next';
import './formContact.css'
import { RECAPTCHA_SITEKEY } from '../../../assets/Constants';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


function Form ({typeForm}) {

    const { t } = useTranslation();

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_gmail', 'template_dreamcode', e.target, 'user_DK3x36R2nsn4W5NwGBIou')
        .then((result) => {
            console.log(result.text);
            swal({
                title: t('form_text_modal'),
                icon: "success",
                button: false,
                timer: 3000,
              });
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    // ReCAPTCHA
    function onChange(value) {
        console.log("Captcha value:", value);
    }


    return (
        <section className={` ${typeForm}  mb-4`}>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-sm-12 col-md-10">    
                        <form ref={form} onSubmit={sendEmail} className=" needs-validation was-validated" method="post" id="contactForm" >
                            <label>
                                <h2 className="f_p f_size_30 f_600 mb-4 l_height_p mb_40">{t('forms.form_title')}</h2>
                            </label>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="name" name="name" placeholder={t('forms.form_input_name')} required/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="email" id="inputEmail4" placeholder={t('forms.form_input_email')} required/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="company" id="company"  placeholder={t('forms.form_input_company')} required/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text-left">
                                        <label className="text-left f_700 m_color" htmlFor="exampleFormControlSelect1">{t('forms.form_label_address')}</label>
                                        <input className="form-control" type="text" name="location" id="location"  placeholder={t('forms.form_input_location')} required/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box text-left">
                                    <label className="text-left f_700 m_color" htmlFor="exampleFormControlSelect1">{t('forms.form_label_service_option')}</label>
                                    <select name="service" className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                            <option name="Develop" value="Develop">{t('forms.form_option_develop')}</option>
                                            <option name="Business" value="Business">{t('forms.form_option_business')}</option>
                                            <option name="Staff" value="Staff">{t('forms.form_option_staff')}</option>
                                            <option name="Information" value="Information">{t('forms.form_option_information')}</option>
                                            <option name="Database" value="Database">{t('forms.form_option_database')}</option>
                                        </select>                                          
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group ">
                                        <textarea className="form-control"  name="message" id="message" cols="30" rows="10" placeholder={t('forms.form_message')} required></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check text-left mb-3">
                                        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." required/>                        
                                        <label className="pl-2 p_color form-check-label" htmlFor="gridCheck">
                                            <Trans i18nKey="forms.form_label_policy">
                                                I have read and accept the <a href={require ("../../../assets/documents/Tratamiento_de_Datos_Dreamcode.pdf")} className='t_color' download="Tratamiento_de_Datos_Dreamcode.pdf">Privacy policy </a>
                                            </Trans>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 form-check ">
                                <ReCAPTCHA
                                    sitekey={`${RECAPTCHA_SITEKEY}`}
                                    onChange={onChange}
                                    />
                            </div>    
                            <div className='position-relative' id="infoContacts">    
                                <button type="submit" className='f_p f_500' >
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                        </svg>
                                        </div>
                                    </div>
                                    <span>{t('forms.form_btn_send')}</span>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>    
        </section>
        )
}

export default Form;
