import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from "./Data/Pages/Home";
import AllSport from "./Data/Pages/AllSport";
import Details from "./Data/Pages/SportDetails";

import PatNolPat from "./Data/Components/404";


const MainRoute = () => {
    return(
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/allsport" component = {AllSport}/>
            <Route exact path = "/details" component = {Details}/>

            <Route component = {PatNolPat}/>
        </Switch>
    )
}

export default MainRoute;
