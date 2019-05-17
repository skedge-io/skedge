import React, { Component } from "react";
import ClickOutHandler from 'react-onclickout';
import { Link } from 'react-router-dom';
import axios from 'axios';

class JoinBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cancelModal: false,
      success: false
    }

    this.downGradeAccount = this.downGradeAccount.bind(this);
  }


  downGradeAccount() {
    axios.post('/api/downgrade/').then(res => {
      this.setState({success: true, cancelModal: false})
    })
  }

  render() {
    return (
      <div className="settings-box">
        <div className="join-business-box">
          <h3>Upgrade Account</h3>
          <p>Need to upgrade your account?</p>
          <Link to="/upgrade">Upgrade to Premium</Link>
        </div>
        <div className="join-business-box">
          <h3>Cancel Membership</h3>
          <p>No problem. Cancel anytime.</p>
          <button onClick={() => this.setState({cancelModal: true})}>Cancel my premium membership</button>
        </div>

        {this.state.cancelModal ? (
          <div>
            <div className="modal-overlay"></div>
            <ClickOutHandler onClickOut={() => this.setState({cancelModal: false})}>
              <div className="cancel-modal">
                <button onClick={() => this.setState({cancelModal: false})} className="modal-exit-btn">X</button>
                <h2>Are you sure you want to cancel?</h2>
                <button onClick={this.downGradeAccount}>Yes, Cancel</button>
                <button onClick={() => this.setState({cancelModal: false})}>No, keep premium</button>
              </div>
            </ClickOutHandler>
          </div>
        ) : ''}

        <p>{this.state.success ? <span style={{color: 'red'}}>You have downgraded your account.</span> : <span></span>}</p>


      </div>
    );
  }
}

export default JoinBox;
