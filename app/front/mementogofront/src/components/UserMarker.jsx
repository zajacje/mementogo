import React, { useState } from "react";
import Marker from "google-map-react";

const UserMarker = ({ lat, lng, input }) => {
	const [latitude, updateLatitude] = useState(lat);
	const [longitude, updateLongitude] = useState(lng);
	const [text, updateText] = useState(input);

	return <div></div>;
};

/**  
<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />;
*/
