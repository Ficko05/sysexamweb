import React from "react";
import { HashRouter as Router, NavLink as Link } from "react-router-dom";
import SearchInput from "./SearchInput";

/*const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">login</NavLink>

        </div>
    );
}*/

const Navigation = () => {
  return (
    <Router>
      <div>
        <header className="fluid-container">
          <nav className="navbar navbar-expand-lg navbar-dark justify-content-lg-around">
            <a className="navbar-brand" href="#/" style={{ marginLeft: "5%" }}>
              <img src="https://cdn.discordapp.com/attachments/486794327650074626/519505405752115215/logo1.png" className="d-inline-block align-middle" alt="logo" />
            </a>
            <SearchInput />
            <div>
              <ul className="navbar-nav d-lg-flex align-items-lg-center">

                <li className="nav-item active">
                  <Link className="nav-link" exact to="/">Home</Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="/hotels">Show Hotels</Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="/registration">Sign Up</Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="/orders">Orders</Link>
                </li>

                <li className="nav-item ml-lg-4" style={{ textAlign: "right" }}>
                  <a className="nav-link" data-toggle="modal" href="#signin" data-target="#signin"
                    style={{ fontSize: "18px" }}>
                    <i className="far fa-user-circle"></i> Log in
             </a>
                </li>

              </ul>
            </div>
          </nav>
        </header>
        <div className="modal fade" tabindex="-1" role="dialog" id="signin">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Sign In</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <form action="" method="">

                  <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password"
                      placeholder="Password" />
                  </div>

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="RememberMe" name="RememberMe"
                      style={{ marginLeft: "0", marginTop: "6px" }} />
                    <label className="form-check-label" for="RememberMe">Remember Me</label>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <a href="#" role="button text-right" data-toggle="modal" href="#forgotpass"
                      data-target="#forgotpass" data-dismiss="modal" aria-label="Close"> Forgot Password ? </a>

                    <Link className="nav-link" to="/registration">Sign Up</Link>

                  </div>

                  <button type="submit" className="btn btn-primary" name="signinbutton">Sign in</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default Navigation;

