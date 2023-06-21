import React from 'react';
import "./devops.css"
import { useTranslation } from 'react-i18next';

function DevopsItem () {

        const { t } = useTranslation('translation', { keyPrefix:'devops'});

    return(
        <section className="devops_part_area pb-5 sec_pad">
            <div className="container">
                <div className="d-flex">
                    <div className="devops_part_item">
                        <img src={require ('../../../img/process/DevIcon.png')} className='img-fluid' width="300" alt="Process DevOps DreamCode"/>
                        <h3 className='pink_color f_size_40 f_600 my-4 '>Dev</h3>
                        <p className=" f_500">{t('Dev_meaning')}</p>
                    </div>
                    <div className="devops_part_item">
                        <img src={require ('../../../img/process/OpsIcon.png')} className='img-fluid' width="300" alt="Process DevOps Icon"/>
                        <h3 className='pink_color f_size_40 f_600 my-4 '>Ops</h3>
                        <p className=" f_500">{t('Ops_meaning')}</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }


export default DevopsItem;


