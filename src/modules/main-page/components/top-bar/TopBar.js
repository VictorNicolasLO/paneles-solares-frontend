import React, { Component } from 'react';
import './TopBar.css';
 
export default class TopBar extends Component {
 
  render() {

    const { path } = this.props
    
    let title = 'Instituto Tecnológico de Culiacán'

    if(path){
      title = `${title} - ${path}`
    }

    return <div className="component-TopBar" >
    <h2>{title}</h2>
    <h1></h1>
    </div>; 
  }
}




