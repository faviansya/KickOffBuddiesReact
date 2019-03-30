import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class MyBookingComp extends Component {
  changeBookingIds = () => {
    this.props.changeBookingId(this.props.id);
  };
  render() {
    return (
      <div class="col-12 col-lg-4 col-md-6 mt-5">
        <div class="card" onClick={this.changeBookingIds}>
          <img
            class="card-img-top"
            src={this.props.img}
            alt="Card image cap"
            height="250px"
          />
          <div class="card-body">
            <h4 class="card-title">{this.props.title}</h4>
            <p class="card-text">Player: {this.props.player}</p>
            <p class="card-text">Status: {this.props.status}</p>
            <p class="card-text">Location: {this.props.locationing}</p>

            <Link to="/details" class="btn btn-primary">
              Check Lobby
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  "",
  actions
)(withRouter(MyBookingComp));
