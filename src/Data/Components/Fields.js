import React, { Component } from "react";
import {Link} from "react-router-dom";

class Fields extends Component {
    render() {
      return (
            <section className="section-main bg padding-top-sm ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{width: "18rem", height:"22rem"}}>
                                <img className="card-img-top" src="https://www.suherlin.com/gakumum/wp-content/uploads/2015/06/lapangan-Badminton-univuno.blogspotcom.jpg" 
                                alt="Lapangan Badminton" style={{height:"12rem"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Lapangan Badminton</h5>
                                    <p className="card-text">Lapangan badminton indoor lengkap dengan net dan bisa sewa peralatan.</p>
                                    {/* <a href="#" className="btn btn-primary">Join This Group</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{width: "18rem", height:"22rem"}}>
                                <img className="card-img-top" src="https://ultrasport.co.id/wp-content/uploads/2018/06/GIGA-FUTSAL-Lampung-1170x700.jpg" 
                                alt="Lapangan Badminton" style={{height:"12rem"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Lapangan Futsal</h5>
                                    <p className="card-text">Lapangan futsal indoor lengkap.</p>
                                    {/* <a href="#" className="btn btn-primary">Join This Group</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{width: "18rem", height:"22rem"}}>
                                <img className="card-img-top" src="https://www.suherlin.com/gakumum/wp-content/uploads/2015/06/lapangan-Badminton-univuno.blogspotcom.jpg" 
                                alt="Lapangan Badminton" style={{height:"12rem"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Lapangan Badminton</h5>
                                    <p className="card-text">Lapangan badminton indoor lengkap dengan net dan bisa sewa peralatan.</p>
                                    {/* <a href="#" className="btn btn-primary">Join This Group</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card" style={{width: "18rem", height:"22rem"}}>
                                <img className="card-img-top" src="https://www.suherlin.com/gakumum/wp-content/uploads/2015/06/lapangan-Badminton-univuno.blogspotcom.jpg" 
                                alt="Lapangan Badminton" style={{height:"12rem"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Lapangan Badminton</h5>
                                    <p className="card-text">Lapangan badminton indoor lengkap dengan net dan bisa sewa peralatan.</p>
                                    {/* <a href="#" class="btn btn-primary">Join This Group</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Fields;
