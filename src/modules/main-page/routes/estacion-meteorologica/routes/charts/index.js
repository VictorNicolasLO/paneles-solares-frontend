import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import Chart from '../../../../components/chart/Chart';
import moment from 'moment';
import ChartController from '../../../../components/chart-controller/ChartController';
import { getWeatherStation } from '../../../../../../services/weather-station';
import { selectedItems, dic } from './const';
import { withRouter } from 'react-router'
import { estacionItems } from '../../const';
class Charts extends Component {
  state = {
    chartDAtaY: [],
    chartDataX: [],
    items: [],
  };

  async componentDidMount() {
    console.log(this.props)
    const { match: { params: { type } } } = this.props
    const selected = estacionItems[type]

    console.log(moment().format('YYYY'));

    let i = 0;

    const {
      data: { data },
    } = await getWeatherStation();

    const dates = data.map((item) => {
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

    const chartsData = {};

    data.forEach((item, index) => {
      const values = item.value;
      for (let i in values) {
        if (
          i !== 'time' &&
          i !== 'date-str' &&
          i !== 'date' &&
          selectedItems.some((item) => item === i)
        ) {
          if (!chartsData[i]) chartsData[i] = { x: [], y: [] };
          chartsData[i].y.push(values[i]);
          chartsData[i].x.push(dates[index]);
        }
      }
    });

    const items = [];
    for (let i in chartsData) {
      const chartData = chartsData[i];
      if (i === selected.type)
        items.unshift(
          <Chart title={dic[i]} chartDAtaY={chartData.y} chartDataX={chartData.x} />,
        );
      else
        items.push(
          <Chart title={dic[i]} chartDAtaY={chartData.y} chartDataX={chartData.x} />,
        );
    }

    this.setState({ items });
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
            <ChartController onChange={(i)=>{console.log(i)}} items={this.state.items} />
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withRouter(Charts) 