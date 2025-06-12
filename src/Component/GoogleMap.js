import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%", // You can also set this in your parent div
};

const center = {
  lat: 9.0820, // Nigeria
  lng: 8.6753,
};

function GoogleMapNigeria() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAuzwWG1h1nUVb4nWGBQsY6JLkgp1lJRtA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {/* You can add Markers or other map elements here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapNigeria;
