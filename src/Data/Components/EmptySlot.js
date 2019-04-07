import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Url } from "url";

class Profile extends Component {

  joinsport = () => {
    this.props.JoinSport();
  };
  render() {
    const loading = this.props.loading;
    return (
      <aside
        onClick={() => {
          this.joinsport();
        }}
        className="col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center wow fadeInUp"
      >
        <div class="blog-card spring-fever" >
          <div class="title-content">
            <h3>Empty Slot</h3>
            <hr />
            {this.props.loading &&
          <div><i style={{color:"black"}} className="fa fa-spinner fa-pulse fa-5x fa-fw"></i><br/>Loading, This May Take A Time<br/><br/></div>
          }
            <div class="intro">Click This Box To Join The Game</div>
          </div>
          <div class="card-info">Sesungguhnya Olahraga Menyehatkanmu</div>
          <div class="gradient-overlay" />
          <div class="color-overlay" />
        </div>
      </aside>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Profile));
