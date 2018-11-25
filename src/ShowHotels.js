import React, { Component } from "react";
import facade from "./apiFacade";
import HotelDetails from "./HotelDetails";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory from 'react-bootstrap-table2-filter'; //, { textFilter } 
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
                <div>
                    <HotelDetails id={this.state.id.id} />
                    <div className="container">
                        <button type="button" class="btn btn-success" onClick={this.hideDetails}>back</button>
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
                sort: true
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
