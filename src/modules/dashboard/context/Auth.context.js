import React, { Component, Children } from 'react';
import { ContextComponent } from '../../../utils/ContextComponent';
import { api } from '../../../services';

export const AuthContext = React.createContext({
  isAuth: false,
  login: (user, password) => {}
});

export class AuthContextComponent extends ContextComponent {
  Context = AuthContext;

  login = (user, password) => {
    api.auth
      .login(user, password)
      .then(res => {
        this.setState({
          isAuth: true
        });
      })
      .catch(err => {
        this.setState({
          isAuth: false
        });
      });

    /*this.setState({
      isAuth: true
    });*/
  };

  state = {
    isAuth: false,
    login: this.login
  };
}
