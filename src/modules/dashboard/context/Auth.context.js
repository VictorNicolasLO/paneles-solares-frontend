import React, { Component, Children } from 'react';
import { ContextComponent } from '../../../utils/ContextComponent';

export const AuthContext = React.createContext({
  isAuth: false,
  login: (user, password) => {}
});

export class AuthContextComponent extends ContextComponent {
  Context = AuthContext;

  login = (user, password) => {
    setTimeout(() => {
      this.setState({
        isAuth: true
      });
    }, 1000);
  };

  state = {
    isAuth: false,
    login: this.login
  };
}
