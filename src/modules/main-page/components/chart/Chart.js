import React, { Component } from 'react';
import './Chart.css';
import { Line } from 'react-chartjs-2';

export default class Chart extends Component {
  render() {
    return (
      <div className="chart-container">
        <Line
          data={{
            labels: [
              1500,
              1600,
              1700,
              1750,
              1800,
              1850,
              1900,
              1950,
              1999,
              2050
            ],
            datasets: [
              {
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: 'Calentador solar',
                borderColor: 'white',
                fillColor: 'white',
                fill: 'white'
              }
            ]
          }}
          options={{
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
                    labelString: 'Tiempo(h)'
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
                    labelString: 'Potencia(W)'
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
