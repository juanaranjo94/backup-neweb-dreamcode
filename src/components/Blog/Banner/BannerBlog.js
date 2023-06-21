import React from 'react';
import './banner-blog.css';
import { useTranslation } from 'react-i18next';

function BannerBlog () {

  const { t } = useTranslation();
 
  return (
    <>
    <section className={`d-flex align-items-center banner_blog`} id="blog">
        <div className="container">             
            <div className="row ">
                <div className="col-md-12 text-center seo_banner_content">
                    <h1 className="mb-5 f_size_90 w_color f_700">DreamBlog</h1>        
                </div>
            </div>
        </div>
    </section>
    <section className='post-list sec_area'>        
      <div className="container">
        <div className='mb-5'>
          <h2 className='t_color f_size_40 f_600'>{t('blog.subtitle_blog')}</h2>
          <p className='p_color f_size_20 f_500'>{t('blog.description_blog')}</p>
        </div>
      </div>
    </section>  
    </>
  )
}

export default BannerBlog ;