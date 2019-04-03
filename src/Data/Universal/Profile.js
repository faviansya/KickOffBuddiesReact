import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Url } from "url";

class Profile extends Component {
  changePlaylistIds = () => {
    this.props.cancel(this.props.listId);
  };
  render() {
    const button = {
      buttonDelete: ""
    };
    if (this.props.ismyself == "yes") {
      button.buttonDelete = (
        <button
          onClick={e => this.changePlaylistIds()}
          type="submit"
          className="btn btn-danger"
        >
          Cancel Booking
        </button>
      );
    }
    else{
      button.buttonDelete = ""
    }
    const styless = {
      backgroundImage:"Url(${this.props.img})",
    };

    return (
      <aside className="col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center wow fadeInUp" >
        <div className="card" >
        <div class="blog-card spring-fever" style={{backgroundImage:`url(${this.props.img})`,backgroundPosition:"center"}}>
          <div class="title-content">
            <h3 style={{color:"black",textShadow:"0 0 10px #F3F3F3,0 0 10px #F3F3F3,0 0 10px #F3F3F3"}}>{this.props.name}</h3>
            <hr />
            <br/>
            <br/><br/><br/><br/>
            <div class="intro" style={{color:"black",textShadow:"0 0 10px #F3F3F3,0 0 10px #F3F3F3,0 0 10px #F3F3F3"}}>Joined The Game</div>
            <div class="intro" style={{color:"black",textShadow:"0 0 10px #F3F3F3,0 0 10px #F3F3F3,0 0 10px #F3F3F3"}}>Olahraga Favorit : {this.props.favourite_sport}</div>
            <div class="intro" style={{color:"black",textShadow:"0 0 10px #F3F3F3,0 0 10px #F3F3F3,0 0 10px #F3F3F3"}}>Alamat: {this.props.address}</div>
            {button.buttonDelete}
          </div>
          <div class="gradient-overlay" />
          <div class="color-overlay" />
         </div>
        </div> 
      </aside>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Profile));
