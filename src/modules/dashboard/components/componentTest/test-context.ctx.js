import React, { Component } from 'react';
import { ContextComponent } from '../../../../utils/ContextComponent';
import { createContext } from '../../../../utils/createContext';

export class TestContext extends ContextComponent {
  state = {
    value: 0
  };
  add = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
}

export default createContext(TestContext);
