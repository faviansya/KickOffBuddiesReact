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
        console.log(response.data)
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
      console.log(response.data)
    })
    .catch(function(error) {
      console.log("ASEM", error);
    });
  };

  PostItem = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "post",
      url: Host+"/api/booking",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
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
        console.log(response.data)
        // self.setState({ listPemain: response.data.pemain });
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

  render() {
    const center = {lat: this.state.lat, lng: this.state.lng}
    return (
      <div class="card mb-3">
        <section class="section-pagetop bg-dark-50">
          <div class="container clearfix">
            <strong><h2 class=" text-white">Create a New Player Room</h2></strong>
            <h5 class=" text-white">Isikan Semua Field Agar Keterangan Player Room Anda Lengkap</h5>

          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="location">Olahraga</label>
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
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="player">Jumlah Pemain</label>
              <input
                onChange={e => {
                  this.changePlayer(e);
                }}
                type="number"
                class="form-control"
                id="player"
                placeholder="Masukkan Jumlah Player"
                required
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="location">Waktu Olahraga</label>
              <select
                onChange={e => {
                  this.changeTime(e);
                }}
                class="form-control form-control-sm"
                placeholder="Masukkan time"
                id="time"
              >
                <option disabled selected value>Waktu</option>
                <option>Pagi</option>
                <option>Sore</option>
              </select>
            </div>
            {/* <div class="form-group col-lg-6">
              <label for="location">Location</label>
              <select
                onChange={e => {
                  this.changeLocation(e);
                }}
                class="form-control form-control-sm"
                placeholder="Masukkan location"
                id="location"
              >
                <option disabled selected value>Pilih Location</option>
                <option>Gresik</option>
                <option>Malang</option>
                <option>Surabaya</option>
              </select>
            </div> */}
            <div class="form-group col-lg-6 col-md-6 col-sm-12" style={{ height: '500px', width: '100%' }}>
            <label for="location">Location</label>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB3GHH--AbFb9XDA16VX56gMUjQYSKlviQ" }}
          center={center}
          defaultZoom={this.state.zoom}
        >
        <CurrentLocation
    lat={this.state.lat}
    lng={this.state.lng}
    text="You're here"
        />
        {this.state.listTempat.map((item, key) => {
          return (
        <Map key={key} doClick={this.changeLocation} lat={item.geometry.location.lat} lng={item.geometry.location.lng} name={item.name}/>
        )
      })}
        </GoogleMapReact>
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
  "itemId,Bearer",
  actions
)(withRouter(PostItem));
