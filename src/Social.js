import React, { Component } from "react";

import facade from "./apiFacade";

export default class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {wasPosted: false}
    }

    postToSocial = async () => {
        const socialJSON = await facade.postToSocial();
        window.open(socialJSON.url, 'test', 'width=800, height=800');
        
        const statusChecker = setInterval(async () => {
            const isPosted = await facade.getStatusSocial(socialJSON.id);
            if (isPosted) {
                clearInterval(statusChecker);
                this.setState({wasPosted: true})
            }
        }, 3000);
    }

    render() {
        return (
            <div>
                <form>
                    <input type="button" value="Social" onClick={this.postToSocial} />
                </form>
                {this.state.wasPosted && <p>
                    Posted
                    </p>}
            </div>
        )
    };
}