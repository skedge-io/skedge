import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';



import TopBar from '../TopBar';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';


class Statistics extends Component {



  render() {

    return (
      <div className="row-this">

      <LeftPanel index2="active-sec"/>


       <div className="dash-con">
         <TopBar header="Statistics" btn=""/>

         <div className="cal-container">
          <h1>Statistics</h1>
         </div>

       </div>

       <RightPanel />





       </div>
    )
  }
}

export default Statistics;
