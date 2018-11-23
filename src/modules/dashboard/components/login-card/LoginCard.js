import React, { Component } from 'react';
import './LoginCard.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MainContext } from '../../context/main';

class LoginCard extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
      enableLoginButton: false,
      name: '',
      pass: ''
    };
  }

  writeName = ev => {
    this.setState({ name: ev.target.value });
  };

  writepass = ev => {
    this.setState({ pass: ev.target.value });
  };

  login = () => {
    this.context.AuthContext.login(this.state.name, this.state.pass);
  };

  render() {
    let enableLoginButton = true;
    const name = this.state.name;
    const pass = this.state.pass;
    if (name.length > 3 && pass.length > 6) enableLoginButton = true;

    return (
      <div className="component-login-card" />,
      (
        <Card className="cardLogin">
          <CardContent>
            <img className="logo-login" width="100" src="/tec-logo.png" />
            <TextField
              className="input-login"
              id="TxtFieldName"
              label="Nombre"
              onInput={this.writeName}
            />

            <TextField
              className="input-login"
              id="TxtFieldPass"
              label="Contraseña"
              type="password"
              onInput={this.writepass}
            />
          </CardContent>
          <CardActions>
            <Button
              className="AccederButton"
              variant="contained"
              color="primary"
              disabled={!enableLoginButton}
              onClick={this.login}
            >
              Acceder
            </Button>
          </CardActions>
        </Card>
      )
    );
  }
}
export default LoginCard;
