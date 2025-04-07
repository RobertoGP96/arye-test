import "./App.css";
import "primeicons/primeicons.css";
import 'boxicons/css/boxicons.min.css';

import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./app/pages/Home";
import Api from "./app/pages/Api";
import Orders from "./app/pages/Orders";
import Products from "./app/pages/Products";
import { useState } from "react";
import Shops from "./app/pages/Shops";
import Users from "./app/pages/Users";
import Packages from "./app/pages/Packages";
import Stadist from "./app/pages/Stadist";
import Delivery from "./app/pages/Delivery";
import Tools from "./app/pages/Tools";
import OrderForm from "./app/components/forms/OrderForm";
import Stores from "./app/pages/Stores";

function App() {
  const pageNav = useNavigate();

  const [active, setActive] = useState<number>(0);

  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      className: active == 0 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/");
        setActive(0);
      },
    },
    {
      label: "Pedidos",
      icon: "pi pi-shopping-cart",
      className: active == 1 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/orders");
        setActive(1);
      },
    },
    {
      label: "Productos",
      icon: "pi pi-warehouse",
      className: active == 2 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/products");
        setActive(2);
      },
    },
    {
      label: "Compras",
      icon: "pi pi-shopping-bag",
      className: active == 3 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/shops");
        setActive(3);
      },
    },
    {
      label: "Paquetes",
      icon: "pi pi-box",
      className: active == 4 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/packages");
        setActive(4);
      },
    },
    {
      label: "Entrega",
      icon: "pi pi-truck",
      className: active == 5 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/delivery");
        setActive(5);
      },
    },
    {
      label: "Estadísticas",
      icon: "pi pi-chart-bar",
      className: active == 6 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/data");
        setActive(6);
      },
    },
    {
      label: "Tiendas",
      icon: "pi pi-shop",
      className: active == 7 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/stores");
        setActive(7);
      },
    },
    {
      label: "Utiles",
      icon: "pi pi-wrench",
      className: active == 8 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/tools");
        setActive(8);
      },
    },
    {
      label: "Usuarios",
      icon: "pi pi-users",
      className: active == 9 ? "bg-orange-400 rounded-sm" : "",
      command: () => {
        pageNav("/users");
        setActive(9);
      },
    },
    {
      label: "Api",
      icon: "pi pi-code",
      className: (active == 10 ? "bg-orange-400 rounded-sm" : "") + " api-label-nav",
      command: () => {
        pageNav("/api");
        setActive(10);
      },
    },
  ];

  return (
    <>
      <nav className="navbar-top px-6  py-1.5 w-full  flex flex-row gap-1.5 justify-between items-center">
        <img
          src="/black-logo.svg"
          className="aspect-square"
          width={60}
          alt="AR&E logo"
        />
        <div className="flex flex-row gap-2">
          <Button icon="pi pi-sign-in" label="Iniciar" />
          <Button
            className="bg-blue-400"
            icon="pi pi-user-plus"
            label="Registrarse"
          />
        </div>
      </nav>
      <section className="flex flex-row flex-nowrap gap-2 grow">
        <aside className="aside-nav bg-orange-400 p-1.5 rounded-sm">
          <Menu model={items} />
        </aside>
        <div className="section-content w-full flex flex-col max-w-[85%] justify-star items-star border-t-2 border-orange-200 border-b-2 gap-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<Api />} />
            <Route path="/products" element={<Products />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/new" element={<OrderForm />} />
            
            <Route path="/shops" element={<Shops />} />
            <Route path="/users" element={<Users />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/data" element={<Stadist />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/stores" element={<Stores />} />

            <Route path="/login" element={<Orders />} />
            <Route path="/register" element={<Orders />} />
          </Routes>
        </div>
      </section>
      <footer className="w-screen text-sm font-bold px-1.5 flex justify-center p-3 ">
        <span>AR&E.2025</span>
      </footer>
    </>
  );
}

export default App;
