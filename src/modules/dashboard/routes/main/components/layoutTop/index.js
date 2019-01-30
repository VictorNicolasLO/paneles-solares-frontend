import React, { Component } from 'react';
import { Container } from './StyledComponents';
import Grid from '@material-ui/core/Grid';
import Profile from '../profile';
export class LayoutTop extends Component {
  render() {
    return (
      <Container>
        <Grid style={{ height: '100%' }} container>
          <Grid item xs={3}>
            <Profile />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default LayoutTop;
