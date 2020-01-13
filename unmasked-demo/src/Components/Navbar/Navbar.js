import React, {Component} from "react";
import "./Navbar.scss";

class Navbar extends Component{
  render(){
    return <nav className="navbar">
    <h1>Unmasked</h1>
    <ul className="nav-links">
        <li>
            <a href="/" className="nav-link">
                download
            </a>
        </li>
        <li>
            <a href="/" className="nav-link">
                about
            </a>
        </li>
        <li>
            <a href="/" className="nav-link">
                team
            </a>
        </li>
        <li>
            <a href="/" className="nav-link">
                faq
            </a>
        </li>
        <li>
            <a href="/" className="nav-link">
                resources
            </a>
        </li>
    </ul>
</nav>;
  }
};

export default Navbar;