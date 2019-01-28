import React, { Component } from 'react';
import './Login.css';
import LoginCard from '../../components/login-card/LoginCard';
import { injectContexts } from '../../../../utils/injectContexts';
import AuthContext from '../../context/Auth.context';
import { Redirect } from 'react-router-dom';
import ComponentTest from '../../components/componentTest/component-test';
class Login extends Component {
  render() {
    if (this.props.authContext.isAuth) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="component-Login">
        <div className="SecundaryColorLogin" />
        <LoginCard />
        <div style={{ position: 'absolute', background: 'red' }}>
          <ComponentTest contextKey={1} key={1} tt={1234} />
          <ComponentTest contextKey={2} key={2} tt={1243} />
          <ComponentTest contextKey={3} key={3} tt={1252} />
        </div>
      </div>
    );
  }
}

export default injectContexts(Login, {
  authContext: AuthContext
});
