import React from 'react';
import { Grid } from '@material-ui/core';
import { estacionItems, getUrl } from '../../const';
import ItemMenu from '../../../../components/item-menu/ItemMenu';

function Root() {
  return (
    <Grid container style={{ padding: '10px' }}>
      {estacionItems.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={3}
          container
          direction="row"
          justify="center"
          alignItems="center">
          <ItemMenu
            duration={'.3s'}
            delay={0 + index * 0.075 + 's'}
            delayContent={0.3 + index * 0.075 + 's'}
            durationContent={'.5s'}
            url={getUrl(index)}
            name={item.name}
            Icon={item.icon}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Root;
