import React, { Component } from "react";
import './NavBar.css';

class Navbar extends Component{
    render() {
        return (
            <div>
              <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Documentation</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar;