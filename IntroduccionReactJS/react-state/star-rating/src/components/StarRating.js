import React, { useState } from "react";
import { Star } from "./Star";
import { createArray } from "./lib";

function StarRating({ style = {}, totalStars = 10, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)} 
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars.
      </p>
    </div>
  );
}

export default StarRating;