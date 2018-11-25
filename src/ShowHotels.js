import React, { Component } from "react";
import facade from "./apiFacade";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory from 'react-bootstrap-table2-filter'; //, { textFilter } 
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class ShowHotels extends Component {
    constructor(props) {
        super(props);
        this.state = { hotels: [], showDetails: false, id: 0}
    }
    async componentDidMount() {
        const data = await facade.fetchHotels(this.state.id);
        this.setState({ hotels: data });
    }

   
    render() {
        if(this.state.showDetails){
            return <HotelDetails id={this.state.id.id}/>;
        } else{
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

          const rowEvents = {
            onClick: (e, row) => {
    
                let id = row.id;
                this.setState({showDetails: true, id: {id}})
    
            }
    }

        
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
                rowEvents={rowEvents}
            />
            </div>
        );
    }
}
}

class HotelDetails extends Component {
constructor(props){
    super(props);
    this.state = { details: []}

}
async componentDidMount() {
    const data = await facade.fetchHotel(this.props.id);
    this.setState({ details: data })
    console.log(this.state.details);
}
render() {
    return(
    <div>
        Name: {this.state.details.name}
        <br />
        Description: {this.state.details.description}
        <br />
        Rating: {this.state.details.rating}
        <br />
        Zip code: {this.state.details.zipCode}
    </div>
    );
}
}
