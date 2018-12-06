import React, { Component } from "react";
import ShowHotels from "./ShowHotels";
import Favourite from "./Favourites"
import HotelDetails from "./HotelDetails";


export default class Hotels extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 0 }
        this.hideDetails = this.hideDetails.bind(this);
        this.onClickShowDetails = this.onClickShowDetails.bind(this);
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
                        <button type="button" className="btn btn-outline-primary my-2 my-sm-0" onClick={this.hideDetails}>back</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <ShowHotels id={this.state.id} onClickShowDetails={this.onClickShowDetails} />
                </div>
            );
        }
    }
}