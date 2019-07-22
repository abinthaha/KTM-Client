/* global google */

import React, { Component } from "react";

import "./index.scss";

const API_KEY = 'AIzaSyD_mW74ORjMqXYxAxjdPMUVMYeGkg8S7aw';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // this.getGoogleMaps();
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.setMapData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setMapData(nextProps);
  }

  setMapData(props) {
    this.getGoogleMaps().then(google => {
      if (typeof google === undefined) return;
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        // center: {lat: 8.568571, lng: 76.873133}
      });

      const bounds = new google.maps.LatLngBounds();
      props.data &&
        props.data.forEach(markerLocation => {
          var contentString =
            '<div id="info-window-content"><div><label>Date</label><span>' +
            new Date(parseInt(markerLocation.dateTime)).toLocaleDateString() +
            new Date(parseInt(markerLocation.dateTime)).toLocaleTimeString() +
            "</span></div> <div><label>Max Speed</label><span>" +
            markerLocation.wheelBasedSpeed +
            "</span></div> <div><label>Engine RPM</label><span>" +
            markerLocation.engineRPM +
            "</span></div></div>";

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          const myLatLng = new google.maps.LatLng(
            markerLocation.coordinates.latitude,
            markerLocation.coordinates.longitude
          );
          const marker = new google.maps.Marker({
            position: myLatLng,
            map: map
          });
          marker.addListener("click", function() {
            infowindow.open(map, marker);
          });
          bounds.extend(myLatLng);
        });
      map.fitBounds(bounds);
      var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
      // const transitLayer = new google.maps.TransitLayer();
      // transitLayer.setMap(map);
    });
  }

  getGoogleMaps() {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise(resolve => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = API_KEY + "&libraries=places";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  render() {
    return <div id="map" />;
  }
}

export default MapComponent;
