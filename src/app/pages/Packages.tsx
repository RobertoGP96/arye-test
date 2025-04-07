import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { Button } from "primereact/button";

const Packages = () => {
  const itemList: packageT[] = [
    {
      agencyId: 12,
      id: "",
      pictures: [],
      products: "",
      rasterId: "234234234454",
      state: "entregado",
    },
  ];

  const [search, setSearch] = useState("");

  const [items, setItems] = useState<packageT[]>(itemList);

  // Column Templates
  const idBodyTemplate = (packageI: packageT) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2 ">
        <i className="pi pi-tag"></i>
        <span> {packageI.agencyId} </span>
      </div>
    );
  };

  const agencyIdBodyTemplate = (packageI: packageT) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <i className="bx bx-qr"></i>
        <span> {packageI.rasterId} </span>
      </div>
    );
  };

  const pictureBodyTemplate = () => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <i className="pi pi-images rounded-sm bg-gray-200 cursor-pointer hover:bg-gray-300 p-2"></i>
      </div>
    );
  };

  const stateBodyTemplate = (packageI: packageT) => {
    const handleSeverity = (state: string): string => {
      switch (state) {
        case "en camino":
          return "bg-yellow-200";
        case "entregado":
          return "bg-green-200";
        case "perdido":
          return "bg-red-200";

        default:
          return "bg-gray-200";
      }
    };
    return (
      <div className="flex items-center gap-2 px-2 py-1 text-sm ">
        <span
          className={
            handleSeverity(packageI.state) +
            " flex items-center gap-2 px-2 py-1 text-sm rounded-2xl font-bold"
          }
        >
          {packageI.state}
        </span>
      </div>
    );
  };

  const productListBodyTemplate = (packageI: packageT) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <button
          type="button"
          className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 rounded-sm flex flex-row justify-center items-center"
        >
          <i className="pi pi-clipboard"></i>
        </button>
        <div className="flex flex-row justify-center items-center gap-1 text-gray-500">
          <i className="pi pi-box"></i>
          <span>{packageI.products.length}</span>
        </div>
      </div>
    );
  };

  const actionBodyTemplate = () => {
    return (
      <div className="flex gap-2">
        <button className="p-button p-button-icon-only">
          <i className="pi pi-pencil"></i>
        </button>
        <button className="p-button p-button-icon-only">
          <i className="pi pi-trash"></i>
        </button>
      </div>
    );
  };
  const [checked, setChecked] = useState<boolean>(false);

  const Header = () => {
    return (
      <div className="flex justify-between items-center w-full gap-2">
        <h2 className="font-bold text-2xl">Paquetes</h2>
        <div className="flex flex-row gap-2.5">
          <Button icon="pi pi-plus" label="Crear" />
          <ToggleButton
            checked={checked}
            onLabel="Cancelar"
            offLabel="Editar"
            onIcon="pi pi-times"
            offIcon="pi pi-pencil"
            onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)}
            className="w-8rem"
          />
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar"
            />
          </IconField>
        </div>
      </div>
    );
  };

  const handleSearch = () => {
    return itemList.filter((elem) => elem.id.includes(search));
  };
  //***************************** */

  useEffect(() => {
    if (search.length > 0) setItems(handleSearch);
    else setItems(itemList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="flex flex-col grow gap-2 px-2.5 py-1.5 justify-star items-star w-full">
      <DataTable
        value={items}
        className="datatable-p w-full"
        header={Header}
        rows={12}
        emptyMessage="No hay elementos para mostrar."
      >
        <Column
          field="rasterId"
          header="Identificador"
          sortable
          body={idBodyTemplate}
        />
        <Column header="No.de Ratreo" sortable body={agencyIdBodyTemplate} />
        <Column header="Fotos" sortable body={pictureBodyTemplate} />
        <Column
          field="state"
          header="Estado"
          sortable
          body={stateBodyTemplate}
        />
        <Column header="Productos" body={productListBodyTemplate} />

        {checked && (
          <Column
            className="w-1/10"
            header="Acciones"
            body={actionBodyTemplate}
          />
        )}
      </DataTable>
    </div>
  );
};

export default Packages;
