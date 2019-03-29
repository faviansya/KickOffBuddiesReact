import React, { Component } from "react";
import {Link} from "react-router-dom";


class Groups extends Component {
    render() {
      return (
            <section className="section-main bg padding-top-sm ">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="new_arrivals_sorting">
                                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                                    data-filter="*"><a onClick={this.handleClick}>All Sports</a></li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"><a>Futsal</a></li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories"><a>Basketball</a></li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men"><a>Badminton</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{width: "18rem", height:"18rem",textAlign:"center", borderRadius: "50%"}}>
                                {/* <img className="card-img-top" src="https://www.suherlin.com/gakumum/wp-content/uploads/2015/06/lapangan-Badminton-univuno.blogspotcom.jpg" 
                                alt="Lapangan Badminton" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Badminton</h5>
                                    <p className="card-text">Diperlukan 2 orang lagi. </p>
                                    <p className="card-text">Jam 8 pagi. Sabtu, 30 Maret 2019. </p>
                                    <p className="card-text">Lapangan Jagabrasa, Malang. </p>
                                    <a href="#" className="btn btn-primary">Join</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{width: "18rem",height:"18rem",textAlign:"center", borderRadius: "50%"}}>
                                {/* <img className="card-img-top" src="https://www.suherlin.com/gakumum/wp-content/uploads/2015/06/lapangan-Badminton-univuno.blogspotcom.jpg" 
                                alt="Lapangan Badminton" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Basketball</h5>
                                    <p className="card-text">Diperlukan 2 orang lagi. </p>
                                    <p className="card-text">Jam 9 pagi. Sabtu, 30 Maret 2019. </p>
                                    <p className="card-text">Lapangan Basket Pusat, Malang. </p>
                                    <a href="#" className="btn btn-primary">Join</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{width: "18rem", height:"18rem",textAlign:"center", borderRadius: "50%"}}>
                                {/* <img className="card-img-top" src="https://www.suherlin.com/gakumum/wp-content/uploads/2015/06/lapangan-Badminton-univuno.blogspotcom.jpg" 
                                alt="Lapangan Badminton" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Futsal</h5>
                                    <p className="card-text">Diperlukan 4 orang lagi. </p>
                                    <p className="card-text">Jam 10 pagi. Sabtu, 30 Maret 2019. </p>
                                    <p className="card-text">Lapangan Futsal Besar, Malang. </p>
                                    <a href="#" className="btn btn-primary">Join</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{width: "18rem", height:"18rem",textAlign:"center", borderRadius: "50%"}}>
                                {/* <img className="card-img-top" src="https://www.suherlin.com/gakumum/wp-content/uploads/2015/06/lapangan-Badminton-univuno.blogspotcom.jpg" 
                                alt="Lapangan Badminton" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Badminton</h5>
                                    <p className="card-text">Diperlukan 1 orang lagi. </p>
                                    <p className="card-text">Jam 11 pagi. Sabtu, 30 Maret 2019. </p>
                                    <p className="card-text">Lapangan Kali Urang, Malang. </p>
                                    <a href="#" className="btn btn-primary">Join</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Groups;
