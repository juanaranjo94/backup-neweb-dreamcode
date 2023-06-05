import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import Plx from "react-plx";
import './title.css'

class ParallaxTitle extends Component {
    render(){

        const ParallaxTitle = [
            {
              start: 'self',
              duration: 300,
              properties: [
                
                {
                    startValue: -30,
                    endValue: 0,
                    property: "translateY"
                  },
                  {
                    startValue: 0.3,
                    endValue: 1,
                    property: "opacity"
                  }
              ]
            }
        ];
        const ParallaxTitleP = [
            {
              start: 'self',
              duration: 300,
              properties: [
                
                {
                    startValue: 60,
                    endValue: 0,
                    property: "translateY"
                  },
                  {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                  }
              ]
            }
        ];


        let {Title, Paragraph, classDiv, h2Class, Pclass} = this.props;
        return(
            <div className={`seo_title ${classDiv} `}>           
                <Reveal effect="fadeInUp" duration={1300}>
                    <Plx parallaxData={ParallaxTitle}>
                        <h2 className={` ${h2Class}`}>
                            {Title}
                        </h2>
                    </Plx>
                </Reveal> 
                <Reveal effect="fadeInUp" duration={1600}>
                    <Plx parallaxData={ParallaxTitleP}>
                        <p className={` ${Pclass}`}>
                            {Paragraph}
                        </p>
                    </Plx>
                </Reveal>
            </div>
        )
    }
}
export default ParallaxTitle;
