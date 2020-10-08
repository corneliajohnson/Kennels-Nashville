import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CustomerContext } from "./CustomerProvider";

export const CustomerForm = () => {
  const { addCustomer, getCustomerById, updateCustomer } = useContext(
    CustomerContext
  );
  const history = useHistory();
  const { customerId } = useParams();

  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleControlledInputChange = (event) => {
    const newCustomer = { ...customer };
    newCustomer[event.target.name] = event.target.value;
    setCustomer(newCustomer);
  };

  useEffect(() => {
    if (customerId) {
      getCustomerById(customerId).then((customer) => {
        setCustomer(customer);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructCustomer = () => {
    if (customer.name === "" || customer.address === "") {
      window.alert("Complete all fields");
    } else {
      setIsLoading(true);
      if (customerId) {
        updateCustomer({
          id: customer.id,
          name: customer.name,
          address: customer.address,
          email: customer.email,
        }).then(() => history.push(`/customers/detail/${customer.id}`));
      } else {
        addCustomer({
          name: customer.name,
          address: customer.address,
          email: customer.email,
        }).then(() => history.push("/customers"));
      }
    }
  };

  return (
    <form className="customerForm">
      <h2 className="customerForm__title">New Customer</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerName">Customer name: </label>
          <input
            type="text"
            id="customerName"
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="Customer name"
            onChange={handleControlledInputChange}
            defaultValue={customer.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerName">Customer email: </label>
          <input
            type="text"
            id="customerEmail"
            name="email"
            required
            autoFocus
            className="form-control"
            placeholder="Customer email"
            onChange={handleControlledInputChange}
            defaultValue={customer.email}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerAddress">Customer address: </label>
          <input
            type="text"
            id="customerAddress"
            name="address"
            required
            autoFocus
            className="form-control"
            placeholder="Customer Address"
            onChange={handleControlledInputChange}
            defaultValue={customer.address}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(e) => {
          e.preventDefault();
          constructCustomer();
        }}
        className="btn btn-primary"
      >
        {customerId ? <>Save Customer</> : <>Add Customer</>}
      </button>
    </form>
  );
};
