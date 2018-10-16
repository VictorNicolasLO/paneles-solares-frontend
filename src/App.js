import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './modules/main-page/mainPage';
import Dashboard from './modules/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default App;
