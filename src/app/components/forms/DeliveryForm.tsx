import { useState } from "react";
import { Button } from "primereact/button";

import { ProductListView } from "../views/Product";
import { useNavigate } from "react-router";
import { InputNumber, InputNumberValueChangeEvent } from "primereact/inputnumber";
import { Weight } from "lucide-react";


const DeliveryForm = () => {
    const navigate = useNavigate()

    const [deliveryData, setDeliveryData] = useState<delivery>({
        products: [],
        clientId: "",
        payState: "",
        cost: 0,
        weigth: 0,
        deliveryState: "",
        picture: ""
    });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col gap-2 w-full p-2 overflow-hidden min-h-full">
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col justify-between items-center min-h-full  pr-2 p-3 overflow-y-auto"
            >
                <h2 className="uppercase font-bold w-full text-start">
                    Nuevo Envio
                </h2>
                <div className="flex flex-row w-full gap-7 justify-start items-center pt-3">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <Weight size={20} />
                        <InputNumber inputId="weigth"  min={0} value={deliveryData.weigth} onValueChange={(e: InputNumberValueChangeEvent) => setDeliveryData({ ...deliveryData, weigth: e.value as number })} suffix=" Lb" />
                    </div>

                    <div className="flex flex-row justify-center items-center gap-2">
                        <Weight size={20} />
                        <InputNumber inputId="currency-us" min={0} value={deliveryData.cost} mode="currency" currency="USD" onValueChange={(e: InputNumberValueChangeEvent) => setDeliveryData({ ...deliveryData, cost: e.value as number })} />
                    </div>
                </div>

                <section className="grow w-full pt-3">
                    <ProductListView
                        productList={deliveryData.products}
                        headerLabel="Productos Añadidos"
                    />
                </section>
                <div className="w-full p-2 min-h-[50px] flex flex-row justify-end items-start gap-2">
                    <Button
                        icon="pi pi-arrow-left"
                        label="Regresar"
                        className=""
                        severity="secondary"
                        onClick={() => navigate("/packages")}
                    />
                    <Button
                        type="submit"
                        icon="pi pi-save"
                        label="Registar"
                        className=""
                    />
                </div>
            </form>
        </div>
    );
};

export default DeliveryForm;
