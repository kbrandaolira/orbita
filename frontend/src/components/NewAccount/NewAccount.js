import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { properties } from "../../properties";
import $ from "jquery";
import helpers from "../../helpers";
import { login } from "../../actions/users";

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <a className="fadeIn third" onClick={this.toggle} href="#">
          Create New Account
        </a>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New Account</ModalHeader>
          <form method="post" id="user-form">
            <ModalBody>
              <div className="form-group">
                <input
                  placeholder="name"
                  name="name"
                  maxLength="100"
                  type="text"
                  className="form-control"
                  id="new-name"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="email"
                  name="email"
                  maxLength="100"
                  type="text"
                  className="form-control"
                  id="new-email"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="state"
                  name="state"
                  maxLength="100"
                  type="text"
                  className="form-control"
                  id="new-state"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="password"
                  name="password"
                  maxLength="100"
                  type="password"
                  className="form-control"
                  id="new-password"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="repeat password"
                  name="repeatPassword"
                  maxLength="100"
                  type="password"
                  className="form-control"
                  id="new-repeatPassword"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={this.handleSubmit.bind(this)}
                className="btn-submit"
                color="info"
              >
                Save
              </Button>{" "}
              <Button id="close-btn" color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }

  validate() {
    let messages = [];
    if ($("#new-password").val() != $("#new-repeatPassword").val()) {
      messages.push("Password doesn't match.");
    } else if (
      $.trim($("#new-name").val()) == "" ||
      $.trim($("#new-email").val()) == "" ||
      $.trim($("#new-state").val()) == "" ||
      $.trim($("#new-password").val()) == ""
    ) {
      messages.push("All fields are required.");
    }
    return messages;
  }

  handleSubmit(e) {
    let messages = this.validate();
    if (messages.length == 0) {
      fetch(properties.api_url_new_account, {
        method: "POST",
        body: helpers.serializeFormJSON($("#user-form").serializeArray()),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(
          result => {
            console.log(result);
            $("#close-btn").click();
            fetch(properties.api_url_login, {
              method: "POST",
              body: helpers.serializeFormJSON($("#user-form").serializeArray()),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(res2 => res2.json())
              .then(result2 => {
                login(result2);
              })
              .catch(err => {
                console.log(err);
                alert(properties.msg_generic_error);
              });
          },
          error => {
            console.log(error);
            alert(properties.msg_generic_error);
          }
        );
    } else {
      alert(messages);
    }
  }
}

export default NewAccount;
