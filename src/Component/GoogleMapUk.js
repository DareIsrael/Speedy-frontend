import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GoogleMapUk extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 51.509865, // United Kingdom
          lng: -0.118092,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAuzwWG1h1nUVb4nWGBQsY6JLkgp1lJRtA" // Replace with your API key
})(GoogleMapUk);
