import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class MyBookingComp extends Component {

  render() {
    return (
            // <tr>
            //   <th scope="row">1</th>
            //   <td>{this.props.name}</td>
            //   <td>
    
                <div className="col-lg-3 col-md-3 col-sm-6" style={{textAlign:"center"}}>
                  <img
                    src={this.props.image}
                    alt="barbarian"
                    width= "130px"
                    height= "130px"
                    style={{borderRadius:"50%"}}  
                  /><br />
                  <span >{this.props.name}</span>
            </div>

            // </td>
            // </tr>
    );
  }
}
export default connect(
  "",
  actions
)(withRouter(MyBookingComp));
