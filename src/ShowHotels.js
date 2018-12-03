import React, { Component } from "react";
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
        this.state = { hotels: [], showDetails: false, id: 0 }
        this.hideDetails = this.hideDetails.bind(this);
    }
    async componentDidMount() {
        const data = await facade.fetchHotels(this.state.id);
        this.setState({ hotels: data });
    }

    hideDetails() {
        this.setState({ showDetails: false });
    }

    render() {
        if (this.state.showDetails) {
            return (
                <div className="container">
                    <HotelDetails id={this.state.id.id} />
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
                filter: numberFilter(),
                style: { color: 'green' }
            }];

            const rowEvents = {
                onClick: (e, row) => {

                    let id = row.id;
                    this.setState({ showDetails: true, id: { id } })

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
                </div>
            );
        }
    }
}
