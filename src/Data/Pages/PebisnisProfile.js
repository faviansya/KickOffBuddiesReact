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
              </tbody>
            </table>
            <div className="col-lg-3 col-md-3" />
          </div>
          <br />
        </div>
      </section>
    );
  }
}

export default connect(
  "mySelf,Bearer",
  actions
)(withRouter(UserProfile));