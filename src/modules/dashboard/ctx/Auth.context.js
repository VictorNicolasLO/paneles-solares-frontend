import React, { Component, Children } from 'react';
import { ContextComponent, createContext, ContextStore } from 'rctx';
import { api } from '../../../services';

class AuthContextComponent extends ContextComponent {
  state = {
    isAuth: false
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
}

export default createContext(AuthContextComponent, {
  store: new ContextStore()
});
