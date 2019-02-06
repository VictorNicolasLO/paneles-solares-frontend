import React, { Component } from 'react';
import { StyledTypography } from './StyledComponents';
import { injectContexts } from 'rctx';
import LayoutCtx from '../../ctx/Layout.ctx';

class TitleContain extends Component {
  render() {
    const { layoutCtx } = this.props;

    return (
      <StyledTypography
        component="h2"
        variant="display2"
        style={{ color: 'white' }}
        gutterBottom
        key={layoutCtx.route.name}
      >
        {layoutCtx.route.name}
      </StyledTypography>
    );
  }
}

export default injectContexts(TitleContain, {
  layoutCtx: LayoutCtx
});
