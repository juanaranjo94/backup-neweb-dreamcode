import React, { Suspense } from 'react';
import { BrowserRouter, Route ,Switch, Redirect } from "react-router-dom";
import './App.css';
import Menu from './component/Header/Menu';
import Footer from './component/Footer/Footer';

import Home from "./Pages/Home";
import NotFound from "./Pages/404";
import Devops from "./Pages/Devops";
import Scrum from "./Pages/Scrum";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import Category from "./Pages/Category";
import Post from "./Pages/Post";
import Dreamcoders from './Pages/Dreamcoders';
import About from "./Pages/About";
import Newsletter from './component/Forms/FormNewsletter/FormNewsletter';
import GreatPlace from './Pages/GreatPlace';

import Careers from './Pages/Careers'
import ScrollToTop from './assets/ScrollToTop';
import Flotantes from './component/Flotantes/Flotantes';

function App () {

  const lang = '/:locale(en|es)?';

  return (

    <BrowserRouter >
      <Route path={lang} component={Menu} />
        <Suspense fallback={<h2>Loading...</h2>}>
          <ScrollToTop />
          <Flotantes />
          <Switch>
            <Route exact path={lang} component={Home} />
            <Route path={`${lang}/careers`} component={Careers} />
            <Route path={`${lang}/contacts`} component={Contact} />
            <Route path={`${lang}/about`} component={About} />
            <Route path={`${lang}/devops`} component={Devops} />
            <Route path={`${lang}/scrum`} component={Scrum} />
            <Route path={`${lang}/services`} component={Services} />
            <Route path={`${lang}/category`} component={Category} />
            <Route path={`${lang}/great-place-to-work`} component={GreatPlace} />
            <Route path={`${lang}/dreamcoders`} component={Dreamcoders} />
            <Route path={`${lang}/404`} component={NotFound} />
            <Route path={`${lang}/blog`} component={Blog} />
            <Redirect exact from={`${lang}/:postId`} to={`${lang}/post/:postId`}  />
            <Route exact path={`${lang}/post/:postId`} component={props => <Post {...props}/>} />   
          </Switch> 
        </Suspense>
      <Route path={lang} component={Footer} />
      <Newsletter typeNewsletter="modal fade"/>
    </BrowserRouter>

  )
};

export default App;
