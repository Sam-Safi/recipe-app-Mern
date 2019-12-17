import React from "react";

export class Title extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="card-title">{this.props.title}</h5>
      </React.Fragment>
    );
  }
}
