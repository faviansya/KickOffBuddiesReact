import React, { Component } from "react";
import { Link,Redirect,withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import axios from "axios";
import Slider from "../Components/Slider";
import Groups from "../Components/Groups";
import Fields from "../Components/Fields";
import Content from "../Components/Content";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTempat: [],
    };
  };
  componentDidMount = async (sport) => {
    const self = this;
    const req = {
      method: "get",
      url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyB3GHH--AbFb9XDA16VX56gMUjQYSKlviQ&query="+sport+"+in+malang",
      headers: {
        Origin: "https://maps.googleapis.com/",}
    };
    await axios(req)
      .then(function(response) {
        self.setState({ listTempat: response.data.results });
        // console.log(response.data)
        // self.setState({ listPemain: response.data.pemain });
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

    render() {
    return (
      <div>
        <Slider />
        <Content />
        <Groups handleClick={this.componentDidMount} />
        <section className="section-main bg padding-top-sm ">
          <div className="container">
            <div className="row">
        {this.state.listTempat.map((item, key) => {
          if (key <= 4  && item.photos != null) {
          return (
        <Fields key={key} address={item.formatted_address} name={item.name} rating={item.rating} user_total={item.user_ratings_total} img_reference={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=" + item.photos[0].photo_reference + "&key=AIzaSyB3GHH--AbFb9XDA16VX56gMUjQYSKlviQ"}/>
        )}
      })}
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Home));
