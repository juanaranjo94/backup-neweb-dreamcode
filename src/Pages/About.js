import React from 'react';
import Leaders from '../component/About/Leaders/Leaders';
import Experince from '../component/About/Experience/Experince';
import Clients from '../component/About/Clients/Clients';
import Values from '../component/About/Values/Values';
import Team from '../component/About/Team/Team';


function About() {



  return (
    <div className="body_wrapper about  " id="about_us">
      <Leaders />
      <Experince />
      <Clients />
      <Values />
      <Team />
    </div>
  );
}

export default About;

