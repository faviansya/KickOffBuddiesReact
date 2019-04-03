import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";
import MyChat from "../Components/MyChatMessage";
import OtherChat from "../Components/MyOtherChatMessage";

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
          console.log(response.data.data);
          self.setState({ ChatData: response.data.data });
        })
        .catch(function(error) {});
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
      .then(function(response) {})
      .catch(function(error) {});
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div class="container">
        <div class="container-fluid h-100">
          <div class="row justify-content-center h-100">
            <div class="col-md-4 col-xl-3 chat">
              <div class="card cardbro mb-sm-3 mb-md-0 contacts_card">
                <div class="card-body contacts_body">
                  <ui class="contacts">
                    <li class="active">
                      <div class="d-flex bd-highlight">
                        <div class="img_cont">
                          <img
                            src={this.props.mySelf.url_image}
                            class="rounded-circle user_img"
                          />
                        </div>
                        <div class="user_info">
                          <span>{this.props.mySelf.name}</span>
                        </div>
                      </div>
                    </li>
                  </ui>
                </div>
                <div class="card-footer" />
              </div>
            </div>
            <div class="col-md-8 col-xl-6 chat">
              <div class="card cardbro">
                <div class="card-header msg_head">
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img
											width="60px"
                        src="http://pngimg.com/uploads/football/football_PNG52789.png"
                        class="rounded-circle user_img"
                      />
                    </div>
                    <div class="user_info">
                      <span>Chat with Group</span>
                    </div>
                  </div>
                </div>
                <div class="card-body msg_card_body">
                  {this.state.ChatData.map((item, key) => {
									if(item.user_id == this.props.mySelf.id){
                    return (
                      <MyChat
                        key={key}
                        message={item.message}
                        name={item.name_user}
                        date={item.time}
                        img={item.url_image}
                      />
										);}
										else{
											return (
											<OtherChat
											key={key}
											message={item.message}
											name={item.name_user}
											date={item.time}
											img={item.url_image}
										/>
										);}
                  })}
                </div>
                <div class="card-footer">
                  <div class="container">
                    <div class="row">
                      <div class="col-10">
                        <form
                          style={{ width: "100%" }}
                          onSubmit={this.sendChatting}
                        >
                          <div class="form-group">
                            <input
                              name="messageUser"
                              class="form-control form-control-lg type_msg"
                              type="text"
                              placeholder="Type your message..."
                            />
                          </div>
                        </form>
                      </div>
                      <div class="col-2" style={{width:"300px"}}>
                        <div class="input-group-append" >
                          <span class="input-group-text send_btn">
                            <i class="fas fa-location-arrow" /> Send
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div class="input-group" >
								<textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
								<div class="input-group-append">
									<span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
								</div>
							</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "Bearer,RoomId,mySelf",
  actions
)(withRouter(ChatRoom));
