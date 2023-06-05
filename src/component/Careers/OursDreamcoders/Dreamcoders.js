import React from 'react';
import './dreamcoders.css';
import { useTranslation } from 'react-i18next';

function DreamcodersItem ({ name, position, img, verb}) {
    
    return (
        <div className="col-lg-3 col-6">
            <div className="our-dreamcoders-item">
                <img src={require(`../../../img/dreamcoders/${img}`)} alt="DreamCoders Verbs Culture"/>
                <div className="team_content text-left pl-3 ">
                    <h3 className="mb-1 f_p f_size_25 f_600 w_color">{name}</h3>
                    <h4 className='w_color f_p f_size_18 f_500'>{position}</h4>
                </div>
                <div className="hover_content">
                    <div className="n_hover_content"> 
                        <h3 className="mb-4 verb_team f_p f_size_30 f_600 w_color">{verb}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function Dreamcoders() {

    const {t} = useTranslation();
    const oursdreamcoders = t('careers.ours_dreamcoders', { returnObjects: true })
console.log(oursdreamcoders, 'this');


  return (
    <>
        {
            oursdreamcoders.map((item, index) => {
                return (
                    <DreamcodersItem 
                        key={index}
                        name={item.name}
                        position={item.position}
                        img={item.picture}
                        verb={item.verb}
                />
                )
            })
        }
    </>
  )
}
