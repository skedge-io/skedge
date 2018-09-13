import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  constructor(props) {
    super(props)


    this.showContactDetails  = this.showContactDetails.bind(this);

    this.state = {
      showContact: false
    };


  }


  showContactDetails() {
    this.setState({ showContact: true })
  }


  renderContactDetails() {
        return (
          <div className="contact-details">
            <p>Name: John</p>
            <p>Number: 123-456-7890</p>
            <p>Notes: </p>
            <p>Next Appointment: Unscheduled</p>
            <p>Previous Appointments: </p>
          </div>
      )
  }



  render() {


    return (
      <div className="contacts-container">
        <div className="contact-list-container">
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />
          <Contact clicky={this.showContactDetails} name="John" number="123-456-7890" lastVisit="9/3/2018" />

        </div>

        <div className="contact-details-page">
          { this.state.showContact ? this.renderContactDetails() : null }
        </div>


      </div>
    )
  }
}

export default ContactList
