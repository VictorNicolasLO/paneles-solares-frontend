import React, { Component } from 'react';
import './Main.css';
import AuthContext from '../../ctx/Auth.context';
import { Redirect, Route, Switch } from 'react-router-dom';
import { injectContexts } from 'rctx';
import Home from './routes/home/home';

const contexts = {
  authContext: AuthContext
};

class Main extends Component {
  render() {
    if (!this.props.authContext.isAuth) {
      return <Redirect to="/dashboard/login" />;
    }
    return (
      <div className="component-main">
        <Switch>
          <Route path="/dashboard" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default injectContexts(Main, contexts);
