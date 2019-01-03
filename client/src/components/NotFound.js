import React, { Component } from "react";

import TopBar from "./dashboard/TopBar";
import LeftPanel from "./dashboard/LeftPanel";





class NotFound extends Component {

  render() {
    return (
      <div className="row-this">
        <LeftPanel />
        <div className="dash-con">
          <TopBar header="404" btn="" />
          <div className="not-found">
            Page not found.
          </div>
        </div>
      </div>
    );
  }
}



export default NotFound;
