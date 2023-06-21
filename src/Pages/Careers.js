import React from "react";
import '../components/Careers/careers.css';
import { useTranslation, Trans } from 'react-i18next';
import {  NavLink } from 'react-router-i18n';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import ProfileSlider from '../components/Careers/JobsProfile/ProfileSlider';
import FormCareers from '../components/Forms/FormCareers/FormCareers';
import ParallaxTitle from '../components/Titles/ParallaxTitle';
import Dreamcoders from '../components/Careers/OursDreamcoders/Dreamcoders';
import Benefits from "./Benefits";
import VideoCareers from '../components/Careers/Video/VideoCareers';
import MetaDecorator from '../components/MetaDatos/MetaDecorator';
import ReactGA from 'react-ga';
import { ID_GOOGLE_ANALYTICS } from '../assets/Constants';

    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("/careers");



function Careers() {

    // Configuración de Google Analytics
    ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
    ReactGA.pageview ("careers");

    let { path, url } = useRouteMatch();
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    let listJobs;
    lang === 'es'
      ? listJobs = require('../assets/jobs/esJobs.json')
      : listJobs = require('../assets/jobs/enJobs.json')
  
    return (
          <>

          <Switch>
            <Route exact path={path}>
              <>
              <MetaDecorator 
                  title={t("meta_datos.meta_title_Jobs")}
                  description={t("meta_datos.meta_description_Jobs")}
                  url="careers"
              />
              <VideoCareers />
              <section className="banner_careers" id="">
                <div className="container">              
                  <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 w_color text-left ">
                      <h1 className="f_size_80 f_700 l_height45 mb_40 line-break">
                        <Trans i18nKey="careers.banner_primary_title">
                          Join and Develop <span className='f_size_40 f_600'>your purpose in DreamCode</span>
                        </Trans>
                      </h1>  
                      <h2 className="f_size_40 f_600">{t('careers.banner_primary_subtitle')}</h2>  
                      <p className="f_size_20 f_500">{t('careers.banner_primary_text')}</p>        
                    </div>
                  </div>  
                </div>
              </section>
              <section className="jobs--tab sec_pad">
                <h2 className='text-center t_color f_size_40 f_600 mb-4'>{t('careers.title_opportunities')}</h2>
                <div className='container'>
                  <div className='row'>
                    {
                      listJobs.map((item, i) => {
                        return (
                          <div className='col-lg-4 col-md-6 col-sm-12 pb-3' key={i}>
                            <div className={`media ${"bg_" + item.color} flex-wrap`} >
                              <div className="media-body  w_color">
                                <h3 className="f_size_25 f_700" >{item.name}</h3>
                                <h4 className="f_size_20 pt-2 pb-2 f_600 ">{t('careers.remote')}
                                  <i className="pl-2 f_size_15 f_600 ti-rss-alt"></i>
                                </h4>
                                <div className="btn btn-light f_p f_700">
                                  <Link className={`${item.color}`} to={`${url}/${item.url}`}>{t('careers.apply')}</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      } )
                    }
                  </div>
                </div>
              </section>
              <section className='our-dreamcoders sec_pad'>
                <div className='container'>
                  <ParallaxTitle 
                    Title={t('careers.ours_dreamcoders_title')}
                    classDiv="text-center pb-3"
                    h2Class="text-center t_color f_size_40 f_600 mb-4" />
                  <div className='row'>
                    <Dreamcoders />
                  </div>
                </div>
              </section>
              <Benefits />
              </>
            </Route>

            <Route path={`${path}/:urlId`}>
              <Profile />
            </Route>
            
          </Switch>
        </>
    );
  }
  
  function Profile() {

    let { urlId } = useParams();
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    let listJobs;
    lang === 'es'
      ? listJobs = require('../assets/jobs/esJobs.json')
      : listJobs = require('../assets/jobs/enJobs.json')


    const profile = listJobs.find(job => job.url === urlId);

    if (!profile) {
      return <Redirect to='/404' />
    }

    const { name , description, color, experts, rol } = profile;
    
        // Configuración de Google Analytics
        ReactGA.initialize ({ID_GOOGLE_ANALYTICS}); 
        ReactGA.pageview (`${urlId}`);
  
    return (
      <>          
        <MetaDecorator 
            title={name + ' | Work with us: Join the future'}
            description={description}
            type='Website'
            url={'careers/' + urlId}
        />
        <section className={`profile--banner ${"bg_" + color}  sec_pad `}>
          <div className='container position-relative'>
            <h1 className="pt-4 w_color text-center pb-2">
            <strong>DreamCoder:<br></br></strong> 
              {name}
            </h1>
            <p className='text-center w_color px-4 pb-3'>
              {description}
            </p>
          </div>
        </section>       
        <section className='profile--breadcrumb container mt-3'>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white">
                  <li className="f_p f_size_15 breadcrumb-item">
                    <NavLink to={`/careers`}> 
                      {t('menu.careers')}
                    </NavLink>
                  </li>
                  <li className="f_p f_size_15 breadcrumb-item">{name}</li>
              </ol>
          </nav>
        </section>  
        <section className='profile--expert '>
          <div className='container'>
              <div className='row'>
                <div className='col-lg-5'>
                  <iframe className='w-100' 
                          frameBorder="0" 
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                          title="Sueña para transformar el futuro." 
                          width="640" 
                          height="360" 
                          src={t('careers.url_video')} >
                  </iframe>  
                </div>
                <div className='col-lg-7'>
                  <p className='p_color l_height_p'>{t('profile_job.profile_subtitle')}</p>
                  <h2 className='p_color f_600'>{t('profile_job.profile_how_you_can')}</h2>  
                  <ul className='p_color'>
                      <li className='f_p f_size_18'>{t('profile_job.profile_expert_living')}</li>
                      <li className='f_p f_size_18'>{t('profile_job.profile_expert_imagining')}</li>
                      <li className='f_p f_size_18'>{t('profile_job.profile_expert_assuming')}</li>
                      <li className='f_p f_size_18'>{t('profile_job.profile_expert_focusing')}</li>
                      {
                        experts.map((item, i) =>{
                          return (
                            <li key={i} className='f_p f_size_18'>{item}</li>
                          )
                        })
                      }                      
                  </ul>
                </div>
              </div>
            </div>
        </section>
        <section className='profile--role sec_pad'>
            <div className='container d-flex justify-content-center'>
                <h2 className={`${"bg_" + color} rol-title w_color text-center f_size_50 b_radious f_600`}>{t('profile_job.profile_rol')}</h2>
                <div className={`b_radious border-2px ${"border_" + color} px-4 py_40 `}>
                    <p className='pt-3 text-center line-break p_color '>{rol}</p>
                </div>
            </div>
        </section>
        <section className='profile--slider sec_pad '>
          <h2 className='p_color text-center mb-4 f_600'>{t('profile_job.advantage_title')}</h2>
          <div className='container'>
            <ProfileSlider />
          </div>
        </section>
        <section className={`profile--form ${"bg_" + color}   sec_pad`}>
          <div className='container'>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-5'>
                <h2 className=" w_color pb-2 l_height50 f_600  f_size_70">{t('profile_job.profile_form_title')}</h2>
              </div>
              <div className='col-lg-7'>
                <FormCareers
                  btn_color= {color}/>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

export default Careers;