import React from 'react';
import { Router, Redirect, Route, Switch } from 'dva/router';
// import IndexPage from './views/IndexPage';
import LoginPage from './views/Login/index'
import IndexPage from './views/Main/index'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={IndexPage} />
        {/* <Redirect from="/" to="/login" /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
