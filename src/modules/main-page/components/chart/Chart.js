import React, { Component } from 'react';
import './Chart.css';
import { Line } from 'react-chartjs-2';
import Axios from 'axios';
import { getChartData } from '../../../../services/auth';
import moment from 'moment'


export default class Chart extends Component {
  state ={
    chartDataX : [],
    chartDAtaY : []
  }

  async componentDidMount(){

    console.log(moment().format("YYYY"))
    
    let i = 0 ;
    
    const {data} = await getChartData();

    const chartDAtaY2 = data.map((item)=>{
      console.log(item.value);
      return item.value;
    });

    const chartDataX2 = data.map((item)=>{
    
      console.log(moment(item.date).get('year'));
      return moment((item.date)).get('year'); 
       
    });

    this.setState({chartDAtaY:chartDAtaY2});
    this.setState({chartDataX:chartDataX2});
     
  }


  

  render() {
    return (
      <div className="chart-container">
        <Line
          data={{
            labels: this.state.chartDataX,
            datasets: [
              {
                data: this.state.chartDAtaY,
                label: 'Calentador solar',
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
