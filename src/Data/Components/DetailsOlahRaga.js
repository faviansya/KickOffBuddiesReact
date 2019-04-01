import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class DetailsOlahRaga extends Component {
  render() {
    return (
      <div class="col-md-3 mb15 border-5">
        <article class="box h-100 ">
          <figure class="itembox text-center">
            <span class="mt-2 icon-wrap rounded icon-sm bg-success">
              <i class="fas fa-volleyball-ball white"></i>
            </span>
            <figcaption class="text-wrap">
              <h5 class="title">Olah Raga</h5>
              <p class="text-muted">
                Badminton{" "}
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
)(withRouter(DetailsOlahRaga));
