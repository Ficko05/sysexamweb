import React, { Component } from "react";
import facade from "./apiFacade";
import HotelDetails from "./HotelDetails";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { numberFilter, textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: [], showDetails: false, id: 0 }
    this.hideDetails = this.hideDetails.bind(this);
    this.state = { orders: [] }
  }

  async componentDidMount() {

    let orders = await facade.fetchOrders(this.state.id);
    orders.map(order => {
      order.roomprice = order.roomDTO.price;
    })

    this.setState({ orders: orders });
  }

  onClickShowDetails(id) {
    this.setState({ id: id, showDetails: true })
    console.log(id);
  }

  hideDetails() {
    this.setState({ showDetails: false });
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
        dataField: 'days',
        text: 'days',
      }, {
        dataField: 'roomprice',
        text: 'price',
        sort: true
      }, {
        dataField: 'startDate',
        text: 'start date',
        sort: true,
      }];

      const rowEvents = {
        onClick: (e, hotel) => {
          this.onClickShowDetails(hotel.id)
        }
      }
      console.log(this.state.orders);
      return (

        <div className="container">

          <BootstrapTable
            striped
            hover
            bootstrap4
            keyField='id'
            data={this.state.orders}
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
