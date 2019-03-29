import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";
import AllSport from "../Components/AllISport";

class Home extends Component {
  render() {
    return (
      <div>
        <section class="section-content bg padding-y-sm">
          <div class="container">
            <div class="padding-y-sm">
              <span>... Booking "Ditemukan"</span>
            </div>
            <div class="row-sm">
            <AllSport />
              {/* {this.props.categoryItem.map((item, key) => {
                const arc_img =
                  item.urlimages === null
                    ? "User Not Upload Data"
                    : item.urlimages;
                return (
                  <AllSport />
                );
              })} */}
            </div>
          </div>
        </section>{" "}
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Home));
