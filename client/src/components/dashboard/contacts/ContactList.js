import React, { Component } from 'react';
import Contact from './Contact';
import axios from 'axios';


class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContact: false,
      contacts: []
    };

    this.showContactDetails  = this.showContactDetails.bind(this);
    this.contactData = this.state.contacts


  }

  componentDidMount() {
    axios.get('/api/current_business').then((res) => {
      this.setState({contacts : res.data.clients})
      console.log(this.state.contacts);
      this.contactData = this.state.contacts;
    })


  }


  showContactDetails(event) {
    console.log(event.target);
    this.setState({ showContact: true, details: {
      name: event.target.name,
      number: this.number,
      lastVisit: this.lastVisit
    } })
  }

  renderContactDetails() {
        return (
          <div className="contact-details">
            <p>Name: {this.state.contacts.name}</p>
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

          {this.state.contacts.map((data, index) => (
            <Contact key={data.number} clicky={this.showContactDetails} name={data.name} number={data.number} lastVisit={data.lastVisit} />
          ))}

        </div>

        <div className="contact-details-page">
          { this.state.showContact ? this.renderContactDetails() : null }
        </div>


      </div>
    )
  }
}

export default ContactList
