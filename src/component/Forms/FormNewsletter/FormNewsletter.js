import React, { useState } from 'react';
import './formNewsletter.css';
import { Trans, useTranslation } from 'react-i18next';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { URL_MAILCHIMP } from '../../../assets/Constants';
import swal from 'sweetalert';
import $ from 'jquery';


const url = URL_MAILCHIMP;

function Form({ onSubmitted }) {

    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {

        event.preventDefault();

        onSubmitted({ EMAIL: email });
        swal({
            title: t('message_success'),
            icon: "success",
            button: false,
            timer: 4000,
          });
        
        event.target.reset();
      };

    return (
        <form onSubmit={handleSubmit} className="newsletter text-center">
            <div className="form-group">
                <h2>
                    <label className='line-break' htmlFor="exampleInputEmail1">
                    <Trans i18nKey="newsletter.newsletter_title">
                        Subscribe to <span className='f_size_50 f_600 mb-1'><br></br>DreamBlog</span>
                    </Trans>
                    </label>
                </h2>
                <h3 className='f_size_18 f_p text-center p_color'>{t('newsletter.newsletter_description')}</h3>
                <small id="emailHelp" className="form-text text-muted">{t('newsletter.newsletter_info')}</small>
            </div>
            <div className='col-lg-5 col-sm-12 align-items-center'>
            <input 
                type="email" 
                className="f_700 w-100 cursor-pointer border-dark border px-3 b_color py-2 rounded-lg my-2 text-center" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="YOUR E-MAIL" 
                onChange={(event) => setEmail(event.target.value)}
                required />
            <button type="submit" className="f_700 w-100 cursor-pointer border-dark border px-3 b_color py-2 rounded-lg my-2 text-center">
                {t('newsletter.newsletter_btn')}
            </button></div>
        </form>
    );
  }

export default function CustomNewsletter ({typeNewsletter}) {

        /* Tiempo en que sale el Pop-up */
        $(document).ready(
            function() {
              $('.modal').delay(15000).queue(function() {
                $('.modal').modal('show')
              });
            }
          );

  return (
    <section className={`newsletter  ${typeNewsletter}`}>
        <div className='container modal-dialog modal-xl px-2'>
            <div className="modal-content">
                <MailchimpSubscribe 
                    url={url}
                    render={({ subscribe }) => (
                        <Form onSubmitted={formData => subscribe(formData)}/>
                    )}
                />
            </div>
        </div>
    </section>
  
  )
}


