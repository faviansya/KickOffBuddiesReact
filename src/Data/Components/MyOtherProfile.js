import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  render() {
    return (
      <li>
        <div class="d-flex bd-highlight">
          <div class="img_cont">
            <img
              src={this.props.img}
              class="rounded-circle user_img"
            />
          </div>
          <div class="user_info">
            <span>{this.props.name}</span>
            <p></p>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Item));
