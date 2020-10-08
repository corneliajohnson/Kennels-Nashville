import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import { EmployeeContext } from "../employee/EmployeeProvider";
import { AnimalContext } from "../animal/AnimalProvider";
import "./Location.css";
import { useParams, useHistory } from "react-router-dom";

export const LocationDetail = () => {
  const { getLocationById, deleteLocation } = useContext(LocationContext);
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { animals, getAnimals } = useContext(AnimalContext);

  const [location, setLocation] = useState({});

  const { locationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getLocationById(locationId)
      .then((response) => {
        setLocation(response);
      })
      .then(getEmployees)
      .then(getAnimals);
  }, []);

  let matchingEmployees = employees.filter(
    (employee) => employee.locationId === parseInt(locationId)
  );

  let matchingAnimals = animals.filter(
    (animal) => animal.locationId === parseInt(locationId)
  );

  return (
    <section className="location">
      <h3 className="location_name">{location.name}</h3>
      <div className="location_address">{location.address}</div>
      <h4>Employees</h4>
      <p>{matchingEmployees.map((employee) => employee.name).join(", ")}</p>
      <h4>Animals</h4>
      <p>{matchingAnimals.map((animal) => animal.name).join(", ")}</p>
      <button
        onClick={() => {
          deleteLocation(location.id).then(() => {
            history.push("/locations");
          });
        }}
      >
        Delete Location
      </button>
      <button
        onClick={() => {
          history.push(`/locations/edit/${location.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
