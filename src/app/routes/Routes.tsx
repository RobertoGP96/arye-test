import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Api from "../pages/Api";
import DeliveryForm from "../components/forms/DeliveryForm";
import OrderForm from "../components/forms/OrderForm";
import PackageForm from "../components/forms/PackageForm";
import ShopForm from "../components/forms/ShopForm";
import Delivery from "../pages/Delivery";
import Orders from "../pages/Orders";
import Packages from "../pages/Packages";
import Products from "../pages/Products";
import Shops from "../pages/Shops";
import Stores from "../pages/Stores";
import Tools from "../pages/Tools";
import Users from "../pages/Users";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<Api />} />
            <Route path="/products" element={<Products />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/new" element={<OrderForm />} />

            <Route path="/shops" element={<Shops />} />
            <Route path="/shops/new" element={<ShopForm />} />

            <Route path="/users" element={<Users />} />

            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/new" element={<PackageForm />} />


            <Route path="/delivery" element={<Delivery />} />
            <Route path="/delivery/new" element={<DeliveryForm />} />

            <Route path="/tools" element={<Tools />} />
            <Route path="/stores" element={<Stores />} />

            <Route path="/login" element={<Home />} />
            <Route path="/register" element={<Home />} />
        </Routes>
    );
};
