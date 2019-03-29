import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <aside className="col-xl-2 col-md-3 col-sm-12 text-center wow fadeInUp" >
        <div className="card" >
          <Link to="/details">
            <div className="card-header" style={{color:"black"}}>Pemain</div>
            <div className="card-body small">
              <div >
                <u>
                  <b style={{color:"black"}}>Fatma</b>
                </u>
              </div>
              <Link to="/details" className="img-wrap mt-3">
                <img src="http://engineering.utsa.edu/electrical-computer/wp-content/uploads/sites/5/2017/08/oie_2012040wBCnFO0M-e1508455534758.jpg" />
              </Link>
              <hr />
              <div style={{color:"black"}}>
              <label >
              Jumlah Main: 12
              </label>
              <br />
              Booking: 1
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
