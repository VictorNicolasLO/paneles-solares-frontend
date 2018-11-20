import React, { Component } from 'react';
import './MainPage.css';
import MainMenu from './routes/main-menu/MainMenu';
import { Link, Route, Switch } from 'react-router-dom';
import MainTemplate from './components/main-template/MainTemplate';
import Charts from './routes/charts/Charts';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={MainMenu} />
            <Route path="/charts" component={Charts} />
          </Switch>
        </MainTemplate>
      </div>
    );
  }
}
