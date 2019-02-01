import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ContentPaper from '../contentPaper';
import { Container, ContentPaperContiner } from './StyledComponents';
import TitleContain from '../titleContain';
import Sidebar from '../sidebar';

export class LayoutContent extends Component {
  render() {
    return (
      <Container container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <ContentPaperContiner item xs={9}>
          <TitleContain />
          <ContentPaper>{this.props.children}</ContentPaper>
        </ContentPaperContiner>
      </Container>
    );
  }
}

export default LayoutContent;
