import React, { Component } from 'react';
import { Container } from './StyledComponents';
import LayoutTop from '../layoutTop';

export class Layout extends Component {
  render() {
    return (
      <Container>
        <LayoutTop />
      </Container>
    );
  }
}

export default Layout;
