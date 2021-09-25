import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { MapComponent } from "./components/MapComponent";
import InputModal from "./components/InputModal";
import Navbar from "./components/Navbar";
import AddTextpost from "./components/add-textpost.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [location, updateLocation] = useState({});
  const [toggle, changeToggle] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        updateLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      /* geolocation IS NOT available */
      console.log("no geo available");
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Navbar loc={location} />
        </nav>

        <Switch>
          <Route path="/submit-textpost" component={AddTextpost}>
            <AddTextpost />
          </Route>
          <Route
            path="/"
            render={(props) => <MapComponent {...props} loc={location} />}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
