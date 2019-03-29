import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Profile from "../Universal/Profile";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Host } from "../../Host";

class Details extends Component {
  render() {
    return (
      <div>
        <section className="section-topbar border-top padding-y-sm wow slideInUp">
          <div className="container-fluid">
            <span>Kick Off Buddies The Best Of The Best</span> {"  "}
            <span className="text-success">Best Of The Year</span>
          </div>
        </section>
        <section className="section-content bg padding-y-sm">
          <div className="container-fluid">
            <div className="row wow slideInUp">
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />

                <Profile />
                <Profile />

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Details));
