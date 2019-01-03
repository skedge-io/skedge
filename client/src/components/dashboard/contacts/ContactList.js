import React, { Component } from 'react';
import Contact from './Contact';
import AddContactForm from './AddContactForm';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";


class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContact: false,
      contacts: [],
      contactName: '',
      contactPhone: '',
      contactNextAppointment: '',
      contactPreviousAppointments: '',
      contactNotes: '',
      showUpdate: false,
      showForm: false
    };

    this.showContactDetails  = this.showContactDetails.bind(this);
    this.searchChange  = this.searchChange.bind(this);

    this.deleteContact = this.deleteContact.bind(this);
    this.updateContact = this.updateContact.bind(this);

    this.handleContactName = this.handleContactName.bind(this);
    this.handleContactNumber = this.handleContactNumber.bind(this);
    this.handleNextApt = this.handleNextApt.bind(this);
    this.handlePrevApt = this.handlePrevApt.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.refreshContacts = this.refreshContacts.bind(this);
  }

  componentWillMount() {
    axios.get('/api/current_business').then((res) => {

      this.setState({contacts : res.data.clients})

      this.state.contacts.forEach(function(contact, index, object) {
      })

      //this sorts the contacts in alphabetical order
      let newClients = this.state.contacts.sort(function(a, b) {
        if (a.name === undefined || b.name === undefined) {
          return
        }

        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      this.setState({contacts: newClients})


    })


  }

  componentDidUpdate() {

  }


  showContactDetails(event,data) {
    this.setState({ showContact: true,
      contactName: data.name,
      contactPhone: data.phone,
      contactNotes: data.notes,
      contactId: data._id,

      showUpdate: false})
  }

  deleteContact = () => {
    let contact = {
      name: this.state.contactName,
      phone: this.state.contactPhone,
      notes: this.state.contactNotes,
      _id: this.state.contactId,
    }

    axios.post('/api/clients/' + this.state.contactId + "/delete").then(res => {
      console.log('deleted');
    })

    this.setState({showContact: false})

    this.refreshContacts()


  }

  updateContact = () => {

    let contact = {
      name: this.state.contactName,
      phone: this.state.contactPhone,
      notes: this.state.contactNotes,
      _id: this.state.contactId,
    }

    axios.post("/api/clients/" + contact._id + "/edit", contact).then(res => {
      console.log('Contact Edited');

    }).catch((err) => {
      console.log(err);
    })

    this.refreshContacts()

    this.forceUpdate()
    this.refreshContacts()

  }


  refreshContacts = () => {
    axios.get('/api/current_business').then((res) => {
      this.setState({contacts : res.data.clients})

      this.state.contacts.forEach(function(contact, index, object) {
      })

      //this sorts the contacts in alphabetical order
      let newClients = this.state.contacts.sort(function(a, b) {
        if (a.name === undefined || b.name === undefined) {
          return
        }

        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      this.setState({contacts: newClients, showUpdate: true})

      this.forceUpdate()

    })

  }


  handleContactName(event) {
    this.setState({ contactName: event.target.value  });
  }

  handleContactNumber(event) {
    this.setState({ contactPhone: event.target.value });
  }

  handleNextApt(event) {
    this.setState({ contactNextAppointment: event.target.value  });
  }

  handlePrevApt(event) {
    this.setState({ contactPreviousAppointments: event.target.value  });
  }

  handleNotes(event) {
    this.setState({ contactNotes: event.target.value  });
  }





  renderContactDetails() {
        return (
          <div className="contact-details">
            <div className="contact-inputs">
              <h3 className="contact-edit-title">Contact Info</h3>
              <label>Name</label>
              <input value={this.state.contactName} onChange={this.handleContactName} />
              <label>Number</label>
              <input value={this.state.contactPhone} onChange={this.handleContactNumber} />
              <label>Next Appointment</label>
              <input value={this.state.contactNextAppointment} onChange={this.handleNextApt} />
              <label>Previous Appointments</label>
              <input value={this.state.contactPreviousAppointments} onChange={this.handlePrevApt}/>
              <label>Notes</label>
              <input value={this.state.contactNotes} onChange={this.handleNotes} />
            </div>
            <button className="btn left green white-text" onClick={this.updateContact}>Update Contact</button>

            <button
              className="delete-contact-btn btn-floating waves-effect waves-light red right margin-right"
              onClick={this.deleteContact}
            >
              <i className="material-icons">delete</i>
            </button>

            {this.state.showUpdate ?<div className="updated-contact">Updated</div> : null}

          </div>
      )
  }

  searchChange(event) {
    let sortedContacts = []

    //if event.target.value is found on the name property this.state.contacts
      for (let i = 0; i < this.state.contacts.length; i++) {
        if (this.state.contacts[i].name.toLowerCase().includes(event.target.value.toLowerCase())) {
          sortedContacts.push(this.state.contacts[i])
        }
      }
      //add that contact to sortedContacts/if nothing found return no contacts
      this.setState({contacts: sortedContacts})

      //if event.target.value is zero, do an axios request and set state to contacts from api
      if (event.target.value.length < 1) {
        axios.get('/api/current_business').then((res) => {

          this.setState({contacts : res.data.clients})

          //this sorts the contacts in alphabetical order
          let newClients = this.state.contacts.sort(function(a, b) {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });

          this.setState({contacts: newClients})
        })
      }
  }

  render() {


    return (
      <div className="contacts-container">
        <div className="contact-list-container">
            <div className="search-box">
              <input onChange={this.searchChange} placeholder="search" className="search-bar"></input>
              <div className="hide-on-mobile search-icon"><i className="material-icons">search</i></div>
            </div>
          {this.state.contacts.map((data, index) => (
            <Contact key={data.number} clicky={(event) => {this.showContactDetails(event,data)}} name={data.name} number={data.number}  />
          ))}

        </div>

        <div className="contact-details-page">
          { this.state.showContact ? this.renderContactDetails() : null }
        </div>

        <div className="fixed-action-btn">
          <button onClick={() => this.setState({showForm: true})} className="btn-floating btn-large blue hoverable waves-effect waves-light" data-tip="React-tooltip">
            <i className="material-icons">add</i>
          </button>
          <ReactTooltip place="left" type="dark" effect="solid">Create New Contact</ReactTooltip>
        </div>


        {this.state.showForm ? <div className="add-contact-form"><AddContactForm cancel={() => this.setState({showForm: false})} update={() => { this.refreshContacts(); this.forceUpdate(); this.refreshContacts() }} /></div> : null}








      </div>
    )
  }
}

export default ContactList
