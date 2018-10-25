import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeftPanel extends Component {
  constructor(props) {
    super(props);

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
    let panelClass = this.state.animate
      ? "collapsed-panel slide-in"
      : "slide-out";
    let labelClass = this.state.animate ? "hide-label" : "show-label";

    return (
      <div className={`left-panel ${panelClass}`}>
        <div className="group">
          <button
            className={`hamburger hamburger--arrowturn ${animationClasses}`}
            onClick={this.handleClick}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          {/* Item */}
          <Link className="sec-link" id={this.props.wambo} to="/dashboard">
            <i className="material-icons collapsed-menu">event</i>
            <div className={`${labelClass}`}>Calendar</div>
          </Link>
          {/* Item */}
          <Link
            className="sec-link"
            id={this.props.index1}
            to="/dashboard/employees"
          >
            <i className="material-icons collapsed-menu">person</i>
            <div className={`${labelClass}`}>Employees</div>
          </Link>
          {/* Item */}
          <Link
            className="sec-link"
            id={this.props.index2}
            to="/dashboard/statistics"
          >
            <i className="material-icons collapsed-menu">assessment</i>
            <div className={`${labelClass}`}>Analytics</div>
          </Link>
          {/* Item */}
          <Link
            className="sec-link"
            id={this.props.index3}
            to="/dashboard/campaigns"
          >
            <i className="material-icons collapsed-menu">library_books</i>
            <div className={`${labelClass}`}>Campaigns</div>
          </Link>
          {/* Item */}
          <Link
            className="sec-link"
            id={this.props.index4}
            to="/dashboard/contacts"
          >
            <i className="material-icons collapsed-menu">contacts</i>
            <div className={`${labelClass}`}>Contacts</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default LeftPanel;
