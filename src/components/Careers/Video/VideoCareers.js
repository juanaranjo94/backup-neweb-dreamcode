import React from 'react';
import './video-careers.css';
import { useTranslation } from 'react-i18next';

function VideoComponent() {

    const { t } = useTranslation();

  return (
    <section className='jobsVideo-section '>
        <div className=" jobsVideo-background">
            <iframe className="jobsVideo-embed" 
                    frameBorder="0" 
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                    title="Sueña para transformar el futuro." 
                    width="640" 
                    height="360" 
                    src={t('careers.url_video')} >
            </iframe>            
        </div>
    </section>
  );
}

export default VideoComponent;
