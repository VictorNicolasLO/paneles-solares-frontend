import React, { Component } from 'react';
import './Main.css';
import AuthContext from '../../ctx/Auth.context';
import { Redirect, Route, Switch } from 'react-router-dom';
import { injectContexts, importContexts } from 'rctx';
import Home from './routes/home/home';
import LayoutCtx from './ctx/Layout.ctx';
import Layout from './components/layout';
import AjustePanel from './routes/ajuste-panel';
import { routes } from './const';

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
          {routes.map(route => {
            if (route.isDivider) return '';
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
export default importContexts(injectContexts(Main, contexts), [LayoutCtx]);
