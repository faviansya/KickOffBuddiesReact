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
      <div class="col-12 col-lg-6 col-md-6 mt-5">
        <div class="product-card">
          <div class="product-image">
            <img src={this.props.img} />
          </div>
          <div class="product-details">
            <h1>{this.props.title}</h1>
            <p>Player Needed: {this.props.player}</p>
            <p>Status: {this.props.status}</p>
            <p>Location: {this.props.locationing}</p>

            <Link to="/details">
              <button type="button" class="btn" onClick={this.changeBookingIds}>
                Go To Lobby
              </button>
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
