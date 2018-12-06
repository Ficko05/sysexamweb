import React, { Component } from "react";
import facade from "./apiFacade";
import HotelDetails from "./HotelDetails";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { numberFilter, textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Redirect } from "react-router-dom";

export default class searchZip extends Component {
    constructor() {
        super();
        this.state = { search: '', redirect: false }

    }

    updateSearch(event) {
        this.setState({ search: event.target.value, redirect: false })
    }

    onSearch = (e) => {
        e.preventDefault();
        this.setState({ redirect: true });
    }

    render() {
        return (
            <div>
                {this.state.redirect && <Redirect to={"/search/" + this.state.search} />}
                <form className="form-inline mx-auto formsearch">
                    <input className="form-control mr-sm-2" type="text"
                        placeHolder="Search fx. 1200" value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                    />
                    <button className="btn btn-outline-primary my-2 my-sm-0" onClick={this.onSearch}>Search</button>
                </form>
            </div>
        )
    }
}