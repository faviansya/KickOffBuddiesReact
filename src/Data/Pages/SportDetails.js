import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Profile from "../Universal/Profile";
import Empty from "../Components/EmptySlot";
// import DetailComponent from "../Components/DetailsComponent";
import DetailsLocation from "../Components/DetailsLocation";
import DetailsTime from "../Components/DetailsTime";

import axios from "axios";
import { Redirect } from "react-router-dom";
import { Host } from "../../Host";
import DetailsJumlahPemain from "../Components/DetailsJumlahPemain";
import DetailsOlahRaga from "../Components/DetailsOlahRaga";
import GoogleMapReact from 'google-map-react';
import swal from 'sweetalert'
const CurrentLocation = ({text}) => <div className="row"><span style={{color:"red", fontWeight:"800", fontSize:"13px"}}>{text}</span>
<img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" 
style={{height:"30px", width:"25px"}}
/></div>;
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDetails: [],
      listPemain: [],
      status: "",
      destination: "",
      compound: "",
      lat: "",
      lng: "",
      lat_tujuan: "",
      lng_tujuan: "",
      vicinity: "",
      loading:false,
      distance:"",
      duration:"",
    };
  }

  apiIsLoaded = (map,maps) => {
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();
    directionsService.route({
      origin: this.state.compound,
      destination: this.state.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        console.log(response, 'ANJENG')
        this.setState({ distance: response.routes[0].legs[0].distance.text });
        this.setState({ duration: response.routes[0].legs[0].duration.text });
        const routePolyline = new maps.Polyline({
          path: response.routes[0].overview_path
        });
        routePolyline.setMap(map)
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

  GetPlayerList = async ()=>{
    const Bearer = localStorage.getItem("Bearer")
    const self = this;
    const req = {
      method: "get",
      url: Host + "/api/playerlist/" + self.props.bookingId,
      headers: {
        Authorization: "Bearer " + Bearer
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ listPemain: response.data.pemain });
      })
      .catch(function(error) {
        swal({
          title: "Info",
          text: "Room Deleted",
          icon: "info",
        });        
        self.props.history.push("/");
        console.log("ASEM", error);
      });
      const req2 = {
        method: "get",
        url: Host + "/api/booking/" + self.props.bookingId,
        headers: {
          Authorization: "Bearer " + Bearer
        }
      };
      await axios(req2)
      .then(function(response) {
        self.setState({ listDetails: response.data.data });
        self.setState({ destination: response.data.data.compound });
        self.setState({ vicinity: response.data.data.vicinity });
      })
      .catch(function(error) {
        swal({
          title: "Info",
          text: "Room Deleted",
          icon: "info",
        });        
        self.props.history.push("/");
        console.log("ASEM", error);
      });
  }
  componentDidMount = async () => {
    const self = this;
    await self.GetPlayerList();
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
    const req3 = {
      method: "get",
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.listDetails.location + ", " + this.state.vicinity + "&key=AIzaSyBpO1EGv2m99cpTOqshMRP8Rq0xDBE7nTU"
    };
  await axios(req3)
  .then(function(response) {
    self.setState({ lat_tujuan: response.data.results[0].geometry.location.lat });
    self.setState({ lng_tujuan: response.data.results[0].geometry.location.lng });
  })
  .catch(function(error) {
    console.log("ASEM", error);
  });
  };
  JoinSport = async () => {
    this.setState({loading:true})
    const Bearer = localStorage.getItem("Bearer")
    const self = this;
    const reqJoin = {
      method: "post",
      url: Host + "/api/playerlist",
      headers: {
        Authorization: "Bearer " + Bearer
      },
      data: {
        booking_id: self.props.bookingId
      }
    };
    await axios(reqJoin)
      .then(function(response) {
        self.setState({loading:false})
        swal({
          title: "Success",
          text: "You are successfully join this room",
          icon: "success",
        });
      })
      .catch(function(error) {
        console.log("ASEM", error);
        self.setState({ status: "failed" });
        self.setState({loading:false})
      });
      self.GetPlayerList();
      self.setState({loading:false})
  };
  cancelLobby= async (id)=> {
    const Bearer = localStorage.getItem("Bearer")
    const self = this;
    const DeleteData = {
      method: "delete",
      url: Host + "/api/playerlist/" + id,
      headers: {
        Authorization: "Bearer " + Bearer
      },
      data: {
        booking_id: self.props.bookingId
      }
    };
     await axios(DeleteData)
      .then(function(response) {
        swal({
          title: "Cancel",
          text: "Booking cancelled",
          icon: "info",
        });
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
      this.GetPlayerList();
  }

  render() {
    const center = {lat: this.state.lat, lng: this.state.lng}
    if (this.state.status == "failed") {
      swal({
        title: "Warning",
        text: "Already joined this room",
        icon: "warning",
      });;
      this.setState({ status: "" });
      this.setState({loading:false})
    }
    const Maps = 
    <div id="mapcanvas" style={{ height: '500px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBpO1EGv2m99cpTOqshMRP8Rq0xDBE7nTU" }}
      center={center}
      defaultZoom={15}
      options={this.getMapOptions}
      yesIWantToUseGoogleMapApiInternals={true}
      onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}
    >
    <CurrentLocation
      lat={this.state.lat}
      lng={this.state.lng}
      text="You're here"
    />
    <div className="row" lat={this.state.lat_tujuan} lng={this.state.lng_tujuan}>
      <span style={{color:"red", fontWeight:"800", fontSize:"13px"}}>{this.state.listDetails.location}</span>
      <img src="http://www.newdesignfile.com/postpic/2012/01/red-flag-icon_252146.png" style={{height:"30px", width:"25px"}}/>
      </div>
  </GoogleMapReact>
    </div>
    return (
      <div onClick={() => {}}>
        <section className="section-topbar border-top padding-y-sm wow slideInUp" style={{textAlign:"center"}}>
          <div className="container-fluid">
            <h5>Player Room</h5> {"  "}
            <span style={{color:"rgb(51, 132, 159)"}}><strong>Waiting for more players to join</strong></span>
          </div>
        </section>
        <div class="row ">
          <DetailsOlahRaga  sport={this.state.listDetails.sport} />          
          <DetailsLocation map={Maps} DetailsLocation={this.state.listDetails.location} 
                distance = {this.state.distance}
                duration = {this.state.duration}
          />
          <DetailsTime time={this.state.listDetails.time}/>
          <DetailsJumlahPemain player={this.state.listDetails.player}/>
        </div>
        <section className="section-content bg padding-y-sm">
          <div className="container-fluid">
            <div className="row wow slideInUp">
              {this.state.listPemain.map((item, key) => {
                const arc_img =
                  item.url_image === null
                    ? "User Not Upload Data"
                    : item.url_image;
                if (item.user_type == "pemain") {
                  return (
                    <Profile
                      key={key}
                      id={item.id}
                      name={item.name}
                      address={item.address}
                      img={arc_img}
                      favourite_sport={item.favourite_sport}
                      ismyself={item.isThisMyself}
                      cancel = {this.cancelLobby}
                      listId = {item.ListId}
                    />
                  );
                } else {
                  return <Empty JoinSport={this.JoinSport} loading={this.state.loading} />;
                }
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  "Bearer,bookingId",
  actions
)(withRouter(Details));
