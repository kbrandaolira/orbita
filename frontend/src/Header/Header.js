import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img className="logo" src="/img/orbita_logo.png" />
          </a>
          <a href="#">Logout</a>
        </nav>
      </div>
    );
  }
}

export default Header;
