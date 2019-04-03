import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import ListPlayer from "./ListPlayerChattingRoom"

class MyBookingComp extends Component {
  ChangeRoomId = () => {
    this.props.ChangeRoomsId(this.props.id);
  };
  render() {
    const players = this.props.pemain
    return (
      <div class="col-12 col-lg-6 col-md-6 mt-5" 
      onClick= {(e) =>{this.ChangeRoomId()}}
      >
      <Link to="/chatting">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">photos</th>
            </tr>
          </thead>
          <tbody>
          {players.map((item, key) => {
                return (
                  <ListPlayer
                    key={key}
                    name = {item.name}
                    image = {item.url_image}
                  />
                );
              })}
          </tbody>
        </table>
        </Link>
      </div>
    );
  }
}
export default connect(
  "",
  actions
)(withRouter(MyBookingComp));
