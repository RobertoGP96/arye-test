import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Button } from "primereact/button";
import StoreLogo from "../StoreLogo";
import { AccountOption, AccountSelectedOption } from "../utils/Dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { FloatLabel } from "primereact/floatlabel";

import { shopStates } from "../../utils/options/shop";
import { ProductListView } from "../views/Product";
import ProductPicker from "../utils/ProductPicker";

const ShopForm = () => {
  const stores: store[] = [
    {
      name: "Amazon",
      taxe: 1.0807,
      accounts: [{ username: "Albert" }, { username: "Jhon" }],
      link: "https://www.store.com",
    },
    {
      name: "Ebay",
      taxe: 1.0807,
      accounts: [{ username: "Robert" }],
      link: "https://www.store.com",
    },
    {
      name: "Temu",
      taxe: 1.0807,
      accounts: [
        { username: "Albert" },
        { username: "Albert1" },
        { username: "Albert2" },
      ],
      link: "https://www.store.com",
    },
    {
      name: "Aliexpress",
      taxe: 1.0807,
      accounts: [
        { username: "Albert" },
        { username: "Rosi" },
        { username: "Albert12" },
      ],
      link: "https://www.store.com",
    },
  ];

  const [shopData, setShopData] = useState<shop>({
    idStoreOrder: "",
    totalCost: 0,
    productShopeds: [],
    state: undefined,
    store: undefined,
    accountShop: undefined,
  });
  const [accountList, setAccountLIst] = useState<account[]>([]);

  useEffect(() => {
    if (shopData.store) {
      const accountListSelected = stores.filter((e) => {
        return e.name == shopData.store?.name;
      });

      if (accountListSelected.length > 0 && accountListSelected[0].accounts) {
        setAccountLIst(accountListSelected[0].accounts);
      }
    }
    if (!shopData.store && shopData.accountShop) {
      setShopData({ ...shopData, accountShop: undefined });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopData.store]);

  const handleChange = (key: string, value: string) => {
    setShopData((prev) => ({ ...prev, [key]: value }));
  };
  const handleChangeCost = (key: string, value: number) => {
    setShopData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const storeSelectedOption = (item: store) => {
    return (
      <div className="flex flex-row flex-nowrap gap-2 justify-start items-center min-h-[25px]">
        {item && (
          <div className="flex flex-row flex-nowrap gap-2 justify-start items-center ">
            <StoreLogo name={item.name} />
            <span>{"(" + item.name + ")"}</span>
          </div>
        )}
        {!item && (
          <>
            <span className="py-[5px]">Selecciona la tienda</span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[250px_1fr] gap-4 p-2 overflow-hidden min-h-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-[300px]  flex flex-col justify-between items-center min-h-full border-gray-200 border-r-2 pr-2"
      >
        <div className="flex flex-col gap-7 justify-start items-center pt-3">
          <h2 className="uppercase font-bold w-full text-center">
            Nueva Compra
          </h2>
          <IconField iconPosition="left" className="w-full">
            <InputIcon className="pi pi-qrcode"> </InputIcon>
            <InputText
              id="idStoreOrder"
              value={shopData.idStoreOrder}
              className="w-full"
              onChange={(e) => handleChange("idStoreOrder", e.target.value)}
              placeholder="Identificador"
            />
          </IconField>

          <FloatLabel className="w-full">
            <Dropdown
              id="state"
              className="w-full"
              value={shopData.state}
              options={shopStates}
              showClear
              onChange={(e) => handleChange("state", e.value)}
              placeholder="Seleccion el estado"
            />
            <label htmlFor="state">Estado de compra</label>
          </FloatLabel>
          <FloatLabel className="w-full">
            <Dropdown
              className="w-full"
              value={shopData.store}
              options={stores}
              onChange={(e: DropdownChangeEvent) => {
                setShopData({ ...shopData, store: e.value });
              }}
              showClear
              placeholder="Selecciona la tienda"
              itemTemplate={storeSelectedOption}
              valueTemplate={storeSelectedOption}
            />
            <label htmlFor="store">Tienda</label>
          </FloatLabel>

          <FloatLabel className="w-full">
            <Dropdown
              className="w-full"
              value={shopData.accountShop}
              disabled={shopData.store ? false : true}
              options={accountList}
              itemTemplate={AccountOption}
              valueTemplate={AccountSelectedOption}
              placeholder="Selecciona la cuenta"
              onChange={(e: DropdownChangeEvent) => {
                setShopData({ ...shopData, accountShop: e.value });
              }}
              showClear
            />
            <label htmlFor="accountShop">Cuenta: </label>
          </FloatLabel>
          <FloatLabel className="w-full">
            <InputNumber
              id="totalCost"
              value={shopData.totalCost}
              className="w-full"
              onChange={(e: InputNumberChangeEvent) =>
                handleChangeCost("totalCost", e.value as number)
              }
              mode="currency"
              currency="USD"
              inputStyle={{ width: "50%" }}
            />
            <label htmlFor="totalCost">Costo total:</label>
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
        <ProductPicker
          productsSlected={shopData.productShopeds}
          headerLabel="Productos Añadidos"
        />
      </section>
    </div>
  );
};

export default ShopForm;
