import React from 'react';
import { useTranslation } from 'react-i18next';

function BenefitsItems ({ title, img }){

  return (
    <div className='col-lg-4 col-6'>
      <div className="benefits_item b_radious">
          <img src={require(`../../img/careers/${img}`)}  alt={title}/>
          <div className="team_content">
              <h3 className="f_p f_size_20 f_600 w_color">{title}</h3>
          </div>
      </div>
    </div>
  )
}

export default function BenefitsList() {

  const { t } = useTranslation();
  const benefistlist = t('benefits.benefits_list', { returnObjects: true })

  return (
    <>
    {
      benefistlist.map((item, index) => (
        <BenefitsItems 
          key={index}
          title={item.benefit}
          img={item.img}
         />
      ))
    }
    </>
  )
}
