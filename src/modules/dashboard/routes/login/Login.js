import React, { Component } from 'react';
import './Login.css';
import LoginCard from '../../components/login-card/LoginCard';
import { injectContexts } from 'rctx';
import AuthContext from '../../ctx/Auth.context';
import { Redirect } from 'react-router-dom';
class Login extends Component {
  render() {
    if (this.props.authContext.isAuth) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="component-Login">
        <div className="SecundaryColorLogin" />
        <LoginCard />
        <div style={{ position: 'absolute', background: 'red' }} />
      </div>
    );
  }
}

export default injectContexts(Login, {
  authContext: AuthContext
});
