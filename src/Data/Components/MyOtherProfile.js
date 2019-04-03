import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Item extends Component {
  render() {
    return (
      <li>
        <div class="d-flex bd-highlight">
          <div class="img_cont">
            <img
              src="https://www.freshmorningquotes.com/wp-content/uploads/2015/11/cute-and-beautifull-girls-profile-pictures.jpg"
              class="rounded-circle user_img"
            />
          </div>
          <div class="user_info">
            <span>Khadija Mehr</span>
            <p>Khadija left 50 mins ago</p>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Item));
