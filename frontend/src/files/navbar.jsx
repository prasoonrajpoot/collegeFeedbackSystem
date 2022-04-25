import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.LoggedIn);

  return (
    <div class="navbar">
      <span class="navbar-element" style={{ width: 130.6 }}></span>
      <span class="navbar-element" style={{ margin: "auto" }}>
        <h2 style={{ margin: "auto" }}>IIITN Feedback System</h2>
      </span>
      <span class="navbar-element" style={{}}>
        <Link to="/login">
          <button class="form_button_blue">Log Out</button>
        </Link>
      </span>
    </div>
  );
}

export default Navbar;
