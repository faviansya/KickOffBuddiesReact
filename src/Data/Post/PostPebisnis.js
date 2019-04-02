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
      nama_tempat: "",
      email: "",
      phoneNumber: "",
      alamat: "",
      deskripsi: "",
      urlimage: "",
    };
  }

  PostItem = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "post",
      url: Host+"/api/pebisnis",
      data: {
        username: self.state.username,
        password: self.state.password,
        name: self.state.name,
        nama_tempat: self.state.nama_tempat,
        email: self.state.email,
        phone_no: self.state.phoneNumber,
        address: self.state.alamat,
        deskripsi: self.state.deskripsi,
        url_image: self.state.urlimage,
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.LoginPebisnis(self.state.username, self.state.password)
        self.props.history.push("/pebisnisprofile");
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
  changeNamaTempat = e => {
    this.setState({ nama_tempat: e.target.value });
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

  changeDeskripsi = e => {
    this.setState({ deskripsi: e.target.value });
  };

  changeUrlimage = e => {
    this.setState({ urlimage: e.target.value });
  };

  render() {
    return (
      <div class="card mb-3">
        <section class="section-pagetop bg-dark-50" style={{backgroundImage:`url("http://magneum.online/wp-content/uploads/2018/07/CroppedImage1200533-Web7.jpg")`}}>
          <div class="container clearfix col-lg-4 col-md-4 col-sm-10" style={{backgroundColor:"peachpuff", opacity:"0.75", padding:"10px"}}>
            <strong><h2 class=" text-dark" > <label><strong>Daftar Pebisnis Baru</strong></label></h2></strong>
            <h5 class=" text-dark"><label>Isikan Semua Keterangan Anda Dibawah</label></h5>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-2"></div>
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
              <label for="password">Masukkan Password</label>
              <input
                onChange={e => {
                  this.changePassword(e);
                }}
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="Cpassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="Cpassword"
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
                placeholder="Nama Anda"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="name">Masukkan Nama Tempat Bisnis Anda</label>
              <input
                onChange={e => {
                  this.changeNamaTempat(e);
                }}
                type="title"
                class="form-control"
                id="nama_tempat"
                placeholder="Nama tempat bisnis"
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
              <label for="Deskripsi">Masukkan Deskripsi Tempat Anda</label>
              <input
                onChange={e => {
                  this.changeDeskripsi(e);
                }}
                type="title"
                class="form-control"
                placeholder="Deskripsi tempat"
                id="Deskripsi"
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
