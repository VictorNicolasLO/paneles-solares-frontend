import React, { Component } from 'react';
import './ChartController.css';

const exampleItem = [
  <li className="item item-1">ANTERIOR</li>,
  <li className="item item-2" >CENTRO</li>,
  <li className="item item-3" >SIGUIENTE</li>   
]

var nitem 

export default class ChartController extends Component {

  constructor(props){
    super(props);
    this.state = {nitem: 0}
  }

  handleClickLeft = (e) =>{

    nitem = this.state.nitem;

    if(nitem != 0){
      this.setState({
        nitem:this.state.nitem - 1
      })
    }

  }

 

  handleClickRight = (e) =>{

    nitem = this.state.nitem;

    if(nitem != exampleItem.length - 1){
      this.setState({
        nitem:this.state.nitem + 1
      })
    }
  
  }
  


  render() {
    return <div className="component-chart-controller" >


              <h1>Flexbox Slider</h1>
              
              <div className="wrap">
                <button onClick={this.handleClickLeft}>&laquo;</button>
                
                      <div className="scroller">

                        <ul className="items">
                            {exampleItem[this.state.nitem]} 
         
                        </ul>

                      </div>
                <button onClick={this.handleClickRight}>&raquo;</button>
              </div>
                  </div>;
  }



  }


