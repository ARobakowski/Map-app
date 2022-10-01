import React from "react";
// Material UI
import TextField from "@mui/material/TextField";

export function DestinationInput({ userDestinationLocation, setUserDestinationLocation, setDestinationLocation}) {
  return (
    <div>
      <TextField value={userDestinationLocation} label="Destination" onChange={(e) => setUserDestinationLocation(e.target.value)} />
    </div>
  );
}
