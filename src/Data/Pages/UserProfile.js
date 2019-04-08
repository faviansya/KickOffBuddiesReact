import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host";
import { Redirect } from "react-router-dom";
import ListData from "../Components/MyAcceptList";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListDatas: []
    };
  }
  componentDidMount = async () => {
    const Bearer = localStorage.getItem("Bearer")
    const mySelf = JSON.parse(localStorage.getItem("mySelf"))
    const self = this;
    const req = {
      method: "get",
      url: Host + "/api/acceptbooking/" + mySelf.id,
      headers: {
        Authorization: "Bearer " + Bearer,
        Origin: "https://kickoffbuddies.space/"
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ ListDatas: response.data.data });
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };
  render() {
    const mySelf = JSON.parse(localStorage.getItem("mySelf"))
    return (
      <section>
        <div className="container">
          <h4 style={{ textAlign: "center" }}>{mySelf.name}</h4>
          <br />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{textAlign:"center"}}>
              <img
                alt="User Pic"
                src={mySelf.url_image}
                id="profile-image1"
                className="img-circle img-responsive center"
                style={{ height: "150px", width: "150px", borderRadius: "50%"}}
              />
              </div>
              <table
                className="center table table-striped col-lg-6 col-md-6 col-sm-12"
                style={{ marginTop: "50px" }}
              >
                <tbody className="text-center">
                  <tr>
                    <td>Username</td>
                    <td>{mySelf.username}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{mySelf.address}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{mySelf.phone_no}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{mySelf.email}</td>
                  </tr>
                  <tr>
                    <td>Favorite Sport</td>
                    <td>{mySelf.favourite_sport}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div class="card">
                <div class="card-body">Current Booking.</div>
                <a
                  class="btn btn-primary"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  
                >
                  Show Table
                </a>
                <table class="table collapse" id="collapseExample" style={{overflow:"hidden"}}>
                  {this.state.ListDatas.map((item, key) => {
                    const arc_img =
                      item.url_image === null
                        ? "User Not Upload Data"
                        : item.url_image;
                    if (item.marker == 1) {
                      return (
                        <tbody class="mt-5">
                          <tr class="thead-dark">
                            <th scope="col">Player</th>
                            <th scope="col">Name</th>
                            <th scope="col">Sport</th>
                            <th scope="col">Player</th>
                            <th scope="col">Location</th>
                            <th scope="col">Time</th>
                          </tr>
                          <ListData
                            key={key}
                            locationsss={item.booking_location}
                            pemain_name={item.pemain_name}
                            pemain_image={item.pemain_url_image}
                            player_ammount={item.player_amount}
                            sport={item.sport}
                            sport_image={item.sport_image}
                            time={item.time}
                          />
                        </tbody>
                      );
                    } else {
                      return (
                        <tbody>
                          <ListData
                            key={key}
                            locationsss={item.booking_location}
                            pemain_name={item.pemain_name}
                            pemain_image={item.pemain_url_image}
                            player_ammount={item.player_amount}
                            sport={item.sport}
                            sport_image={item.sport_image}
                          />
                        </tbody>
                      );
                    }
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  "mySelf,Bearer",
  actions
)(withRouter(UserProfile));