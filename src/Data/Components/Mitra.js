import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Mitra extends Component {
  changeLocationMitra = async event => {
    console.log(event.target.value)
    this.props.doClick(event.target.value)
    };

  render() {
    return (
    <label class="container"> {" "}{this.props.name}
        <input type="radio" name="radio" onClick={e => {this.changeLocationMitra(e)}} value={this.props.name}/>
        <span class="checkmark"></span>
    </label>    
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Mitra));
