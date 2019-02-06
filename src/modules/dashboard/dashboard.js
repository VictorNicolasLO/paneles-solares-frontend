import React, { Component } from 'react';
import './Dashboard.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './routes/login/Login';
import LoginCard from './components/login-card/LoginCard';
import Main from './routes/main/Main';
import AuthContext from './ctx/Auth.context';
import { importContexts } from 'rctx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#008ffb' }, // Purple and green play nicely together.
    secondary: { main: 'rgb(254,	9,	0)' } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }
});

class Dashboard extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="component-Dashboard">
          <Switch>
            <Route path="/dashboard/login" component={Login} />
            <Route path="/dashboard" component={Main} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default importContexts(Dashboard, [AuthContext]);
