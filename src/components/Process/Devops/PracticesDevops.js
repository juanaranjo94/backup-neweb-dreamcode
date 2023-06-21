import React from 'react';
import "./devops.css"
import { useTranslation } from 'react-i18next';

function PracticesDevops() {

    const { t } = useTranslation('translation', { keyPrefix:'devops.PracticesDevOps'});

    return(
        <section className="devops_practices_area pb-5 sec_pad">
            <div className="container">
                <div className="devops_practices_item ">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6 devops_practices_bg">
                            <div className="devops_practices_content  fadeInDown">
                                <h3 className='f_size_30 w_color f_600 mb-3'>{t('DevOpsTitle')}</h3>
                                <p className='w_color'>{t('DevOpsDescrip')}</p>
                                
                            </div>                   
                        </div>
                        <div className="col-lg-6 devops_practices_bg">
                            <div className="devops_practices_content  fadeInDown">
                                <h3 className='f_size_30 w_color f_600 mb-3'>{t('DevOpsTitle2')}</h3>
                                <p className='w_color'>{t('DevOpsDescrip2')}</p>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PracticesDevops;