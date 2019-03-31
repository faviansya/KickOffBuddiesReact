import React, { Component } from "react";
import {Link} from "react-router-dom";

class Fields extends Component {
    render() {
      return (            
    <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card" style={{width: "18rem", height:"30rem"}}>
            <img className="card-img-top" src={this.props.img_reference}
            alt="Lapangan Badminton" style={{height:"12rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">Alamat: {this.props.address}</p>
                <span>Rating: {this.props.rating}</span> <br/>
                <span>Rating Dari: {this.props.user_total} orang</span>
                {/* <a href="#" className="btn btn-primary">Join This Group</a> */}
            </div>
        </div>
    </div>
                        
        );
    }
}
export default Fields;