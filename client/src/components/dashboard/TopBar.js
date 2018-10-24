import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        {this.props.header}
        <div className="right">
          <button className="material-icons min-button">
            notifications_none
          </button>
          <button class="material-icons min-button">person_outline</button>
        </div>
      </div>
    );
  }
}

export default TopBar;
