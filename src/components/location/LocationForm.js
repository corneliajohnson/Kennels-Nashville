import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { LocationContext } from "./LocationProvider";

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext);
  const history = useHistory();

  const name = useRef(null);
  const address = useRef(null);

  const constructNewLocation = () => {
    if (name.current.value === "" || address.current.value === "") {
      window.alert("Complete all fields");
    } else {
      addLocation({
        name: name.current.value,
        address: address.current.value,
      }).then(() => history.push("/locations"));
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationName">Location name: </label>
          <input
            type="text"
            id="locationName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationAddress">Location address: </label>
          <input
            type="text"
            id="locationAddress"
            ref={address}
            required
            autoFocus
            className="form-control"
            placeholder="Location Address"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          constructNewLocation();
        }}
        className="btn btn-primary"
      >
        Save Location
      </button>
    </form>
  );
};
