import React from "react";
import { HashRouter as Router, NavLink as Link} from "react-router-dom";


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
          <ul className="header">
            <li>
              <Link exact to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/hotels">Imagine a search bar</Link>
            </li>
          </ul>
          <hr />
          </div>
      </Router>
    );
  }

export default Navigation;

