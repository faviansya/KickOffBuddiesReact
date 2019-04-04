import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Url } from "url";

class Notification extends Component {
  render() {
    return (
        <li class="list-group-item">{this.props.message}</li>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Notification));
