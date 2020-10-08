import React, { useContext, useEffect, useState } from "react";
import { CustomerContext } from "./CustomerProvider";
import { useParams, useHistory } from "react-router-dom";
import "./Customer.css";

export const CustomerDetail = () => {
  const { getCustomerById, deleteCustomer } = useContext(CustomerContext);

  const [customer, setCustomer] = useState({});

  const { customerId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getCustomerById(customerId).then((response) => setCustomer(response));
  }, []);

  return (
    <section className="customer">
      <h3 className="customer_name">{customer.name}</h3>
      <div className="customer_address">{customer.address}</div>
      <button
        onClick={() => {
          deleteCustomer(customer.id).then(() => {
            history.push("/customers");
          });
        }}
      >
        Delete Customer
      </button>
      <button
        onClick={() => {
          history.push(`/customers/edit/${customer.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
