import React, { Component } from "react";
import facade from "./apiFacade";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class ShowHotels extends Component {
    constructor(props) {
        super(props);



        this.state = { hotels: [], hotelsShortDescription: [], msg: "Fetching hotels.." }
    }
    async componentDidMount() {
        const data = await facade.fetchHotels();
        this.setState({ hotels: data })
    }
    render() {
        const columns = [{
            dataField: 'name',
            text: 'Name',
   //         sort: true,
  //          filter: textFilter()
          }, {
            dataField: 'description',
            text: 'Description',
          }, {
            dataField: 'rating',
            text: 'Rating',
   //         sort: true
          }, {
            dataField: 'zipCode',
            text: 'Zip Code'
          }];

        return (
            <div>
                <BootstrapTable
                striped
                hover
                bootstrap4
                keyField='id'
                data={this.state.hotels}
                columns={columns}
                filter={filterFactory()}
                pagination={paginationFactory()}
            />
            </div>
        );
    }
}