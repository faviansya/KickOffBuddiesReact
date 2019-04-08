import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  render() {
    return (
      <tr>
        <th scope="row">
          <img
            style={{ width: "50px", height: "50px" }}
            src={this.props.pemain_image}
          />
        </th>
        <td>{this.props.pemain_name}</td>
        <td>{this.props.sport}</td>
        <td>{this.props.player_ammount}</td>
        <td>{this.props.locationsss}</td>
        <td>{this.props.time}</td>
      </tr>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Item));
