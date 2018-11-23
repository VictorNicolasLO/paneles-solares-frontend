import React, { Component } from 'react';
import './Dashboard.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './routes/login/Login';
import LoginCard from './components/login-card/LoginCard';
import { MainContextComponent } from './context/main';
import Main from './routes/main/Main';

export default class Dashboard extends Component {
  render() {
    return (
      <MainContextComponent>
        <div className="component-Dashboard">
          <Switch>
            <Route path="/dashboard/login" component={Login} />
            <Route path="/dashboard" component={Main} />
          </Switch>
        </div>
      </MainContextComponent>
    );
  }
}
