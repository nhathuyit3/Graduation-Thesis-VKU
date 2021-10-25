import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

class Navbar extends Component{
    render(){
        return(
            <>
                <nav className="navbar">
                    <div className="nav-container">
                        <NavLink exact to="/" className="nav-logo">
                            <b>E-COMMERCE</b> <i class="fas fa-store"></i>
                        </NavLink>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <NavLink to="/shopingcart" className="nav-link">
                                    <i class="fas fa-shopping-cart"></i> Shopping cart
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
                                    <i class="fas fa-user"></i> Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar;