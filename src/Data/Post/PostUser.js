import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host"

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      email: "",
      phoneNumber: "",
      alamat: "",
      favoritSport: "",
      urlimage: "",
    };
  }

  PostItem = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "post",
      url: Host+"/api/pemain",
      data: {
        username: self.state.username,
        password: self.state.password,
        name: self.state.name,
        email: self.state.email,
        phone_no: self.state.phoneNumber,
        address: self.state.alamat,
        url_image: self.state.urlimage,
        favourite_sport: self.state.favoritSport,
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.Login(self.state.username, self.state.password)
        self.props.history.push("/userprofile");
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

  changeUsername = e => {
    this.setState({ username: e.target.value });
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
  changephoneNumber= e => {
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
        <section class="section-pagetop bg-dark-50" style={{backgroundImage:`url("https://indodjaja.com/1mages/Banner/foodBanner.jpg")`}}>
          <div class="container clearfix" >
            <strong><h2 class=" text-dark" > <label style={{backgroundColor:"greenyellow"}}>Daftar Baru</label></h2></strong>
            <h5 class=" text-dark"><label style={{backgroundColor:"greenyellow"}}>Isikan Semua Keterangan Anda Dibawah</label></h5>

          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="username">Masukkan Username</label>
              <input
                onChange={e => {
                  this.changeUsername(e);
                }}
                type="title"
                class="form-control"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="Url">Masukkan Password</label>
              <input
                onChange={e => {
                  this.changePassword(e);
                }}
                type="password"
                class="form-control"
                id="Url"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="Url">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="Url"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="name">Masukkan Nama</label>
              <input
                onChange={e => {
                  this.changeName(e);
                }}
                type="title"
                class="form-control"
                id="name"
                placeholder="name"
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
                placeholder="Email"
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
                placeholder="Phone"
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
                placeholder="Alamat"
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
                placeholder="Urlimage"
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
                placeholder="favoritSport"
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
  "itemId,Bearer",
  actions
)(withRouter(PostItem));
