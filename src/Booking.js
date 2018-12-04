import React, { Component } from 'react';
import facade from "./apiFacade";


export default class Booking extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { orderConfirmation: false };
        this.state = { wasPosted: false };
    }

    async handleSubmit(event) {
        event.preventDefault();
        var body = {
            startDate: event.target.startDate.value,
            days: event.target.days.value,
            roomID: this.props.room.id
        }

        const order = await facade.postBooking(body);
        console.log(order);
        this.setState({ orderConfirmation: true, receipt: order });


    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    postToSocial = async () => {
        const socialJSON = await facade.postToSocial();
        window.open(socialJSON.url, 'test', 'width=800, height=800');

        const statusChecker = setInterval(async () => {
            const isPosted = await facade.getStatusSocial(socialJSON.id);
            if (isPosted) {
                clearInterval(statusChecker);
                this.setState({ wasPosted: true })
            }
        }, 3000);
    }

    render() {
        if (this.state.orderConfirmation) {
            return (
                <div className="container">
                    <div>
                        <h4>Order info</h4>
                    </div>
                    <div>
                        <p>Start date: {this.state.receipt.startDate}</p>
                    </div>
                    <div>
                        <p>Number of days: {this.state.receipt.days}</p>
                    </div>
                    <p>Price for room pr day: {this.state.receipt.roomDTO.price}</p>

                    <div>
                        <p>Total price: {this.state.receipt.roomDTO.price * this.state.receipt.days}</p>
                    </div>
                    <div>
                        <form>
                            <input type="button" value="Social" onClick={this.postToSocial} />
                        </form>
                        {this.state.wasPosted && <p>
                            Posted
                    </p>}
                    </div>
                </div>
            );
        } else
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