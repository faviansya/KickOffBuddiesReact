import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Profile from "../Universal/Profile";
import Empty from "../Components/EmptySlot";
import DetailComponent from "../Components/DetailsComponent";

import axios from "axios";
import { Redirect } from "react-router-dom";
import { Host } from "../../Host";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDetails: [],
      listPemain: [],
      status: ""
    };
  }
  GetPlayerList = async ()=>{
    const self = this;
    const req = {
      method: "get",
      url: Host + "/api/playerlist/" + self.props.bookingId,
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ listDetails: response.data.data });
        self.setState({ listPemain: response.data.pemain });
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  }
  componentDidMount = async () => {
    this.GetPlayerList();
  };
  JoinSport = async () => {
    const self = this;
    const reqJoin = {
      method: "post",
      url: Host + "/api/playerlist",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      data: {
        booking_id: this.props.bookingId
      }
    };
    await axios(reqJoin)
      .then(function(response) {})
      .catch(function(error) {
        console.log("ASEM", error);
        self.setState({ status: "failed" });
      });
      this.GetPlayerList();
  };
  cancelLobby= async (id)=> {
    const self = this;
    const DeleteData = {
      method: "delete",
      url: Host + "/api/playerlist/" + id,
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      data: {
        booking_id: this.props.bookingId
      }
    };
     await axios(DeleteData)
      .then(function(response) {
        // console.log("Success");
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
      this.GetPlayerList();
  }

  render() {
    if (this.state.status == "failed") {
      alert("Kamu Telah Join Di Game Ini");
      this.setState({ status: "" });
    }
    return (
      <div onClick={() => {}}>
        <section className="section-topbar border-top padding-y-sm wow slideInUp">
          <div className="container-fluid">
            <span>Player Room</span> {"  "} <br />
            <span className="text-success">Waiting for more players to join</span>
          </div>
        </section>
        <section className="section-content bg padding-y-sm">
          <div className="container-fluid">
            <div className="row wow slideInUp">
              {this.state.listPemain.map((item, key) => {
                const arc_img =
                  item.url_image === null
                    ? "User Not Upload Data"
                    : item.url_image;
                if (item.user_type == "pemain") {
                  return (
                    <Profile
                      key={key}
                      id={item.id}
                      name={item.name}
                      address={item.address}
                      img={arc_img}
                      favourite_sport={item.favourite_sport}
                      ismyself={item.isThisMyself}
                      cancel = {this.cancelLobby}
                      listId = {item.ListId}
                    />
                  );
                } else {
                  return <Empty JoinSport={this.JoinSport} />;
                }
              })}
            </div>
          </div>
        </section>
        <div class="row mt-5 ">
          <DetailComponent />
          <DetailComponent />
          <DetailComponent />
          <DetailComponent />
        </div>
      </div>
    );
  }
}

export default connect(
  "Bearer,bookingId",
  actions
)(withRouter(Details));
