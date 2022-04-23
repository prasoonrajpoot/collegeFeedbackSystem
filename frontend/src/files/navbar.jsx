import React from "react";
import {Link} from "react-router-dom"


import { useSelector, useDispatch } from 'react-redux'



function Navbar() {

  const isLoggedIn = useSelector((state) => state.LoggedIn);


  return (
    <div className = "navbar navbar-expand-lg navbar-light bg-light">
            <Link to = "/" className = "navbar-brand">C Site </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className = "collapse navbar-collapse" id = "navbarContent">
                <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className = "nav-item">
                        <Link to ="login" className = "nav-link">{isLoggedIn ? 'Logout' : "Login"}</Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = "/signup" className = "nav-link"> Signup</Link>
                    </li>
                    <li className = "nav-item">
                        <Link to="#" className = "nav-link"> Contact</Link>
                    </li>
                    <li className = "nav-item">
                        <Link to ="#" className = "nav-link"> Help</Link>
                    </li>
                </ul>
            </div>
        </div>
  );
}

export default Navbar;
