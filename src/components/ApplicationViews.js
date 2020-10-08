import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { AnimalForm } from "./animal/AnimalForm";
import { CustomerForm } from "./customer/CustomerForm";
import { LocationForm } from "./location/LocationForm";
import { EmployeeForm } from "./employee/EmployeeForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { CustomerDetail } from "./customer/CustomerDetail";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route exact path="/animals">
          <AnimalSearch />
          <AnimalList />
        </Route>
      </AnimalProvider>

      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <CustomerProvider>
        <Route exact path="/customers/create">
          <CustomerForm />
        </Route>
      </CustomerProvider>

      <LocationProvider>
        <Route exact path="/locations/create">
          <LocationForm />
        </Route>
      </LocationProvider>

      <LocationProvider>
        <EmployeeProvider>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </EmployeeProvider>
      </LocationProvider>

      <AnimalProvider>
        <Route exact path="/animals/detail/:animalId">
          <AnimalDetail />
        </Route>
      </AnimalProvider>

      <EmployeeProvider>
        <Route exact path="/employees/detail/:employeeId">
          <EmployeeDetail />
        </Route>
      </EmployeeProvider>

      <AnimalProvider>
        <EmployeeProvider>
          <LocationProvider>
            <Route exact path="/locations/detail/:locationId">
              <LocationDetail />
            </Route>
          </LocationProvider>
        </EmployeeProvider>
      </AnimalProvider>

      <CustomerProvider>
        <Route exact path="/customers/detail/:customerId">
          <CustomerDetail />
        </Route>
      </CustomerProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route path="/animals/edit/:animalId(\d+)">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <CustomerProvider>
        <Route path="/customers/edit/:customerId(\d+)">
          <CustomerForm />
        </Route>
      </CustomerProvider>

      <LocationProvider>
        <EmployeeProvider>
          <Route exact path="/employees/edit/:employeeId(\d+)">
            <EmployeeForm />
          </Route>
        </EmployeeProvider>
      </LocationProvider>

      <LocationProvider>
        <Route exact path="/locations/edit/:locationId(\d+)">
          <LocationForm />
        </Route>
      </LocationProvider>
    </>
  );
};
