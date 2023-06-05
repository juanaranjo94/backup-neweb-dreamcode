import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import {  NavLink } from 'react-router-i18n';
import enJobs from './../assets/jobs/enJobs.json';
import esJobs from './../assets/jobs/esJobs.json';
import {
  BrowserRouter as Router, Switch,  Route,  Link,  Redirect,  useParams,useRouteMatch
} from "react-router-dom";

  function Careers() {
    let { path, url } = useRouteMatch();
    const { t } = useTranslation();
  
    return (
        <Switch>
          <Route exact path={path}>
            <div className="App">
            <div className="App-header container">
            <h2>{t('service_home.service_title')}</h2>
            <ul>
              <li>
                  <Link to={`${url}/${enJobs[0].job_url}`}>{enJobs[0].job_name}</Link>
              </li>
              <li>
                  <Link to={`${url}/innovation`}>Innovation</Link>
              </li>
              <li>
                  <Link to={`${url}/up-to-date`}>Stay up-to-date</Link>
              </li>
              <li>
                  <Link to={`${url}/transformation`}>Technological Transformation</Link>
              </li>
            </ul>
            <br></br>
            <div className="row">
              {
                enJobs.map((item, i) => {
                  return (
                    <div className='col-lg-4 col-md-6 col-sm-12 pb-3' key={i} id={item.id}>
                      <div className={`media ${"bg_" + item.color} flex-wrap`} >
                        <div className="media-body  w_color">
                          <h3 className="f_size_25 f_700" >{item.job_name}</h3>   
                          <h4 className="f_size_20 pt-2 pb-2 f_600 ">{t('careers.remote')}
                            <i className="pl-2 f_size_15 f_600 ti-rss-alt"></i>
                          </h4>
                          <button type="button" className="f_p f_700 btn btn-light">
                            <Link to={`${url}/${item.job_url}`}>{t('careers.apply')}</Link>
                          </button>
                        </div>
                      </div>  
                    </div>
                  )
                })
              }
            </div>
            <div>
              <Jobsitems 
                id={enJobs[0].id}
                name={enJobs[0].job_name}
                color={enJobs[0].color}
                url={url}
                urlJob={enJobs[0].job_url}
              />
            </div>
            </div>
            </div>
          </Route>
          <Redirect from={`${path}/cualquiera/:jobsId`} to={`${path}/:jobsId`}/>
          <Route path={`${path}/:jobsId`}>
            <Profile />
          </Route>
          
        </Switch>
      
    );
  }

  function Jobsitems ({id, name, color, urlJob, url}) {

    const { t } = useTranslation();

    return (
      <div className='col-lg-4 col-md-6 col-sm-12 pb-3' id={id}>
        <div className={`media ${"bg_" + color} flex-wrap`} >
            <div className="media-body  w_color">
                <h3 className="f_size_25 f_700" >{name}</h3>   
                <h4 className="f_size_20 pt-2 pb-2 f_600 ">{t('careers.remote')}
                    <i className="pl-2 f_size_15 f_600 ti-rss-alt"></i>
                </h4>
                <button type="button" className="f_p f_700 btn btn-light">
                  <Link to={`${url}/${urlJob}`}>{t('careers.apply')}</Link>
                </button>
            </div>
        </div>  
      </div>
    )
  }
  
  function Profile() {

    let { jobsId } = useParams();
    const { t , i18n} = useTranslation();  
    return (
      <div className="App">
        <header className="App-header">

          <h3>                        
            <NavLink className="nav-link" activeclass="active" spy="true" offset={0} duration={500} to={`/test`}>
              Ir atras
            </NavLink>
          </h3>
          <h1>Estamos en: {t(`${jobsId}`)} y en {i18n.language}</h1>
          <h3>{enJobs[0].job_name}</h3>
          <h3>
            <Trans i18nKey="titleBannerHome">
                Dream to <span>Transform</span> the future
            </Trans>
          </h3>
        </header>
      </div>
    );
  }

  

export default Careers;