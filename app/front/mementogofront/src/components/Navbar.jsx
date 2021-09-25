import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Link, BrowserRouter } from "react-router-dom";

export const Navbar = (loc) => {
  const [toggle, changeToggle] = useState(false);
  const handleModalClick = () => {};

  useEffect(() => {
    if (toggle) {
      <InputModal show={toggle} />;
    }
  }, [toggle]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <BrowserRouter>
          <Link to="submit-textpost">
            <button className="button is-primary"></button>
          </Link>
        </BrowserRouter>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => (toggle ? changeToggle(false) : changeToggle(true))}
        ></button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
