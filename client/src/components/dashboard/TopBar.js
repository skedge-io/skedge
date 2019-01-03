import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  Button,
  IconName,
  Popover,
  PopoverInteractionKind,
  Classes,
  Position
} from "@blueprintjs/core";

class TopBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animate: false
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    this.setState(prevState => {
      return { animate: !prevState.animate };
    });
  }


  render() {

    let animationClasses = this.state.animate ? "is-active" : "";


    return (
      <div className="top-bar">
      <Popover className="hide-on-desktop"
        interactionKind={PopoverInteractionKind.HOVER}
        content={
          <Menu>
            <Link className="top-bar-link" to="/dashboard"><MenuItem icon="calendar" text="Calendar" /></Link>
            <Link className="top-bar-link" to="/dashboard/employees"><MenuItem icon="person" text="Staff" /></Link>
            <Link className="top-bar-link" to="/dashboard/statistics"><MenuItem icon="chart" text="Analytics" /></Link>
            <Link className="top-bar-link" to="/dashboard/campaigns"><MenuItem icon="layers" text="Campaigns" /></Link>
            <Link className="top-bar-link" to="/dashboard/contacts"><MenuItem icon="id-number" text="Contacts" /></Link>

          </Menu>
        }
        position={Position.BOTTOM_LEFT}
      >
        <button
          className={`hide-on-desktop hamburger hamburger--arrowturn`}
          onClick={this.handleClick}
        >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </Popover>
        {this.props.header}
        <div className="right">

          <Popover
            interactionKind={PopoverInteractionKind.HOVER}
            content={
              <Menu text="Updates">
                <MenuItem icon="tick" text="No updates" />
              </Menu>
            }
            position={Position.BOTTOM_LEFT}
          >
            <button className="material-icons min-button">
              notifications_none
            </button>
          </Popover>

          <Popover
            interactionKind={PopoverInteractionKind.HOVER}
            content={
              <Menu>
                <Link className="top-bar-link" to="/settings"><MenuItem icon="cog" text="My Settings" /></Link>
                <Link className="top-bar-link" to="/account/setup"><MenuItem icon="settings" text="Account Setup" /></Link>
                <MenuItem href="/api/logout" icon="log-out" text="Logout" />
              </Menu>
            }
            position={Position.BOTTOM_LEFT}
          >
            <button className="material-icons min-button">
              person_outline
            </button>
          </Popover>
        </div>
      </div>
    );
  }
}

export default TopBar;
