import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Host } from "../../Host";

class UserProfile extends Component {
  render() {
    return (
    <section>
        <div className="container">    
        <h4 style={{textAlign:"center"}}>Tutik Sulistiawati</h4><br/>
        <div className="row">
                <img alt="User Pic" src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-760x506.jpg" id="profile-image1" 
                className="img-circle img-responsive center" style={{height:"300px", width:"300", borderRadius:"50%"}}/> 
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-3"></div>
            <table className="center table table-striped col-lg-6 col-md-6 col-sm-12" style={{marginTop:"50px"}}>
                <tbody className="text-center">
                    <tr>
                        <td>Username</td>
                        <td>Tutik</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Tidar Malang</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>0891917937383</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>tutik@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Favorite Sport</td>
                        <td>Basket</td>
                    </tr>
                </tbody>
            </table>
            <div className="col-lg-3 col-md-3"></div>
        </div>
        <br />
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        Booking History.
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        Current Booking.
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>

    );
  }
}

export default connect(
  "",
  actions
)(withRouter(UserProfile));



{/* <div className="container">    
<div className="row">
    <div className="panel panel-default">
    <div className="panel-heading">  <h4 >User Profile</h4></div>
    <div className="panel-body">
    <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
    <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive"/> 


    </div>
    <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8" >
        <div className="container" >
        <h2>John Doe</h2>
        <p>an   <b> Employee</b></p>
        
        
        </div>
        <hr />
        <ul className="container details" >
        <li><p><span className="glyphicon glyphicon-user one" style={{width:"50px"}}></span>i.rudberg</p></li>
        <li><p><span className="glyphicon glyphicon-envelope one" style={{width:"50px"}}></span>somerandom@email.com</p></li>
        </ul>
        <hr />
        <div className="col-sm-5 col-xs-6 tital " >Date Of Joining: 15 Jun 2016</div>
    </div>
    </div>
    </div>
</div>
</div> */}