import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class DetailsJumlahPemain extends Component {
  render() {
    return (
      <div class="col-3 mb15 border-5">
        <article class="box h-100 ">
          <figure class="itembox text-center">
            <span class="mt-2 icon-wrap rounded icon-sm bg-success">
              <i class="fas fa-users white"></i>
            </span>
            <figcaption class="text-wrap">
              <h5 class="title">Number of Player</h5>
              <p class="text-muted">
              {this.props.player} Players
              </p>
            </figcaption>
          </figure>
        </article>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(DetailsJumlahPemain));
