import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import MainPage from './modules/main-page/mainPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default App;
