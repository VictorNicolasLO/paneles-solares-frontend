import React from 'react';
import { Grid } from '@material-ui/core';
import { estacionItems } from './const';
import ItemMenu from '../../components/item-menu/ItemMenu';
import { Switch, Route } from 'react-router-dom';
import Root from './routes/root';
import Charts from './routes/charts';
function EstacionMeteorologica() {
  return (
    <>
      <Switch>
        <Route path="/estacion-meteorologica/charts/:type" component={Charts} />
        <Route path="/" component={Root} />
      </Switch>
    </>
  );
}

export default EstacionMeteorologica;
