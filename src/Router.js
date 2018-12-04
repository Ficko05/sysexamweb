import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.js";
import Login from "./Login.js";
import Home from "./Home.js";
import ShowHotels from "./ShowHotels.js";
import Social from "./Social.js";
import search from "./searchZip.js";

export default class Router extends Component {
    render() {
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
                                    <Route path="/hotels" component={ShowHotels} />
                                    <Route path="/social" component={Social} />
                                    <Route path="/search" component={search} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );

    }
}