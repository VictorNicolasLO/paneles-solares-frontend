import React, { Component } from 'react';
import './MainPage.css';
import MainMenu from './routes/main-menu/MainMenu';
import { Link, Route, Switch } from 'react-router-dom';
import MainTemplate from './components/main-template/MainTemplate';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <MainTemplate>
          <Route path="/" component={MainMenu} />
        </MainTemplate>
      </div>
    );
  }
}
