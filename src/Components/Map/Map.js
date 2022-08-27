import React from "react";
import "./map.css";

const Map = () => {
  return (
    <>
      <div className="container-fluid map_fluid">
        <div className="container">
          <iframe
            width="100%"
            height="520"
            src="https://maps.google.com/maps?q=lahore&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
