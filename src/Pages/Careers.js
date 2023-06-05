import React from 'react';
import { BrowserRouter as Switch,Route,useRouteMatch,Link} from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import '../component/Careers/careers.css';
import JobsProfile from './JobsProfile';
import VideoCareers from '../component/Careers/Video/VideoCareers';
import JobsTab from '../component/Careers/JobsTab/JobsTab';
import Dreamcoders from '../component/Careers/OursDreamcoders/Dreamcoders';
import ParallaxTitle from '../component/Titles/ParallaxTitle';
import Benefits from './Benefits';


function Careers() {

  let { path, url } = useRouteMatch();
  const {t} = useTranslation();


  return (
    <>
      <Switch>
        <Route exact path={`${path}/`}>
          
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
          <section className="jobs-tab sec_pad">
            <h2 className='text-center t_color f_size_40 f_600 mb-4'>{t('careers.title_opportunities')}</h2>
            <div className='container'>
              <div className='row'>
                <JobsTab url={url}/>
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

          
          
        </Route>
        <Route path={`${path}/:topicId`} > 
          <JobsProfile />
        </Route>
      </Switch>
    </>

  )
}

export default Careers;

