import React, { Component } from "react";
import {Link} from "react-router-dom";

class Slider extends Component {
    render() {
      return (
            <section className="section-main bg d-none d-lg-block d-md-block">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active container1">
                            <img src="http://sports-store.crunchpress.com/soccer/wp-content/uploads/2015/11/004.jpg" className="d-block w-100" style={{height:"600px"}} alt="..." />
                            <h4 class="centered">
                            Kick Off Buddies is a web-based application that helps users to 
                            find other friends / 
                            players to play sport together. In this application too, users can 
                            immediately book a sport venue and pay the cost of renting the field 
                            automatically through the application and share the fee accordingly to 
                            the number of players.
                            </h4>
                        </div>
                        <div className="carousel-item container1">
                            <img src="https://static.designmynight.com/uploads/2017/09/sports_montage_-_chosen_concept_v9_carouselv3_rgb.jpg__1600x580_q85_crop_upscale-1-1200x435-optimised.jpg" className="d-block w-100" style={{height:"600px"}} alt="..."/>
                            <h4 class="centered">
                            Sport is a great activity to do and it is healthy as well. Somehow, playing sport alone is no fun at all.
                            Thus, we created this application for you to find new friends to exercise and play sport with. Have fun!
                            </h4>
                        </div>
                        <div className="carousel-item container1">
                            <img src="http://www.sportsclubsfitness.com/wp-content/uploads/2018/05/Preparation-for-Backpacking-2.jpg" className="d-block w-100" style={{height:"600px"}} alt="..."/>
                            <h4 class="centered">
                            Did you know that ...
                            </h4>
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
