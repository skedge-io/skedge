import React, { Component } from "react";

import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";

import ContactList from "./ContactList";

import "./styles.css";

class Contacts extends Component {
  render() {
    return (
      <div className="row-this">
        <LeftPanel index4="active-sec" />

        <div className="dash-con">
          <TopBar header="Contacts" />

          <ContactList />
        </div>
      </div>
    );
  }
}

export default Contacts;
