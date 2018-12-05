import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.js";
import Login from "./Login.js";
import Home from "./Home.js";
import Search from "./searchZip.js";
import Hotels from "./Hotels.js";

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/hotels" component={Hotels}/>
                        <Route path="/search" component={Search}/>
                    </Switch>
                </div>
            </HashRouter>
        );

    }
}