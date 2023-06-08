import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css';
import { NavLink } from 'react-router-i18n';

function Footer() {

    const { t } = useTranslation();
    const widgets = t('footer.widgets', { returnObjects: true })
    return (
        <footer className="footer--area bg-light">
            <div className='footer--top'>
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer--widget company_widget" >
                                <a to="/" className="f-logo "><img src={require("../../img/logo-blue.png")} alt="Logo DreamCode Software" width="170"/></a>
                                <div className="widget-wrap mt_20 f_p f_600">
                                    <p className="f_size_18 mb-2"><span className='t_color'>{t('footer.email')}:</span> <a href="mailto:info@dreamcodesoft.com"  className="f_500">info@dreamcodesoft.com</a></p>
                                    <p className="f_size_18 mb-2"><span className='t_color'>{t('footer.phone')}:</span> <a href="tel:573155790099"  className="f_500">+57 315 220 62 11</a></p>
                                    <p className="f_size_18 mb-2"><span className='t_color'>Colombia: </span><a href="https://goo.gl/maps/Ync42KoKat2ckRW86"  className="f_500"> Carrera 100 #16-321, <br></br>{t('footer.address')}, Cali, Colombia.</a></p>
                                    <p className="f_size_18 mb-2"><span className='t_color'>USA: </span><a href="https://goo.gl/maps/DGBgT8RAojBZghKK7"  className="f_500"> 50 California Street, 15th Floor, <br></br>San Francisco, CA 94111-4701, United States. </a></p>
                                </div>
                            </div>
                        </div>
                        {       
                        widgets.map((item, i) => {
                            return(
                                <Widget 
                                    key={i}
                                    titleWidget={item.name}
                                    itemsWidget={item.items}
                                />
                            )
                        })

                        }
                        <div className="col-lg-2 col-sm">
                            <div className="footer--widget ">
                                <img src={require("../../img/home/Dreamcode_2023_Certification_Badge.png")} alt="Certification Badge DreamCode Software" width="130"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer--bottom">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p className="mb-0 f_400 p_color f_size_12">Copyright © {new Date().getFullYear()} DreamCode Inc -<strong className="f_500">  All rights reserved.</strong> </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <ul className="list-unstyled text-right">
                                <li>
                                    <a href={require ("../../assets/documents/Tratamiento_de_Datos_Dreamcode.pdf")} className='p_color f_500 f_size_12' download="Tratamiento_de_Datos_Dreamcode.pdf">{t('footer.privacy_policy')}</a>                                    
                                </li>                          
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

);
}

function Widget ({titleWidget, itemsWidget}) {

    return(
        <div className="col-lg-3 col">
            <div className="footer--widget pl_30">
                <h3 className="f-title f_600 t_color f_size_20 mb_20">{titleWidget}</h3>
                <ul className="list-unstyled ">
                    {
                        itemsWidget.map((item, i) => {
                            return (
                                <li className='mb-2' key={i}>
                                    <NavLink className="f_size_18 f_500 p_color" to={`${item.url}/category`}>
                                        {item.text}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )

}

export default Footer;