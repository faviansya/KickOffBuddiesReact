import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { storage } from "../../firebase/index";

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress : 0,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handlechange = e => {
    if (e.target.files[0]) {
      this.state.image = e.target.files[0];
      console.log(this.state.image);
    }
  };
  handleUpload = () => {
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        //progrress Function
        const progress = ((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        this.setState({progress})
      },
      error => {
        console.log(error);
      },
      () => {
        //Complete Function
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
          });
      }
    );
  };
  render() {
    return (
      <div>
        <progress value={this.state.progress} max="100"/>
        <input type="file" onChange={this.handlechange} />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(ImageUploader));
