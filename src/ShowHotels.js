import React, { Component } from "react";
import Favourites from "./Favourites";
import facade from "./apiFacade";
import HotelDetails from "./HotelDetails";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { numberFilter, textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class ShowHotels extends Component {
    constructor(props) {
        super(props);
        this.state = { hotels: [], showDetails: false, id: 0, min: null, max: null };
        this.onClickShowDetails = this.onClickShowDetails.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        console.log(this.state)


    }
    async componentDidMount() {
        const hotels = await facade.fetchHotels(this.state.id);
        this.setState({ hotels: hotels });
    }
    onClickShowDetails(id) {
        this.setState({ id: id, showDetails: true })
        console.log(id);
    }

    async submitHandler(event) {
        event.preventDefault();
        const hotels = await facade.fetchHotelFromPrice(event.target.min.value, event.target.max.value);
        this.setState({ hotels: hotels });
    }
    changeHandler(event) {
        event.preventDefault();
        this.setState({ min: event.target.min.value, max: event.target.max.value });
    }

    render() {
        if (this.state.showDetails) {
            return (
                <div className="container">
                    <HotelDetails id={this.state.id} />
                    <div className="container">
                        <button type="button" className="btn btn-success" onClick={this.hideDetails}>back</button>
                    </div>
                </div>
            );
        } else {
            const columns = [{
                dataField: 'name',
                text: 'Name',
                sort: true,
                //          filter: textFilter()
            }, {
                dataField: 'description',
                text: 'Description',
            }, {
                dataField: 'rating',
                text: 'Rating',
                sort: true
            }, {
                dataField: 'zipCode',
                text: 'Zip Code',
                sort: true,
                filter: textFilter()
            }, {
                dataField: 'lowestPrice',
                text: 'Lowest price per night',
                sort: true,
                style: { color: 'green' }
            }];

            const rowEvents = {
                onClick: (e, hotel) => {
                    this.onClickShowDetails(hotel.id)
                }
            }
            return (

                <div>

                    <BootstrapTable className="table table-striped table-hover table-responsive"
                        striped
                        hover
                        bootstrap4
                        keyField='id'
                        data={this.state.hotels}
                        columns={columns}
                        filter={filterFactory()}
                        pagination={paginationFactory()}
                        rowEvents={rowEvents}
                    />

                    <form className="form-inline mx-auto formsearch" action="/action_page.php" onChange={this.changeHandler} onSubmit={this.submitHandler}>
                        <input className="form-control mr-sm-2" type="text" name="min" placeholder="Minimum Price" />
                        <input className="form-control mr-sm-2" type="text" name="max" placeholder="Maximum Price" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Submit</button>
                    </form>

                </div>
            );
        }
    }
}
