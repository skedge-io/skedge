import React, { Component } from 'react';
import Contact from './Contact';

let dummyData = [
  {
    name : "John",
    number : "123-456-7890",
    lastVisit : "9/3/2018"
  },
  {
    name : "John",
    number : "123-456-7890",
    lastVisit : "9/3/2018"
  },
  {
    name : "John",
    number : "123-456-7890",
    lastVisit : "9/3/2018"
  },
  {
    name : "John",
    number : "123-456-7890",
    lastVisit : "9/3/2018"
  },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    },
    {
      name : "John",
      number : "123-456-7890",
      lastVisit : "9/3/2018"
    }


]


class ContactList extends Component {
  constructor(props) {
    super(props)

    this.showContactDetails  = this.showContactDetails.bind(this);


    this.state = {
      showContact: false
    };
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
            <p>Name: {this.state.details.name}</p>
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

          {dummyData.map((data, index) => (
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
