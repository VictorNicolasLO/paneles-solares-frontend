import React, { Component } from 'react';
import './MainPage.css';
import MainTemplate from './components/main-template/MainTemplate';
import Playground from './playground/Playground';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Playground />
      </div>
    );
  }
}
