import React, { Component } from "react";
import { Link,Redirect,withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";
import Slider from "../Components/Slider";
import Groups from "../Components/Groups";
import Fields from "../Components/Fields";


class Home extends Component {
    render() {
    return (
      <div>
        <Slider />
        <Groups />
        <Fields />
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Home));
