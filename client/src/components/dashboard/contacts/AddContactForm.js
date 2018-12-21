//when you click a slot on the calander this will pop up
import React, { Component } from 'react';
import ClickOutHandler from 'react-onclickout';
import axios from 'axios';




class AddContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      phone: '',
      notes: ''
    };


    this.handleClientName = this.handleClientName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleDesc = this.handleDesc.bind(this);

    this.addContact = this.addContact.bind(this);
  }


  handleClientName(event) {
    this.setState({ name: event.target.value });
  }

  handlePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleDesc(event) {
    this.setState({ notes: event.target.value });
  }

  renderButton() {
    return (
      <button
        className="waves-effect waves-light btn red darken-2"
        onClick={this.props.cancel}
      >
        Close
      </button>

    )
  }


  addContact = () => {

    let contact = this.state;
    //console.log('yes')
    //console.log(appointment)

    axios.post('/api/clients/new', contact).then(res => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })

    this.props.cancel();
    this.props.update();
  }



  render() {
    return (
      <ClickOutHandler onClickOut={this.props.cancel}>
        <div className="eventContactViewer">
          <div className="col s12 m6">
            <div className="card darken-1">
              <div className="card-content edit-form">
                <span className="card-title">
                  Create New Contact
                </span>

                <label>Contact Name</label>
                <input className="card-input-imp white-bkg" onChange={this.handleClientName} />
                <label>Phone</label>
                <input className="card-input-imp white-bkg" value={this.state.phone} onChange={this.handlePhone}/>
                <label>Notes</label>
                <input className="card-input-imp white-bkg" value={this.state.desc} onChange={this.handleDesc}/>

              </div>
              <div className="card-action">
                <div className="form-in-row">

                  <button
                    className="waves-effect waves-light btn green darken-2"
                    onClick={this.addContact}
                  >
                    Add Contact
                  </button>


                  {this.renderButton()}


                </div>
              </div>
            </div>
          </div>
        </div>
      </ClickOutHandler>
    );
  }
}

export default AddContactForm;
