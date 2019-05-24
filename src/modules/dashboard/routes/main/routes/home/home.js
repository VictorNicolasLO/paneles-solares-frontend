import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import SectionInfo from '../../../../components/section-info';
import { title, description } from './consts';

export class Home extends Component {
  render() {
    return (
      <>
        <Grid container>
          <SectionInfo title={title} description={description} />
        </Grid>
      </>
    );
  }
}

export default Home;
