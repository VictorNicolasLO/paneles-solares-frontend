import React, { Component } from 'react';
import './Dashboard.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './routes/login/Login';
import LoginCard from './components/login-card/LoginCard';
import Main from './routes/main/Main';
import AuthContext from './context/Auth.context';
import { importContexts } from '../../utils/importContexts';

class Dashboard extends Component {
  render() {
    return (
      <div className="component-Dashboard">
        <Switch>
          <Route path="/dashboard/login" component={Login} />
          <Route path="/dashboard" component={Main} />
        </Switch>
      </div>
    );
  }
}
export default importContexts(Dashboard, [AuthContext]);
