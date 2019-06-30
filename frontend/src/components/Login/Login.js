import React from "react";
import "./Login.css";
import NewAccount from "../NewAccount/NewAccount";
import { properties } from "../../properties";
import $ from "jquery";
import helpers from "../../helpers";
import { withRouter } from "react-router-dom";
import { isAuthenticated } from "../../auth";
import { login } from '../../actions/users';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if( isAuthenticated() ){
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img className="logo" src="/img/orbita_logo.png" />
          </div>
          <form id="login-form">
            <input
              type="text"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="email"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
            />
            <input
              onClick={this.handleSubmit.bind(this)}
              type="submit"
              className="fadeIn fourth btn-submit"
              value="Log In"
            />
          </form>
          <div id="formFooter">
            <NewAccount obj={this} />
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(properties.api_url_login, {
      method: "POST",
      body: helpers.serializeFormJSON($("#login-form").serializeArray()),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(
        result => {
          login(result);
        },
        error => {
          console.log(error);
          alert(properties.msg_generic_error);
        }
      );
  }
}

export default withRouter(Login);
