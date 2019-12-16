import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Analytics from './pages/Analytics';
import AuthURL from './pages/AuthURL';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Redirection from './components/Redirection';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/:code" exact component={AuthURL} />
        <Route path="/" exact component={Home} />
        <Route path="/analytics/:code" component={Analytics} />
        <Route path="/page-not-found" exact component={PageNotFound} />
        <Route path="/:id" exact component={Redirection} />
      </Switch>
    </BrowserRouter>
  );
}
