import React, { Component } from "react";
import facade from "./apiFacade";



class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", confirmation: false }
    }
   
    Registrate = (evt) => {
        evt.preventDefault();
       facade.registration(this.state.username, this.state.password);
         this.setState({confirmation: true})
    }
    onChange = (evt) => {
        this.setState({ [evt.target.id]: evt.target.value })
      }

    render() {
        if(this.state.confirmation){
            return(

                <div>
                <p>you are now Registrated </p>
                </div>


            )
        } 



        return (
            <div>
                <h2>Registrate</h2>
                <form onSubmit={this.Registrate} onChange={this.onChange} >
                    <input placeholder="User Name" id="username" />
                    <input placeholder="Password" id="password" />
                    <button>Registrate</button>
                </form>
            </div>
        )
    }
}

export default Registration;