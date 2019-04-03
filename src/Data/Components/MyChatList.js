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
      <div>
        {/* <table class="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">photos</th>
            </tr>
          </thead>
          <tbody> */}
          <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Location: , Time: </li>
                <li class="list-group-item">
                  <div className="row">
                    {players.map((item, key) => {
                          return (
                            <ListPlayer
                              key={key}
                              name = {item.name}
                              image = {item.url_image}
                            />
                          );
                        })}
                  </div>    
                </li>
                <li class="list-group-item" style={{textAlign:"center"}}>
                  <Link to="/chatting">
                    <button onClick= {(e) =>{this.ChangeRoomId()}} 
                      type="button" class="btn btn-primary"
                    >
                      Join Group Chat
                    </button>
                  </Link>
                </li>
            </ul>
          </div>

          {/* </tbody>
        </table> */}
        
        <br />
        <br/><br/>
      </div>
    );
  }
}
export default connect(
  "",
  actions
)(withRouter(MyBookingComp));
