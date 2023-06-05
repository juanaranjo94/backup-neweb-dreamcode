import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import {  NavLink } from 'react-router-i18n';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();
    const { t } = useTranslation();
  
    return (
        <Switch>
          <Route exact path={path}>
            <div className="App">
            <div className="App-header">
            <h2>{t('service_home.service_title')}</h2>
            <ul>
            <li>
                <Link to={`${url}/innovation`}>Innovation</Link>
            </li>
            <li>
                <Link to={`${url}/up-to-date`}>Stay up-to-date</Link>
            </li>
            <li>
                <Link to={`${url}/transformation`}>Technological Transformation</Link>
            </li>
            </ul>
            </div>
            </div>
          </Route>
          <Redirect from={`${path}/test/:topicId`} to={`${path}/:topicId`}/>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
          
        </Switch>
      
    );
  }
  
  function Topic() {

    let { topicId } = useParams();
    const { t } = useTranslation();
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>{t(`${topicId}`)}</h1>
          <h2>{t('key2', {val: '$t(key1)'})}</h2>
          <h3>{t('contact', { topicId })}</h3>
          <h3>                        
            <NavLink className="nav-link" activeclass="active" spy="true" offset={0} duration={500} to={`/category`}>
              category
            </NavLink>
          </h3>

          <h3>
            <Trans i18nKey="titleBannerHome">
                Dream to <span>Transform</span> the future
            </Trans>
          </h3>
        </header>
      </div>
    );
  }

export default Topics