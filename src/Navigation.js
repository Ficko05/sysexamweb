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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/hotels">Show Hotels</Link>
            </li>
            <li>
              <Link exact to="/social">Social</Link>
            </li>
          </ul>
          </div>
      </Router>
    );
  }

export default Navigation;

