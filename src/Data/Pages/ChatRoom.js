import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";
import MyRoom from "../Components/MyChatList";
import { Host } from "../../Host";

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          chatRoomList: [],
          RoomId :"",
        };
      };
    componentDidMount = async () => {
        const self = this;
        const req = {
          method: "get",
          url: Host + "/api/chatplayerlist",
          headers: {
            Authorization: "Bearer " + self.props.Bearer
          }
        };
        await axios(req)
          .then(function(response) {
            self.setState({ chatRoomList: response.data.data });
            console.log("chatplayerlist", response.data.data);
          })
          .catch(function(error) {
            console.log("ASEM", error);
          });
      };

      ChangeRoomsId = (id) =>{
        console.log("IDDDIPAGES",id)
        this.props.ChangeRoom(id)
      }
  render() {
    return (
      <div class="container">
              {this.state.chatRoomList.map((item, key) => {
                console.log("player tok",item.player)
                return (
                  <MyRoom
                    key={key}
                    id={item.room_id}
                    ChangeRoomsId = {this.ChangeRoomsId}
                    pemain = {item.player}
                  />
                );
              })}
      </div>
    );
  }
}

export default connect(
  "Bearer",
  actions
)(withRouter(ChatRoom));
