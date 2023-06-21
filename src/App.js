
import React  from 'react';
import { BrowserRouter, Route ,Switch, Redirect } from "react-router-dom";
import './App.css'

/* ---- Pages ----*/
import Home from "./Pages/Home";
import Careers from './Pages/Careers'
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Devops from "./Pages/Devops";
import Scrum from "./Pages/Scrum";
import Services from "./Pages/Services";
import GreatPlace from './Pages/GreatPlace';
import Dreamcoders from './Pages/Dreamcoders';
import NotFound from "./Pages/404";
import Blog from "./Pages/Blog";

/* ---- Menu - Footer - Newsletter ---*/
import Menu from './components/Header/Menu';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Forms/FormNewsletter/FormNewsletter';
import ScrollToTop from './assets/ScrollToTop';
import Flotantes from './components/Flotantes/Flotantes';

function App () {

    const lang = '/:locale(en|es)?';
  
    return (  

            <BrowserRouter >
                <Route path={lang} component={Menu} />
                <ScrollToTop />
                <Flotantes />
                <Switch>
                  <Route exact path={lang} component={Home} />
                  <Route path={`${lang}/careers`} component={Careers} />
                  <Route path={`${lang}/contact`} component={Contact} />
                  <Route path={`${lang}/about`} component={About} />
                  <Route path={`${lang}/devops`} component={Devops} />
                  <Route path={`${lang}/scrum`} component={Scrum} /> 
                  <Route path={`${lang}/services`} component={Services} />
                  <Route path={`${lang}/great-place-to-work`} component={GreatPlace} />
                  <Route path={`${lang}/dreamcoders`} component={Dreamcoders} />
                  <Route path={`${lang}/404`} component={NotFound} /> 
                  <Route path={`${lang}/blog`} component={Blog} />
                  <Redirect exact from={`${lang}/:postId`} to={`${lang}/blog/:postId`}  />
                </Switch>
                <Route path={lang} component={Footer} />
                <Newsletter typeNewsletter="modal fade"/>                 
            </BrowserRouter>

            )
        };


export default App;