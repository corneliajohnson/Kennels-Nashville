import React, { useContext, useState, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { useHistory, useParams } from "react-router-dom";

export const LocationForm = () => {
  const { getLocationById, updateLocation, addLocation } = useContext(
    LocationContext
  );

  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { locationId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location };
    newLocation[event.target.name] = event.target.value;
    setLocation(newLocation);
  };

  useEffect(() => {
    if (locationId) {
      getLocationById(locationId).then((location) => {
        setLocation(location);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructLocation = () => {
    if (locationId) {
      updateLocation({
        id: locationId,
        name: location.name,
        address: location.address,
      }).then(() => history.push(`/locations/detail/${location.id}`));
    } else {
      addLocation({
        name: location.name,
        address: location.address,
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
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            onChange={handleControlledInputChange}
            defaultValue={location.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationAddress">Location address: </label>
          <input
            type="text"
            id="locationAddress"
            name="address"
            required
            autoFocus
            className="form-control"
            placeholder="Location Address"
            onChange={handleControlledInputChange}
            defaultValue={location.address}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={isLoading}
        onClick={(e) => {
          e.preventDefault();
          constructLocation();
        }}
        className="btn btn-primary"
      >
        Save Location
        {locationId ? <>Save Location</> : <>Add Location</>}
      </button>
    </form>
  );
};
