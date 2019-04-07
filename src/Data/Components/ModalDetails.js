import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <sec>
        <button
          type="button"
          class="btn ml-1 btn-outline-success"
          data-toggle="modal"
          data-target="#ModalForDetails"
        >
          <i className="fa fa-maps" /> Show Maps{" "}
        </button>

        <div
          class="modal fade bd-example-modal-lg"
          id="ModalForDetails"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ModalForDetailsTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Maps
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body" />
              <h5>Distance: {this.props.distances}, 
              Duration: {this.props.durations},
              From Your Location</h5>
              {this.props.maps}
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </sec>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Modal));
