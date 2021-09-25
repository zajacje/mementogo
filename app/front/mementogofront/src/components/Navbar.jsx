import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import InputModal from "./InputModal";
import AddTextpost from "./add-textpost.component";

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
        <a href="/textposts" className="navbar-brand">
          Navbar
        </a>
        {/*<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <BrowserRouter>
              <Link to={"/textposts"} className="nav-link">
                Textposts
              </Link>
            </BrowserRouter>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/add" component={AddTextpost} />
          </Switch>
  </div>*/}

        <BrowserRouter>
          <Link to="submit-textpost">
            <button className="is-button is-primary">New post</button>
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
