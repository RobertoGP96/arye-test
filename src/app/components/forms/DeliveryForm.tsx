import { useState } from "react";
import { Button } from "primereact/button";

import { ProductListView } from "../views/Product";
import { useNavigate } from "react-router";
import { InputNumber, InputNumberValueChangeEvent } from "primereact/inputnumber";
import { CircleAlert, DollarSign, Weight } from "lucide-react";


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
                className="w-full flex flex-col justify-between items-center min-h-full gap-3  pr-2 p-3 overflow-y-auto"
            >
                <h2 className="uppercase font-bold w-full text-start text-2xl">
                    Nuevo Envio
                </h2>
                <section className="grow w-full pt-3">
                    <ProductListView
                        productList={deliveryData.products}
                        headerLabel=""
                    />
                </section>
                <div className="flex flex-row w-full gap-7 justify-center items-center pt-3 border border-gray-300 rounded-sm p-3 py-6">
                    <div className="flex flex-row justify-center items-center gap-3 p-3 w-2/5 bg-gray-200 rounded-sm" >
                        <CircleAlert size={40} /> 
                        <span>
                            El 
                            <strong className="px-1">
                            costo
                            </strong>
                             se calcula en base al peso añadido previamente teniendo en cuenta la categoría de los productos añadidos al envío. 
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2 w-1/4">
                        <label htmlFor="weigth" className="font-bold uppercase">Peso:</label>
                        <div className="flex flex-row justify-center items-center gap-2 w-full">
                            <Weight size={20} />
                            <InputNumber className="w-full" inputId="weigth" min={0} value={deliveryData.weigth} onValueChange={(e: InputNumberValueChangeEvent) => setDeliveryData({ ...deliveryData, weigth: e.value as number })} suffix=" Lb" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-1/4 gap-2">
                        <label htmlFor="currency-us" className="font-bold uppercase">Costo:</label>
                        <div className="flex flex-row justify-center items-center w-full gap-2 ">
                            <DollarSign size={20} />
                            <InputNumber className="w-full" inputId="currency-us" min={0} value={deliveryData.cost} mode="currency" currency="USD" onValueChange={(e: InputNumberValueChangeEvent) => setDeliveryData({ ...deliveryData, cost: e.value as number })} />
                        </div>
                    </div>
                </div>
                <div className="w-full p-2 min-h-[50px] flex flex-row justify-end items-start gap-2">
                    <Button
                        icon="pi pi-arrow-left"
                        label="Regresar"
                        className=""
                        severity="secondary"
                        onClick={() => navigate("/delivery")}
                    />
                    <Button
                        type="submit"
                        icon="pi pi-save"
                        label="Guardar"
                        className=""
                    />
                </div>
            </form>
        </div>
    );
};

export default DeliveryForm;
