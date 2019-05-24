import React, { Component } from 'react';
import './MainMenu.css';
import MainTemplate from '../../components/main-template/MainTemplate';
import ItemMenu from '../../components/item-menu/ItemMenu';
import { Icon_1 } from '../../components/item-menu/icons/1';
import { Icon_2 } from '../../components/item-menu/icons/2';
import { Icon_3 } from '../../components/item-menu/icons/3';
import { Icon_4 } from '../../components/item-menu/icons/4';
import Grid from '@material-ui/core/Grid';
import Link from 'react-router-dom/Link';

export default class MainMenu extends Component {
  render() {
    const configMenu = {
      duration: '.3s',
      delayContent: 0.3 + 's',
      durationContent: '.5s',
    };
    return (
      <div className="component-main-menu">
        <Grid container spacing={20}>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <ItemMenu
              {...configMenu}
              url="/estacion-meteorologica"
              name="Estacion meteorológica"
              Icon={Icon_1}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <ItemMenu
              {...configMenu}
              name="Calentador solar"
              url="/charts"
              Icon={Icon_2}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <ItemMenu {...configMenu} name="Secador solar" Icon={Icon_3} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <ItemMenu {...configMenu} name="Panel solar" Icon={Icon_4} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
