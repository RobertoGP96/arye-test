import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { useEffect, useState } from "react";

const Delivery = () => {
  const itemList: delivery[] = [
    {
      id: 1,
      products: [
        {
          name: "p1",
          category: "msc",
          price: 200,
          store: "amazon",
          client: "client1",
          order: "",
          description: "",
        },
      ],
      payState: "pagado",
      picture: "",
      deliveryState: "entregado",
      weith: 5.12,
      cost: 121,
      clientId: "client 1",
    },
    {
      id: 1,
      products: [
        {
          name: "p1",
          category: "msc",
          price: 11.31,
          store: "amazon",
          client: "client1",
          order: "",
          description: "",
        },
      ],
      payState: "pagado",
      picture: "",
      deliveryState: "pendiente",
      weith: 5.12,
      cost: 11.31,
      clientId: "client 1",
    },
  ];

  const [search, setSearch] = useState("");

  const [items, setItems] = useState<delivery[]>(itemList);

  const clientBodyTemplate = (item: delivery) => {
    return (
      <div className="flex items-center gap-2">
        <Avatar icon="pi pi-user" shape="circle" />
        <span>{item.clientId}</span>
      </div>
    );
  };

  const managerBodyTemplate = (item: delivery) => {
    return (
      <div className="flex items-center gap-2">
        <Avatar icon="pi pi-user" />
        <span>{item.clientId}</span>
      </div>
    );
  };

  const stateBodyTemplate = (item: delivery) => {
    const handleSeverity = (state: string): string => {
      switch (state) {
        case "pendiente":
          return "bg-yellow-200";
        case "entregado":
          return "bg-green-200";

        default:
          return "bg-gray-200";
      }
    };
    return (
      <div className="flex items-center gap-2 px-2 py-1 text-sm">
        <span
          className={
            handleSeverity(item.deliveryState) +
            " flex items-center gap-2 px-2 py-1 text-sm rounded-2xl font-bold"
          }
        >
          {item.deliveryState}
        </span>
      </div>
    );
  };

  const payBodyTemplate = (item: delivery) => {
    const handlepaySeverity = (state: string): string => {
      switch (state) {
        case "pendiente":
          return "bg-yellow-200";
        case "pagado":
          return "bg-green-200";

        default:
          return "bg-gray-200";
      }
    };
    return (
      <div className="flex items-center gap-2 px-2 py-1 text-sm">
        <span
          className={
            handlepaySeverity(item.payState) +
            " flex items-center gap-2 px-2 py-1 text-sm rounded-2xl font-bold"
          }
        >
          {item.payState}
        </span>
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

  const orderProductsTemplate = (item: delivery) => {
    return (
      <div className="flex flex-row justify-star items-center gap-3">
        <button className="bg-gray-200 rounded-sm p-2 flex justify-center items-center cursor-pointer hover:bg-gray-300">
          <i className="pi pi-clipboard"></i>
        </button>
        <div className="flex flex-row justify-center items-center gap-1 text-gray-500">
          <i className="pi pi-box"></i>
          <span>{item.products.length}</span>
        </div>
      </div>
    );
  };

  const Header = () => {
    return (
      <div className="flex justify-between items-center w-full gap-2">
        <h2 className="font-bold text-2xl">Entrega</h2>
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

  const costBodyTemplate = (item: delivery) => {
    return (
      <div className="flex flex-row gap-2 justify-star items-center">
        <i className="pi pi-dollar"></i>
        <span className="font-test">{item.cost.toFixed(2)+" USD"}</span>
      </div>
    );
  };

  const weithBodyTemplate = (item: delivery) => {
    return (
      <div className="flex flex-row gap-2 justify-star items-center">
        <button className="flex flex-row justify-center items-center p-2 bg-gray-200 hover:bg-gray-300 rounded-sm cursor-pointer">
        <i className="pi pi-image"></i>
        </button>
        <span className="font-test">{item.weith.toFixed(2)}</span>
        <span className="text-gray-500">lb</span>
      </div>
    );
  };

  const handleSearch = () => {
    return itemList.filter((elem) => (elem.id + "").includes(search));
  };

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
          field="clientId"
          header="Cliente"
          body={clientBodyTemplate}
          sortable
        />

        <Column
          field="managerId"
          header="Gestor"
          sortable
          body={managerBodyTemplate}
        />

        <Column
          field="state"
          header="Est. de Entrega"
          body={stateBodyTemplate}
        />

        <Column
          field="buyState"
          header="Est. de Pago"
          sortable
          body={payBodyTemplate}
        />

        <Column
          field="products"
          header="Productos"
          body={orderProductsTemplate}
        />

        <Column field="weith" header="Peso" body={weithBodyTemplate} />
        <Column header="Costo" body={costBodyTemplate} />

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
export default Delivery;
