import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  fixDate = ()=>{
    const fixedDate = this.props.date.split(".")
    return fixedDate[0]
  }
  render() {
    return (
      <div class="d-flex justify-content-start mb-4">
      <div class="img_cont_msg" >
        <img src={this.props.img} class="rounded-circle user_img_msg"/>
      </div>
      <div class="msg_cotainer">
      {this.props.message}
        <span class="msg_time">{this.fixDate()}</span>
      </div>
    </div>

    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Item));
