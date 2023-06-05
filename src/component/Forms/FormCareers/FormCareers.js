import React, {useRef} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Trans, useTranslation } from 'react-i18next';
import './formCareers.css'
import { RECAPTCHA_SITEKEY } from '../../../assets/Constants';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


function FormCareers ({ btn_color }) {

    const { t } = useTranslation();

    const form = useRef();

    const sendEmail = (event) => {

        event.preventDefault();
        emailjs.sendForm('service_gmail', 'template_careers', event.target, 'user_DK3x36R2nsn4W5NwGBIou')
        .then((result) => {
            console.log(result.text + "ENVIADO");
            swal({
                title: t('form_text_modal'),
                icon: "success",
                button: false,
                timer: 3000,
              });
        }, (error) => {
            console.log(error.text + "ERROR");
        });

        event.target.reset();
    };

    // ReCAPTCHA
    function onChange(value) {
        console.log("Captcha value:", value);
    }


    return (

        <form ref={form} onSubmit={sendEmail} className="mb-4 needs-validation was-validated" method="post" id="" >
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input className="form-control " color="white" type="text" id="name" name="name" placeholder={t("forms.form_input_name")} required/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" id="inputEmail4" placeholder={t("forms.form_input_email")} required/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input className="form-control" type="text" name="celular" id="Celular"  placeholder={t("forms.form_input_celular")}  required/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input className="form-control" type="text" name="linkedin" id="Linkedin"  placeholder="Linkedin" required/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group position-relative">
                        <label className="w_color" for="validationServer02">{t("forms.form_label_file_name")}</label>
                        <input type="file" name="file" id="file" accept="application/pdf, .doc, .docx, .odf" className="inputfile" required/>
                            <label className={`btn-file btn_form ${btn_color} text-left f_p w-100 f_600`} >
                                <span>{t("forms.form_input_file")}</span>
                            </label>
                            <div className="valid-feedback">{t("forms.form_label_file_valid")}</div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label className="w_color" for="validationServer02">{t("forms.form_select_fluently")}</label>
                        <select name="ingles" placeholder={t("forms.form_select_fluently")} className={` w_color custom-select mr-sm-2 f_p f_600`}>
                            <option name="Si" value="Si">{t("forms.form_option_yes")}</option>
                            <option name="No" value="No">No</option>
                        </select>                                        
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <input className="form-control" type="text" id="rol" name="rol" placeholder={t("forms.form_input_rol")} required/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-check text-left mb-3">
                        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." required/>                        
                        <label className="pl-2 w_color form-check-label" htmlFor="gridCheck">
                            <Trans i18nKey="forms.form_label_policy">
                                I have read and accept the <a href={require ("../../../assets/documents/Tratamiento_de_Datos_Dreamcode.pdf")} className='f_700 w_color' download="Tratamiento_de_Datos_Dreamcode.pdf">Privacy policy </a>
                            </Trans>
                        </label>                    
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <ReCAPTCHA
                    sitekey={`${RECAPTCHA_SITEKEY}`}
                    onChange={onChange}
                    />
            </div>    
            <div className='position-relative' id="infoContacts">    
                <button type="submit" className={`${btn_color} f_p f_500`} >
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span>{t('careers.apply')}</span>
                </button>
            </div>
        </form>

        )
}

export default FormCareers;
