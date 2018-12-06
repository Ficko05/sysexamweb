import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.js";
import Login from "./Login.js";
import Home from "./Home.js";
import Registration from "./Registration.js";
import Hotels from "./Hotels.js";
import Favourite from "./Favourites.js";
import SearchZip from "./SearchZip.js";
import HotelDetails from "./HotelDetails.js";
import facade from "./apiFacade";
import Orders from "./Order.js";

export default class Router extends Component {
    constructor(props){
        super(props);

    }
    //<Route path="/orders" component={Orders} />

    render() {

console.log(facade.loggedIn());

        return (
            <HashRouter>
                <div>
                    <Navigation />

                    <div className="content my-3">
                        <div className="row" style={{ margin: "0" }}>

                            <div className="col-7 col-sm-8 col-md-9 col-lg-10 p-3 maincontent">
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/registration" component={Registration} />
                                    <Route path="/hotels" component={Hotels} />
                                    {/*facade.loggedIn() && <Route path="/orders" component={Orders} />*/}
                                    <Route path="/orders" component={Orders} />
                                    <Route path="/search/:search" component={(router) => <SearchZip search={router.match.params.search}/>} />
                                    <Route path="/HotelDetails/:id" component={(router) => <HotelDetails id={router.match.params.id}/>} />
                                    
                                </Switch>
                            </div>
                            <Favourite />
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}


