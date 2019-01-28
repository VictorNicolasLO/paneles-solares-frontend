import React, { Component, Children } from 'react';
import { ContextComponent } from '../../../utils/ContextComponent';
import { api } from '../../../services';
import { createContext } from '../../../utils/createContext';

class AuthContextComponent extends ContextComponent {
  state = {
    isAuth: false
  };

  login = (user, password) => {
    console.log('Super login');
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
  };
}

export default createContext(AuthContextComponent);
