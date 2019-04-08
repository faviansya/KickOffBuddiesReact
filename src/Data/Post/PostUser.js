import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host";
import { storage } from "../../firebase/index";
import swal from 'sweetalert'
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
      image: null,
      url: "",
      progress: 0
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  PostItem = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "post",
      url: Host + "/api/pemain",
      data: {
        username: self.state.username,
        password: self.state.password,
        name: self.state.name,
        email: self.state.email,
        phone_no: self.state.phoneNumber,
        address: self.state.alamat,
        url_image: self.state.urlimage,
        favourite_sport: self.state.favoritSport
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.Login(self.state.username, self.state.password);
        self.props.history.push("/");
        swal({
          title: "Success",
          text: "You are Signed Up!",
          icon: "success",
        });
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
  changephoneNumber = e => {
    this.setState({ phoneNumber: e.target.value });
  };
  changeAlamat = e => {
    this.setState({ alamat: e.target.value });
  };

  changefavoritSport = e => {
    this.setState({ favoritSport: e.target.value });
  };
  handlechange = e => {
    if (e.target.files[0]) {
      this.state.image = e.target.files[0];
    }
  };

  handleUpload = event => {
    event.preventDefault();
    try {
      const uploadTask = storage
        .ref(`images/${this.state.image.name}`)
        .put(this.state.image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          //progrress Function
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.setState({ progress });
        },
        error => {
          console.log(error);
        },
        () => {
          //Complete Function
          storage
            .ref("images")
            .child(this.state.image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ urlimage: url });
              console.log(this.state.urlimage);
            });
        }
      );
    } catch (err) {
      console.log("File Kosong");
    }
  };

  render() {
    return (
      <div class="card mb-3">
        <section
          class="section-pagetop bg-dark-50"
          style={{
            backgroundImage: `url("https://s3-us-west-1.amazonaws.com/urbanpitch/wp-content/uploads/2018/01/09104139/transfer-stories-slider.jpg")`
          }}
        >
          <div
            class="container clearfix col-lg-6 col-md-6 col-sm-10"
            style={{
              backgroundColor: "peachpuff",
              opacity: "0.75",
              padding: "10px",
              textAlign: "center"
            }}
          >
            <strong>
              <h2 class=" text-dark">
                {" "}
                <label>
                  <strong>Sign Up</strong>
                </label>
              </h2>
            </strong>
            <h5 class=" text-dark">
              <label>Fill in all the required fields below, marked with <span style={{color:"red"}}>*</span>.<br/> 
              You can edit your user profile anytime once you have registered.</label>
            </h5>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-2" />
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="username">Username</label><label style={{color:"red"}}>*</label>
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
              <label for="password">Password</label><label style={{color:"red"}}>*</label>
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
              <label for="Cpassword">Confirm Password</label><label style={{color:"red"}}>*</label>
              <input
                type="password"
                class="form-control"
                id="Cpassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="name">Full Name</label>
              <input
                onChange={e => {
                  this.changeName(e);
                }}
                type="title"
                class="form-control"
                id="name"
                placeholder="Your Full Name"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="Email">Email Address</label>
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
              <label for="Phone">Phone No.</label>
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
              <label for="Alamat">Address</label>
              <input
                onChange={e => {
                  this.changeAlamat(e);
                }}
                type="title"
                class="form-control"
                placeholder="Your Adress"
                id="Alamat"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="urlimage">Choose Your Photo Then Click Upload</label>
              <br />
              <progress value={this.state.progress} max="100" />
              <br />
              <input type="file" onChange={this.handlechange} />
              <br />
              <br />
              <button onClick={this.handleUpload}>Upload</button>
            </div>

            <div class="form-group col-lg-6">
              <label for="favoritSport">Favourite Sport</label>
              <input
                onChange={e => {
                  this.changefavoritSport(e);
                }}
                type="title"
                class="form-control"
                id="favoritSport"
                placeholder="Favorite Sport, e.g. Badminton"
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
  "",
  actions
)(withRouter(PostItem));
