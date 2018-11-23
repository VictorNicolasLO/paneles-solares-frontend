import React, { Component, Children } from 'react';

export const AuthContext = React.createContext({
  isAuth: false,
  login: (user, password) => {}
});

export class AuthContextComponent extends Component {
  login = (user, password) => {
    setTimeout(() => {
      this.setState({
        isAuth: true
      });
    }, 3000);
  };

  state = {
    isAuth: false,
    login: this.login
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
