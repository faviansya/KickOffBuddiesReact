import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Host } from "../../Host";
import ListData from "../Components/MyAcceptList";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListDatas: []
    };
  }
  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: Host + "/api/acceptbooking/" + self.props.mySelf.id,
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ ListDatas: response.data.data });
        console.log("Responn", response.data.data);
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };
  render() {
    return (
      <section>
        <div className="container">
          <h4 style={{ textAlign: "center" }}>{this.props.mySelf.name}</h4>
          <br />
          <div className="row">
            <img
              alt="User Pic"
              src={this.props.mySelf.url_image}
              id="profile-image1"
              className="img-circle img-responsive center"
              style={{ height: "300px", width: "300", borderRadius: "50%" }}
            />
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3" />
            <table
              className="center table table-striped col-lg-6 col-md-6 col-sm-12"
              style={{ marginTop: "50px" }}
            >
              <tbody className="text-center">
                <tr>
                  <td>Username</td>
                  <td>{this.props.mySelf.username}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{this.props.mySelf.address}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{this.props.mySelf.phone_no}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.props.mySelf.email}</td>
                </tr>
                <tr>
                  <td>Favorite Sport</td>
                  <td>{this.props.mySelf.favourite_sport}</td>
                </tr>
              </tbody>
            </table>
            <div className="col-lg-3 col-md-3" />
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div class="card">
                <div class="card-body">Booking History.</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
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
                <table class="table collapse" id="collapseExample">
                  {this.state.ListDatas.map((item, key) => {
                    const arc_img =
                      item.url_image === null
                        ? "User Not Upload Data"
                        : item.url_image;
                    if (item.marker == 1) {
                      return (
                        <tbody class="mt-5">
                          <tr class="thead-dark">
                            <th scope="col">Images</th>
                            <th scope="col">Name</th>
                            <th scope="col">Sport</th>
                            <th scope="col">Player</th>
                            <th scope="col">Location</th>
                          </tr>
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

{
  /* <div className="container">    
<div className="row">
    <div className="panel panel-default">
    <div className="panel-heading">  <h4 >User Profile</h4></div>
    <div className="panel-body">
    <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
    <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive"/> 


    </div>
    <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8" >
        <div className="container" >
        <h2>John Doe</h2>
        <p>an   <b> Employee</b></p>
        
        
        </div>
        <hr />
        <ul className="container details" >
        <li><p><span className="glyphicon glyphicon-user one" style={{width:"50px"}}></span>i.rudberg</p></li>
        <li><p><span className="glyphicon glyphicon-envelope one" style={{width:"50px"}}></span>somerandom@email.com</p></li>
        </ul>
        <hr />
        <div className="col-sm-5 col-xs-6 tital " >Date Of Joining: 15 Jun 2016</div>
    </div>
    </div>
    </div>
</div>
</div> */
}
