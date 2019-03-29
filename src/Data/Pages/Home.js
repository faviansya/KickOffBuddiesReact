import React, { Component } from "react";
import { Link,Redirect,withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";

class Home extends Component {
    render() {
    return (
      <div>
        <section class="section-main bg padding-top-sm">
            Ini Home
        </section>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Home));
