import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      name: "",
      email: "",
      phoneNumber: "",
      alamat: "",
      favoritSport: "",
      urlimage: "",
      UserData: [],

    };
  }
  componentDidMount = async id => {
    const self = this;
    const getMyData = {
      method: "get",
      url: Host + "/api/pemain/me",
      headers: {
        Authorization: "Bearer " + self.props.Bearer,
        "Content-Type": "application/json"
      }
    };
    await axios(getMyData)
      .then(function(response) {
        self.setState({ UserData: response.data.data });
        self.setState({ password: response.data.data.password });
        self.setState({ name: response.data.data.name });
        self.setState({ email: response.data.data.email });
        self.setState({ urlimage: response.data.data.url_image });
        self.setState({ alamat: response.data.data.address });
        self.setState({ favoritSport: response.data.data.favourite_sport });
        self.setState({ phoneNumber: response.data.data.phone_no });
        // console.log("MySelf", Bearer);
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };
  PostItem = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "put",
      url: Host + "/api/pemain",
      headers: {
        Authorization: "Bearer " + self.props.Bearer,
        "Content-Type": "application/json"
      },
      data: {
        // password: self.state.password,
        name: self.state.name,
        email: self.state.email,
        phone_no: self.state.phoneNumber,
        address: self.state.alamat,
        favourite_sport: self.state.favoritSport,
        url_image: self.state.urlimage
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.GetMyOwnData();
        self.props.history.push("/userprofile");
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

  changePassword = e => {
    this.setState({ password: e.target.value });
  };
  changeName = e => {
    this.setState({ name: e.target.value });
  };
  changeEmail = e => {
    this.setState({ email: e.target.value });
  };
  changephoneNumber = e => {
    this.setState({ phoneNumber: e.target.value });
  };
  changeAlamat = e => {
    this.setState({ alamat: e.target.value });
  };
  changeUrlimage = e => {
    this.setState({ urlimage: e.target.value });
  };
  changefavoritSport = e => {
    this.setState({ favoritSport: e.target.value });
  };

  render() {
    return (
      <div class="card mb-3">
        <section
          class="section-pagetop bg-dark-50"
          style={{
            backgroundImage: `url("https://indodjaja.com/1mages/Banner/foodBanner.jpg")`
          }}
        >
          <div class="container clearfix">
            <strong>
              <h2 class=" text-dark">
                {" "}
                <label style={{ backgroundColor: "greenyellow" }}>
                  Daftar Baru
                </label>
              </h2>
            </strong>
            <h5 class=" text-dark">
              <label style={{ backgroundColor: "greenyellow" }}>
                Isikan Semua Keterangan Anda Dibawah
              </label>
            </h5>
          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="name">Masukkan Nama</label>
              <input
                onChange={e => {
                  this.changeName(e);
                }}
                type="title"
                class="form-control"
                id="name"
                placeholder={this.state.UserData.name}
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="Email">Masukkan Email Anda</label>
              <input
                onChange={e => {
                  this.changeEmail(e);
                }}
                type="title"
                class="form-control"
                placeholder={this.state.UserData.email}
                id="Email"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="Phone">Masukkan Nomor Telepon Anda</label>
              <input
                onChange={e => {
                  this.changephoneNumber(e);
                }}
                type="number"
                class="form-control"
                placeholder={this.state.UserData.phone_no}
                id="Phone"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="Alamat">Masukkan Alamat Anda</label>
              <input
                onChange={e => {
                  this.changeAlamat(e);
                }}
                type="title"
                class="form-control"
                placeholder={this.state.UserData.address}
                id="Alamat"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="urlimage">Masukkan URL Image Anda</label>
              <input
                onChange={e => {
                  this.changeUrlimage(e);
                }}
                type="title"
                class="form-control"
                placeholder={this.state.UserData.url_image}
                id="urlimage"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="favoritSport">Masukkan Olahraga Favorit Anda</label>
              <input
                onChange={e => {
                  this.changefavoritSport(e);
                }}
                type="title"
                class="form-control"
                id="favoritSport"
                placeholder={this.state.UserData.favourite_sport}
                required
              />
            </div>

            <div class="form-group ml-3">
              <button
                onClick={this.PostItem}
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  "Bearer,mySelf",
  actions
)(withRouter(PostItem));
