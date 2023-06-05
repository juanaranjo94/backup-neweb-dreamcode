import React from 'react';
import { useTranslation } from 'react-i18next';
import './brochures.css'


function Brochures() {

    const { t } = useTranslation('translation', { keyPrefix: 'servicePage' });

  return (
        <section className="servicesInt_content text-center">
            <div className="mb-3">
                <p className="f_p w_color f_500 f_size_30" >{t('ServContactBanner.ServiceBannerDescrip')}</p>
                <h2 className='f_600 f_p texto-degradado f_size_60'>{t('ServContactBanner.ServiceBannerTitle')}</h2>
            </div>
                <p className="f_p w_color f_500 f_size_20" >{t('ServContactBanner.DownloadBrochure')}:</p>  
            <div className='mt-4 position-relative '>
                <div className='preview '>
                    <a href={require ("../../../assets/documents/Brochure_DreamCode_English_V1.pdf")} className="mx-3 my-3" download="Brochure_DreamCode_English_V1.pdf">
                        <div className="buttonDownload glow-on-hover f_p f_500">
                            <div className="button-wrapper"> 
                                <div className="text f_p f_500">{t('ServContactBanner.brochureEnglish')}</div>
                                <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                </span>
                            </div>                                
                        </div>
                    </a>
                    <a href={require ("../../../assets/documents/Brochure_DreamCode_Spanish_V1.pdf")} className="mx-3 my-3" download="Brochure_DreamCode_Spanish_V1.pdf">
                        <div className="buttonDownload glow-on-hover f_p f_500">                              
                            <div className="button-wrapper">
                            <div className="text f_p f_500">{t('ServContactBanner.brochureSpanish')}</div>
                                <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                </span>
                            </div>                                
                        </div>
                    </a>

                </div>
            </div>

        </section>
  )
}

export default Brochures;