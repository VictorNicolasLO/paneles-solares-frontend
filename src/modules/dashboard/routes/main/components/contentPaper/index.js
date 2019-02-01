import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { PaperContainer } from './StyledComponents';

export class ContentPaper extends Component {
  render() {
    return <PaperContainer>{this.props.children}</PaperContainer>;
  }
}

export default ContentPaper;
