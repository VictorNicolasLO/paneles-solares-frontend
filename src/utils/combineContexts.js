import React, { Component, Children } from 'react';

export const combineContexts = contextList => {
  class MainContextComponent extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      setTimeout(() => {
        this.forceUpdate();
      }, 3000);
    }

    buildContexts(contexts, data = {}, i = 0) {
      if (contexts[i]) {
        const ContextComponent = contexts[i][2];
        const result = (
          <ContextComponent>
            {this.buildContexts(contexts, data, i + 1)}
          </ContextComponent>
        );
        return result;
      } else {
        const result = this.props.children;
        return result;
      }
    }

    render() {
      return this.buildContexts(contextList);
    }
  }
  return MainContextComponent;
};
