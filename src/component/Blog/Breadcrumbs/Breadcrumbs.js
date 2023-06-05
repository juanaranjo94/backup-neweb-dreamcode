import React from 'react';
import './breadcrumbs.css';
import { NavLink } from 'react-router-i18n';

function Breadcrumbs() {

    const lang = '/:locale(en|es)?';


  return (
    <div className='breadcrumbs mb-5'>
        <NavLink className='w_color mr-3' to={`${lang}/category`}>
            <div className={`All breadcrumbs-item `}>
                All
            </div>
        </NavLink>
        <a className='w_color ml-3 mr-3' href={`/category/innovation`}>
            <div data-filter="innovation" className={`innovacion breadcrumbs-item `} >
                Innovation
            </div>
        </a>
        <a className='w_color ml-3 mr-3' href={`/category/up-to-date`}>
            <div data-filter="up-to-date" className={`up-to-date breadcrumbs-item `} >
                Stay up-to-date
            </div>
        </a>
        <a className='w_color ml-3 mr-3' href={`/category/transformation`}>
            <div data-filter="transformation" className={`transformation breadcrumbs-item `} >
                Technological Transformation
            </div>
        </a>
    </div>
  )
}

export default Breadcrumbs;