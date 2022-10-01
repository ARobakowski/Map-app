import React from "react";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { StartingLocationInput } from "./StartingLocationInput";
import { DestinationInput } from "./DestinationInput";
// Pages
import { MapView } from "./MapView";
import { HomePage } from "./pages/HomePage";
// Material UI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export function App() {
  const apiKey = "mWsC6iTc0vsloeuztHTqsKNZwF6siGmpBH-fhjFzED8";
  // StartingLocationInput starts
  const [userStartingLocation, setUserStartingLocation] = useState("");
  const [startingLocationLat, setStartingLocationLat] = useState();
  const [startingLocationLng, setStartingLocationLng] = useState();

  const setStartingLocation = async (e) => {
    // e.preventDefault();

    const startingResponse = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?q=${userStartingLocation}&apiKey=${apiKey}`
    );
    setStartingLocationLat(startingResponse.data.items[0].position.lat);
    setStartingLocationLng(startingResponse.data.items[0].position.lng);
  };
  // StartingLocationInput ends
  // DestinationInput starts
  const [userDestinationLocation, setUserDestinationLocation] = useState("");
  const [destinationLocationLat, setDestinationLocationLat] = useState();
  const [destinationLocationLng, setDestinationLocationLng] = useState();

  const setDestinationLocation = async (e) => {
    // e.preventDefault();

    const destinationResponse = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?q=${userDestinationLocation}&apiKey=${apiKey}`
    );
    setDestinationLocationLat(destinationResponse.data.items[0].position.lat);
    setDestinationLocationLng(destinationResponse.data.items[0].position.lng);
  };
  // DestinationInput ends

  // let startingLat = startingLocationResponse.items[0].position.lat;
  // let startingLng = startingLocationResponse.items[0].position.lng;

  return (
    <BrowserRouter>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
            <HomePage
              setStartingLocationLng={setStartingLocationLng}
              startingLocationLng={startingLocationLng}
              setStartingLocationResponse={setStartingLocationLat}
              startingLocationResponse={startingLocationLat}
              userStartingLocation={userStartingLocation}
              setUserStartingLocation={setUserStartingLocation}
              setStartingLocation={setStartingLocation}
              userDestinationLocation={userDestinationLocation}
              setUserDestinationLocation={setUserDestinationLocation}
              setDestinationLocation={setDestinationLocation}
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Routes>
              //{" "}
              <Route
                path="/"
                element={
                  <MapView
                    startingLocationLat={startingLocationLat}
                    startingLocationLng={startingLocationLng}
                    destinationLocationLat={destinationLocationLat}
                    destinationLocationLng={destinationLocationLng}
                  />
                }
              />
            </Routes>
          </Item>
        </Grid>
      </Grid>
    </BrowserRouter>

    // <BrowserRouter>
    //   <HomePage
    //     setStartingLocationLng={setStartingLocationLng}
    //     startingLocationLng={startingLocationLng}
    //     setStartingLocationResponse={setStartingLocationLat}
    //     startingLocationResponse={startingLocationLat}
    //     userStartingLocation={userStartingLocation}
    //     setUserStartingLocation={setUserStartingLocation}
    //     setStartingLocation={setStartingLocation}
    //     userDestinationLocation={userDestinationLocation}
    //     setUserDestinationLocation={setUserDestinationLocation}
    //     setDestinationLocation={setDestinationLocation}
    //   />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <MapView
    //           startingLocationLat={startingLocationLat}
    //           startingLocationLng={startingLocationLng}
    //           destinationLocationLat={destinationLocationLat}
    //           destinationLocationLng={destinationLocationLng}
    //         />
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}
