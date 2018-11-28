
import React, { Component } from "react";
import facade from "./apiFacade";



export default class HotelDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { details: [] }

    }
    async componentDidMount() {
        const data = await facade.fetchHotel(this.props.id);
        this.setState({ details: data })  
    }

    
    render() {
        return (
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
                </div>
                </div>
            </div>
        );
    }
}
