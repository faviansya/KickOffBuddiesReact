import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host";
import { storage } from "../../firebase/index";

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
      image: null,
      url: "",
      progress: 0
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  componentDidMount = async id => {
    const Bearer = localStorage.getItem("Bearer");
    const self = this;
    const getMyData = {
      method: "get",
      url: Host + "/api/pemain/me",
      headers: {
        Authorization: "Bearer " + Bearer,
        "Content-Type": "application/json",
        Origin: "https://kickoffbuddies.space/"
      }
    };
    await axios(getMyData)
      .then(function(response) {
        self.setState({ UserData: response.data.data });
        self.setState({ password: response.data.data.password });
        self.setState({ name: response.data.data.name });
        self.setState({ email: response.data.data.email });
        self.setState({ alamat: response.data.data.address });
        self.setState({ favoritSport: response.data.data.favourite_sport });
        self.setState({ phoneNumber: response.data.data.phone_no });
        self.setState({ urlimage: response.data.data.url_image });

      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };
  PostItem = async event => {
    event.preventDefault();
    const Bearer = localStorage.getItem("Bearer");
    const self = this;
    const req = {
      method: "put",
      url: Host + "/api/pemain",
      headers: {
        Authorization: "Bearer " + Bearer,
        "Content-Type": "application/json",
        Origin: "https://kickoffbuddies.space/"
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
            backgroundImage: `url("https://www.water-sports.gr/assets/images/watersports/slider/s/slider-02.jpg")`,
            backgroundPosition: "center"
          }}
        >
          <div
            class="container clearfixcol-lg-6 col-md-6 col-sm-10"
            style={{
              backgroundColor: "peachpuff",
              opacity: "0.75",
              padding: "10px"
            }}
          >
            <strong>
              <h2 class=" text-dark">
                {" "}
                <label>Edit User Profile</label>
              </h2>
            </strong>
            <h5 class=" text-dark">
              <label>Fill in the details that you want to edit about you.</label>
            </h5>
          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="name">Full Name</label>
              <input
                onChange={e => {
                  this.changeName(e);
                }}
                type="title"
                class="form-control"
                id="name"
                placeholder={this.state.UserData.name}
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
                placeholder={this.state.UserData.email}
                id="Email"
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
                placeholder={this.state.UserData.phone_no}
                id="Phone"
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
                placeholder={this.state.UserData.address}
                id="Alamat"
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="urlimage">Profile Picture</label><br/>
              <span>Choose a file (.jpg, .png, .jpeg) from your computer or phone.</span><br/>
              <span>Click upload afterwards.</span><br/>
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
                placeholder={this.state.UserData.favourite_sport}
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
