import { Menu } from "primereact/menu"
import { MenuItem } from "primereact/menuitem";
import { useNavigate, useLocation } from "react-router";

export const AsideNav = () => {

    const pageNav = useNavigate();
    const location = useLocation();

    const items: MenuItem[] = [
        {
            label: "Home",
            icon: "pi pi-home",
            command: () => {
                pageNav("/");
            },
            className: location.pathname === "/" ? "active-menu-item" : "",
        },
        {
            label: "Pedidos",
            icon: "pi pi-shopping-cart",
            command: () => {
                pageNav("/orders");
            },
            className: location.pathname.includes("/orders") ? "active-menu-item" : "",
        },
        {
            label: "Productos",
            icon: "pi pi-warehouse",
            command: () => {
                pageNav("/products");
            },
            className: location.pathname.includes("/products") ? "active-menu-item" : "",
        },
        {
            label: "Compras",
            icon: "pi pi-shopping-bag",
            command: () => {
                pageNav("/shops");
            },
            className: location.pathname.includes("/shops") ? "active-menu-item" : "",
        },
        {
            label: "Paquetes",
            icon: "pi pi-box",
            command: () => {
                pageNav("/packages");
            },
            className: location.pathname.includes("/packages") ? "active-menu-item" : "",
        },
        {
            label: "Entrega",
            icon: "pi pi-truck",
            command: () => {
                pageNav("/delivery");
            },
            className: location.pathname.includes("/delivery") ? "active-menu-item" : "",
        },
        {
            label: "Tiendas",
            icon: "pi pi-shop",
            command: () => {
                pageNav("/stores");
            },
            className: location.pathname.includes("/stores") ? "active-menu-item" : "",
        },
        {
            label: "Utiles",
            icon: "pi pi-wrench",
            command: () => {
                pageNav("/tools");
            },
            className: location.pathname.includes("/tools") ? "active-menu-item" : "",
        },
        {
            label: "Usuarios",
            icon: "pi pi-users",
            command: () => {
                pageNav("/users");
            },
            className: location.pathname.includes("/users") ? "active-menu-item" : "",
        },
    ];
    return <aside className="aside-nav bg-gray-400 p-1.5 rounded-sm">
        <Menu model={items} />
    </aside>
}