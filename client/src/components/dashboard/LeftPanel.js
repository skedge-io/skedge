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

    return (
      <div className="left-panel">
        <button
          className={`hamburger hamburger--arrowturn ${animationClasses}`}
          onClick={this.handleClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>

        <Link className="sec-link" id={this.props.wambo} to="/dashboard">
          <i className="material-icons collapsed-menu">event</i>
        </Link>
        {/* Item */}
        <Link
          className="sec-link"
          id={this.props.index1}
          to="/dashboard/employees"
        >
          <div>
            <i className="material-icons collapsed-menu">person</i>
          </div>
        </Link>
        {/* Item */}
        <Link
          className="sec-link"
          id={this.props.index2}
          to="/dashboard/statistics"
        >
          <i className="material-icons collapsed-menu">assessment</i>
        </Link>
        {/* Item */}
        <Link
          className="sec-link"
          id={this.props.index3}
          to="/dashboard/campaigns"
        >
          <i className="material-icons collapsed-menu">library_books</i>
        </Link>
        {/* Item */}
        <Link
          className="sec-link"
          id={this.props.index4}
          to="/dashboard/contacts"
        >
          <i className="material-icons collapsed-menu">contacts</i>
        </Link>
      </div>
    );
  }
}

export default LeftPanel;
