import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'; //https://www.npmjs.com/package/react-copy-to-clipboard

class InviteBox extends Component {
  state = {
    value: this.props.business.business._id,
    copied: false
  };


  render() {
    return (
      <div className="settings-box">
        <h3>Invite To Business</h3>
        <p>Copy this code and give it to your employees.</p>

        {this.props.business.business._id ?
        <div>
          { () => {this.setState({value: this.props.business.business._id })}}
          <input readOnly className="copy-input-imp" value={this.state.value} />
          <CopyToClipboard
           text={this.state.value}
            onCopy={() => this.setState({copied: true})}>
            {this.state.copied ? <button className="copy-button-imp">Copied</button> : <button className="copy-button-imp">Copy</button>}
          </CopyToClipboard>
        </div>
          :
        <p>loading</p>
        }



      </div>
    );
  }
}

export default InviteBox;
