import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class MyBookingComp extends Component {

  render() {
    return (
                <div className="col-12 col-lg-4 col-md-6" style={{textAlign:"center"}}>
                  <img
                    src={this.props.image}
                    alt="barbarian"
                    width= "130px"
                    height= "130px"
                    style={{borderRadius:"50%"}}  
                  /><br />
                  <span >{this.props.name}</span>
            </div>
    );
  }
}
export default connect(
  "",
  actions
)(withRouter(MyBookingComp));
