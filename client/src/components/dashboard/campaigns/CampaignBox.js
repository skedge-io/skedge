import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

import Form from "./Form";

import "./styles.scss";

class CampaignBox extends Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      isActive: false,
      highView: { style: { height: "0rem" } },
      lowView: { style: { height: "100%", paddingBottom: "1rem" } }
    };
  }

  addActiveClass() {
    if (this.state.isActive) {
      this.setState({
        isActive: false
      });
    } else {
      this.setState({
        isActive: true
      });
    }
  }

  render() {
    return (
      <div className="outer-campaign">
        <div
          className="campaign-box"
          style={
            this.state.isActive
              ? this.state.highView.style
              : this.state.lowView.style
          }
        >
          {this.state.isActive ? null : (
            <Form
              when={this.props.when}
              active={this.props.active}
              text={this.props.text}
              camp={this.props.camp}
              time={this.props.time}
            />
          )}
        </div>
      </div>
    );
  }
}

export default CampaignBox;
