import React, { Component } from 'react';
import { Container } from './StyledComponents';
import Grid from '@material-ui/core/Grid';
import Profile from '../profile';
import { Button } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import OutlineButton from '../../../../components/outline-button';
import { injectContexts } from 'rctx';
import AuthContext from '../../../../ctx/Auth.context';
class LayoutTop extends Component {
  render() {
    return (
      <Container>
        <Grid style={{ height: '100%' }} container>
          <Grid item xs={3}>
            <Profile />
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
            item
            xs={9}
          >
            <Grid item>
              <OutlineButton
                onClick={this.props.authContext.logout}
                Icon={InputIcon}
              >
                Cerrar sesion
              </OutlineButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default injectContexts(LayoutTop, { authContext: AuthContext });
