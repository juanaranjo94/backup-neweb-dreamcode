import React from 'react';
import Banner from '../../Banner/Banner';


function BannerProcess({ title, description, img_process}) {

    

  return (
    <Banner classBanner= "banner_services" typeScroll="dark" >
        <div className="col-lg-7 seo_banner_content text-left">
            <h1 className="mb-5 f_size_50 t_color f_700">
                {title}
            </h1>

            <p className="mb-5 f_size_18 pr_0">
                {description}
            </p>
        </div>
        <div className="col-lg-5" >
            <figure className="banner_img" >
                <img src={require (`../../../img/process/${img_process}` )} width="400" alt=""/>               
            </figure>
        </div>          
  </Banner>
  )
}

export default BannerProcess;