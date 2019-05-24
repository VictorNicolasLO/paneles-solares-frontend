import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Grid, LinearProgress, Button, Fab } from '@material-ui/core';
import Chart from '../../../../components/chart/Chart';
import moment from 'moment';
import ChartController from '../../../../components/chart-controller/ChartController';
import { getWeatherStation } from '../../../../../../services/weather-station';
import { selectedItems, dic } from './const';
import { withRouter } from 'react-router'
import { estacionItems } from '../../const';
import './styles.css'
import { CloudDownload, CalendarToday } from '@material-ui/icons'
class Charts extends Component {
  state = {
    chartDAtaY: [],
    chartDataX: [],
    items: [],
    loading: true,
    selected: {},
    chartNames: []
  };

  async componentDidMount() {
    const { match: { params: { type } } } = this.props
    const selected = estacionItems[type]



    let i = 0;

    const {
      data: { data },
    } = await getWeatherStation();

    const dates = data.map((item) => {


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
    const chartNames = []
    for (let i in chartsData) {
      const chartData = chartsData[i];
      if (i === selected.type) {
        chartNames.unshift(i)
        items.unshift(
          <Chart title={dic[i]} chartDAtaY={chartData.y} chartDataX={chartData.x} />,
        );
      }

      else {
        items.push(
          <Chart title={dic[i]} chartDAtaY={chartData.y} chartDataX={chartData.x} />,
        );
        chartNames.push(i)

      }

    }

    this.setState({ items, loading: false, selected, chartNames });
  }

  handleChange = (i) => {
    console.log(i)
    console.log(this.state.chartNames)
    console.log(estacionItems)
    this.setState({ selected: estacionItems.find((item) => item.type === this.state.chartNames[i]) })
  }

  render() {

    if (this.state.loading)
      return <LinearProgress style={{ top: "-30px", position: "relative" }} />

    const { selected } = this.state
    const Icon = selected.icon;
    return (
      <div className="component-charts">
        <Grid container spacing={20}>
          <Grid className="chart-name" container xs={12}>
            <div className="icon-chart" ><Icon></Icon></div>
            <h1 >{selected.name}</h1>

            <div className="button-flex" style={{ paddingTop: "0px" }}>
              <Fab variant="extended" style={{ background: "white", marginRight: "20px" }}   >
                <CalendarToday style={{ marginRight: "10px" }} />
                Seleccionar intervalo
            </Fab>
              <Fab variant="extended" color="primary"   >
                <CloudDownload style={{ marginRight: "10px" }} />
                Descargar
            </Fab>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <ChartController onChange={this.handleChange} items={this.state.items} />
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withRouter(Charts) 