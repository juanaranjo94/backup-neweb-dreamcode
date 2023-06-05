import React from 'react';
import './../component/Benefits/benefits.css';
import { useTranslation } from 'react-i18next';
import ParallaxTitle from '../component/Titles/ParallaxTitle';
import BenefitsList from '../component/Benefits/BenefitsList';

function Benefits() {

    const {t} = useTranslation();

  return (
    <>
        <section className="banner--benefics h-75" id="">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="pt-4 pb-4 img-icons text-left">
                            <img className="w-10" src={require("../img/iconos/fondo-home.png")} alt="Fondo Home"/>
                            <img className="w-10" src={require("../img/iconos/fondo-home2.png")} alt="Fondo Home"/>
                            <img className="w-10" src={require("../img/iconos/fondo-home.png")} alt="Fondo Home"/>
                            <img className="w-10" src={require("../img/iconos/fondo-home2.png")} alt="Fondo Home"/>
                        </div>
                    </div>
                    <div className="col-lg-8">                   
                        <div className="w_color text-left pt-3">
                            <h2 className="f_size_50 f_700 l_height09">{t('benefits.banner_title')}</h2>
                            <h2 className="f_size_25 f_600 mb_30">{t('benefits.banner_subTitle')}</h2>  
                            <p className="f_size_18 f_500">{t('benefits.banner_text')}</p>        
                        </div>
                    </div>
                </div>    
            </div>
        </section>
        <section className='benefics--tab'>
            <ParallaxTitle 
                Title ={t('benefits.benefits_tab_title')}
                classDiv ="text-center p-5"
                h2Class ="t_color f_600 f_size_40"
            />
            <div className="container">
                <div className="row">
                    <BenefitsList />
                </div>
            </div>
        </section>
        <section className="d-flex align-items-center py_60 banners--job" id="bannerFinalJob">
            <div className="container">              
                <div className="row">
                    <div className="col-lg-9">
                        <h2 className="text-left f_600 f_size_50 m-0 w_color">{t("careers.banner_opportunities")}</h2>
                    </div>
                    <div className="col-lg-3">
                        <button type=" button" className="btn_banner f_p f_size_20 py-2 px_50 f_600 color2">
                            <a href={"/careers"} >{t("components.read_more")}</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Benefits;