import React from "react";

function TentacleSix(props) {
    return (
        <div className="tentacle-six">
        <span className="number-readout">
          {props.magicNumber}
        </span>
      </div>
    );
  }

export default TentacleSix;