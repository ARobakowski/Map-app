import React from "react";
// Components
import { StartingLocationInput } from "../StartingLocationInput";
import { DestinationInput } from "../DestinationInput";
import { ShowRouteButton } from "../ShowRouteButton";
// Material UI
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export function HomePage({
  startingLocationResponse,
  destinationLocationResponse,
  startingResponse,
  userStartingLocation,
  setUserStartingLocation,
  setStartingLocation,
  userDestinationLocation,
  setUserDestinationLocation,
  setDestinationLocation,
  destinationResponse,
}) {
  return (
    <Box component="span" sx={{ p: 2 }}>
      <StartingLocationInput
        startingLocationResponse={startingLocationResponse}
        startingResponse={startingResponse}
        userStartingLocation={userStartingLocation}
        setUserStartingLocation={setUserStartingLocation}
        setStartingLocation={setStartingLocation}
      />
      <div style={{margin: 5}}>
      <DestinationInput
        destinationLocationResponse={destinationLocationResponse}
        destinationResponse={destinationResponse}
        userDestinationLocation={userDestinationLocation}
        setUserDestinationLocation={setUserDestinationLocation}
        setDestinationLocation={setDestinationLocation}
      />
      </div>
      <ShowRouteButton
        setStartingLocation={setStartingLocation}
        setDestinationLocation={setDestinationLocation}
      />
    </Box>
  );
}
