import React from 'react';
import '../Login/Login.css';
import NewAccount from '../NewAccount/NewAccount';
import { properties } from '../properties'
import $ from 'jquery';
import helpers from '../helpers';
import Dashboard from '../Dashboard/Dashboard';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img className="logo" src="/img/orbita_logo.png"/>
                </div>     
                <form id="login-form">
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="email"/>
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
                    <input onClick={this.handleSubmit} type="submit" className="fadeIn fourth" value="Log In"></input>
                </form>
                <div id="formFooter">
                    <NewAccount/>
                </div>
            </div>  
        </div>
      )
    }

    handleSubmit(){
        fetch(properties.api_url_login, {
            method: "POST",
            body: helpers.serializeFormJSON($("#login-form").serializeArray()),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                if(result.token != null){
                    this.props.history.push('/Dashboard');
                } else {
                    alert(result.message);    
                }
            },
            (error) => {
                console.log(error);
                alert(properties.msg_generic_error);
            }
        )
    }
  }

  export default Login;