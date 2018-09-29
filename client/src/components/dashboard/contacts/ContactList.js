import React, { Component } from 'react';
import Contact from './Contact';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContact: false,
      contacts: [],
      contactDetails: {
        name: '',
        phone: '',
        nextAppointment: '',
        previousAppointments: '',
        notes: ''
      }
    };

    this.showContactDetails  = this.showContactDetails.bind(this);

  }

  componentDidMount() {
    axios.get('/api/current_business').then((res) => {
      this.setState({contacts : res.data.clients})
    })


  }


  showContactDetails(event,data) {
    this.setState({ showContact: true, contactDetails: {
      name: data.name,
      number: data.phone,
      notes: data.notes,
      id: data._id
    } })
  }

  renderContactDetails() {
        return (
          <div className="contact-details">
            <p>Name: {this.state.contactDetails.name}</p>
            <p>Number: {this.state.contactDetails.number}</p>
            <p>Next Appointment: {this.state.contactDetails.nextAppointment}</p>
            <p>Previous Appointments: {this.state.contactDetails.previousAppointments}</p>
            <p>Notes: {this.state.contactDetails.notes}</p>

            <a className="btn green white-text" href={"/contacts/edit/" + this.state.contactDetails.id}>Edit</a>

            <form className="del-contact" method="post" action={"/api/clients/" + this.state.contactDetails.id + "/delete"}>
              <button className="right delete-contact">Delete</button>
            </form>
          </div>
      )
  }



  render() {


    return (
      <div className="contacts-container">
        <div className="contact-list-container">

          {this.state.contacts.map((data, index) => (
            <Contact key={data.number} clicky={(event) => {this.showContactDetails(event,data)}} name={data.name} number={data.number}  />
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
