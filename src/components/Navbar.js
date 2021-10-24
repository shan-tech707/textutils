import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            {/* bg primary btn div */}
            <div
              className="bg-primary rounded mx-2"
              onClick={() => props.toggleMode("primary")}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            {/* bg-danger btn div */}
            <div
              className="bg-danger rounded mx-2"
              onClick={() => props.toggleMode("danger")}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            {/* bg-success btn div */}
            <div
              className="bg-success rounded mx-2"
              onClick={() => props.toggleMode("success")}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            {/* bg-warning btn div */}
            <div
              className="bg-warning rounded mx-2"
              onClick={() => props.toggleMode("warning")}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          {/* Toggle Button */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={() => props.toggleMode("null")}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

// Navbar.defaultProps={title:"Zee Coding"};
