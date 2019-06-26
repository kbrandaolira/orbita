import React from 'react';
import '../Login/Login.css';
import NewAccount from '../NewAccount/NewAccount';

class Login extends React.Component {
    render() {
      return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img className="logo" src="/img/orbita_logo.png"/>
                </div>     
                <form>
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="email"/>
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
                    <input type="submit" className="fadeIn fourth" value="Log In"></input>
                </form>
                <div id="formFooter">
                    <NewAccount/>
                </div>
            </div>  
        </div>
      )
    }
  }

  export default Login;