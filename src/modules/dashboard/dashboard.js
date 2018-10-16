import React, { Component } from 'react';
import './Dashboard.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './routes/login/Login';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="component-Dashboard">
        <Switch>
          <Route path="/dashboard/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
