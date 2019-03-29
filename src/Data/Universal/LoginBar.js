import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
      return (
        <div className="col-auto col-lg-8">
          <div className="widget-header dropdown">
            <div className="icontext">
              <div className="icon-wrap">
                <i className=" icon-sm fa fa-user" style={{ color: "#33849F" }} />
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
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign in
                </button>
                <Link to="/daftar">
                  <button type="submit" className="btn btn-outline-primary ml-1">
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
   
    }
  }


export default connect(
  "",
  actions
)(withRouter(Header));
