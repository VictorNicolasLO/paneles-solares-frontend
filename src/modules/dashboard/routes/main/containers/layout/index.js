import React, { Component } from 'react';
import { Container } from './StyledComponents';
import LayoutTop from '../layoutTop';
import ContentPaper from '../contentPaper';
import LayoutContent from '../layoutContent';

export class Layout extends Component {
  render() {
    return (
      <Container>
        <LayoutTop />
        <LayoutContent>{this.props.children}</LayoutContent>
      </Container>
    );
  }
}

export default Layout;
