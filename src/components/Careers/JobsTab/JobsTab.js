import React from 'react';
import './jobsTab.css'
import { useTranslation } from 'react-i18next';
import enJobs from './../../../assets/jobs/enJobs.json';
import esJobs from './../../../assets/jobs/esJobs.json';
import {  Link } from "react-router-dom";

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
                    <Link className={`${color}`} to={`${url}/${urlJob}`}>{t('careers.apply')}</Link>
                </button>
            </div>
        </div>  
      </div>
    )
}

export default function JobsTab({url}) {
    const { t, i18n } = useTranslation();
    let lng = i18n.language;
    let jobsList = null;

    lng === 'en' ? jobsList = enJobs : jobsList = esJobs
  return ( 
        <>
            {
                jobsList.map((item, i) => {  
                    return (
                        <Jobsitems 
                            key={i}
                            id={item.id} 
                            name={item.job_name}
                            url={url} 
                            urlJob={item.job_url}
                            color={item.color} />
                    )
                })
            }
        </>

  )
}
