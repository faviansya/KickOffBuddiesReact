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
              {this.props.categoryItem.map((item, key) => {
                const arc_img =
                  item.url_image === null
                    ? "User Not Upload Data"
                    : item.url_image;
                return (
                  <AllSport
                    key={key}
                    id={item.id}
                    title={item.sport}
                    player={item.player}
                    img={arc_img}
                    pemain_now={item.pemain_saat_ini}
                    locationssss={item.location}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "categoryItem",
  actions
)(withRouter(Home));
