import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";
import ModelMessage from "../Components/ChatMessage";
import { Host } from "../../Host";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChatData: []
    };
  }
  componentDidMount = async () => {
    this.interval = setInterval(() => {

    const self = this;
    const req = {
      method: "get",
      url: Host + "/api/chat",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      params: {
        Room_id: self.props.RoomId
      }
    };
     axios(req)
      .then(function(response) {
        self.setState({ ChatData: response.data.data });
      })
      .catch(function(error) {
      });
    }, 1000);
  };

  sendChatting = async event => {

    event.preventDefault();
    const self = this;
    const req = {
      method: "post",
      url: Host + "/api/chat",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      params: {
        room_id: self.props.RoomId,
        message: event.target.messageUser.value
      }
    };
    await axios(req)
      .then(function(response) {
      })
      .catch(function(error) {
      });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div class="container">
        {this.state.ChatData.map((item, key) => {
          return (
            <ModelMessage
              key={key}
              message={item.message}
              name={item.name_user}
              date={item.time}
            />
          );
        })}
        <form onSubmit={this.sendChatting}>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Chat Here</label>
            <input
              name="messageUser"
              class="form-control form-control-lg"
              type="text"
              placeholder=".form-control-lg"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  "Bearer,RoomId",
  actions
)(withRouter(ChatRoom));
