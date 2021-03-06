import React, { Component } from 'react';
import './Login.css';
import LoginCard from '../../components/login-card/LoginCard';
import { injectContexts } from 'rctx';
import AuthContext, { AuthContextComponent } from '../../ctx/Auth.context';
import { Redirect } from 'react-router-dom';

type Props = {
  authContext: AuthContextComponent
};

class Login extends Component<Props> {
  render() {
    const authContext = this.props.authContext;

    if (this.props.authContext.isAuth) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="component-Login">
        <div className="SecundaryColorLogin" />
        <LoginCard login={this.props.authContext.login} />
        <div style={{ position: 'absolute', background: 'red' }} />
      </div>
    );
  }
}

export default injectContexts(Login, {
  authContext: AuthContext
});
