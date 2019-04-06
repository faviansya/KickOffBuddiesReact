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
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Mitra from '../Components/Mitra'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

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
      listTempat:[],
      calendar:"",
      listLapangan:[],
    };
  }

  getMapOptions = (maps: Maps) => {

    return {
        streetViewControl: true,
        scaleControl: true,
        fullscreenControl: true,
        styles: [{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }],
        gestureHandling: "greedy",
        disableDoubleClickZoom: false,
        minZoom: 10,
        maxZoom: 20,

        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: maps.ControlPosition.BOTTOM_CENTER,
            mapTypeIds: [
                maps.MapTypeId.ROADMAP,
                maps.MapTypeId.SATELLITE,
                maps.MapTypeId.HYBRID
            ]
        },

        zoomControl: true,
        clickableIcons: false
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
    const req3 = {
      method: "get",
      url: Host+ "/api/pebisnis",
      headers: {
        "Content-Type":"application/json",
      }
    };
    await axios(req3)
      .then(function(response) {
        self.setState({ listLapangan: response.data.data });
      })
      .catch(function(error) {
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
  changeTime = date => {
    var string = JSON.stringify(date);
    var realdate = string.split(" ")
    var Tanggal = realdate[0].split("T")
    var Jam = Tanggal[1].split(".")
    var TanggalFix = Tanggal[0].replace('"2','2');
    var JamGMT = Jam[0].split(":")
    var JamFix = Number(JamGMT[0]) + 7
    if (JamFix > 24) {
      JamFix = JamFix -24;
  } else {
      JamFix  = JamFix;
  }
    var JamSTR = JamFix.toString()
    var JamWIB = JamSTR + ":00:00"
    var DateFix = TanggalFix + ' ' + JamWIB

    this.setState({ time: DateFix, calendar: date });
  };
  changeLocation = e => {
    this.setState({ location: e });

  };
  changeLocationMitra = e => {
    this.setState({ location: e });
  };

  render() {
    const center = {lat: this.state.lat, lng: this.state.lng}
    return (
      <div class="card mb-3">
        <section class="section-pagetop bg-dark-50" style={{backgroundImage:`url("https://www.sportslaw.org/images/SliderImg-04.jpg")`,  backgroundPosition:"center"}}>
          <div class="container clearfix">
            <strong><h2 class=" text-white">Create a New Player Room</h2></strong>
            <h5 class=" text-white" style={{textShadow:"1px 1px black"}}>Fill all the required fields so that your player room will be complete.</h5>

          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="location" style={{color:"#007bff"}}><h4>Sport</h4></label>
              <select
                onChange={e => {
                  this.changeOlagraga(e);
                }}
                class="form-control form-control-sm"
                placeholder="Masukkan sport Item"
                id="sport"
              >
                <option disabled selected value>Choose a sport</option>
                <option>badminton</option>
                <option>basketball</option>
                <option>futsal</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="player" style={{color:"#007bff"}}><h4>Number of players</h4></label>
              <input
                onChange={e => {
                  this.changePlayer(e);
                }}
                type="number"
                class="form-control"
                id="player"
                placeholder="How many players you want to play with, including you."
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="waktu olahraga" style={{color:"#007bff"}}><h4>Intended Time to Play</h4></label><br/>
              <DatePicker 
                  selected={this.state.calendar}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={60}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                  onChange={e => {this.changeTime(e)}}                  
                  inline
                  minDate={Date.now()}
              />
            </div>


            <div class="form-group col-lg-6">
              <label for="waktu olahraga" style={{color:"#007bff"}}><h4>Sport Venue</h4></label><br/>
              <span>Click below to choose which sport venue you want to play at.</span><br />
              <span>Zoom out to see more choices, zoom in to see detailed vanue.</span><br /><br/>
            <div class="container">
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
            <div id="first" class="panel-collapse collapse in">
                <div class="panel-body">
                {this.state.listLapangan.map((item, key) => {
                    return (
                  <Mitra key={key} doClick={this.changeLocationMitra} name={item.nama_tempat}/>
                  )
                })}
                </div>
            </div>
                </div>
        <div id="map-acc" class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#second">Sport Venue </a>
                </h4>
            </div>
            <div id="second" class="panel-collapse collapse">
                <div class="panel-body">
                  <div id="mapcanvas" style={{ height: '500px', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB3GHH--AbFb9XDA16VX56gMUjQYSKlviQ" }}
                    center={center}
                    defaultZoom={this.state.zoom}
                    options={this.getMapOptions}
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
                </div>
            </div>
        </div>        
    </div>
</div>
</div>


        
      <div class="form-group ml-3">
            <br /><br />
            <br /><br />
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
