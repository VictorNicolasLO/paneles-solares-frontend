import React from 'react';
import { Grid } from '@material-ui/core';
import SectionInfo from '../../../../components/section-info';
import { title, description } from './consts';

function Users() {
  return (
    <>
      <Grid container>
        <SectionInfo title={title} description={description} />
      </Grid>
    </>
  );
}

export default Users;
