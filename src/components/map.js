import React, { useState, useEffect } from "react";
import { GMap } from "primereact/gmap";
import { loadGoogleMaps, removeGoogleMaps } from "../utils/google-maps";

const Map = () => {
  const [googleMapsReady, setGoogleMapsReady] = useState(false);
  const options = {
    center: { lat: 17.858271, lng: 76.974139 },
    zoom: 12,
  };
  /*  useEffect(() => {
    loadGoogleMaps(() => {
      setGoogleMapsReady(true);
    });

    return () => {
      removeGoogleMaps();
    };
  }, []); */
  return (
    <div className="w-full p-2">
      {/* {googleMapsReady && (
        <GMap options={options} style={{ width: "100%", minHeight: "320px" }} />
      )} */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d949.3946808590212!2d76.974067!3d17.858373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x57850ee0f43bc15!2sAncient%20Shri%20Shiva%20Temple!5e0!3m2!1sen!2sus!4v1666467678483!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: "100%", height: "400px" }}
      ></iframe>
    </div>
  );
};

export default Map;
