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
                borderColor: 'white',
                fillColor: 'white',
                fill: 'white'
              }
            ]
          }}
          options={{
            responsiveAnimationDuration: 1000,
            responsive: true,
            legend: {
              labels: {
                fontColor: 'white'
              }
            },

            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontColor: 'white'
                  },
                  display: true,
                  gridLines: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.561)'
                  },
                  scaleLabel: {
                    fontColor: 'white',
                    display: true,
                    labelString: 'Tiempo (h)'
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontColor: 'white'
                  },
                  display: true,
                  gridLines: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.561)'
                  },
                  scaleLabel: {
                    fontColor: 'white',
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
