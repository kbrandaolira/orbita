import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card bg-light mb-3">
        <div class="card-header">{this.props.title}</div>
        <div className="card-body">
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
