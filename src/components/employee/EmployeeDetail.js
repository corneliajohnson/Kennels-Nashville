import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useParams, useHistory } from "react-router-dom";

export const EmployeeDetail = () => {
  const { getEmployeeById, deleteEmployee } = useContext(EmployeeContext);

  const [employee, setEmployee] = useState([]);
  const [location, setLocation] = useState([]);

  const { employeeId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getEmployeeById(employeeId).then((response) => {
      setEmployee(response);
      setLocation(response.location);
    });
  }, []);

  return (
    <section className="employee">
      <h3 className="employee_name">{employee.name}</h3>
      <div className="employee_location">Location: {location.name}</div>
      <button
        onClick={() => {
          deleteEmployee(employee.id).then(() => {
            history.push("/employees");
          });
        }}
      >
        Delete Employee
      </button>
      <button
        onClick={() => {
          history.push(`/employees/edit/${employee.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
