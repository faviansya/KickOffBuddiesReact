import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item"><a href="javascript:void();"><i className="fab fa-facebook"></i></a></li>
              <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-instagram"></i></a></li>
              <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-google-plus"></i></a></li>
              <li class="list-inline-item"><a href="javascript:void();" ><i class="fa fa-envelope"></i></a></li>
            </ul>
          </div>
          <hr/>
        </div>	
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p><u><a href="https://www.nationaltransaction.com/">Super Kick Off buddies</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
            <p class="h6">&copy All right Reversed.<a class="text-green ml-2" href="https://www.kickoffbuddies.com" target="_blank">Kick Off Buddies</a></p>
          </div>
          <hr/>
        </div>	
      </div>
    </section>
      );
  }
}

export default connect(
  "",
  actions
)(withRouter(Footer));
