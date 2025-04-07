import { MenuItem } from "primereact/menuitem";
import { TabMenu } from "primereact/tabmenu";
import { doc } from "../utils/doc";
import EndpointList from "../components/api/EndpointList";
import "../components/api/Api.css"
import { useState } from "react";

const Api = () => {
  const items: MenuItem[] = [
    { label: "Pedido",icon: "pi pi-box" , command: ()=>setDataIndex(0)},
    { label: "Producto", icon: "pi pi-box" , command: ()=>setDataIndex(1)},
    { label: "Compra", icon: "pi pi-box" , command: ()=>setDataIndex(2)},
    { label: "Usuarios", icon: "pi pi-box", command: ()=>setDataIndex(3) },
    { label: "Reportes", icon: "pi pi-box", command: ()=>setDataIndex(4) },
  ];
  const [dataIndex, setDataIndex]= useState<number>(0);

  const endpoints:apiList[] = doc

  return (
    <div className="flex flex-col gap-2 py-1.5 justify-star items-center w-full">
        <h1>API REST</h1>
      <TabMenu className="w-full" model={items} />
      <section className="w-full grow  px-2.5">
        <EndpointList items={endpoints[dataIndex]} />
      </section>
    </div>
  );
};

export default Api;
