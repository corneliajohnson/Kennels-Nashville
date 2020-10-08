import React, { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
      .then((res) => res.json())
      .then(setCustomers);
  };

  const addCustomer = (customerObj) => {
    return fetch("http://localhost:8088/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerObj),
    }).then(getCustomers);
  };

  const getCustomerById = (id) => {
    return fetch(`http://localhost:8088/customers/${id}`).then((res) =>
      res.json()
    );
  };

  const deleteCustomer = (id) => {
    return fetch(`http://localhost:8088/customers/${id}`, {
      method: "DELETE",
    }).then(getCustomers);
  };

  const updateCustomer = (customer) => {
    return fetch(`http://localhost:8088/customers/${customer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then(getCustomers);
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        getCustomers,
        addCustomer,
        getCustomerById,
        deleteCustomer,
        updateCustomer,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};
