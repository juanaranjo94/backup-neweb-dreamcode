import React from 'react';
import { useTranslation } from 'react-i18next';


function HowDevOpsWorks () {

    const { t } = useTranslation('translation', { keyPrefix:'devops'});

        return(
            <section className="devops_how_area pb-5 sec_pad" id='devopsHow'>
                <div className="container">
                    <div className="devops_how_info text-center ">
                        <h2 className="f_600 f_size_40 t_color mb_50">{t('how_devops_works_title')}</h2>
                        <p>{t('how_devops_works_text')}</p>
                    </div>
                </div>
            </section>
        )
    }


export default HowDevOpsWorks;