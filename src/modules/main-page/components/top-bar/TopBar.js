import React, { Component } from 'react';
import './TopBar.css';

var address = 'te odio';

 
export default class TopBar extends Component {

  render() {
    return <div className="component-TopBar" >
    <h2>{getAddress(address)}</h2>
    <h1></h1>
    </div>; 
  }
}

function getAddress(address){

  var tittle = 'Tecnológico de Culiacán - ' + address;
  
return tittle;
}



