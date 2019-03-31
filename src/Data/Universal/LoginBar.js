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
      this.props.history.push("/userprofile");
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
        <div className="col-auto col-lg-8">
          <div className="widget-header dropdown">
            <div className="icontext">
              <div className="icon-wrap">
                <i
                  className=" icon-sm fa fa-user"
                  style={{ color: "#33849F" }}
                />
              </div>
              <div className="text-wrap text-dark">
                Login to <br />
                My account <i className="fa fa-caret-down" />
              </div>
            </div>
            <div className="dropdown-menu" style={{ marginTop: "-2px" }}>
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
                <Link to="/daftar">
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
              <Link className="dropdown-item" to="/daftar">
                Don't Have account? Sign up
              </Link>
              <Link className="dropdown-item" to="">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <sec>
          <div class="col-auto col-lg-12">
            <div class="widget-header dropdown">
              <Link to="/myprofile" data-offset="20,10">
                <div class="icontext">
                  <div class="icon-wrap">
                    <i
                      class=" icon-sm fa fa-user"
                      style={{ color: "#33849F" }}
                    />
                  </div>
                  <div class="text-wrap text-dark">
                    <span class="badge badge-secondary">
                      {" "}
                      {this.props.newTransactionCount} New Transaksi
                    </span>
                    <br />
                    {this.props.mySelf.name} <i class="fa fa-heart" />
                  </div>
                </div>
              </Link>
              <div class="dropdown-menu" style={{ marginTop: "-2px" }}>
                <form class="px-4 py-3" onSubmit={e => e.preventDefault()}>
                  <center>
                    <Link to="/myprofile" data-offset="20,10">
                      <div class="form-group">
                        <img src="" height="130px" />
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
          <div className="col-lg-3 col-md-12">
            <Link to="/postitem" className="widget-header">
              <div className="icontext">
                <div className="icon-wrap">
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
        </sec>
      );
    }
  }
}

export default connect(
  "is_login,mySelf",
  actions
)(withRouter(Header));
