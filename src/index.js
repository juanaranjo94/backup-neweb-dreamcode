import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import './index.css';
import './App.css';


import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/iconos/themify-icon/themify-icons.css";
import "./assets/styles/animate.css";
import "swiper/css";
import "swiper/css/bundle";
import "./assets/font-awesome/css/all.css";
//import "./assets/styles/responsive.css";
//import "swiper/swiper-bundle.css";

import { render } from 'react-snapshot';

    //----WITH REACT-SNAPSHOT---
    render(
      <Router history={createBrowserHistory()}>
           <App />
      </Router>,
      document.getElementById('root')
    );
    
    reportWebVitals();