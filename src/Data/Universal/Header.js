import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Search from "../Components/Search";
import LoginBar from "./LoginBar";

class Header extends Component {
  signout = () => {
    this.props.postSignout();
  };

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top sticky" id="navbar">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img
                  className="logo"
                  src=""
                  height="100%"
                  alt="Kick Off Buddies"
                  title="Kick Off Buddies"
                />
              </Link>
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
                  <li className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {" "}
                      Olahraga{" "}
                    </Link>
                    <ul className="dropdown-menu Navbar" style={{ marginTop: "-2px" }}>
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
                          Basket{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item dropdown" >
                    <Link to="" className="nav-link dropdown-toggle">
                      {" "}
                      List User{" "}
                    </Link>

                    <ul className="dropdown-menu Navbar" style={{ marginTop: "-2px" }}>
                      <li>
                        <Link className="dropdown-item" to="/" id="inside">
                          All User
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/" id="inside">
                          Beberapa User{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/" id="inside">
                          My User
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item dropdown">
                    <Link to="" className="nav-link dropdown-toggle">
                      {" "}
                      Hubungi Customer Service{" "}
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
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="header-main shadow-sm">
            <div className="container">
              <div className="row-sm align-items-center">
                <div className="col-lg-4-24 col-sm-3">
                  <div className="category-wrap dropdown py-1">
                    <button
                      type="button"
                      className="btn btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-bars" /> Categories
                    </button>
                    <div className="dropdown-menu " style={{ marginTop: "-2px" }}>
                    <Link
                        className="dropdown-item"
                        to="/allsport"
                        onClick={() => {
                          this.props.changeCategory("basket");
                        }}
                      >
                        Basket{" "}
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/allsport"
                        onClick={() => {
                          this.props.changeCategory("badminton");
                        }}
                      >
                        Badminton{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <Search />
                <div className="col-lg-7-24 col-12">
                  <div className="widgets-wrap float-right row no-gutters py-1">
                    <LoginBar signout={this.signout} />
                    <div className="col-lg-4 col-md-12">
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Header));
