import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import TopBar from '../../dashboard/TopBar';
import LeftPanel from '../../dashboard/LeftPanel';
import RightPanel from '../../dashboard/RightPanel';


let clientId = window.location.href.split('').reverse().join('');
const aptI = clientId.indexOf('/');

clientId = clientId.substring(0, aptI);
clientId = clientId.split('').reverse().join('');

const axiosUrl = '/api/clients/' + clientId;


class ContactsEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {client: {}}
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  componentDidMount() {
    axios.get(axiosUrl).then((res) => {
      this.setState({client: res.data})
      console.log(this.state.client);
      console.log(this.state.client.name)
    })
  }

  render() {
    return (
      <div className="row-this higher">
        <LeftPanel index4="active-sec" />

        <div className="container formFlex">
        <TopBar style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}} header="Edit Contact" />

          <div className="inside">
            <form method="POST" action={'/api/clients/' + clientId + '/edit' }>
              <input type="text" placeholder="Client Name" name="name" onChange={(event) => {this.setState({client: {name: event.target.value}})}} value={this.state.client.name}></input>
              <input type="text" placeholder="Phone" name="phone" onChange={(event) => {this.setState({client: {phone: event.target.value}})}} value={this.state.client.phone}></input>
              <textarea className="materialize-textarea" placeholder="Notes" name="notes" onChange={(event) => {this.setState({client: {notes: event.target.value}})}} value={this.state.client.notes}></textarea>

              <Link to="/dashboard/contacts" className="red btn-flat white-text hoverable waves-effect waves-light">
                Cancel
              </Link>
              <button type="submit" className="green white-text btn-flat right waves-effect waves-light">
                Save Contact
                <i className="material-icons right">perm_contact_calendar</i>
              </button>

            </form>

          </div>
        </div>
        <RightPanel />
      </div>
    )
  }
}

export default ContactsEdit
