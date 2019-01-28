import React, { Component } from 'react';
import './Login.css';
import LoginCard from '../../components/login-card/LoginCard';
import { injectContext } from '../../../../utils/injectContext';
import AuthContext from '../../context/Auth.context';
import { Redirect } from 'react-router-dom';
import { ComponentTest } from '../../components/componentTest';
import { importContext } from '../../../../utils/importContext';

class Login extends Component {
  render() {
    if (this.props.authContext.isAuth) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="component-Login">
        <div className="SecundaryColorLogin" />
        <LoginCard />
      </div>
    );
  }
}

export default injectContext(Login, {
  authContext: AuthContext
});
