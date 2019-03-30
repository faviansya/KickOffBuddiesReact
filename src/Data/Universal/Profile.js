import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <aside className="col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center wow fadeInUp" >
        <div className="card" >
          <Link to="/details">
            <div className="card-header" style={{color:"black"}}>Pemain</div>
            <div className="card-body small">
              <div >
                <u>
                  <b style={{color:"black"}}>{this.props.name}</b>
                </u>
              </div>
              <Link to="/details" className="img-wrap mt-3">
                <img src={this.props.img} height="250px" />
              </Link>
              <hr />
              <div style={{color:"black"}}>
              <label >
              Olahraga Favorit : {this.props.favourite_sport}
              </label>
              <br />
              Alamat: {this.props.address}
              <hr />
              Accept Booking: 5
              <hr />
              Booking Pending:5
              <br />
              <hr />
              </div>
              {/* <Link href="">Kunjungi Profil</Link> */}
            </div>
          </Link>
        </div>
      </aside>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Profile));
