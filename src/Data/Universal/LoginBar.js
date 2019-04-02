import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import { Host } from "../../Host"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  };
  postLogin = function() {
    this.props.Login(this.state.username, this.state.password).then(() => {
      this.state.username = "";
      this.state.password = "";
      this.props.history.push("/userprofile");
    });
  };
  postLoginPebisnis = function() {
    this.props.LoginPebisnis(this.state.username, this.state.password).then(() => {
      this.state.username = "";
      this.state.password = "";
      console.log("ini userType", this.props.userType)
      this.props.history.push("/pebisnisprofile");
    });
  };
  changeUser(e) {
    this.state.username = e.target.value;
  };
  changePassword(e) {
    this.state.password = e.target.value;
  };
  render() {
    if (!this.props.is_login) {
      return (
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6" >
          <div className="widget-header dropdown">
            <div className="icontext">
              <div className="icon-wrap">
                <i
                  className="fa fa-user fa-2x"
                  style={{ color: "#33849F" }}
                /> {" "}
              </div>
            </div>
            <div className="dropdown-menu" style={{ marginTop: "2px" }}>
              <form className="px-4 py-3" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    type="username"
                    className="form-control"
                    placeholder="Username"
                    onChange={e => this.changeUser(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => this.changePassword(e)}
                  />
                </div>
                <button
                  onClick={e => this.postLogin()}
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign in
                </button>
                <Link to="/newuser">
                  <button
                    type="submit"
                    className="btn btn-outline-primary ml-1"
                  >
                    {" "}
                    Sign Up
                  </button>
                </Link>
              </form>

              <hr className="dropdown-divider" />
              <Link className="dropdown-item" to="/newuser">
                Don't have an account yet? Sign up
              </Link>
              <Link className="dropdown-item" to="">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6" >
          <div className="widget-header dropdown">
            <div className="icontext">
              <div className="icon-wrap">
                <i 
                  class="fas fa-user-tie fa-2x" 
                  style={{ color: "#33849F" }}>
                </i>
              </div>
            </div>
            <div className="dropdown-menu" style={{ marginTop: "2px" }}>
              <form className="px-4 py-3" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    type="username"
                    className="form-control"
                    placeholder="Username"
                    onChange={e => this.changeUser(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => this.changePassword(e)}
                  />
                </div>
                <button
                  onClick={e => this.postLoginPebisnis()}
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign in
                </button>
                <Link to="/newpebisnis">
                  <button
                    type="submit"
                    className="btn btn-outline-primary ml-1"
                  >
                    {" "}
                    Sign Up
                  </button>
                </Link>
              </form>

              <hr className="dropdown-divider" />
              <Link className="dropdown-item" to="/newpebisnis">
                Don't have an account yet? Sign up
              </Link>
              <Link className="dropdown-item" to="">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
        </div>
      );
    } else if (this.props.userType != "pebisnis") {
      return (
        <sec>
          <div className="row" >
          {" "}
          <div className="col-4 ">
            <Link to="/newevent" className="widget-header">
              <div className="icontext">
                <div className="icon-wrap">
                  {" "}
                  <i
                    className="icon-sm fa fa-plus"
                    style={{ color: "#33849F" }}
                  />
                </div>
                <div className="text-wrap text-dark">
                  Create <br /> Booking
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/mybooking" className="widget-header">
              <div className="icontext">
                <div className="icon-wrap">
                  <i
                    className="icon-sm fa fa-list-alt"
                    style={{ color: "#33849F" }}
                  />
                </div>
                <div className="text-wrap text-dark">
                  My <br /> Booking
                </div>
              </div>
            </Link>
          </div>
          <div class="col-4">
            <div class="widget-header dropdown" style={{ marginTop: "-2px" }}>
              <Link to="/userprofile" data-offset="20,10">
                <div class="icontext">
                  <div class="icon-wrap">
                    <i
                      class=" icon-sm fa fa-user"
                      style={{ color: "#33849F" }}
                    />
                  </div>
                </div>
              </Link>
              <div class="dropdown-menu" style={{ marginTop: "-2px" }}  style={{marginLeft:"-200px"}}>
                <form class="px-4 py-3" onSubmit={e => e.preventDefault()}>
                  <center>
                    <Link to="/userprofile" data-offset="20,10">
                      <div class="form-group">
                        <img src={this.props.mySelf.url_image} height="130px" />
                      </div>
                    </Link>
                    <div class="form-group">
                      <label>Username: {this.props.mySelf.username}</label>
                      <br />
                      <label>Name: {this.props.mySelf.name}</label>
                      <br />
                      <label>Tipe: {this.props.mySelf.user_type}</label>
                      <br />
                    </div>
                    <div class="form-group">
                      <Link to="/edituser">
                        <button type="button" class="btn btn-success w-50">
                          Edit Profile
                        </button>
                      </Link>
                    </div>
                    <div class="form-group">
                      <button
                        onClick={() => {
                          this.props.signout();
                          this.state.username = "";
                          this.state.password = "";
                        }}
                        type="submit"
                        class="btn btn-link"
                      >
                        Sign Out
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
          </div>
        </sec>
      );
    } else {
      return (
        <div>
          <sec>
          <div className="row" >
          {" "}
          <div className="col-4 ">
            <Link to="/newfield" className="widget-header">
              <div className="icontext">
                <div className="icon-wrap">
                  {" "}
                  <i
                    className="icon-sm fa fa-plus"
                    style={{ color: "#33849F" }}
                  />
                </div>
                <div className="text-wrap text-dark">
                  New Field
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/myfields" className="widget-header">
              <div className="icontext">
                <div className="icon-wrap">
                  <i
                    className="icon-sm fa fa-list-alt"
                    style={{ color: "#33849F" }}
                  />
                </div>
                <div className="text-wrap text-dark">
                  My <br /> Fields
                </div>
              </div>
            </Link>
          </div>
          <div class="col-4">
            <div class="widget-header dropdown" style={{ marginTop: "-2px" }}>
              <Link to="/pebisnisprofile" data-offset="20,10">
                <div class="icontext">
                  <div class="icon-wrap">
                    <i
                      class=" icon-sm fa fa-user-tie"
                      style={{ color: "#33849F" }}
                    />
                  </div>
                </div>
              </Link>
              <div class="dropdown-menu" style={{ marginTop: "-2px" }}  style={{marginLeft:"-200px"}}>
                <form class="px-4 py-3" onSubmit={e => e.preventDefault()}>
                  <center>
                    <Link to="/userprofile" data-offset="20,10">
                      <div class="form-group">
                        <img src={this.props.mySelf.url_image} height="130px" />
                      </div>
                    </Link>
                    <div class="form-group">
                      <label>Username: {this.props.mySelf.username}</label>
                      <br />
                      <label>Name: {this.props.mySelf.name}</label>
                      <br />
                      <label>Tipe: {this.props.mySelf.user_type}</label>
                      <br />
                    </div>
                    <div class="form-group">
                      <Link to="/edituser">
                        <button type="button" class="btn btn-success w-50">
                          Edit Profile
                        </button>
                      </Link>
                    </div>
                    <div class="form-group">
                      <button
                        onClick={() => {
                          this.props.signout();
                          this.state.username = "";
                          this.state.password = "";
                        }}
                        type="submit"
                        class="btn btn-link"
                      >
                        Sign Out
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
          </div>
        </sec>
        </div>
      )
    }
  }
}

export default connect(
  "is_login,mySelf, userType",
  actions
)(withRouter(Header));
