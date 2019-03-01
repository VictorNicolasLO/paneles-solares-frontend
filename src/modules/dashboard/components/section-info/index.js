import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ShowAnimation } from '../animations/StyledComponents';

function SectionInfo(props) {
  return (
    <Grid item xs={8}>
      <ShowAnimation delay={0}>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
      </ShowAnimation>
      <ShowAnimation delay={0.1}>
        <Typography variant="body1" gutterBottom>
          {props.description}
        </Typography>
      </ShowAnimation>
    </Grid>
  );
}

export default SectionInfo;
