import React from 'react';
import Scroll from '../Scroll/Scroll';
import './banner.css'


class Banner extends React.Component{
    render(){
           const {children, classBanner, typeScroll } = this.props;
           
           return(
            <section className={`${classBanner} banner min-vh-100 text-center`} id=''>
                <div className="container">
                <div className="row align-items-center justify-content-center">                 
                        {children}
                </div>
                <Scroll classScroll={typeScroll} />
                </div>
            </section>
           )
    }
}

export default Banner;
