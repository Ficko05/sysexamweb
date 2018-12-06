import React, { Component } from "react";
import facade from "./apiFacade";
import { Redirect } from "react-router-dom";


export default class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state = { hotels: [], id: 0 };
        this.onClickShowDetails = this.onClickShowDetails.bind(this);
        this.redirect = false
    }
    async componentDidMount() {
        const hotels = await facade.fetchFavourites()
        this.setState({ hotels: hotels });
    }

    onClickShowDetails(hotel) {
        this.redirect = true;
        this.setState({ id: hotel.id }, () => this.redirect = false)

    }



    render() {
        return (
            <div className="col-5 col-sm-4 col-md-3 col-lg-2 sidebar shadow ml-auto">
                {this.redirect && <Redirect to={"/HotelDetails/" + this.state.id} />}
                <div className="innerdiv">
                    {this.state.hotels.map(hotel =>
                        <div>
                            <div key={hotel.id} className="card text-white">
                                <div className="card text-white" onClick={() => this.onClickShowDetails(hotel)}>
                                    <img className="card-img" src={hotel.picture} alt="Card image" />
                                    <div className="card-img-overlay">
                                        <a ><h5 className="card-title">{hotel.name}</h5></a>
                                        <p className="card-text">{hotel.description.slice(0, 10)}...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}