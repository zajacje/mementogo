import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

export const MapComponent = (location) => {
	const [latitude, updateLatitude] = useState(42.339);
	const [longitude, updateLongitude] = useState(-96.0892);
	const zoom = 15;

	useEffect(() => {
		updateLatitude(location.loc.lat);
		updateLongitude(location.loc.lng);
	}, [location]);

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDZu0D5R31HAMwAylIEDYp_rx9y7-Q1yUE" }}
				center={{
					lat: latitude,
					lng: longitude,
				}}
				defaultZoom={zoom}
			>
				{/**
				 * put markers here
				 */}
			</GoogleMapReact>
		</div>
	);
};
export default MapComponent;
