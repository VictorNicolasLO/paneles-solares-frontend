import React, { Component } from 'react';
import './Charts.css';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import Chart from '../../components/chart/Chart';
import { getChartData } from '../../../../services/auth';
import moment from 'moment';

export default class Charts extends Component {
  state = {
    chartDAtaY: [],
    chartDataX: [],
  };

  async componentDidMount() {
    console.log(moment().format('YYYY'));

    let i = 0;

    const { data } = await getChartData();

    const chartDAtaY2 = data.map((item) => {
      console.log(item.value);
      return item.value;
    });

    const chartDataX2 = data.map((item) => {
      console.log(
        moment(item.date).get('day') +
          '/' +
          moment(item.date).get('month') +
          '/' +
          moment(item.date).get('year'),
      );

      return (
        moment(item.date).get('day') +
        '/' +
        moment(item.date).get('month') +
        '/' +
        moment(item.date).get('year') +
        '_At ' +
        moment(item.date).get('hour') +
        ':' +
        moment(item.date).get('minutes') +
        ':' +
        moment(item.date).get('seconds')
      );
    });

    this.setState({ chartDataX: chartDataX2, chartDAtaY: chartDAtaY2 });
  }

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
            alignItems="center">
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
