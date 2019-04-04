import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host"
import Map from '../Components/Map'
import GoogleMapReact from 'google-map-react';


const CurrentLocation = ({text}) => <div className="row"><span>{text}</span><i class="fas fa-street-view fa-2x"></i></div>;
class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: "",
      player: "",
      time: "",
      location: "",
      place: "",
      zoom: 15,
      lat: "",
      lng:"",
      ip:"",
      listTempat:[]
    };
  }

  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: "https://api.ipify.org?format=json",
    };  
    await axios(req)
      .then(function(response) {
        self.setState({ ip: response.data.ip });
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
      const req2 = {
        method: "get",
        url: "https://geo.ipify.org/api/v1?apiKey=at_NxTdI2m8QOkqkhKkzgYgKCeqled3Q&ipAddress=" + this.state.ip,
      };
    await axios(req2)
    .then(function(response) {
      self.setState({ lat: response.data.location.lat,
                      lng: response.data.location.lng
       });
    })
    .catch(function(error) {
      console.log("ASEM", error);
    });
  };

  PostItem = async event => {
    event.preventDefault();
    const Bearer = localStorage.getItem("Bearer")
    const self = this;
    const req = {
      method: "post",
      url: Host+"/api/booking",
      headers: {
        Authorization: "Bearer " + Bearer
      },
      data: {
        sport: self.state.sport,
        player: self.state.player,
        time: self.state.time,
        location: self.state.location,
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.history.push("/userprofile");
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

  changeOlagraga = async e => {
    const self = this
    this.setState({ sport: e.target.value });
    const req3 = {
      method: "get",
      url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.state.lat+","+this.state.lng+"&radius=3000&keyword="+e.target.value+"&key=AIzaSyB3GHH--AbFb9XDA16VX56gMUjQYSKlviQ",
      headers: {
        Origin: "https://maps.googleapis.com/",}
    };
    await axios(req3)
      .then(function(response) {
        self.setState({ listTempat: response.data.results });
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };
  changePlayer = e => {
    this.setState({ player: e.target.value });
  };
  changeTime = e => {
    this.setState({ time: e.target.value });
  };
  changeLocation = e => {
    this.setState({ location: e });

  };
  changeUrlimage = e => {
    this.setState({ urlimage: e.target.value });
  };

  render() {
    const center = {lat: this.state.lat, lng: this.state.lng}
    return (
      <div class="card mb-3">
        <section class="section-pagetop" style={{backgroundImage:"url(https://lefkosiabadmintonclub.com/wp-content/uploads/2017/07/header-slider-02.png)"}}>
          <div class="container clearfix col-lg-6 col-md-6 col-sm-10" style={{backgroundColor:"peachpuff", opacity:"0.75", padding:"10px"}}>
            <strong><h2 class=" text-black">Post a New Field</h2></strong>
            <h5 class=" text-black">Isikan Semua Field Agar Keterangan lapangan Anda Lengkap</h5>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-2"></div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="location">Lapangan Olahraga</label>
              <select
                onChange={e => {
                  this.changeOlagraga(e);
                }}
                class="form-control form-control-sm"
                placeholder="Masukkan sport Item"
                id="sport"
              >
                <option disabled selected value>Pilih Olahraga</option>
                <option>badminton</option>
                <option>basketball</option>
                <option>futsal</option>
                <option>ping-pong</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="player">Gambar Lapangan</label><br />
              <input
                onChange={e => {
                  this.changeUrlimage(e);
                }}
                type="title"
                class="form-control"
                placeholder="Url image"
                id="urlimage"
                required
                />
            </div>

      <div class="form-group ml-3">
            <br />
            <br />
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
  "Bearer",
  actions
)(withRouter(PostItem));
