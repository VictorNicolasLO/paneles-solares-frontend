import React, { Component } from 'react';
import './Chart.css';
import { Line } from 'react-chartjs-2';
import Axios from 'axios';
import moment from 'moment';

export default class Chart extends Component {
  render() {
    const { chartDataX, chartDAtaY, title } = this.props;
    console.log(chartDAtaY);
    console.log(chartDataX);
    if (!chartDataX || !chartDAtaY) return null;
    return (
      <div className="chart-container">
        <Line
          redraw={true}
          data={{
            labels: chartDataX,
            datasets: [
              {
                data: chartDAtaY,
                label: title || 'Calentador solar',
                borderColor: '#1b396a',
                fillColor: '#1b396a',
                fill: '#1b396a'
              }
            ]
          }}
          options={{
            responsiveAnimationDuration: 1000,
            responsive: true,
            legend: {
              labels: {
                fontColor: '#1b396a'
              }
            },

            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontColor: '#1b396a'
                  },
                  display: true,
                  gridLines: {
                    display: true,
                    color: '#1b396a71'
                  },
                  scaleLabel: {
                    fontColor: '#1b396a',
                    display: true,
                    labelString: 'Tiempo (h)'
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontColor: '#1b396a'
                  },
                  display: true,
                  gridLines: {
                    display: true,
                    color: '#1b396a71'
                  },
                  scaleLabel: {
                    fontColor: '#1b396a',
                    display: true,
                    labelString: 'Potencia (W)'
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
