import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  changeBookingIds = () => {
    this.props.changeBookingId(this.props.id);
  };
  render() {
    return (
      <div
        onClick={this.changeBookingIds}
        class="col-md-6 col-sm-6 col-lg-4 wow bounceIn"
      >
        <Link to="/details" class="title">
          <div class="wrapper">
            <div class="clash-card barbarian">
              <div class="clash-card__image clash-card__image--barbarian">
                <img src={this.props.img} alt="barbarian" />
              </div>
              <div style={{fontSize:"25px",color:"black", fontWeight:"300"}}>{this.props.title}</div>
              <div class="clash-card__level clash-card__level--barbarian">
                -------------
              </div>
              <div class="clash-card__unit-name">Location</div>
              <div class="clash-card__unit-description">
                {this.props.locationssss}
              </div>
              <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                <div class="one-third">
                  <div class="stat">{this.props.pemain_now}</div>
                  <div class="stat-value">Player Now</div>
                </div>

                <div class="one-third">
                  <div class="stat">{this.props.player  - this.props.pemain_now}</div>
                  <div class="stat-value">Player Needed</div>
                </div>

                <div class="one-third no-border">
                  <div class="stat">{this.props.player}</div>
                  <div class="stat-value">Total Player</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Item));
