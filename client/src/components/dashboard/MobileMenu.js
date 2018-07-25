import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MobileMenu extends Component {

  state = {
    mobActive : false
  }


  toggleClass() {
    const currentState = this.state.mobActive;
    this.setState({ mobActive: !currentState });
  };


  render() {



    return (
      <div>
        <div onClick={this.toggleClass.bind(this)} className={this.state.mobActive ? 'mob-menu-btn active': 'mob-menu-btn'}><i className="material-icons">menu</i></div>

        <div className="mob-menu" className={this.state.mobActive ? 'mob-menu on': 'mob-menu'}>
          <div className={this.state.mobActive ? 'mobileMenuLinks on': 'mobileMenuLinks'}>
            <h2>Skedge.io</h2>
            <Link  id={this.props.wambo} to="/dashboard">Calendar</Link>
            <Link  id={this.props.index1} to="/dashboard/employees">Employees</Link>
            <Link  id={this.props.index2} to="/dashboard/statistics">Statistics</Link>
            <Link  id={this.props.index3} to="/dashboard/campaigns">Campaigns</Link>
            <Link  id={this.props.index4} to="/dashboard/contacts">Manage Contacts</Link>
          </div>
        </div>
    </div>


    )
  }
}

export default MobileMenu;
