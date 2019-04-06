import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Search from "../Components/Search";
import LoginBar from "./LoginBar";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Host } from "../../Host";

class Header extends Component {
  signout = () => {
    this.props.postSignout();
  };
  render() {
    const userType = localStorage.getItem("userType")
    if (userType != "pebisnis") {
    return (
      <div>
        <header>
          <nav
            className="navbar navbar-expand-lg navbar-light fixed-top sticky"
            id="navbar"
          >
            <div className="container">
              <button
                className="navbar-toggler"
                style={{
                  background: "none",
                  border: "none",
                  backgroundColor: "white"
                }}
                type="button"
                data-toggle="collapse"
                data-target="#navbarTop"
                aria-controls="navbarTop"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarTop">
                <ul className="navbar-nav mr-auto">
                  <li>
                    <h6 style={{ color: "white" }}>
                      Welcome to our website. Keep on playing!
                    </h6>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/"> Home </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {" "}
                      Sports{" "}
                    </Link>
                    <ul
                      className="dropdown-menu Navbar"
                      style={{ marginTop: "-2px" }}
                    >
                      <li>
                        <Link
                          className="dropdown-item medianav"
                          to="/allsport"
                          id="inside"
                          onClick={() => {
                            this.props.changeCategory("badminton");
                          }}
                        >
                          Badminton
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/allsport"
                          id="inside"
                          onClick={() => {
                            this.props.changeCategory("basket");
                          }}
                        >
                          Basketball{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item medianav"
                          to="/allsport"
                          id="inside"
                          onClick={() => {
                            this.props.changeCategory("futsal");
                          }}
                        >
                          Futsal
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/faq"> FAQ </Link>
                    <ul
                      className="dropdown-menu Navbar"
                      style={{ marginTop: "-2px" }}
                    >
                      <li>
                        <Link className="dropdown-item" to="/faq" id="inside">
                          Pertanyaan Umum
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact-us" className="nav-link">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section
            className="header-main shadow-sm"
            style={{ marginTop: "-12px" }}
          >
            <div className="container">
              <div className="row-sm align-items-center">
                <div className="col-lg-3-24 col-sm-3">
                  <Link className="navbar-brand" to="/">
                    <img
                      className="logo"
                      src="https://i.postimg.cc/3JKbyy2X/Logo-Makr-1n2-C9x.png"
                      height="100%"
                      alt="Kick Off Buddies"
                      title="Kick Off Buddies"
                    />
                  </Link>
                </div>
                  <div className="widgets-wrap float-right row no-gutters py-1 mr-auto">
                    <LoginBar signout={this.signout} />
                  </div>
                  <Search />
              </div>
            </div>
          </section>
        </header>
      </div>
    );
    } else {
      return (
        <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top sticky" id="navbar">
            <div className="container">
              
              <button
                className="navbar-toggler"
                style={{
                  background: "none",
                  border: "none",
                  backgroundColor: "white"
                }}
                type="button"
                data-toggle="collapse"
                data-target="#navbarTop"
                aria-controls="navbarTop"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarTop">
                <ul className="navbar-nav mr-auto">
                  <li>
                    <h6 style={{color:"white"}}>
                      Welcome to our website. Keep on playing!
                    </h6>
                  </li>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">
                      {" "}
                      Home{" "}
                    </Link>
                </li>
                  <li className="nav-item">
                    <Link to="/faq">
                      {" "}
                      Pertanyaan Umum{" "}
                    </Link>
                    <ul className="dropdown-menu Navbar" style={{ marginTop: "-2px" }}>
                      <li>
                        <Link className="dropdown-item" to="/faq" id="inside">
                          Pertanyaan Umum
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/" id="inside">
                          Masalah Lapangan{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/" id="inside">
                          Masalah Booking{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact-us" className="nav-link">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="header-main shadow-sm" style={{marginTop:"-12px"}}>
            <div className="container">
              <div className="row-sm align-items-center">
                <div className="col-lg-4 col-sm-3">
                  <Link className="navbar-brand" to="/">
                    <img
                      className="logo"
                      src="https://i.postimg.cc/3JKbyy2X/Logo-Makr-1n2-C9x.png"
                      height="100%"
                      alt="Kick Off Buddies"
                      title="Kick Off Buddies"
                    />
                  </Link>
                </div>
                  <div className="widgets-wrap float-right row no-gutters py-1 mr-auto">
                    <LoginBar signout={this.signout} />
                  </div>
              </div>
            </div>
          </section>
        </header>
      </div>
      );
    }
  }
}

export default connect(
  "userType",
  actions
)(withRouter(Header));
