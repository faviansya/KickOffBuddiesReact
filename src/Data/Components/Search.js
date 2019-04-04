import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Carousel extends Component {
  handleInputChange = e => {
    let value = e.target.value;
    this.props.history.push("/allsport");
    this.setState(
      {
        search: value
      },
      () => {
        this.props.searchItems(value);
      }
    );
  };
  render() {
    return (
      <div className="col-lg-8-24 col-12">
        <form action="" className="py-1" onSubmit={e => e.preventDefault()}>
          <div className="input-group w-100">
            {/* <select className="custom-select" name="category_name">
              <option value="">Semua</option>
              <option value="">Spesial</option>
              <option value="">Terbaik</option>
              <option value="">Terbaru</option>
            </select> */}
            <input
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              style={{ width: "50%" }}
              placeholder="Search"
            />
            <div className="input-group-append">
              <button
                className="btn btn-success"
                type="submit"
                style={{
                  backgroundColor: "#33849F",
                  borderColor: "#33849F"
                }}
              >
                <i className="fa fa-search" /> Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  "Bearer",
  actions
)(withRouter(Carousel));
