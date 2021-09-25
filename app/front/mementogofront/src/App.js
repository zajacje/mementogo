import React, { useState, useEffect } from "react";
import "./App.css";
import { MapComponent } from "./components/MapComponent";
import InputModal from "./components/InputModal";
import Navbar from "./components/Navbar";

function App() {
	const [location, updateLocation] = useState({});

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
			<nav>
				<Navbar />
			</nav>
			<div className="map">
				<MapComponent loc={location} />
			</div>
		</div>
	);
}

export default App;
