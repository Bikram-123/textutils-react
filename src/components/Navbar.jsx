import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Navbar(props) {
  const [themeColor, setThemeColor] = useState("#FFFFFF");

  const onhandleChange = (e) => {
    setThemeColor(e.target.value);
    props.setBackgroundColor(themeColor);
  };

  useEffect(() => {
    props.setBackgroundColor(themeColor);
  }, [themeColor, props]);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary navbar bg-${props.mode}`}
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                {props.about}
              </Link> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-1 my-1`}
          >
            <div id="colorpicker-control">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Choose a color to enable dark mode
              </label>
              <input
                id="color-picker"
                type="color"
                className="form-check-input"
                value={themeColor}
                onChange={onhandleChange}
              />
            </div>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-1 my-1`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleMode();
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "Enable" : "Disable"} Dark mode
            </label>
          </div>
          {/* <div
            className={`form-check form-switch text-${
              [props.mode === "light" ? "dark" : "light"
            } mx-1 my-1`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Green mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func,
};

Navbar.defaultProps = { title: "TEXTUTILS", about: "About" };

export default Navbar;
