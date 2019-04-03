import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class MyBookingComp extends Component {

  render() {
    return (
            <tr>
              <th scope="row">1</th>
              <td>{this.props.name}</td>
              <td>
                <img
                  src={this.props.image}
                  alt="barbarian"
                  width= "30px"
                  height= "30px"
                />
                </td>
            </tr>
    );
  }
}
export default connect(
  "",
  actions
)(withRouter(MyBookingComp));
