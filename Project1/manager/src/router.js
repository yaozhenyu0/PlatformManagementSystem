import React from 'react';
import { Router, Route, Switch,Redirect} from 'dva/router';
import LoginPage from './views/Login/Index';
import IndexPage from './views/Main/Index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login"  component={LoginPage} />
        <Route path="/" component={IndexPage} />
        <Redirect from="/" to="/main"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
