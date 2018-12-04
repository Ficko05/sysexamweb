import React, { Component } from "react";
import HotelDetails from "./HotelDetails";
import facade from "./apiFacade";



export default class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state = { hotels: [] };
    }
    async componentDidMount() {
        const hotels = await facade.fetchFavourites()
        this.setState({ hotels: hotels });
    }
    render() {
        return (
            <div class="col-5 col-sm-4 col-md-3 col-lg-2 sidebar shadow ml-auto">
                <div class="innerdiv">

                    <div>

                        <div className="card text-white">
                            {this.state.hotels.map(hotel =>
                                <div className
                                    ="card text-white" onClick={() => this.props.onClickShowDetails(hotel.id)}>
                                    <img className
                                        ="card-img" src={hotel.picture} alt="Card image" />
                                    <div className
                                        ="card-img-overlay">
                                        <a ><h5 className
                                            ="card-title">{hotel.name}</h5></a>
                                        <p className
                                            ="card-text">{hotel.description.slice(0, 10)}...</p>
                                        <input type="hidden" name="id" value={hotel.id.value} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}