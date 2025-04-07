import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Divider } from "primereact/divider";

const AccountForm: React.FC = () => {
  return (
    <div className="p-fluid">
      <form className="p-fieldset">
        <div className="p-field p-float-label">
          <InputText id="orderName" name="orderName" />
          <label htmlFor="orderName">Order Name</label>
        </div>
        <div className="p-field p-float-label">
          <InputText id="orderQuantity" name="orderQuantity" />
          <label htmlFor="orderQuantity">Order Quantity</label>
        </div>
        <Button type="submit" label="Submit" />
      </form>
      <Divider  layout="vertical"/>
      <div></div>
    </div>
  );
};

export default AccountForm;
