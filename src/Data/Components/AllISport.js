import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  render() {
    return (
        <div class="col-md-4 col-sm-6 col-lg-3 wow bounceIn">
          <Link to="/details" class="title">
            <figure class="card card-product">
              <div class="img-wrap">
                {" "}
                <img class="d-block h-100 w-100" src="http://indodjaja.com/KickOffBuddies/badminton.jpg" />
              </div>
              <figcaption class="info-wrap">
                <Link to="" class="title" style={{ color: "black" }}>
                Badminton
                </Link>
                <div class="price-wrap">
                  <span class="price-new" style={{ color: "forestgreen" }}>Lapangan RajaBasa</span>
                </div>
              </figcaption>
            </figure>
          </Link>
        </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Item));
