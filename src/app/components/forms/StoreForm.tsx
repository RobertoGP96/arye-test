import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";

const StoreForm = ({
  handleNewStore,
}: {
  handleNewStore: (newStore: store) => void;
}) => {
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
      <form
        className="p-fieldset flex flex-col gap-2 justify-center items-center p-3"
        onSubmit={handleSubmit}
      >
      <h2 className="font-bold uppercase">Agregar Tienda</h2>
        <InputText
          id="orderName"
          name="orderName"
          placeholder="Nombre de la tienda"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStoreInfo({ ...storeInfo, name: e.target.value })
          }
        />
        <InputNumber
          placeholder="Impuesto"
          min={0}
          max={2}
          suffix="%"
          minFractionDigits={2}
          maxFractionDigits={4}
          value={storeInfo.taxe ? storeInfo.taxe : null}
          onChange={(e: InputNumberChangeEvent) =>
            setStoreInfo({ ...storeInfo, taxe: e?.value || 0 })
          }
        />
        <InputText
          id="orderName"
          name="orderName"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStoreInfo({ ...storeInfo, name: e.target.value })
          }
          placeholder="Link"
        />
        <Button icon="pi pi-save" type="submit" label="Agregar" />
      </form>

      <div></div>
    </div>
  );
};

export default StoreForm;
