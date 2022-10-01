import React from "react";
// Material UI
import TextField from "@mui/material/TextField";

export function StartingLocationInput({ userStartingLocation, setUserStartingLocation, setStartingLocation}) {
  return (
    <div>
      <TextField value={userStartingLocation} label="Starting location" onChange={(e) => setUserStartingLocation(e.target.value)} />
    </div>
  );
}
