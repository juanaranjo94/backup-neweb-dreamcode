import React, { Component } from 'react'
import './scroll.css'

export class Scroll extends Component {
  render() {

let { classScroll } = this.props;

    return (
        <div className={`scroll ${classScroll} text-center mt-5`}>
            <div>
                <span></span>
            </div>
            <p className="f_p p_color text-center f_600">Scroll</p>
        </div>
      
    )
  }
}

export default Scroll