
import React, { Component } from "react";
import facade from "./apiFacade";
import Booking from "./Booking";



export default class HotelDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { details: null }

    }
    async componentDidMount() {
        const data = await facade.fetchHotel(this.props.id);
        this.setState({ details: data })
    }


    render() {
        return (
            <>
                {this.state.details && <div className="container">
                    <div className="container">
                        <div>
                            <h1>
                                {this.state.details.name}
                            </h1>
                        </div>
                        <br />
                        <div>
                            <h4>
                                Description:
                    </h4>
                            <p>
                                {this.state.details.description}
                            </p>
                        </div>
                        <br />
                        <div>
                            <h4>
                                Rating: {this.state.details.rating}
                            </h4>

                        </div>
                        <br />
                        <div>
                            <h4>
                                Zip code: {this.state.details.zipCode}
                            </h4>
                            <div>
                                <img src={this.state.details.picture} />
                                <img src={this.state.details.picture} />
                                <img src={this.state.details.picture} />
                            </div>
                        </div>
                    </div>

                    <Booking room={this.state.details.rooms[0]} />
                </div>}
            </>
        );
    }
}
