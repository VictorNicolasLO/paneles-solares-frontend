import React, { Component } from 'react';
import './Dashboard.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './routes/login/Login';
import LoginCard from './components/login-card/LoginCard';
import { MainContextComponent } from './context/main';

export default class Dashboard extends Component {
  render() {
    console.log('some2');
    return (
      <MainContextComponent>
        {() => (
          <div className="component-Dashboard">
            <Switch>
              <Route path="/dashboard/login" component={Login} />
            </Switch>
          </div>
        )}
      </MainContextComponent>
    );
  }
}
