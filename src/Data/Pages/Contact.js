import React, { Component } from "react";
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
      return (
        <div class="container contact_container">
            <br /><br />
            <div class="row">
                <div class="col-lg-6 contact_col">
                <div class="contact_contents">
                    <h1 style={{color:"black"}}>Contact Us</h1>
                    <p style={{color:"black"}}>
                        There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits
                        you the most.
                    </p>
                    <div>
                        <p style={{color:"black"}}>(+62) 8 12 10 - 398 377</p>
                        <p style={{color:"black"}}>kick_off_buddies@gmail.com</p>
                    </div>
                    <div>
                        <p style={{color:"black"}}>We are always welcome for comments, critics, feedback, business collaboration and many more.</p>
                    </div>
                    <div>
                        <p style={{color:"black"}}>Open hours: 8.00-18.00 Mon-Fri</p>
                        <p style={{color:"black"}}>Sunday and Saturday: Closed</p>
                    </div>
                </div>
                </div>

                <div class="col-lg-6 get_in_touch_col">
                    <div class="get_in_touch_contents">
                        <h1 style={{color:"black"}}>Get In Touch With Us!</h1>
                        <p style={{color:"black"}}>Fill out the form below to recieve a free and confidential.</p>
                        <form action="post">
                            <div>
                                <input id="input_name" class="form_input input_name input_ph" type="text" name="name" placeholder="Name"
                                required="required" data-error="Name is required."/>
                                <input id="input_email" class="form_input input_email input_ph" type="email" name="email" placeholder="Email"
                                required="required" data-error="Valid email is required." />
                                <textarea id="input_message" class="input_ph input_message" name="message" placeholder="Message" rows="3"
                                required data-error="Please, write us a message."></textarea>
                            </div>
                            <div>
                                <button id="review_submit" type="submit" class="red_button message_submit_btn trans_300" value="Submit">send
                                    message</button>
                            </div>
                        </form>
                        <br /><br /><br />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Contact;