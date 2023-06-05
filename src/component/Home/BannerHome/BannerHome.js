import React from 'react';
import { Trans } from 'react-i18next';
import "./bannerHome.css"


function BannerHome (){

        return(
            <section className="home_banner" id="BannerHome">
                <div className="container">                                     
                    <div className="row align-items-start">
                        <div className="col-lg-5 text-left w_color ">
                                <h1>
                                    <Trans i18nKey="titleBannerHome">
                                        Dream to <span>Transform</span> the future
                                    </Trans>
                                </h1>
                        </div>
                        <div className="col-lg-7" >
                            <div className="app_img" >
                                <div className='home_bubble'>
                                    <div className='bubble b_one'></div>
                                    <div className='bubble b_two'></div>
                                    <div className='bubble b_tres'></div>
                                    <div className='bubble b_four'></div>
                                    <div className='bubble b_five'></div>
                                    <div className='bubble b_six'></div>
                                    <div className='bubble b_seven'></div>
                                    <div className='bubble b_eight'></div>
                                </div>
                                <img  src={require("../../../img/home/banner-home-planet.png")} alt="" />               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}    



export default BannerHome;