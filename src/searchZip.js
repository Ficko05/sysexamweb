import React, { Component } from "react";
import facade from "./apiFacade";

export default class searchZip extends Component {
    constructor() {
        super();
        this.state = { search: '' }
    }


    updateSearch(event) {
        this.setState({ search: event.target.value })
    }
    
    async onSubmit() {
        const data = await facade.fetchHotels(this.state.search);
        this.setState({ hotels: data });
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeHolder="fx. 1200"value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    <button onClick={() => this.onSubmit()}>Submit</button>
                </form>

            </div>

        )
    }
}