import React, { Component } from 'react';
import './Playground.css';
import TopBar from '../components/top-bar/TopBar';

export default class Playground extends Component {
  render() {
    return <TopBar path="My awesome path" />;
  }
}

