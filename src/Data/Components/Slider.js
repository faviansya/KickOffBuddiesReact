import React, { Component } from "react";
import {Link} from "react-router-dom";

class Slider extends Component {
    render() {
      return (
            <section className="section-main bg d-none d-lg-block d-md-block">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="http://sports-store.crunchpress.com/soccer/wp-content/uploads/2015/11/004.jpg" className="d-block w-100" style={{height:"600px"}} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://static.designmynight.com/uploads/2017/09/sports_montage_-_chosen_concept_v9_carouselv3_rgb.jpg__1600x580_q85_crop_upscale-1-1200x435-optimised.jpg" className="d-block w-100" style={{height:"600px"}} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="http://www.sportsclubsfitness.com/wp-content/uploads/2018/05/Preparation-for-Backpacking-2.jpg" className="d-block w-100" style={{height:"600px"}} alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
            </section>
        );
    }
}
export default Slider;
