import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Redirection from '../components/Redirection';
import Analytics from '../pages/Analytics';
import AuthURL from '../pages/AuthURL';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/auth/:code" exact component={AuthURL} />
      <Route path="/" exact component={Home} />
      <Route path="/analytics/:code" component={Analytics} />
      <Route path="/page-not-found" exact component={PageNotFound} />
      <Route path="/:code" exact component={Redirection} />
    </Switch>
  );
}
