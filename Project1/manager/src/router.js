import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import domePage from './views/domePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={domePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
