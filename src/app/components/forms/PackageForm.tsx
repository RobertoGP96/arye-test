import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown, } from "primereact/dropdown";
import { Button } from "primereact/button";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { FloatLabel } from "primereact/floatlabel";
import { packageStates } from "../../utils/options/package";
import { ProductListView } from "../views/Product";



const PackageForm = () => {

    const [packageData, setPackageData] = useState<Package>({
        agencyId: 0,
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
        <div className="grid grid-cols-[250px_1fr] gap-4 p-2 overflow-hidden min-h-full">
            <form
                onSubmit={handleSubmit}
                className="max-w-[300px]  flex flex-col justify-between items-center min-h-full border-gray-200 border-r-2 pr-2"
            >
                <div className="flex flex-col gap-7 justify-start items-center pt-3">
                    <h2 className="uppercase font-bold w-full text-center">
                        Nuevo Paquete
                    </h2>
                    <IconField iconPosition="left" className="w-full">
                        <InputIcon className="pi pi-qrcode"> </InputIcon>
                        <InputText
                            id="idStoreOrder"
                            value={packageData.agencyId + ""}
                            className="w-full"
                            onChange={(e) => handleChange("idStoreOrder", e.target.value)}
                            placeholder="Identificador"
                        />
                    </IconField>

                    <FloatLabel className="w-full">
                        <Dropdown
                            id="state"
                            className="w-full"
                            value={packageData.state}
                            options={packageStates}
                            showClear
                            onChange={(e) => handleChange("state", e.value)}
                            placeholder="Estado del Paquete"
                        />
                        <label htmlFor="state">Estado</label>
                    </FloatLabel>
                </div>
                <Button
                    type="submit"
                    icon="pi pi-save"
                    label="Registar"
                    className="w-full"
                />
            </form>
            <section className="grow min-h-full pt-3">
                <ProductListView
                    productList={packageData.products}
                    headerLabel="Productos Añadidos"
                />
            </section>
        </div>
    );
};

export default PackageForm;
