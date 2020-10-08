import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import { useHistory } from "react-router-dom";
import { CustomerCard } from "./CustomerCard";
import "./Customer.css";

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);
  const history = useHistory();

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <>
      <h2>Customers</h2>
      <button
        onClick={() => {
          history.push("/customers/create");
        }}
      >
        Add Customer
      </button>

      <div className="customers">
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    </>
  );
};
