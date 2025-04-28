import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { Button } from "primereact/button";
import StoreLogo from "../components/StoreLogo";
import { useNavigate } from "react-router";

const Shops = () => {
  const itemList: shop[] = [
    {
      accountShop: { username: "AlbertDorrego98" },
      id: "1wer32",
      state: "comprado",
      store: {
        accounts: [],
        link: "",
        name: "Amazon",
        taxe:1.0807
      },
      idStoreOrder: "1212312491298312",
      productShopeds: [],
      totalCost: 100,
    },
  ];

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [items, setItems] = useState<shop[]>(itemList);

  // Column Templates
  const idBodyTemplate = (shop: shop) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <i className="pi pi-tag"></i>
        <span> {shop.idStoreOrder} </span>
      </div>
    );
  };

  const storeBodyTemplate = (shop: shop) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <StoreLogo name={shop.store.name} />
      </div>
    );
  };

  const accountBodyTemplate = (shop: shop) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <i className="pi pi-user"></i>
        <span> {shop.accountShop.username} </span>
      </div>
    );
  };

  const stateBodyTemplate = (shop: shop) => {
    const handleSeverity = (state: string): string => {
      switch (state) {
        case "procesando":
          return "bg-yellow-200";
        case "comprado":
          return "bg-green-200";
        case "cancelado":
          return "bg-red-200";

        default:
          return "bg-gray-200";
      }
    };
    return (
      <div className="flex items-center gap-2 px-2 py-1 text-sm">
        <span
          className={
            handleSeverity(shop.state) +
            " flex items-center gap-2 px-2 py-1 text-sm rounded-2xl font-bold"
          }
        >
          {shop.state}
        </span>
      </div>
    );
  };

  const tCostBodyTemplate = (shop: shop) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <i className="pi pi-dollar"></i>
        <span className="font-test"> {shop.totalCost.toFixed(2) + " usd"} </span>
      </div>
    );
  };

  const productListBodyTemplate = () => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <button type="button" className="cursor-pointer bg-gray-300 hover:bg-gray-400 p-2 rounded-sm flex flex-row justify-center items-center">
          <i className="pi pi-list-check"></i>
        </button>
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
        <h2 className="font-bold text-2xl">Compras</h2>
        <div className="flex flex-row gap-2.5">
          <Button icon="pi pi-plus" label="Crear" onClick={()=>navigate("/shops/new")}/>
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
          field="idStoreOrder"
          header="Identificador"
          sortable
          body={idBodyTemplate}
        />
        <Column header="Tienda" sortable body={storeBodyTemplate} />
        <Column header="Cuenta" sortable body={accountBodyTemplate} />
        <Column
          field="state"
          header="Estado"
          sortable
          body={stateBodyTemplate}
        />
        <Column header="Productos" body={productListBodyTemplate}/>
        <Column
          field="totalCost"
          header="Costo Total"
          body={tCostBodyTemplate}
        />
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

export default Shops;
