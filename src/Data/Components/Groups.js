import React, { Component } from "react";
import {Link} from "react-router-dom";


class Groups extends Component {
    handleClick = async (value) => {
        this.props.handleClick(value)
    }

    render() {
      return (
            <section className="section-main bg padding-top-sm ">
                <div className="container">
                    <div className="row" style={{marginTop:"60px", marginBottom:"-25px"}}>
                        <div className="col-3"></div>
                        <div className="col-6">
                            <h4 style={{textAlign:"center"}}>
                                Click to see the nearest sports fields.
                            </h4>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <div className="new_arrivals_sorting">
                                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" id="futsal" onClick={() => this.handleClick("futsal")}><a>Futsal</a></li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" id="basketball" onClick={() => this.handleClick("basketball")} data-filter=".accessories"><a>Basketball</a></li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" id="badminton" onClick={() => this.handleClick("badminton")} data-filter=".men"><a>Badminton</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Groups;
