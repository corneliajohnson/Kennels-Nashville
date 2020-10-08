import React, { useState, createContext } from "react";

export const LocationContext = createContext();

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch(
      "http://localhost:8088/locations/?_embed=employees&_embed=animals"
    )
      .then((res) => res.json())
      .then(setLocations);
  };

  const addLocation = (locationObj) => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationObj),
    }).then(getLocations);
  };

  const getLocationById = (id) => {
    return fetch(
      `http://localhost:8088/locations/${id}?_embed=employees&_embed=animals`
    ).then((res) => res.json());
  };

  const deleteLocation = (id) => {
    return fetch(`http://localhost:8088/locations/${id}`, {
      method: "DELETE",
    }).then(getLocations);
  };
  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
        addLocation,
        getLocationById,
        deleteLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
