import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  joinsport =()=> {
    this.props.JoinSport();
  }
  render() {
    return (
      <aside onClick = {()=>{this.joinsport()}} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center wow fadeInUp" >
        <div className="card" >
          <Link to="/details">
            <div className="card-header" style={{color:"black"}}>Empty Slot</div>
            <div className="card-body small">
              <div >
                <u>
                  <b style={{color:"black"}}>-</b>
                </u>
              </div>
              <Link to="/details" className="img-wrap mt-3">
                <img src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/plus_sign_add_first_aid_medical_positive_increase_expand-512.png" />
              </Link>
              <hr />
              <div style={{color:"black"}}>
              <label >
              -
              </label>
              <br />
              -
              <hr />
              -
              <hr />
              -
              <br />
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
