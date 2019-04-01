import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link,Redirect,withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";

const AnyReactComponent = ({text}) => <div className="row"><span>{text}</span><i class="fas fa-volleyball-ball fa-2x"></i></div>;
 
class Map extends Component {
  changeLocation = async event => {
    console.log(event.target.value)
    this.props.doClick(event.target.value)
    };
  render() {
    return (
    <label className="row" lat={this.props.lat} lng={this.props.lng}>
      <input type="radio" name="test"  onClick={e => {this.changeLocation(e)}} value={this.props.name}/>
      <i class="fas fa-volleyball-ball fa-2x"></i>
      <span>{this.props.name}</span>
    </label>
    );
  }
}
 
export default connect(
  "",
  actions
)(withRouter(Map));