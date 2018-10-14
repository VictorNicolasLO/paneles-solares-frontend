import React, { Component } from 'react';
import './MainMenu.css';
import MainTemplate from '../../components/main-template/MainTemplate';
import ItemMenu from '../../components/item-menu/ItemMenu';
import { Icon_1 } from '../../components/item-menu/icons/1';
import { Icon_2 } from '../../components/item-menu/icons/2';
import { Icon_3 } from '../../components/item-menu/icons/3';
import { Icon_4 } from '../../components/item-menu/icons/4';
import Grid from '@material-ui/core/Grid';

export default class MainMenu extends Component {
  render() {
    return (
      <div className="component-main-menu">
        <Grid container spacing={20}>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <ItemMenu name="Estacion meteorológica" Icon={Icon_1} />
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <ItemMenu name="Calentador solar" Icon={Icon_2} />
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <ItemMenu name="Secador solar" Icon={Icon_3} />
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <ItemMenu name="Panel solar" Icon={Icon_4} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
