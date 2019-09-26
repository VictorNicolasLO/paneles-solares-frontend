import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './modules/main-page/mainPage';
import Dashboard from './modules/dashboard/dashboard';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider locale="es" utils={MomentUtils}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={MainPage} />
        </Switch>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
