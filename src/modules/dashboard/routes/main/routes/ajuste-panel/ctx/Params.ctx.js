import React, { Component, Children } from 'react';
import { ContextComponent, createContext, ContextStore } from 'rctx';

class ParamsCtx extends ContextComponent {
  state = {
    value: 0,
    openDialog: false
  };

  onChange = (event, data) => {
    this.setState({ value: data });
  };

  onInput = event => {
    this.setState({ value: parseFloat(event.target.value || 0) });
  };

  save = () => {
    this.setState({ openDialog: true });
  };
  closeDialog = () => {
    this.setState({ openDialog: false });
  };
}

const context = createContext(ParamsCtx, {
  store: new ContextStore()
});

export default context;
