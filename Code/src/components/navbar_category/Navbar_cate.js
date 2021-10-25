import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import './navbar_cate.css';

class NavbarCate extends Component{
    render(){
        return(
            <>
                <nav className="navbar_cate">
                    <div className="nav-container">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <NavLink to="/mobile" className="nav-link-cate">
                                    Mobile
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/laptop" className="nav-link-cate">
                                    Laptop
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/smartwatch" className="nav-link-cate">
                                    Smart Watch
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/tablet" className="nav-link-cate">
                                    Tablet
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutus" className="nav-link-cate">
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
export default NavbarCate;