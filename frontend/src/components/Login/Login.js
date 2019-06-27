import React from "react";
import "./Login.css";
import NewAccount from "../NewAccount/NewAccount";
import { properties } from "../../properties";
import $ from "jquery";
import helpers from "../../helpers";
import { withRouter, Redirect } from "react-router-dom";
import { setToken, TOKEN_KEY } from "../../auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
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
              className="fadeIn fourth"
              value="Log In"
            />
          </form>
          <div id="formFooter">
            <NewAccount />
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
          if (result.token != null) {
            setToken(result.token);
            this.props.history.push("/dashboard");
          } else {
            alert(result.message);
          }
        },
        error => {
          console.log(error);
          alert(properties.msg_generic_error);
        }
      );
  }
}

export default withRouter(Login);
