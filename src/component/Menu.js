import React from 'react'

//import { NavLink } from "react-router-dom";
import {  NavLink } from 'react-router-i18n';

import i18n from './../locales/I18n';

const Menu = ({ location: { pathname }, match: { params: { locale } }, history}) => {

    const stripLocale = (pathname, locale) => {
        if (!locale) {

          return pathname;
        }

        i18n.changeLanguage(locale);
        
        return pathname.replace(`/${locale}`, '');
        
      };



  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" history={history}>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to={'/'}>Home</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to={`/about`}>About</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to={`/contacts`}>Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={(location) => ({ ...location, pathname: '/blog' })}>Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={(location) => ({ ...location, pathname: '/topics' })}>Topics</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                            <i className="ti-world"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" ignoreLocale to={`/es${stripLocale(pathname, locale)}`}>
                                Español
                            </NavLink>
                            <NavLink className="dropdown-item" ignoreLocale to={`/en${stripLocale(pathname, locale)}`}>
                                Ingles
                            </NavLink>
                        </div>
                    </li>
                </ul>
                
            </div>
        </nav>
    </>
  )
}

export default Menu