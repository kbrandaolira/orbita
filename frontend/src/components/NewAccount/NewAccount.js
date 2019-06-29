import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { properties } from "../../properties";
import $ from "jquery";
import helpers from "../../helpers";
import { setToken, setUserId } from "../../auth";

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
                  id="name"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="email"
                  name="email"
                  maxLength="100"
                  type="text"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="state"
                  name="state"
                  maxLength="100"
                  type="text"
                  className="form-control"
                  id="state"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="password"
                  name="password"
                  maxLength="100"
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="repeat password"
                  name="repeatPassword"
                  maxLength="100"
                  type="password"
                  className="form-control"
                  id="repeatPassword"
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

  handleSubmit(e) {
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
              setToken(result2.token);
              setUserId(result2.token, result2.userId);
              window.location.reload();
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
  }
}

export default NewAccount;
