import React, { Component } from 'react';

export class ContextComponent extends Component {
  Context = undefined;

  constructor(props) {
    super(props);
  }
  render() {
    if (!this.Context) {
      return '';
    }
    return (
      <this.Context.Provider value={this.state}>
        {this.props.children}
      </this.Context.Provider>
    );
  }
}
