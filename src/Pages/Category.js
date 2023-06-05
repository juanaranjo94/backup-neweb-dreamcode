import React from "react";
import { useTranslation, Trans } from 'react-i18next';
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
            <h2>Topics</h2>
            <ul>
            <li>
                <Link to={`${url}/rendering`}>{t('rendering')}</Link>
            </li>
            <li>
                <Link to={`${url}/components`}>{t('components')}</Link>
            </li>
            <li>
                <Link to={`${url}/props-v-state`}>{t('props_v_state')}</Link>
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
  
  function Topic({ person, messages }) {

    let { topicId } = useParams();
    const { t } = useTranslation();
    const { name } = 'Juan';
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>{t(`${topicId}`)}</h1>
          <h2>{t('key2', {val: '$t(key1)'})}</h2>
          <h3>{t('key', { topicId })}</h3>
          <h3>
            <Trans i18nKey="part1">
              To get started, edit <span className="App-link">src/App.js</span> and save to reload. <Link to="/msgs">Go to messages</Link>
            </Trans>
          </h3>
        </header>
      </div>
    );
  }

export default Topics