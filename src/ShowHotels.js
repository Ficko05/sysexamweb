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
        this.state = { hotels: [], showDetails: false, id: 0, min: null, max: null }
        this.hideDetails = this.hideDetails.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = { hotels: [] }

    }
    async componentDidMount() {
        const hotels = await facade.fetchHotels(this.state.id);
        this.setState({ hotels: hotels });
    }


    hideDetails() {
        this.setState({ showDetails: false });
    }
    changeHandler(event) {
        event.preventDefault();
        this.setState({
            min: event.target.min.value, max: event.target.max.value
        })
    }

    async submitHandler(event) {
        event.preventDefault();

        const data = await facade.fetchHotelFromPrice(event.target.min.value, event.target.max.value)
        this.setState({ hotels: data });
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
                // filter: numberFilter(),
                style: { color: 'green' }
            }];

            const rowEvents = {
                onClick: (e, hotel) => {
                    this.props.onClickShowDetails(hotel.id)
                }
            }
            return (

                <div className="container">

                    <BootstrapTable
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


                    <form action="/action_page.php" onChange={this.changeHandler} onSubmit={this.submitHandler}>
                        <input type="number" name="min" min="1" max="99999" />
                        <input type="number" name="max" min="1" max="99999" />
                        <input type="submit" />
                    </form>

                </div>




            );
        }
    }
}
