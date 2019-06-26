import React from 'react';
import '../Header/Header.css';

class Header extends React.Component {
    render() {
      return (
        <div>   
            <nav class="navbar fixed-top navbar-light bg-light">
                <a class="navbar-brand" href="#"><img className="logo" src="/img/orbita_logo.png"/></a>
                <a href="#">Logout</a>
            </nav>
        </div>
      )
    }
  }

  export default Header;