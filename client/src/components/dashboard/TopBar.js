import React, { Component } from "react";
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
  render() {
    return (
      <div className="top-bar">
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
                <MenuItem icon="cog" text="My Settings" />
                <MenuItem icon="settings" text="Account Setup" />
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
