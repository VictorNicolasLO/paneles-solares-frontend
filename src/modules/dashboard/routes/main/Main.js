import React, { Component } from 'react';
import './Main.css';
import AuthContext from '../../ctx/Auth.context';
import { Redirect, Route, Switch } from 'react-router-dom';
import { injectContexts } from 'rctx';
import Home from './routes/home/home';
import Layout from './components/layout';

const contexts = {
  authContext: AuthContext
};

class Main extends Component {
  render() {
    if (!this.props.authContext.isAuth) {
      return <Redirect to="/dashboard/login" />;
    }
    return (
      <Layout>
        <Switch>
          <Route path="/dashboard" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default injectContexts(Main, contexts);
