import React, { Component } from 'react';
import { injectContexts } from 'rctx';
import AuthContext from '../../../../ctx/Auth.context';
import { Grid, Typography } from '@material-ui/core';
import { ProfileSection, Light } from './StyledComponents';
import { gridStyle, imageStyle } from './consts';

class Profile extends Component {
  render() {
    const { authContext } = this.props;
    const { name, email } = authContext;
    return (
      <Grid
        style={gridStyle}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <ProfileSection>
          <img style={imageStyle} src="tec-logo.png" width="100" />
        </ProfileSection>
        <ProfileSection>{name}</ProfileSection>
        <ProfileSection>
          <Typography
            variant="overline"
            style={{ color: 'white' }}
            gutterBottom
          >
            {email}
          </Typography>
        </ProfileSection>
      </Grid>
    );
  }
}

export default injectContexts(Profile, {
  authContext: AuthContext
});
