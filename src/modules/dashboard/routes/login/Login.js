import React, { Component } from 'react';
import './Login.css';
import LoginCard from '../../components/login-card/LoginCard';
import { withContext } from '../../../../utils/withContext';
import { AuthContext } from '../../context/Auth.context';
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
      </div>
    );
  }
}

export default withContext(Login, {
  authContext: AuthContext
});
