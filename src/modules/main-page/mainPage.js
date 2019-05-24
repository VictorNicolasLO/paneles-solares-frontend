import React, { Component } from 'react';
import './MainPage.css';
import MainMenu from './routes/main-menu/MainMenu';
import { Link, Route, Switch } from 'react-router-dom';
import MainTemplate from './components/main-template/MainTemplate';
import Charts from './routes/charts/Charts';
import EstacionSolar from './routes/estacion-meteorologica/estacion-meteorologica';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={MainMenu} />
            <Route path="/charts" component={Charts} />
            <Route path="/estacion-meteorologica" component={EstacionSolar} />
          </Switch>
        </MainTemplate>
      </div>
    );
  }
}
