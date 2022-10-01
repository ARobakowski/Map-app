import React from "react";
import { useEffect } from "react";
import * as L from "leaflet";
import "leaflet-routing-machine";

export function MapView({ startingLocationLat, startingLocationLng, destinationLocationLat, destinationLocationLng }) {

//   if (L.DomUtil.get('map') !== undefined) { 
//     L.DomUtil.get('map')._leaflet_id = null; 
//  }

  useEffect(() => {
    if (L.DomUtil.get('map') !== undefined) { 
      L.DomUtil.get('map')._leaflet_id = null; 
   }
    var map = L.map("map").setView([52.237049, 21.017532], 13);

    //osm layer
    var osm = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );
    osm.addTo(map);
    // Marker
    var marker = L.marker([12, 12]).addTo(map);

    var routeControl = L.Routing.control({
      waypoints: [L.latLng(startingLocationLat, startingLocationLng), L.latLng( destinationLocationLat, destinationLocationLng)], routeWhileDragging: true, dragging: true,
    }).addTo(map);

    routeControl.on('routesfound', function(e) {
      var routes = e.routes;
      var summary = routes[0].summary;
      // alert time and distance in km and minutes
      alert('Total distance is ' + summary.totalDistance / 1000 + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');
    });
  }, [startingLocationLat, startingLocationLng, destinationLocationLat, destinationLocationLng]);

  return <div id="map" style={{ height: 500 }}></div>;
}
