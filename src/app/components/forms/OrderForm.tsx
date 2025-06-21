import React, {  useRef, useState } from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import StoreLogo from "../StoreLogo";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import ProductForm from "./ProductForm";
import { Sidebar } from "primereact/sidebar";
import "./style/OrderForm.css";


const OrderForm: React.FC = () => {

  const clients: user[] = [
    {
      name: "Roberto",
      lastName: "González",
      email: "trolbertogp96@gmail.com",
      phone: "53844409",
      role: "client",
    },
    {
      name: "Rosi",
      lastName: "Lost",
      email: "email@example.com",
      phone: "52345678",
      role: "client",
    },
    {
      name: "Erdwin",
      lastName: "Pérez",
      email: "email@example.com",
      phone: "51234567",
      role: "client",
    },
    {
      name: "Carlos",
      lastName: "Emilio",
      email: "trolbertogp96@gmail.com",
      phone: "53844409",
      role: "client",
    },
  ];

  const [clientOrder, setClientOrder] = useState<user | null>();
  const [order, setOrder] = useState<order>({ products: [] });
  const [visible, setVisible] = useState<boolean>(false);

  const stateValues: orderState[] = [
    {
      name: "Creado",
    },
    {
      name: "Pagado",
    },
    {
      name: "Comprado",
    },
    {
      name: "Recibido",
    },
    {
      name: "Entregado",
    },
  ];

  const clientsOption = (item: user) => {
    return (
      <div className="flex flex-row flex-nowrap gap-2 justify-start items-center ">
        <Avatar shape="circle" icon="pi pi-user" />
        <span className="text-sm">{item.name + " " + item.lastName}</span>
      </div>
    );
  };

  const op = useRef<OverlayPanel>(null);
  const clientSelectedOption = (item: user) => {
    return (
      <div className="flex flex-row flex-nowrap gap-2 justify-start items-center ">
        {item && (
          <>
            <Avatar
              shape="circle"
              icon="pi pi-user"
              className="cursor-pointer"
              onClick={(e) => op.current?.toggle(e)}
            />
            <span className="text-sm max-w-[88px] overflow-ellipsis overflow-x-hidden">
              {item.name + " " + item.lastName}
            </span>
            <OverlayPanel></OverlayPanel>
          </>
        )}
      </div>
    );
  };

  const ListProductTemplate = (item: product) => {
    return (
      <div className="w-full flex flex-row gap-2 justify-between items-center px-3 border-b-2 bg-white rounded-sm border-gray-200 p-2">
        <div className="flex flex-row gap-3 justify-start items-center">
          <div className="flex justify-center items-center flex-grow p-7 bg-gray-300 h-full rounded-sm">
            <i className="pi pi-image "></i>
          </div>
          <ul className="flex flex-col justify-between items-center gap-1 pl-5 border-l-2 border-gray-400/55">
            <li className="w-full flex flex-row justify-start items-center gap-1">
              <h2 className="text-left font-medium">{item.name}</h2>
            </li>
            <li className="flex flex-row justify-start items-center gap-1 ">
              <StoreLogo name={item.store?.name as string} />
              <div className="flex flex-row justify-center items-center gap-1 rounded-full border-2 bg-gray-200 border-gray-200 px-3">
                <i className="pi pi-box"></i>
                <span className="text-sm text-right">{item.cuantity}</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-1 rounded-full border-2 bg-gray-200 border-gray-200 px-3">
                <i className="pi pi-tag"></i>
                <span className="text-sm">{item.description}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="h-full flex justify-end items-center px-3 border-dotted border-l-2 border-gray-400 min-w-[100px] ">
          <span className="font-test">{"$ " + item.price.toFixed(2)}</span>
        </div>
      </div>
    );
  };

  const ListProductsView = ({ items }: { items: product[] }) => {
    if (!items || items.length === 0)
      return (
        <div className="w-full flex justify-center items-center bg-gray-200 rounded-sm">
          <span className="flex justify-center items-center gap-2 rounded-full bg-white py-1 px-3 shadow-gray-400 shadow-2xl">
            <i className="pi pi-exclamation-circle"></i>
            No hay productos agregados aún.
          </span>
        </div>
      );

    const list = items.map((product) => {
      return ListProductTemplate(product);
    });

    return (
      <div className="w-full flex flex-col items-center justify-start gap-1 p-2 bg-gray-200 rounded-sm overflow-auto ">
        {list}
      </div>
    );
  };

  const updateCost = () => {
    let total = 0;
    order.products.map((product)=>{total+=product.price})
    setOrder({ ...order, totalCost: total });
    setVisible(false);
  };

  const createNewProduct = (item: product) => {
    const added = order.products;
    added?.push(item);
    setOrder({ ...order, products: added });
    updateCost()
    setVisible(false);
  };
  return (
    <div className="w-full p-4 flex flex-col justify-start items-center gap-2 flex-grow">
      <h2 className="w-full mb-3 uppercase font-medium">Nuevo Pedido</h2>
      <div className="w-full flex flex-row justify-start items-center gap-2 flex-grow ">
        <form
          className="min-h-[100%] flex flex-col gap-2 justify-between items-center min-w-[250px]"
          onSubmit={() => {}}
        >
          <div className="flex flex-col gap-5 justify-start items-center w-full">
            <FloatLabel className="w-full">
              <Dropdown
                inputId="orderClient"
                value={clientOrder}
                onChange={(e: DropdownChangeEvent) => setClientOrder(e.value)}
                options={clients}
                itemTemplate={clientsOption}
                valueTemplate={clientSelectedOption}
                optionLabel="Cliente"
                className="w-full min-w-[150px] min-h-[55px]"
                showClear
                placeholder="Selecciona el cliente"
              />
              <label htmlFor="orderClient">Cliente:</label>
            </FloatLabel>
            <FloatLabel className="w-full">
              <Dropdown
                inputId="status"
                value={order?.state}
                onChange={(e: DropdownChangeEvent) => setOrder({...order, state: e.target.value})}
                options={stateValues}
                optionLabel="name"
                className="w-full"
                showClear
                placeholder="Selecciona el estado"
              />
              <label htmlFor="status">Estado:</label>
            </FloatLabel>
            <div className="w-full flex flex-row justify-between items-center">
              <span className="">Pagado: </span>
              <ToggleButton
                onIcon="pi pi-verified"
                offIcon="pi pi-ban"
                onLabel=""
                offLabel=""
                tooltip={order.pay_status?"Pagado":"No Pagado"}
                checked={order?.pay_status}
                onChange={(e: ToggleButtonChangeEvent) =>
                  setOrder({ ...order, pay_status: e.value })
                }
              />
            </div>
          </div>
          <Button
            className="w-full"
            type="submit"
            icon="pi pi-save"
            label="Crear"
          />
        </form>
        <Divider layout="vertical" />
        <section className="w-full min-h-[100%] max-h-[75vh] flex flex-col gap-2 justify-start items-center">
          <h2 className="w-full uppercase font-medium">Productos</h2>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 justify-start ">
              <Button
                icon="pi pi-plus"
                label="Añadir"
                onClick={() => {
                  setVisible(true);
                }}
              />
              <Button
                icon="pi pi-trash"
                label="Eliminar"
                onClick={() => {
                  setOrder({ ...order, products: [] });
                  updateCost();
                }}
              />
            </div>

            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText placeholder="Buscar..." />
            </IconField>
          </div>
          <div className="w-full flex  gap-2 flex-grow overflow-auto">
            <ListProductsView items={order.products} />
          </div>
          <div className="min-h-[50px] w-full border-t-2 border-gray-200 flex flex-row justify-between items-center">
            <span className="font-medium text-sm">
              Monto Total:{" "}
              <strong className="font-test min-w-[50px]">
                {"$ "+((order.products.length==0|| order.products)?"0.00":(order?.totalCost?.toFixed(2)))}
              </strong>
            </span>
          </div>
        </section>
      </div>
      <Sidebar
        fullScreen
        position="right"
        className="new-product-side"
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        style={{ width: "100%" }}
      >
        <ProductForm handleNewProduct={createNewProduct} />
      </Sidebar>
    </div>
  );
};

export default OrderForm;
