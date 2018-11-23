import React, { Component } from 'react';
import './Main.css';
import { AuthContext } from '../../context/Auth.context';
import { withContext } from '../../../../utils/withContext';
import { Redirect } from 'react-router-dom';

const contexts = {
  authContext: AuthContext
};

class Main extends Component {
  render() {
    if (!this.props.authContext.isAuth) {
      return <Redirect to="/dashboard/login" />;
    }
    return <div className="component-main">Dashboard</div>;
  }
}

export default withContext(Main, contexts);
