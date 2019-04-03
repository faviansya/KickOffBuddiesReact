import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class MyBookingComp extends Component {

  render() {
    return (
      <div>

        aaa
      </div>

    );
  }
}
export default connect(
  "",
  actions
)(withRouter(MyBookingComp));
