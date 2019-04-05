import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link,Redirect,withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";

const AnyReactComponent = ({text}) => <div className="row"><span>{text}</span><i class="fas fa-volleyball-ball fa-2x"></i></div>;
 
class Map extends Component {
  changeLocation = async event => {
    await this.props.doClick(event.target.id,event.target.value);
    this.props.doClick2()
  };
  
  render() {
    if (this.props.sport === "basketball") {
    return (
    <label className="row" lat={this.props.lat} lng={this.props.lng}>
      <input type="radio" name="test"  onClick={e => {this.changeLocation(e)}} value={this.props.name} id={this.props.address}/>
      <img src="https://cdn3.iconfinder.com/data/icons/olympic-games-15/48/Basketball-512.png"
      style={{height:"40px", width:"40px"}} />
      <span style={{color:"blue", fontWeight:"800", fontSize:"15px"}}>{this.props.name}</span>
    </label>
    );
    } else if (this.props.sport === "badminton") {
      return (
      <label className="row" lat={this.props.lat} lng={this.props.lng}>
        <input type="radio" name="test"  onClick={e => {this.changeLocation(e)}} value={this.props.name} id={this.props.address}/>
        <img src="https://cdn3.iconfinder.com/data/icons/olympic-games-15/48/Badminton-512.png"
        style={{height:"40px", width:"40px"}} />
        <span style={{color:"blue", fontWeight:"800", fontSize:"15px"}}>{this.props.name}</span>
      </label>
      );
    } else if (this.props.sport === "futsal") {
      return (
      <label className="row" lat={this.props.lat} lng={this.props.lng}>
        <input type="radio" name="test"  onClick={e => {this.changeLocation(e)}} value={this.props.name} id={this.props.address}/>
        <img src="https://cdn3.iconfinder.com/data/icons/olympic-games-15/48/Football-512.png"
        style={{height:"40px", width:"40px"}} />
        <span style={{color:"blue", fontWeight:"800", fontSize:"15px"}}>{this.props.name}</span>
      </label>
      );
    }
  }
}
 
export default connect(
  "",
  actions
)(withRouter(Map));