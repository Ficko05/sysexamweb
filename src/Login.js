import React, { Component } from "react";
import facade from "./apiFacade";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }

  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
    this.props.onChange();
  }
  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }, () => {
    this.props.onChange();

      }));
      
  }
  render() {
    return (
      <div className="container">
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            <LoggedIn />
            <button onClick={this.logout}>Logout</button>
          </div>)}
      </div>
    )
  }
}

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }
  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }
  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login} onChange={this.onChange} >
          <input className="form-control mr-sm-2" placeholder="User Name" id="username" />
          <input className="form-control mr-sm-2" placeholder="Password" id="password" />
          <button className="btn btn-outline-primary my-2 my-sm-0">Login</button>
        </form>
      </div>
    )
  }
}
class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Fetching!!" };
  }
  componentDidMount() {
    facade.fetchData().then(res => this.setState({ dataFromServer: res }));
  }
  render() {
    return (
      <div>
        <h3>{this.state.dataFromServer}</h3>
      </div>
    )
  }
}





export default Login; 
