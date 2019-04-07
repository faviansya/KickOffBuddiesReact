import React,{ Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }


  render() {
    return (
      <div>
          <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(FAQ));
