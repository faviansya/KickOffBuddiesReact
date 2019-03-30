import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Host } from "../../Host"

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: "",
      player: "",
      time: "",
      location: "",
    };
  }

  PostItem = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "post",
      url: Host+"/api/booking",
      headers: {
        Authorization: "Bearer " + self.props.Bearer
      },
      data: {
        sport: self.state.sport,
        player: self.state.player,
        time: self.state.time,
        location: self.state.location,
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.history.push("/userprofile");
      })
      .catch(function(error) {
        console.log("ASEM", error);
      });
  };

  changeOlagraga = e => {
    this.setState({ sport: e.target.value });
  };
  changePlayer = e => {
    this.setState({ player: e.target.value });
  };
  changeTime = e => {
    this.setState({ time: e.target.value });
  };
  changeLocation = e => {
    this.setState({ location: e.target.value });
  };
  render() {
    // console.log(this.state.location);
    return (
      <div class="card mb-3">
        <section class="section-pagetop bg-dark-50">
          <div class="container clearfix">
            <strong><h2 class=" text-white">Post New Item</h2></strong>
            <h5 class=" text-white">Isikan Semua Field Agar Keterangan Barang Anda Lengkap</h5>

          </div>
        </section>

        <div class="container mt-5">
          <form>
            <div class="form-group col-lg-6">
              <label for="location">Olahraga</label>
              <select
                onChange={e => {
                  this.changeOlagraga(e);
                }}
                class="form-control form-control-sm"
                placeholder="Masukkan sport Item"
                id="sport"
              >
                <option disabled selected value>Pilih Olahraga</option>
                <option>badminton</option>
                <option>basket</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="player">Jumlah Pemain</label>
              <input
                onChange={e => {
                  this.changePlayer(e);
                }}
                type="number"
                class="form-control"
                id="player"
                placeholder="Masukkan Jumlah Player"
                required
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="location">Waktu Olahraga</label>
              <select
                onChange={e => {
                  this.changeTime(e);
                }}
                class="form-control form-control-sm"
                placeholder="Masukkan time"
                id="time"
              >
                <option disabled selected value>Waktu</option>
                <option>Pagi</option>
                <option>Sore</option>
              </select>
            </div>
            <div class="form-group col-lg-6">
              <label for="location">location</label>
              <select
                onChange={e => {
                  this.changeLocation(e);
                }}
                class="form-control form-control-sm"
                placeholder="Masukkan location"
                id="location"
              >
                <option disabled selected value>Pilih Location</option>
                <option>Gresik</option>
                <option>Malang</option>
                <option>Surabaya</option>
              </select>
            </div>

            <div class="form-group ml-3">
              <button
                onClick={this.PostItem}
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  "itemId,Bearer",
  actions
)(withRouter(PostItem));
