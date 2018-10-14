import React, { Component } from 'react';
import './Playground.css';
import FootBar from '../components/foot-bar/FootBar';
export default class Playground extends Component {
  clickTest = () => {
    alert('Hey');
  };

  render() {
    return <FootBar onShowInfo={this.clickTest} />;
  }
}
