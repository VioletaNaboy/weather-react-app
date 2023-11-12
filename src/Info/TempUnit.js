import React, { useState } from "react";

export const TempUnit = ({ temp, city }) => {
  const [units, setUnits] = useState("C");

  return (
    <div>
      {units === 'C' ? (
        <div>
          <h2>
            It is currently {temp}°C{" "}/{" "}<button type="button" onClick={() => setUnits("F")}>
            °F
          </button>{" "} in {city}
          </h2>
          
        </div>
      ) : (
        <div>
          <h2>
            It is currently {Math.round(temp * (9 / 5) + 32)}°F{" "}/{" "}<button type="button" onClick={() => setUnits("C")}>
            °C
          </button>{" "} in {city}
          </h2>
          
        </div>
      )}
    </div>
  );
};