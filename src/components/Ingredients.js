import React from "react";

export class Ingredients extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="card-title">{this.props.ingredients}</h5>
      </React.Fragment>
    );
  }
}
