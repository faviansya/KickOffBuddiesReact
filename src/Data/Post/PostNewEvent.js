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
            <h5 class=" text-white" style={{textShadow:"1px 1px black"}}>Isikan Semua Field Agar Keterangan Player Room Anda Lengkap</h5>

          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="location" style={{color:"#007bff"}}><h4>Olahraga</h4></label>
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
              <label for="player" style={{color:"#007bff"}}><h4>Jumlah Pemain</h4></label>
              <input
                onChange={e => {
                  this.changePlayer(e);
                }}
                type="number"
                class="form-control"
                id="player"
                placeholder="Masukkan Jumlah Pemain"
                required
              />
            </div>

            <div class="form-group col-lg-6">
              <label for="waktu olahraga" style={{color:"#007bff"}}><h4>Waktu Olahraga</h4></label><br/>
              <DatePicker 
                  selected={this.state.calendar}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={60}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                  onChange={e => {this.changeTime(e)}}                  
                  inline
              />
            </div>


            <div class="form-group col-lg-6">
              <label for="waktu olahraga" style={{color:"#007bff"}}><h4>Tempat Olahraga</h4></label><br/>
              <span>Pilih salah satu: mitra kami atau tempat olahraga terdekat</span>
            </div>
            <div class="container">
    <div class="panel-group" id="accordion">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#first">Mitra Kami</a>
                </h4>
            </div>
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
                    <a data-toggle="collapse" data-parent="#accordion" href="#second">Tempat Olahraga Terdekat </a>
                </h4>
            </div>
            <div id="second" class="panel-collapse collapse">
                <div class="panel-body">
                  <div id="mapcanvas">
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
