import React from 'react';

import { IndexRoute, Route } from 'react-router';

import Layout from 'layout';

import CounterView from 'view/counter';
import Home from 'view/home';
import NotFound from 'view/not-found';
import Setting from 'view/setting';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />

    <Route path="/counter" component={CounterView} />
    <Route path="/settings" component={Setting} />
    <Route path="*" component={NotFound} />
  </Route>
);
