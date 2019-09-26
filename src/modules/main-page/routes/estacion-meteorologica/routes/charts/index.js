import React, { Component } from 'react';
import {
  Grid,
  LinearProgress,
  Fab,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import Chart from '../../../../components/chart/Chart';
import moment from 'moment';
import ChartController from '../../../../components/chart-controller/ChartController';
import {
  getWeatherStation,
  getByDateRange,
} from '../../../../../../services/weather-station';
import { selectedItems, dic } from './const';
import { withRouter } from 'react-router';
import { estacionItems } from '../../const';
import './styles.css';
import { CloudDownload, CalendarToday } from '@material-ui/icons';
import DateSelectDialog from './containers/date-select-dialog';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import { downloadCsv as downloadCsvHelper } from './helper';
class Charts extends Component {
  state = {
    data: [],
    chartDAtaY: [],
    chartDataX: [],
    items: [],
    loading: true,
    selected: {},
    nameSelected: '',
    chartNames: [],
    dialogOpen: false,
    dateFrom: undefined,
    dateTo: undefined,
    loadingDates: false,
  };

  async loadData(dateFrom, dateTo) {
    const {
      match: {
        params: { type },
      },
    } = this.props;
    const selected = estacionItems[type];

    const {
      data: { data },
    } =
      dateFrom || dateTo
        ? await getByDateRange(dateFrom, dateTo)
        : await getWeatherStation();

    const dates = data.map((item) => {
      return moment(item.date).format('MMMM D YYYY, h:mm a');
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
    const chartNames = [];
    for (let i in chartsData) {
      const chartData = chartsData[i];
      if (i === selected.type) {
        chartNames.unshift(i);
        items.unshift(
          <Chart
            title={dic[i]}
            chartDAtaY={chartData.y}
            chartDataX={chartData.x}
          />,
        );
      } else {
        items.push(
          <Chart
            title={dic[i]}
            chartDAtaY={chartData.y}
            chartDataX={chartData.x}
          />,
        );
        chartNames.push(i);
      }
    }

    this.setState({
      nameSelected: selected,
      data,
      items,
      loading: false,
      selected,
      chartNames,
    });
  }

  async componentDidMount() {
    await this.loadData();
  }

  handleChange = (i) => {
    console.log(i);
    console.log(this.state.chartNames);
    console.log(estacionItems);
    this.setState({
      selected: estacionItems.find(
        (item) => item.type === this.state.chartNames[i],
      ),
    });
  };

  handleSetDates = async (dateFrom, dateTo) => {
    console.log(dateFrom);
    console.log(dateTo);
    this.setState({
      dialogOpen: false,
      dateFrom: dateFrom,
      dateTo: dateTo,
      loadingDates: true,
    });
    await this.loadData(dateFrom.toISOString(), dateTo.toISOString());
    this.setState({
      loadingDates: false,
    });
  };

  downloadCsv = () => {
    downloadCsvHelper(
      this.state.data,
      this.state.selected,
      this.state.dateFrom,
      this.state.dateTo,
    );
  };

  render() {
    if (this.state.loading)
      return <LinearProgress style={{ top: '-30px', position: 'relative' }} />;

    const { selected, loadingDates, dateFrom, dateTo } = this.state;
    const Icon = selected.icon;
    return (
      <div className="component-charts">
        <Grid container spacing={20}>
          <Grid className="chart-name" container xs={12}>
            <div className="icon-chart">
              <Icon />
            </div>
            <h1>{selected.name}</h1>

            <div className="button-flex" style={{ paddingTop: '0px' }}>
              <Fab
                variant="extended"
                onClick={() =>
                  this.setState({ ...this.state, dialogOpen: true })
                }
                style={{ background: 'white', marginRight: '20px' }}>
                <CalendarToday style={{ marginRight: '10px' }} />
                Filtrar por fecha
              </Fab>
              <Fab
                onClick={this.downloadCsv}
                variant="extended"
                disabled={this.state.items.length === 0}
                color="primary">
                <CloudDownload style={{ marginRight: '10px' }} />
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
            {loadingDates ? (
              <CircularProgress style={{ marginTop: '50px' }} size={70} />
            ) : this.state.items.length > 0 ? (
              <ChartController
                onChange={this.handleChange}
                items={this.state.items}
              />
            ) : (
              <Typography
                style={{ marginTop: '50px' }}
                color="textSecondary"
                variant="h4">
                No hay registros disponibles{' '}
                <LayersClearIcon
                  style={{
                    fontSize: '1em',
                    position: 'relative',
                    top: '8px',
                  }}
                />
              </Typography>
            )}
          </Grid>
        </Grid>
        <DateSelectDialog
          defaultDates={[dateFrom, dateTo]}
          open={this.state.dialogOpen}
          onFilter={this.handleSetDates}
          onClose={() => this.setState({ ...this.state, dialogOpen: false })}
        />
      </div>
    );
  }
}

export default withRouter(Charts);
