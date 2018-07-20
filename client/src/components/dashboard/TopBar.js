import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        {this.props.header}
        <div className="right">
          {this.props.btn}
        </div>
      </div>
    )
  }
}

export default TopBar;
