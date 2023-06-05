import React from 'react';
import LogoClient from '../../LogoClients/LogoClients';
import ParallaxTitle from '../../Titles/ParallaxTitle';
import { useTranslation } from 'react-i18next';
import './clients.css'

function Clients() {

    const { t, i18n } = useTranslation('translation', { keyPrefix: 'aboutPage' });


  return (
    <section className="about-clients position-relative py_60 " id="clients">
        <div className="container">
            <div className='row justify-content-center clients-content'>
                <div className="col-sm-12 col-xl-12">
                    <ParallaxTitle 
                        Title={t('about_clients_title')}
                        Paragraph={t('about_clients_descrip')}
                        classDiv="mb-4 text-center"
                        Pclass="d_color text-center f_500"
                        h2Class="d_color f_size_40 f_600"
                    />
                    <LogoClient classDiv='mt-3 clients-content-items' />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Clients;