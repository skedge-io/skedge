import React, { Component } from 'react';

class RightPanel extends Component {
  render() {
    return (
      <div className="right-panel">
        <p className="grayer">System logs</p>
        <p><b>You</b> <span className="green-text">created</span> a new event<br /><small className="grayer-light">Just Now</small></p>
        <p><b>You</b> <span className="red-text">deleted</span> an event<br /><small className="grayer-light">20 minutes ago</small></p>
        <p><b>Susan</b> <span className="blue-text">edited</span> your event<br /><small className="grayer-light">2 days ago</small></p>
      </div>
    )
  }
}

export default RightPanel;
