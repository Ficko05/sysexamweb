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
                <p>you are now signed up</p>
                </div>


            )
        } 



        return (
            <div>
                <h2>Sign Up</h2>
                <form className="form-inline mx-auto formsearch" onSubmit={this.Registrate} onChange={this.onChange} >
                    <input className="form-control mr-sm-2" placeholder="User Name" id="username" />
                    <input className="form-control mr-sm-2" placeholder="Password" id="password" />
                    <button className="btn btn-outline-primary my-2 my-sm-0">Create</button>
                </form>
            </div>
        )
    }
}

export default Registration;