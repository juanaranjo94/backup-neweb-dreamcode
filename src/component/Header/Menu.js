import React from 'react';
import {  NavLink } from 'react-router-i18n';
import i18n from '../../assets/locales/I18n';
import './menu.css'

const Menu = ({ location: { pathname }, match: { params: { locale } }, history}) => {

    const stripLocale = (pathname, locale) => {
        if (!locale) {
          return pathname;
        }

        i18n.changeLanguage(locale);
        return pathname.replace(`/${locale}`, '');
        
    };



  return (
    
    <header className="navbar sticky-top navbar-expand-lg header_area bg-white" id="header" history={history}>
        <div className='container'>
            <NavLink className="navbar-brand f_size_0 sticky_logo" to={'/'}>
                <img className="logoBlue" src={require("./../../img/logo-blue.png")} alt="logo DreamCode Software" title="Logo DreamCode Software" width="164"/>
            </NavLink>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#OnePageManuContent" aria-controls="OnePageManuContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="menu_toggle">
                    <span className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <span className="hamburger-cross">
                        <span></span>
                        <span></span>
                    </span>
                </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="OnePageManuContent">
                <ul className="navbar-nav ml-auto mr-3">
                    <li className="nav-item ">
                        <NavLink className="nav-link" activeclass="active" spy="true" offset={0} duration={500} to={'/services'}>Services</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" activeclass="active" spy="true" offset={0} duration={500} to={`/about`}>About</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" activeclass="active" spy="true" offset={0} duration={500} to={`/contacts`}>Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeclass="active" spy="true" offset={0} duration={500} to={`/dreamcoders`}>Dreamcoders</NavLink>
                    </li>

                </ul>
                <ul className="navbar-nav flex-direction-row justify-content-center">
                    <li className='dropdown nav-item'>
                        <NavLink className="btn_get btn_hover" to={(location) => ({ ...location, pathname: '/blog' })}>DreamBlog</NavLink>
                    </li>
                    <li className='dropdown nav-item'>
                        <NavLink className="btn_get btn_hover" to={(location) => ({ ...location, pathname: '/test' })}>Test</NavLink>
                    </li>
                </ul>
                <ul className='navbar-nav pl-4 '>
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
        </div>
    </header>
    
  )
}

export default Menu;