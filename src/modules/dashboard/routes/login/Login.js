import React, { Component } from 'react';
import './Login.css';
import LoginCard from '../../components/login-card/LoginCard';

export default class Login extends Component {
  render() {
    return (
      <div className="component-Login">
        <div className="SecundaryColorLogin" />
        <LoginCard />
      </div>
    );
  }
}
