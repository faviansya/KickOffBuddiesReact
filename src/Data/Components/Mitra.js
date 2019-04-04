import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Mitra extends Component {
  changeLocationMitra = async event => {
    this.props.doClick(event.target.value)
    };

  render() {
    return (
    <div className="radio">
      <label className="container">
        <input type="radio" name="optradio" onClick={e => {this.changeLocationMitra(e)}} value={this.props.name}/>
        <i class="fas fa-volleyball-ball"></i>{" "}
        {this.props.name}
      </label>
    </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Mitra));
