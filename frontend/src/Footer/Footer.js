import React from 'react';
import '../Footer/Footer.css';

class Footer extends React.Component {
    render() {
      return (
        <div>
           <footer className="footer">
                <div className="container">
                    <span className="text-muted">Developed by Kayan Lira</span>
                </div>
            </footer>
        </div>
      )
    }

}

export default Footer;