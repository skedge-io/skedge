import React, { Component } from 'react';

import Header from '../Header';

class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamDesc: 'Click a photo to learn more'
    }

    this.handleTeamClick = this.handleTeamClick.bind(this)
  }

  handleTeamClick(description) {
    this.setState({teamDesc: description})
  }


  render() {
    return (
      <div>
        <Header />
        <div className="team-page">
          <div className="team-container">
            <h2>About The Team</h2>
            <h4>Our team is made up of three full stack web developers. Each of us has a particular specialty that they bring to the product.</h4>
            <h4 className="low-weight" align="center">{this.state.teamDesc}</h4>
          </div>
        </div>
        <div className="team-card-container">
          <div id="team-one" className="team-card" onClick={() => this.handleTeamClick('Joe Rezendes is a full stack web developer with an emphasis on the front end. He came up with the product.')}></div>
          <div id="team-two" className="team-card" onClick={() => this.handleTeamClick('James Rezendes is a full stack web developer with an emphasis on the back end.')}></div>
          <div id="team-three" className="team-card" onClick={() => this.handleTeamClick('Johnathen Chen is a full stack web developer with an emphasis on design.')}></div>
        </div>
      </div>
    )
  }
}

export default Team;
