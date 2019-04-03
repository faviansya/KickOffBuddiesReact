import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";
import MyBookingComp from "../Components/MyBookingComp";
import { Host } from "../../Host";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          listBooking: [],
        //   listPemain: [],
          status:"",
        };
      };
    componentDidMount = async () => {
        const self = this;
        const req = {
          method: "get",
          url: Host + "/api/playerlist/mylist",
          headers: {
            Authorization: "Bearer " + self.props.Bearer
          }
        };
        await axios(req)
          .then(function(response) {
            self.setState({ listBooking: response.data.booking });
          })
          .catch(function(error) {
            console.log("ASEM", error);
          });
      };

  render() {
    return (
      <div class="container">
        <div class="row">
        {this.state.listBooking.map((item, key) => {
                const arc_img =
                  item.url_image === null
                    ? "User Not Upload Data"
                    : item.url_image;
                return (
                  <MyBookingComp 
                  key={key}
                  id={item.id}
                  title={item.sport}
                  player={item.player}
                  img={arc_img}
                  locationing = {item.location}
                  status = {item.status}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

export default connect(
  "Bearer",
  actions
)(withRouter(Home));
