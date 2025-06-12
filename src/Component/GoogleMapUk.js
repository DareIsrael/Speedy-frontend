import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh" // Or adjust as needed
};

const center = {
  lat: 51.509865, // United Kingdom
  lng: -0.118092
};

function GoogleMapUk() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAuzwWG1h1nUVb4nWGBQsY6JLkgp1lJRtA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {/* Add markers or overlays here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapUk;
