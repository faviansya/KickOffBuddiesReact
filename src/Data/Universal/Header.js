import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
            Ini Header
        </header>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Header));
