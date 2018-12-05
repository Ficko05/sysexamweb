
import React, { Component } from "react";
import facade from "./apiFacade";
import Booking from "./Booking";

export default class HotelDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { id: null, details: null }

    }
    async componentDidMount() {
        this.update(this.props.id);
    }

    update = async (id) => {
        console.log("update")
        const data = await facade.fetchHotel(id);

        this.setState({ details: data, id });
    }

    componentWillReceiveProps = (newProps) => {
        console.log(newProps);
        if (newProps.id != this.state.id) {
            this.update(newProps.id)
        }
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

                            <img src={this.state.details.picture} />

                        </div>
                    </div>

                    <Booking room={this.state.details.rooms[0]} />
                </div>}
            </>
        );
    }
}
