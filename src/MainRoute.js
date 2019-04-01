import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from "./Data/Pages/Home";
import AllSport from "./Data/Pages/AllSport";
import Details from "./Data/Pages/SportDetails";
import UserProfile from "./Data/Pages/UserProfile"
import MyBooking from "./Data/Pages/MyBooking"
import NewEvent from "./Data/Post/PostNewEvent"
import NewUser from "./Data/Post/PostUser"

import PatNolPat from "./Data/Components/404";
import FAQ from './Data/Pages/FAQ';
import Contact from './Data/Pages/Contact';


const MainRoute = () => {
    return(
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/allsport" component = {AllSport}/>
            <Route exact path = "/details" component = {Details}/>
            <Route exact path = "/userprofile" component = {UserProfile}/>
            <Route exact path = "/mybooking" component = {MyBooking}/>
            <Route exact path = "/newevent" component = {NewEvent}/>
            <Route exact path = "/faq" component = {FAQ}/>
            <Route exact path = "/newuser" component = {NewUser}/>
            <Route exact path = "/contact-us" component = {Contact}/>

            <Route component = {PatNolPat}/>
        </Switch>
    )
}

export default MainRoute;
