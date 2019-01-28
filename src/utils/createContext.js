import React from 'react';

export function createContext(ContextComponent) {
  let context = React.createContext({});
  class NewCtx extends ContextComponent {
    constructor(props) {
      super(props);
      this.state = {
        ...this.state,
        ...this
      };
    }

    Context = context;
  }

  return { context, CtxComponent: NewCtx };
}
