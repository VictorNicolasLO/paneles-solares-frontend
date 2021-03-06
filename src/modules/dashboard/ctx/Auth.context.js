import React, { Component, Children } from 'react';
import { ContextComponent, createContext, ContextStore } from 'rctx';
import { api } from '../../../services';

export class AuthContextComponent extends ContextComponent {
  state = {
    isAuth: true,
    name: 'Victor Nicolas',
    email: 'victornicolaslo@hotmail.com'
  };

  login = (user, password) => {
    /*api.auth
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
      });*/
    this.setState({ isAuth: !this.state.isAuth });
  };

  logout = () => {
    this.setState({ isAuth: false });
  };
}

export default createContext(AuthContextComponent, {
  store: new ContextStore()
});
