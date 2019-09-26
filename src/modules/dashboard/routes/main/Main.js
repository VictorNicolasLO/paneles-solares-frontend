import React, { Component } from 'react';
import AuthContext from '../../ctx/Auth.context';
import { Redirect, Route, Switch } from 'react-router-dom';
import { injectContexts, importContexts } from 'rctx';
import Home from './routes/home/home';
import LayoutCtx from './ctx/Layout.ctx';
import Layout from './containers/layout';
import AjustePanel from './routes/ajuste-panel';
import { router } from './router';

class Main extends Component {
  render() {
    if (!this.props.authContext.isAuth) {
      return <Redirect to="/dashboard/login" />;
    }
    return (
      <Layout>
        <Switch>
          {router.map((route) => {
            return (
              <Route
                exact={true}
                path={route.path}
                component={route.Component}
              />
            );
          })}
        </Switch>
      </Layout>
    );
  }
}

const contexts = {
  authContext: AuthContext,
};

export default importContexts(injectContexts(Main, contexts), [LayoutCtx]);
