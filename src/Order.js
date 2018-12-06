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
    this.state = { orders: [], showDetails: false, id: 0}
    this.hideDetails = this.hideDetails.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = { orders: [] }

  }
  async componentDidMount() {
    const orders = await facade.fetchOrders(this.state.id);
    this.setState({ orders: orders });
  }
  onClickShowDetails(id) {
    this.setState({ id: id, showDetails: true })
    console.log(id);
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
      }, {
        dataField: 'days',
        text: 'days',
      }, {
        dataField: 'price',
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
