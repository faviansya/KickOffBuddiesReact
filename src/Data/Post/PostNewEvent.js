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

const CurrentLocation = ({text}) => <div className="row"><span style={{color:"red", fontWeight:"800", fontSize:"15px"}}>{text}</span>
<img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" 
style={{height:"35px", width:"30px"}}
/></div>;
class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: "",
      player: 1,
      time: null,
      location: "",
      destination: "",
      place: "",
      lat: "",
      lng:"",
      ip:"",
      listTempat:[],
      calendar:"",
      listLapangan:[],
      compound:"",
      map:"",
      maps:"",
      polyline:"",
      distance:"",
      duration:"",
      vicinity:"",
      fee: "",
      hargaBooking: 0,
      hargaPerOrang: 0
    };
  }

  apiIsLoaded = (map,maps) => {
    const directionsService = new (this.state.maps).DirectionsService();
    const directionsDisplay = new (this.state.maps).DirectionsRenderer();
    directionsService.route({
      origin: this.state.compound,
      destination: this.state.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        console.log(response.routes, 'Ruta')
        this.setState({ distance: response.routes[0].legs[0].distance.text });
        this.setState({ duration: response.routes[0].legs[0].duration.text });
        console.log(response.routes[0].legs[0].distance.text)
        console.log(response.routes[0].legs[0].duration.text)

        const routePolyline = new (this.state.maps).Polyline({
          path: response.routes[0].overview_path
        });
        if (this.state.polyline === ""){
        
        this.setState({ polyline: routePolyline });
        (this.state.polyline).setMap((this.state.map))}
        else{(this.state.polyline).setMap(null)
          this.setState({ polyline: routePolyline });
        (this.state.polyline).setMap((this.state.map))};
      }
      });
};

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
        mapTypeId: maps.MapTypeId.ROADMAP,
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
      const req2 = {
        method: "post",
        url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBpO1EGv2m99cpTOqshMRP8Rq0xDBE7nTU",
        data: {
          considerIp: true
        }
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
      const req4 = {
        method: "get",
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + this.state.lat + "," + this.state.lng + "&key=AIzaSyBpO1EGv2m99cpTOqshMRP8Rq0xDBE7nTU"
      };
    await axios(req4)
    .then(function(response) {
      self.setState({ compound: response.data.plus_code.compound_code });
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
        compound: self.state.destination,
        vicinity: self.state.vicinity,
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.history.push("/userprofile");
      })
      .catch(function(error) {
        alert("please Fill All Field")
        console.log("ASEM", error);
      });
  };

  changeOlagraga = async e => {
    const self = this
    this.setState({ sport: e.target.value });

    if (e.target.value === "Badminton") {
      this.setState({ 
        fee: "40.000,-",
        hargaBooking: 40000,
        hargaPerOrang: 40000 / this.state.player
       });
    } else if (e.target.value === "Futsal") {
      this.setState({ 
        fee: "110.000,-",
        hargaBooking: 110000,
        hargaPerOrang: 110000 / this.state.player
      });
    } else if (e.target.value === "Basketball") {
      this.setState({ 
        fee: "60.000,-",
        hargaBooking: 60000,
        hargaPerOrang: 60000 / this.state.player
      });   
    } else if (e.target.value === "Tennis") {
      this.setState({ 
        fee: "70.000,-",
        hargaBooking: 70000,
        hargaPerOrang: 70000 / this.state.player
      });
    }

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
    this.setState({ player: e.target.value  });
    if (e.target.value < 1) {
      this.setState({ hargaPerOrang: this.state.hargaBooking });
    } else {
      this.setState({ hargaPerOrang: this.state.hargaBooking / e.target.value });
    }
  };

  changeTime = date => {
    console.log(date)
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
  changeLocation = (namatempat,lokasi,vicinity) => {
    this.setState({ location: lokasi });
    this.setState({ destination: namatempat });
    this.setState({ vicinity: vicinity });
  };
  changeLocationMitra = e => {
    this.setState({ location: e });
  };
  setMap = (map, maps) => {
    this.setState({ map: map });
    this.setState({ maps: maps });
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
            <div className="row">
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
                <option>Badminton</option>
                <option>Basketball</option>
                <option>Futsal</option>
                <option>Tennis</option>
              </select>
            
            <div class="form-group"><br/>
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

            <div class="form-group">
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
                  minTime={new Date().setHours(7)}
                  maxTime={new Date().setHours(21)}
              />
            </div>
            <div class="form-group">
              <label for="booking fee" style={{color:"#007bff", marginRight:"20px"}}><h4>Total booking fee</h4></label>
              <span>{" "}Rp {this.state.fee} /court /hour</span><br/>
              <label for="booking fee" style={{color:"#007bff", marginRight:"20px"}}><h4>Booking fee per person</h4></label>
              <span>{" "}Rp {this.state.hargaPerOrang},- /court /hour</span>
            </div><br/><br/>
              <button
                  onClick={this.PostItem}
                  type="submit"
                  class="btn btn-primary d-none d-lg-block"
                  style={{marginLeft:"450px"}}
                >
                  Submit
                </button>
            </div>

            <div class="form-group col-lg-6">
              <label for="waktu olahraga" style={{color:"#007bff"}}><h4>{" "}Sport Venue</h4></label><br/>
              <span>Click below to choose which sport venue you want to play at.</span><br />
              <span>Zoom out to see more choices, zoom in to see detailed vanue.</span><br /><br/>
            <div class="container">
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
            <div id="first" class="panel-collapse collapse in">
                <div class="panel-body">
                {this.state.listLapangan.map((item, key) => {
                    return (
                  <Mitra key={key} doClick={this.changeLocationMitra} name={item.nama_tempat} />
                  )
                })}
                </div>
            </div>
                </div>
        <div id="map-acc" class="panel panel-default">
                  <div id="mapcanvas" style={{ height: '350px', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBpO1EGv2m99cpTOqshMRP8Rq0xDBE7nTU" }}
                    center={center}
                    defaultZoom={15}
                    options={this.getMapOptions}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) => this.setMap(map, maps)}
                  >
                  <CurrentLocation
                    lat={this.state.lat}
                    lng={this.state.lng}
                    text="You're here"
                  />
                  {this.state.listTempat.map((item, key) => {
                    return (
                  <Map key={key} doClick={this.changeLocation} doClick2={this.apiIsLoaded} lat={item.geometry.location.lat} lng={item.geometry.location.lng} name={item.name} address={item.plus_code.compound_code} vicinity={item.vicinity} sport={this.state.sport}/>
                  )
                })}
                </GoogleMapReact>
                  </div>
                <div>
                  <span style={{paddingRight:"40px"}}>Distance: {this.state.distance}</span>
                  <span className="ml-5">Duration: {this.state.duration} </span><span> by driving</span>
                </div>
                <br/><br/>
        </div>        
    </div>
</div>
</div>



      <div class="form-group ml-3">
            <br /><br />
            <br /><br />
            <br /><br />
            <button
                  onClick={this.PostItem}
                  type="submit"
                  class="btn btn-primary d-block d-lg-none"
                >
                  Submit
                </button>
            </div>
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
