import React, { Component } from 'react';


class TopBar extends Component {
  render() {
    return (
      <div style={this.props.style} className="top-bar">
        {this.props.header}
        <div className="right">
          {this.props.btn}
        </div>
      </div>
    )
  }
}

export default TopBar;
