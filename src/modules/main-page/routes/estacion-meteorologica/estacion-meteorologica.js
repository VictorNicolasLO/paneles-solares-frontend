import React, { Component } from 'react';
import './Charts.css';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import Chart from '../../components/chart/Chart';
import { getChartData } from '../../../../services/auth';
import moment from 'moment';

export default class EstacionSolar extends Component {
  state = {
    chartDAtaY: [],
    chartDataX: []
  };

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
            <Chart
              chartDAtaY={this.state.chartDAtaY}
              chartDataX={this.state.chartDataX}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
