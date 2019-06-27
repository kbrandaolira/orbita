import React from "react";
import "./PageNotFound.css";
import Card from "../Card/Card"

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="error-template">
                    <Card title="Oops! 404 Not Found" description="Sorry, an error has occured, Requested page not found!"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
