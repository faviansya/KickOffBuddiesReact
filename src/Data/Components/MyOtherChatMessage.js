import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  render() {
    return (
      <div class="d-flex justify-content-start mb-4">
      <div class="img_cont_msg" >
        <img src={this.props.img} class="rounded-circle user_img_msg"/>
      </div>
      <div class="msg_cotainer">
      {this.props.message}
        <span class="msg_time">{this.props.date}</span>
      </div>
    </div>

    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Item));
