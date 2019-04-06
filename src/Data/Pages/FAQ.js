import React, { Component } from "react";
import { Link,Redirect,withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";


class FAQ extends Component {
    render() {
    return (
        <section>
        <div class="container">
            {/* <div class="alert alert-warning alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                This section contains a wealth of information, related to <strong>FatimahFashion</strong> and its store. If you cannot find an answer to your question, 
                make sure to contact us. 
            </div> */}
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-2"></div>
        <div className="col-lg-7 cold-md-7 col-sm-10">
        
    
        <br />
    
        <div className="panel-group" id="accordion">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">What is Kick Off Buddies?</a>
                    </h5>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body" style={{textAlign:"justify"}}>
                        <strong>Kick Off Buddies</strong> is a web-based application that helps users to find other friends / players 
                        to play sport together.
                        In this application too, users can immediately book a sport venue and pay 
                        the cost of renting the field automatically through the application and share the fee accordingly to the number of players. 
                        For example, if you play Badminton with the total players of four, including you, the fee of Rp 35,000,- per hour will be deducted 
                        automatically with the amount of Rp 35,000,- per hour divided by four. That will give you a very convenient way of finding friends to play sport with 
                        as well as share the booking fee of the sport venue all in one single app.
                        <br />
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">How can I use Kick Off Buddies application?</a>
                    </h5>
                </div>
                <div id="collapseEleven" className="panel-collapse collapse">
                    <div className="panel-body" style={{textAlign:"justify"}}>
                        It's actually pretty simple, you can access our website through mobile or laptop, register and well done. Even if you use your mobile phone, 
                        you can easily add the website to your phone and use it as a mobile application.
                        <br />
                    </div>
                </div>
            </div>
    
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Is the registration free?</a>
                    </h5>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body" style={{textAlign:"justify"}}>
                        Yes, the registration is completely free, you will be asked to top up your credit for you to easily pay the booking fee of the sport venue.
                        Here are the easy steps you need to do to sign up at Kick Off Buddies: 
                        <ul>
                            <li>Sign up</li>
                            <li>Fill your username and password. Make sure not to tell these to anyone else, except yourself.</li>
                            <li>Then, you can edit your profile anytime you want and find other people to play sports together.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">What is a Player Room?</a>
                    </h5>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                    <div className="panel-body" style={{textAlign:"justify"}}> 
                        Player room is a space for you to meet and join other players to play sports together at the desired time and place
                        with the following steps:
                        <ul>
                            <li>Click on the Sports at the navigation bar on the top. Click on one of the sports that you would like to choose.</li>
                            <li>Click on the room that you would like to choose, you can see how many players needed on that particular room.</li>
                            <li>Click on the empty slot.</li>
                            <li>Your profile will appear on that room.</li>
                            <li>Wait until the player room has reached its maximum capacity, then you will get a notification about it.</li>
                            <li>You can also chat all other players in that player room through the chat group.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">How can I create a new Player Room?</a>
                    </h5>
                </div>
                <div id="collapseFive" className="panel-collapse collapse">
                    <div className="panel-body" style={{textAlign:"justify"}}>
                        <ul>
                            <li>Choose a sport that you want to play.</li>
                            <li>Fill in the number of players you want to play with, including yourself.</li>
                            <li>Choose the time of when you want to play, including date and hour.</li>
                            <li>Click on the sport venue.</li>
                            <li>Click on the sport venue that you want to play at on the pop-up map.</li>
                            <li>Click submit, and then well done. Your new player room has been successfully created.</li>
                            <li>You can check it out on my booking navigation bar.</li>
                            <li>Your player room will also appear on the common sports so that other people can join your sport planning and schedule.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
        </div>
        </div>
        </div>
        </section>
    
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(FAQ));