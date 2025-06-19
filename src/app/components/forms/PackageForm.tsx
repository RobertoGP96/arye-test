import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

import { ProductListView } from "../views/Product";
import { useNavigate } from "react-router";


const PackageForm = () => {
    const navigate = useNavigate()

    const [packageData, setPackageData] = useState<Package>({
        agencyId: "",
        products: [],
        rasterId: "",
        state: "",
        pictures: []
    });
    const handleChange = (key: string, value: string) => {
        setPackageData((prev) => ({ ...prev, [key]: value }));
    };

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
                    Nuevo Paquete
                </h2>
                <div className="flex flex-row w-full gap-7 justify-start items-center pt-3">
                    <IconField iconPosition="left" className="w-full">
                        <InputIcon className="pi pi-tag"> </InputIcon>
                        <InputText
                            id="idStoreOrder"
                            value={packageData.agencyId ? packageData.agencyId + "" : ""}
                            className="w-full"
                            onChange={(e) => setPackageData({ ...packageData, agencyId: e.target.value })}
                            placeholder="Identificador"
                        />
                    </IconField>

                    <IconField iconPosition="left" className="w-full">
                        <InputIcon className="pi pi-qrcode"> </InputIcon>
                        <InputText
                            id="idStoreOrder"
                            value={packageData.rasterId + ""}
                            className="w-full"
                            onChange={(e) => handleChange("rasterId", e.target.value)}
                            placeholder="Número Rastreo"
                        />
                    </IconField>
                </div>

                <section className="grow w-full pt-3">
                    <ProductListView
                        productList={packageData.products}
                        headerLabel="Productos Añadidos"
                    />
                </section>
                <div className="w-full p-2 min-h-[50px] flex flex-row justify-end items-start gap-2">
                    <Button
                        icon="pi pi-arrow-left"
                        label="Regresar"
                        className=""
                        severity="secondary"
                        onClick={()=>navigate("/packages")}
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

export default PackageForm;
