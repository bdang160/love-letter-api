import React, { Component } from "react";
import './NavBar.css';
import Home from '../Home/Home.js';
import Documentation from "../Documentation/Documentation.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Navbar extends Component{
    render() {
        return (
          <Router>
            <div>
              <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/documentation">Documentation</Link></li>
              </ul>

              <Switch>
                <Route path="/documentation">
                  <Documentation />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        );
    }
}

export default Navbar;