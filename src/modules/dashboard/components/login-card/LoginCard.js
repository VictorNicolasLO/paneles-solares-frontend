import React, { Component } from 'react';
import './LoginCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthContext from '../../ctx/Auth.context';
import { injectContexts } from 'rctx';

const contexts = {
  authContext: AuthContext
};

class LoginCard extends Component {
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
    this.props.authContext.login(this.state.name, this.state.pass);
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

export default injectContexts(LoginCard, contexts);
