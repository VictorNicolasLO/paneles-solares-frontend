import React, { Component, Children } from 'react';
import { AuthContextComponent, AuthContext } from './Auth.context';

const contextList = [['AuthContext', AuthContext, AuthContextComponent]];

export const MainContext = React.createContext();

export class MainContextComponent extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      rendered: this.buildContexts(contextList, {}, 0)
    };*/
  }

  buildContexts(contexts, data = {}, i = 0) {
    if (contexts[i]) {
      const name = contexts[i][0];
      const Context = contexts[i][1];
      const ContextComponent = contexts[i][2];
      const result = (
        <ContextComponent>
          {this.buildContexts(contexts, data, i + 1)}
        </ContextComponent>
      );
      return result;
    } else {
      const result = (
        <MainContext.Provider value={{ some: 'some' }}>
          {this.props.children()}
        </MainContext.Provider>
      );
      return result;
    }
  }

  render() {
    return this.buildContexts(contextList);
    /*return (
      <AuthContextComponent>
        <AuthContext.Consumer>
          {authContext => {
            return (
              <MainContext.Provider
                value={{
                  AuthContext: authContext
                }}
              >
                {this.props.children}
              </MainContext.Provider>
            );
          }}
        </AuthContext.Consumer>
      </AuthContextComponent>
    );*/
  }
}
