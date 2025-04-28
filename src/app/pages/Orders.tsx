import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { useEffect, useRef, useState } from "react";
import { Avatar } from "primereact/avatar";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { OverlayPanel } from "primereact/overlaypanel";
import ProductList from "../components/ProductList";
import { OrderRecipe } from "../components/views/Order";
import { Dialog } from "primereact/dialog";

const Orders = () => {
  const itemList: order[] = [
    {
      id: "1",
      products: [
        {
          name: "Product 1",
          price: 11.22,
          store: { name: "ebay", taxe: 1.1235 },
          cuantity: 1,
          store_taxe: 0,
          buy_cost: 0,
          delivery_cost: 0,
          descount_store: 0,
          description: " *** \n Color: Azul \n Talla: M \n",
          own_offert: 0,
          taxe_own: 0,
          taxe_add: 0,
          price_store: 0,
        },
        {
          name: "Product 2",
          price: 11.22,
          store: { name: "Amazon", taxe: 1.1235 },
          cuantity: 0,
          store_taxe: 0,
          buy_cost: 0,
          delivery_cost: 0,
          descount_store: 0,
          description: "",
          own_offert: 0,
          taxe_own: 0,
          taxe_add: 0,
          price_store: 0,
        },
        {
          name: "Product 3",
          price: 13.22,
          store: { name: "Aliexpress", taxe: 1.1235 },
          cuantity: 1,
          store_taxe: 0,
          buy_cost: 0,
          delivery_cost: 0,
          descount_store: 0,
          description: " *** \n Color: Azul \n Talla: M \n",
          own_offert: 0,
          taxe_own: 0,
          taxe_add: 0,
          price_store: 0,
        },
        {
          name: "Product 4",
          price: 14.22,
          store: { name: "Temu", taxe: 1.1235 },
          cuantity: 0,
          store_taxe: 0,
          buy_cost: 0,
          delivery_cost: 0,
          descount_store: 0,
          description: " *** \n Modelo: Azul \n Capacity: M \n",
          own_offert: 0,
          taxe_own: 0,
          taxe_add: 0,
          price_store: 0,
        },
      ],
      clientId: "client 1",
      delivery: "",
      managerId: "Manager 1",
      receipt: "",
      state: "procesando",
      totalCost: 200.43,
      receivedProducts: [],
    },
    {
      id: "2",
      products: [],
      clientId: "client 2",
      delivery: "",
      managerId: "Manager 2",
      receipt: "",
      state: "pendiente",
      totalCost: 100,
      receivedProducts: [],
    },
    {
      id: "3",
      products: [],
      clientId: "client 3",
      delivery: "",
      managerId: "Manager 3",
      receipt: "",
      state: "completado",
      totalCost: 50.1,
      receivedProducts: [],
    },
  ];

  const [search, setSearch] = useState("");

  const [items, setItems] = useState<order[]>(itemList);

  const clientBodyTemplate = (order: order) => {
    return (
      <div className="flex items-center gap-2">
        <Avatar icon="pi pi-user" shape="circle" />
        <span>{order.clientId}</span>
      </div>
    );
  };

  const idBodyTemplate = (order: order) => {
    return (
      <div className="flex items-center gap-2">
        <i className="pi pi-qrcode"></i>
        <span>{order.id}</span>
      </div>
    );
  };

  const managerBodyTemplate = (order: order) => {
    return (
      <div className="flex items-center gap-2">
        <Avatar icon="bx bx-hard-hat" />
        <span>{order.managerId}</span>
      </div>
    );
  };

  const stateBodyTemplate = (order: order) => {
    const handleSeverity = (state: string): string => {
      switch (state) {
        case "procesando":
          return "bg-yellow-200";
        case "completado":
          return "bg-green-200";

        case "pendiente":
          return "bg-red-200";

        default:
          return "bg-gray-200";
      }
    };
    return (
      <div className="flex items-center gap-2 px-2 py-1 text-sm">
        <span
          className={
            handleSeverity(order.state as string) +
            " flex items-center gap-2 px-2 py-1 text-sm rounded-2xl font-bold"
          }
        >
          {order.state}
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

  const OrderProductsTemplate = (order: order) => {
    const productListOP = useRef<OverlayPanel>(null);
    return (
      <div className="flex flex-row justify-star items-center gap-3">
        <button
          className="bg-gray-200 rounded-sm p-2 flex justify-center items-center cursor-pointer hover:bg-gray-300"
          onClick={(e) => productListOP.current?.toggle(e)}
        >
          <i className="pi pi-clipboard"></i>
        </button>
        <OverlayPanel
          showCloseIcon
          ref={productListOP}
          className="w-1/3 max-h-[350px]"
        >
          <ProductList productList={order.products} />
        </OverlayPanel>
        <div className="flex flex-row justify-center items-center gap-1 text-gray-500">
          <i className="pi pi-box"></i>
          <span>{order.products.length}</span>
        </div>
      </div>
    );
  };

  const Header = () => {
    return (
      <div className="flex justify-between items-center w-full gap-2">
        <h2 className="font-bold text-2xl">Pedidos</h2>
        <div className="flex flex-row gap-2.5">
          <Button
            icon="pi pi-plus"
            label="Crear"
            onClick={() => navigate("/orders/new")}
          />
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

  const CostBodyTemplate = (order: order) => {
    const [visible, setVisible] = useState<boolean>(false);

    const headerElement = (
      <div className="flex flex-row items-center justify-start gap-2">
        <i className="pi pi-receipt"></i>
        <span className="font-bold white-space-nowrap">FACTURA</span>
      </div>
    );

    const footerContent = (
      <div className="flex flex-row flex-wrap justify-between items-center w-full border-dotted border-t-2 border-gray-200 pt-2">
        <h3 className=" w-full text-lg font-semibold text-gray-800">
          Costo Total: ${order.totalCost?.toFixed(2)}
        </h3>
        <div className="flex flex-row gap-2">
          <Button
            label="Cerrar"
            icon="pi pi-times"
            onClick={() => {
              if (!visible) return;
              setVisible(false);
            }}
            className="p-button-text"
            outlined
            severity="danger"
          />
          <Button
            label="Imprimir"
            icon="pi pi-print"
            onClick={() => {
              if (!visible) return;
              setVisible(false);
            }}
            className="p-button-text"
            outlined
            severity="success"
          />
        </div>
      </div>
    );

    return (
      <div className="flex flex-row gap-2 justify-star items-center">
        <button
          type="button"
          className="cursor-pointer rounded-xs p-2 bg-gray-200 border-[2] flex flex-row items-center justify-center gap-1 hover:bg-gray-300"
          onClick={() => setVisible(true)}
        >
          <i className="pi pi-receipt"></i>
        </button>
        <Dialog
          visible={visible}
          style={{ width: "30vw", height: "60vh" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
          header={headerElement}
          footer={footerContent}
        >
          <OrderRecipe order={order} />
        </Dialog>
        <i className="pi pi-dollar"></i>
        <span className="font-test">{order.totalCost?.toFixed(2)}</span>
      </div>
    );
  };

  const handleSearch = () => {
    return itemList.filter((elem) => elem.id?.includes(search));
  };

  useEffect(() => {
    if (search.length > 0) setItems(handleSearch);
    else setItems(itemList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const navigate = useNavigate();

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
          field="id"
          header="Identificador"
          body={idBodyTemplate}
          sortable
        />

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
          header="Estado"
          sortable
          body={stateBodyTemplate}
        />

        <Column
          field="products"
          header="Productos"
          body={OrderProductsTemplate}
          sortable
        />

        <Column header="Costo" body={CostBodyTemplate} sortable />

        <Column
          field="state"
          header="Pagado"
          sortable
          body={stateBodyTemplate}
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

export default Orders;
