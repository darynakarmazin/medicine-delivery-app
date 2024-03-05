import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapComponent({ setFormData }) {
  const mapContainerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  const handleMapClick = (event) => {
    const { latLng } = event;
    const lat = latLng.lat();
    const lng = latLng.lng();

    setFormData((prevFormData) => ({
      ...prevFormData,
      address: `${lat}, ${lng}`,
    }));
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={handleMapClick}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
