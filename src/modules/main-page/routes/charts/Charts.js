import React, { Component } from 'react';
import './Charts.css';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import Chart from '../../components/chart/Chart';
export default class Charts extends Component {
  render() {
    return (
      <div className="component-charts">
        <Grid container spacing={20}>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Chart />
          </Grid>
        </Grid>
      </div>
    );
  }
}
