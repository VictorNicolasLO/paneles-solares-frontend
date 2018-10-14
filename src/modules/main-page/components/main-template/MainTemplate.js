import React, { Component } from 'react';
import './MainTemplate.css';
import Grid from '@material-ui/core/Grid';
import TopBar from '../../components/top-bar/TopBar';

import FootBar from '../../components/foot-bar/FootBar';
export default class MainTemplate extends Component {
  render() {
    return (
      <div className="component-main-template">
        <div className="logo">
          <div>
            <img
              width="140"
              src="./tec-logo.png"
              alt="Logo del tecnologico de culiacan"
            />
          </div>
        </div>
        <Grid container spacing={20}>
          <Grid className="top-bar" item xs={12}>
            <TopBar path="" />
          </Grid>
        </Grid>
        {this.props.children}
        <FootBar />
      </div>
    );
  }
}
