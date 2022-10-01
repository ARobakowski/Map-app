import React from "react";
// Material UI
import Button from "@mui/material/Button";

export function ShowRouteButton({ setStartingLocation, setDestinationLocation}) {
  return (
      <Button variant="contained" onClick={function() { setStartingLocation(); setDestinationLocation(); }}>
        Show route
      </Button>
  );
}
