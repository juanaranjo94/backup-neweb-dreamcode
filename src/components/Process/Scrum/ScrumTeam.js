import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxTitle from '../../Titles/ParallaxTitle';
import './scrum.css';

function ScrumTeamItem ({ title, image, text }) {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="scrum_team_item text-left  fadeInUp">
                <img src={require ("../../../img/process/" + image)} width="120" className='mb-5' alt={title}/>      
                <h5 className='f_size_30 f_600 mb-3 orange_color'>{title}</h5>
                <p className='f_size_18 p_color f_500'>{text}</p>  
            </div>
        </div>
    )
}

export default function ScrumTeam() {

    const { t } = useTranslation('translation', { keyPrefix:'scrum.ScrumTeam'});

    return(
        <section className="scrum_team_area sec_pad" id='scrumTeam'>
            <div className="container">
                <div className=" text-center">
                  <ParallaxTitle 
                    classDiv="text-center" 
                    Pclass="p_color"
                    h2Class="t_color f_size_40 f_600"
                    Title={t('Title')}
                    TitleP={t('Descrip')} />
                </div>
                <div className="row scrum_team_inner pt-5">
                    <ScrumTeamItem 
                        image="owner.png" 
                        title={t('Team1')} 
                        text={t('Team1Descrip')}  
                    />
                    <ScrumTeamItem 
                        image="team.png"
                        title={t('Team2')}
                        text={t('Team2Descrip')}  
                    />
                    <ScrumTeamItem 
                        image="master.png" 
                        title={t('Team3')}
                        text={t('Team3Descrip')} 
                    /> 
                    
                </div>
            </div>
        </section>
        )
}