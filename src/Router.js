import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.js";
import Login from "./Login.js";
import Home from "./Home.js";
import Hotels from "./Hotels.js";
import Favourite from "./Favourites.js";
import SearchZip from "./SearchZip.js";

export default class Router extends Component {
    constructor(props){
        super(props);

    }

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
                                    <Route path="/hotels" component={Hotels} />
                                    <Route path="/search/:search" component={(router) => <SearchZip search={router.match.params.search}/>} />

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