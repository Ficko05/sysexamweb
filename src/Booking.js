import React, { Component } from 'react';
import facade from "./apiFacade";


export default class Booking extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);

        var body = {
            startDate: event.target.startDate.value,
            days: event.target.days.value,
            roomID: this.props.roomID

        }

    
        console.log(body)
        facade.postBooking(body);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    render() {

        return (
            <div className="container">
                <h4>Booking</h4>
                <form onSubmit={this.handleSubmit}>
                    <input name="startDate" type="date" />
                    <input name="days" type="number" defaultValue="1" />
                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}