import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


let clientId = window.location.href.split('').reverse().join('');
const aptI = clientId.indexOf('/');

clientId = clientId.substring(0, aptI);
clientId = clientId.split('').reverse().join('');

const axiosUrl = '/api/current_business/client/' + clientId;


class ContactsEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {client: {name: 'loading'}}
  }


  componentDidMount() {
    axios.get(axiosUrl).then((res) => {
      this.setState({client: res.data[0]})
      console.log(this.state.client);
      console.log(this.state.client.name)
    })
  }

  render() {
    return (
      <div>
      <p>name: {this.state.client.name}</p>
      <p>number: {this.state.client.phone}</p>
      
      </div>
    )
  }
}

export default ContactsEdit
