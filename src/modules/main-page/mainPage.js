import React, { Component } from 'react';
import './MainPage.css';
import MainMenu from './routes/main-menu/MainMenu';
import { Link, Route, Switch } from 'react-router-dom';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={MainMenu} />
      </div>
    );
  }
}
