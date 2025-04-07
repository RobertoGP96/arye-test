import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const StoreForm = ({handleNewStore}:{handleNewStore: (newStore: store) => void;}
) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNewStore(storeInfo);
  };

  const [storeInfo, setStoreInfo] = useState<store>({
    name: "",
    taxe: 0,
    accounts: [],
    link: "",
  });

  return (
    <div className="p-fluid">
      <h2 className="font-bold uppercase">Nueva Tienda</h2>
      <form className="p-fieldset" onSubmit={handleSubmit}>
        <div className="p-field p-float-label">
          <InputText id="orderName" name="orderName" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStoreInfo({ ...storeInfo, name: e.target.value })
              } />
          <label htmlFor="orderName">Nombre:</label>
        </div>
        <div className="p-field p-float-label">
          <InputText id="orderQuantity" name="orderQuantity" />
          <label htmlFor="orderQuantity">Order Quantity</label>
        </div>
        <Button type="submit" label="Submit" />
      </form>

      <div></div>
    </div>
  );
};

export default StoreForm;
