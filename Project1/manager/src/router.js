import React from 'react';
import { Router, Redirect, Route, Switch, BrowserRouter } from 'dva/router';
// import IndexPage from './views/IndexPage';
import LoginPage from './views/Login/index'
import IndexPage from './views/Main/index'


function RouterConfig({ history }) {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={IndexPage} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default RouterConfig;
