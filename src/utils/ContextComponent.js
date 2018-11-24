import React, { Component } from 'react';

class ContextComponent extends Component {
  static Context = React.createContext({});

  constructor(props) {
    super(props);
  }
  render() {
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>;
  }
}
