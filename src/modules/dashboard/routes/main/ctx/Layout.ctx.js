import React, { Component, Children } from 'react';
import { ContextComponent, createContext, ContextStore } from 'rctx';
import { withRouter } from 'react-router-dom';
import { getRouteFromLocation } from './Layout.helper';

class LayoutContext extends ContextComponent {
  state = {
    route: {}
  };

  componentDidMount() {
    const history = this.props.history;
    console.log(history);
    console.log(getRouteFromLocation(history.location.pathname));
    this.setState({
      route: getRouteFromLocation(history.location.pathname)
    });
    history.listen(location => {
      this.setState({
        route: getRouteFromLocation(location.pathname)
      });
    });
  }
}

const context = createContext(LayoutContext, {
  store: new ContextStore()
});

context.CtxComponent = withRouter(context.CtxComponent);
export default context;
