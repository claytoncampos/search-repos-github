import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Repositories from './Pages/Repositories/index.js';
import Home from './Pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repositories" component={Repositories} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
