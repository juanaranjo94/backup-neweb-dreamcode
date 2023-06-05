import React from 'react';
import { useParams , Redirect} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import enJobs from './../assets/jobs/enJobs.json';
import esJobs from './../assets/jobs/esJobs.json';
import ProfileSlider from '../component/Careers/JobsProfile/ProfileSlider';
import FormCareers from '../component/Forms/FormCareers/FormCareers';

function JobsProfile() {

    let { topicId } = useParams();
    const { t, i18n } = useTranslation();
    let lng = i18n.language;
    let jobsList = null;
    lng === 'en' ? jobsList = enJobs : jobsList = esJobs

    return (
      <>   
        { 
          jobsList.map((post, i) => {
            if (post.job_url === topicId) {
                return ( 
                        <div key={i}>   
                          <section className={`${"bg_" + post.color} profile--banner sec_pad `}>
                              <div className='container position-relative'>
                                  <h1 className="pt-4 w_color text-center pb-2">
                                    <strong>DreamCoder:<br></br></strong> 
                                      {post.job_name}
                                  </h1>
                                  <p className='text-center w_color px-4 pb-3'>
                                    {post.job_description}
                                  </p>
                              </div>
                          </section>
                          <section className='profile--expert sec_pad'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-5 d-flex align-items-center'>                        
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
                                                post.job_experts.map((value) => {
                                                    return <li className='f_p f_size_18'>{value}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          </section>
                          <section className='sec_pad advantage--slider'>
                            <h2 className='p_color text-center mb-4 f_600'>{t('profile_job.advantage_title')}</h2>
                            <div className='container'>
                              
                                <ProfileSlider />
                              
                            </div>
                          </section>
                          <section className={`${"bg_" + post.color} careers--form  sec_pad`}>
                            <div className='container'>
                              <div className='row justify-content-center align-items-center'>
                                <div className='col-lg-5'>
                                  <h2 className=" w_color pb-2 l_height50 f_600  f_size_70">{t('profile_job.profile_form_title')}</h2>
                                </div>
                                <div className='col-lg-7'>
                                  <FormCareers
                                    btn_color= {post.color}/>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                );
            } else {
                    <Redirect to="/careers" />
              }
          }
          
          )
        }  
      </>
    );
}

export default JobsProfile;