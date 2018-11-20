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


class LoginCard extends Component{
    constructor(props){
        super (props)
        this.state= {
            enableLoginButton:false,
            name:"",
            pass:""
        }
    }

    writeName=(ev)=>{
        console.log(ev.target.value)
       this.setState({name:ev.target.value})
       
    }

    writepass=(ev)=>{
        console.log(ev.target.value)
        this.setState({pass:ev.target.value})
    }
    render(){
        let enableLoginButton=false
        const name=this.state.name
        const pass= this.state.pass
        if(name.length>3 && pass.length>6)
            enableLoginButton=true

        return( <div className="component-login-card" />,
           <Card className= "cardLogin"> 
                <CardContent>
                    <img className="logo-login" width="100" src="/tec-logo.png"/>
                    <TextField className= "input-login"
                        id="TxtFieldName"
                        label="Nombre"
                        margin="Nombre"
                        onInput={this.writeName}
                    />
                    <TextField className= "input-login"
                        id="TxtFieldPass"
                        label="Contraseña"
                        margin="Contraseña"
                        type= "password"
                        onInput={this.writepass}
                    />
                
               
                </CardContent>
                <CardActions>
                    <Button className="AccederButton"
                        variant="contained" 
                        color="primary" 
                        disabled= {!enableLoginButton}
                        >
                        Acceder
                    </Button>
                </CardActions>
           </Card>   
        ); 
    }

}
export default LoginCard;