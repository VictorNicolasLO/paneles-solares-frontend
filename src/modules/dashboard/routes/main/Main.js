import React, { Component } from 'react';
import './Main.css';
import AuthContext from '../../context/Auth.context';
import { Redirect } from 'react-router-dom';
import { injectContext } from '../../../../utils/injectContext';

const contexts = {
  authContext: AuthContext
};

class Main extends Component {
  render() {
    if (!this.props.authContext.isAuth) {
      return <Redirect to="/dashboard/login" />;
    }
    return <div className="component-main">Dashboard</div>;
  }
}

export default injectContext(Main, contexts);