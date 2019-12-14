import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Analytics from './pages/Analytics';
import AuthURL from './pages/AuthURL';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Redirection from './pages/Redirection';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={AuthURL} />
        <Route path="/" exact component={Home} />
        <Route path="/analytics" component={Analytics} />
        <Route path="*" component={PageNotFound} />
        <Route path="/:id" exact component={Redirection} />
      </Switch>
    </BrowserRouter>
  );
}
