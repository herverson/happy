import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing/index';
import Orphanages from './pages/Orphanages/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={Orphanages}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;