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
            <h3>About The Team</h3>
            <h5>Our team is made up of three full stack web developers. Each of us has a particular specialty that we bring to the product.</h5>
            <h5 className="low-weight" align="center">{this.state.teamDesc}</h5>
          </div>
        </div>
        <div className="team-card-container">
          <div id="team-one" className="team-card" onClick={() => this.handleTeamClick('Joe Rezendes is a full stack engineer with an emphasis on the front end and a passion for education and user experience.  He has a background in digital marketing, where he managed the digital marketing campaigns of over 25 companies in the East Bay Area. In 2017 he started a program called CodingForKids where he taught 4th and 5th graders basic front end web development in seven different Elementary Schools. He came up with the idea for skedge when talking to a Hair Salon owner about the problems appointment based businesses face. He serves Skedge as a product manager and lead front end engineer.')}></div>
          <div id="team-two" className="team-card" onClick={() => this.handleTeamClick('James Rezendes is a full stack web developer with an emphasis on the back end and a passion for stretching the limits of the web. James is great at thinking outside the box and coming up with innovative approaches to the development process. He serves Skedge as the lead back end engineer.')}></div>
          <div id="team-three" className="team-card" onClick={() => this.handleTeamClick('Johnathen Chen is a full stack web and iOS developer with an emphasis on design and a passion for UX. His work is featured in several apps on the App Store, and he brings a 21st century mindset to design. He serves Skedge as a designer and part time frontend engineer.')}></div>
        </div>
      </div>
    )
  }
}

export default Team;
