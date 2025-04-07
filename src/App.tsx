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


  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        pageNav("/");
      },
    },
    {
      label: "Pedidos",
      icon: "pi pi-shopping-cart",
      command: () => {
        pageNav("/orders");
      },
    },
    {
      label: "Productos",
      icon: "pi pi-warehouse",
      command: () => {
        pageNav("/products");

      },
    },
    {
      label: "Compras",
      icon: "pi pi-shopping-bag",
      command: () => {
        pageNav("/shops");
      },
    },
    {
      label: "Paquetes",
      icon: "pi pi-box",
      command: () => {
        pageNav("/packages");
      },
    },
    {
      label: "Entrega",
      icon: "pi pi-truck",
      command: () => {
        pageNav("/delivery");
      },
    },
    {
      label: "Estadísticas",
      icon: "pi pi-chart-bar",
      command: () => {
        pageNav("/data");
      },
    },
    {
      label: "Tiendas",
      icon: "pi pi-shop",
      command: () => {
        pageNav("/stores");
      },
    },
    {
      label: "Utiles",
      icon: "pi pi-wrench",
      command: () => {
        pageNav("/tools");
      },
    },
    {
      label: "Usuarios",
      icon: "pi pi-users",
      command: () => {
        pageNav("/users");
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
