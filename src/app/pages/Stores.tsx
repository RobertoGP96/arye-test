import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { useEffect, useState } from "react";
import { Avatar } from "primereact/avatar";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { Button } from "primereact/button";
import "./Products.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
import StoreForm from "../components/forms/StoreForm";

const Stores = () => {
  const stores: store[] = [
    {
      name: "Amazon",
      taxe: 1.0807,
      accounts: [{ username: "Albert" }, { username: "Jhon" }],
      link: "https://www.store.com",
    },
    {
      name: "Ebay",
      taxe: 1.0807,
      accounts: [{ username: "Robert" }],
      link: "https://www.store.com",
    },
    {
      name: "Temu",
      taxe: 1.0807,
      accounts: [
        { username: "Albert" },
        { username: "Albert" },
        { username: "Albert" },
      ],
      link: "https://www.store.com",
    },
    {
      name: "Aliexpress",
      taxe: 1.0807,
      accounts: [
        { username: "Albert" },
        { username: "Rosi" },
        { username: "Albert" },
      ],
      link: "https://www.store.com",
    },
    {
      name: "Wallmart",
      taxe: 1.0807,
      accounts: [
        { username: "Albert" },
        { username: "Albert" },
        { username: "Albert" },
      ],
      link: "https://www.store.com",
    },
    {
      name: "Adidas",
      taxe: 1.0807,
      accounts: [
        { username: "Albert" },
        { username: "Albert" },
        { username: "Albert" },
      ],
      link: "https://www.store.com",
    },
    {
      name: "Nike",
      taxe: 1.0807,
      accounts: [
        { username: "Albert" },
      ],
      link: "https://www.store.com",
    },
  ];

  const [search, setSearch] = useState("");

  const [items, setItems] = useState<store[]>(stores);

  const firstColumnBody = (store: store) => {
    return (
      <img
        width={"60px"}
        src={`/stores/${store.name.trim().toLowerCase()}.svg`}
        alt={store.name}
      />
    );
  };

  const AccountsTemplate = (store: store) => {
    const op = useRef<OverlayPanel>(null);
    const showAccounts = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      op.current?.toggle(event);
    };
    return (
      <div>
        <button
          className="flex max-w-[40px] rounded-sm justify-center cursor-pointer items-center gap-1  p-1"
          onClick={(e) => showAccounts(e)}
        >
          <i className="pi pi-user p-overlay-badge"></i>
          <span className="bg-gray-300 p-2 rounded-full text-xs font-bold w-5 h-5 flex justify-center items-center">
            {store.accounts?.length}
          </span>
        </button>
        <OverlayPanel ref={op}>
          <h2 className="font-bold pb-2 uppercase">Cuantas Asociadas</h2>
          <ul className="w-full flex flex-col justify-start items-center gap-1">
            {store.accounts?.map((account, index) => (
              <li
                key={index}
                className="w-full flex flex-row justify-start items-center gap-2 rounded-sm bg-gradient-to-r from-gray-300/55 to-gray-300 py-1 px-2"
              >
                <span className="text-gray-600">{index+1}</span>
                <Avatar shape="circle" icon="pi pi-user" size="normal" />{" "}
                <span>{account.username}</span>
              </li>
            ))}
          </ul>
        </OverlayPanel>
      </div>
    );
  };
  const actionBodyTemplate = () => {
    return (
      <div className="flex gap-2">
        <button className="p-button p-button-icon-only">
          <i className="pi pi-user-plus"></i>
        </button>
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

  const handleNewStore = (newStore: store) =>{

  }

  const Header = () => {
    return (
      <div className="flex justify-between items-center w-full gap-2">
        <h2 className="font-bold text-2xl">Tiendas</h2>
        <div className="flex flex-row gap-2.5">
          <Button icon="pi pi-plus" label="Añadir" />
          <OverlayPanel>
            <StoreForm handleNewStore={handleNewStore}/>
          </OverlayPanel>
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

  const taxeTemplate = (store: store) => {
    return (
      <div className="flex flex-row gap-2 justify-star">
        <span className="">{"+ " + store.taxe + "%"}</span>
      </div>
    );
  };

  const handleSearch = () => {
    return items.filter((elem) => elem.name.includes(search));
  };

  useEffect(() => {
    if (search.length > 0) setItems(handleSearch);
    else setItems(stores);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="flex flex-col grow gap-2 px-2.5 py-1.5 justify-star items-star w-full ">
      <DataTable
        value={items}
        className="datatable"
        header={Header}
        rows={12}
        emptyMessage="No hay elementos para mostrar."
      >
        <Column
          header="Logo"
          className="max-w-[150px]"
          body={firstColumnBody}
        />
        <Column field="name" header="Nombre" sortable />
        <Column field="taxe" header="Impuesto" body={taxeTemplate} sortable />
        <Column
          field="accounts"
          header="Cuentas"
          body={AccountsTemplate}
          sortable
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

export default Stores;
