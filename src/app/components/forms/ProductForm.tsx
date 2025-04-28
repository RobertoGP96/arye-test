import { Divider } from "primereact/divider";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import StoreLogo from "../StoreLogo";
import Test from "../utils/Test";
import DescriptionTools from "../utils/DescriptionTools";

const ProductForm = ({
  handleNewProduct,
}: {
  handleNewProduct: (newProduct: product) => void;
}) => {
  const [info, setInfo] = useState<product>({
    name: "",
    price: 0,
    cuantity: 0,
    store_taxe: 0,
    buy_cost: 0,
    delivery_cost: 0,
    descount_store: 0,
    description: "",
    own_offert: 0,
    taxe_own: 0,
    taxe_add: 0,
    price_store: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNewProduct(info);
  };
  const storeOtions: store[] = [
    { name: "amazon", taxe: 1.0807 },
    { name: "ebay", taxe: 1.1235 },
    { name: "temu", taxe: 1.1021 },
    { name: "shein", taxe: 1.07 },
    { name: "walmart", taxe: 1.1235 },
    { name: "aliexpress", taxe: 1.1235 },
  ];

  const storesOption = (item: store) => {
    return (
      <div className="flex flex-row flex-nowrap gap-2 justify-start items-center ">
        <StoreLogo name={item.name} />
        <span>{" / " + item.name}</span>
      </div>
    );
  };

  const storeSelectedOption = (item: store) => {
    return (
      <div className="flex flex-row flex-nowrap gap-2 justify-start items-center min-h-[22px]">
        {item && <StoreLogo name={item.name} />}
      </div>
    );
  };

  const handleCalcCosts = () => {
    setInfo({
      ...info,
      buy_cost: info.price_store * 1.07 + info.delivery_cost,
      price:
        info.price_store * info.store_taxe +
        info.delivery_cost +
        info.taxe_add +
        info.taxe_own -
        info.own_offert,
    });
  };

  const handlDescriptionTool = (value: string) => {
    setInfo({ ...info, description: value });
  };

  useEffect(() => {
    if (info.store) {
      setInfo({ ...info, store_taxe: info.store.taxe });
    } else setInfo({ ...info, store_taxe: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info.store]);

  const catOpts = [{ name: "Mescelanias" }, { name: "Medicamentos" }];
  return (
    <form
      className="w-full flex flex-col flex-wrap gap-2 flex-grow p-4 h-full"
      onSubmit={handleSubmit}
    >
      <h2 className=" w-full uppercase text-xl font-medium border-b-[1px] border-gray-200 px-2 py-1">
        Nuevo Producto
      </h2>
      <div className="w-full flex flex-row flex-nowrap justify-around flex-grow gap-3">
        <section className="w-full flex flex-grow flex-col gap-5 justify-start items-center pt-6">
          <h2 className="uppercase font-bold">Datos Generales</h2>
          <FloatLabel className="w-full">
            <InputText
              className="w-full"
              id="username"
              value={info?.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInfo({ ...info, name: e.target.value })
              }
            />
            <label htmlFor="username">Nombre:</label>
          </FloatLabel>
          <FloatLabel className="w-full">
            <InputText
              className="w-full"
              id="username"
              value={info?.link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInfo({ ...info, link: e.target.value })
              }
            />
            <label htmlFor="username">Link:</label>
          </FloatLabel>
          <div className="w-full p-2 rounded-sm bg-gray-200">
            <FloatLabel className="w-full">
              <InputTextarea
                className="w-full"
                id="description"
                value={info.description}
                onChange={(e) =>
                  setInfo({ ...info, description: e.target.value })
                }
                rows={5}
                cols={30}
              />
              <label htmlFor="description">Descripción:</label>
              <DescriptionTools
                description={info.description as string}
                handleAddTool={handlDescriptionTool}
              />
            </FloatLabel>
          </div>

          <FloatLabel className="w-full">
            <InputNumber
              className="w-full"
              inputId="minmax-buttons"
              value={info.cuantity}
              onValueChange={(e: InputNumberValueChangeEvent) =>
                setInfo({ ...info, cuantity: e.value as number })
              }
              mode="decimal"
              showButtons
              min={0}
              step={1}
              max={100}
            />
            <label htmlFor="number-input">Cantidad</label>
          </FloatLabel>

          <FloatLabel className="w-full">
            <Dropdown
              inputId="dd-city"
              value={info.category}
              onChange={(e: DropdownChangeEvent) =>
                setInfo({ ...info, category: e.value })
              }
              options={catOpts}
              optionLabel="name"
              clearIcon
              className="w-full"
            />
            <label htmlFor="dd-city">Categoría:</label>
          </FloatLabel>
          <FloatLabel className="w-full">
            <Dropdown
              inputId="dd-city"
              value={info.category}
              onChange={(e: DropdownChangeEvent) =>
                setInfo({ ...info, category: e.value })
              }
              options={catOpts}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-city">Estado:</label>
          </FloatLabel>
        </section>
        <Divider layout="vertical"></Divider>
        <section className="flex min-h-[100%] flex-col flex-grow justify-between items-center w-full pt-6">
          <div className="flex flex-col  gap-5 justify-start items-center w-full">
            <h2 className="text-start font-bold uppercase">Costos</h2>
            <FloatLabel className="w-full">
              <InputNumber
                key={7}
                id="store-price"
                className="w-full"
                value={info.price_store}
                mode="currency"
                currency="USD"
                locale="en-US"
                onValueChange={(e: InputNumberValueChangeEvent) => {
                  setInfo({
                    ...info,
                    price_store: e.value as number,
                    buy_cost: info.buy_cost,
                  });
                }}
              />
              <label htmlFor="store-price">Precio en Tienda</label>
            </FloatLabel>

            <FloatLabel className="w-full">
              <InputNumber
                key={8}
                id="delivery-cost"
                className="w-full"
                inputId="currency-us"
                value={info.delivery_cost}
                mode="currency"
                currency="USD"
                locale="en-US"
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setInfo({ ...info, delivery_cost: e.value as number })
                }
              />
              <label htmlFor="delivery-cost">Costo de Envío</label>
            </FloatLabel>

            <FloatLabel className="w-full">
              <Dropdown
                inputId="store"
                value={info.store}
                onChange={(e: DropdownChangeEvent) =>
                  setInfo({
                    ...info,
                    store_taxe: info.store?.taxe as number,
                    store: e.value,
                  })
                }
                options={storeOtions}
                optionLabel="name"
                className="w-full"
                valueTemplate={storeSelectedOption}
                itemTemplate={storesOption}
                showClear
              />
              <label htmlFor="store">Tienda:</label>
            </FloatLabel>

            <FloatLabel className="w-full">
              <InputNumber
                key={9}
                id="taxe-add"
                className="w-full"
                inputId="currency-us"
                value={info.taxe_own}
                mode="currency"
                currency="USD"
                locale="en-US"
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setInfo({ ...info, taxe_own: e.value as number })
                }
              />
              <label htmlFor="taxe-add">Impuesto adicional</label>
            </FloatLabel>

            <FloatLabel className="w-full">
              <InputNumber
                key={11}
                id="offert"
                className="w-full"
                inputId="currency-us"
                value={info.own_offert}
                mode="currency"
                currency="USD"
                locale="en-US"
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setInfo({ ...info, own_offert: e.value as number })
                }
              />
              <label htmlFor="offert">Oferta</label>
            </FloatLabel>
          </div>

          <button
            type="button"
            className="w-full bg-gray-200 rounded-sm py-2 cursor-pointer flex flex-row justify-center items-center gap-2"
            onClick={() => handleCalcCosts()}
          >
            <i id="claculator" className="pi pi-calculator"></i>
            <span>Calcular</span>
          </button>
        </section>
        <Divider layout="vertical"></Divider>
        <section className="flex flex-col gap-5 justify-start items-center w-full pt-6">
          <div className="flex flex-col gap-2 w-full py-4 px-4 justify-start items-center bg-gray-100 rounded-sm">
            <h2 className="w-full font-bold text-md uppercase text-center border-b-2 border-gray-300">
              Factura
            </h2>
            <ul className="flex flex-col gap-1 w-full p-1 justify-start items-center">
              <li className="flex flex-row gap-1 w-full justify-between items-center">
                <span className="text-sm">Precio en Tienda:</span>
                {info.price_store && (
                  <span>{"$ " + info.price_store.toFixed(2)}</span>
                )}
              </li>

              {info.store_taxe > 0 && (
                <li className="flex flex-row gap-1 w-full justify-between items-center">
                  <span className="text-sm">* Impuesto de Tienda:</span>
                  <span>
                    {"+ " +
                      info.store_taxe +
                      " % = + $" +
                      (
                        info.price_store * info.store_taxe -
                        info.price_store
                      ).toFixed(2)}
                  </span>
                </li>
              )}

              {info.taxe_own > 0 && (
                <li className="flex flex-row gap-1 w-full justify-between items-center">
                  <span className="text-sm">* Impuesto propio:</span>
                  <span>{"+ $" + info.taxe_own.toFixed(2)}</span>
                </li>
              )}

              {info.taxe_add > 0 && (
                <li className="flex flex-row gap-1 w-full justify-between items-center">
                  <span className="text-sm">* Impuesto agregado:</span>
                  <span>{"+ $" + info.taxe_add.toFixed(2)}</span>
                </li>
              )}

              {info.delivery_cost > 0 && (
                <li className="flex flex-row gap-1 w-full justify-between items-center">
                  <span className="text-sm">* Costo de envío:</span>
                  <span>{"+ $ " + info.delivery_cost.toFixed(2)}</span>
                </li>
              )}

              {info.own_offert > 0 && (
                <li className="flex flex-row gap-1 w-full justify-between items-center">
                  <span className="text-sm">* Oferta:</span>
                  <span>{"- $ " + info.own_offert.toFixed(2)}</span>
                </li>
              )}

              <span className="w-full border-b-[1px] border-gray-300"></span>

              <li className="flex flex-row gap-1 w-full justify-between items-center">
                <div className="flex flex-row gap-1">
                  <span className="text-sm font-bold">Total a pagar:</span>
                  <Test mount={info.price} />
                </div>
                {info.price && <span>{"$ " + info.price.toFixed(2)}</span>}
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="w-full flex flex-row gap-1 justify-end items-center pr-7">
        <button
          type="button"
          className="bg-gray-200 rounded-sm py-2 px-4 cursor-pointer flex flex-row justify-center items-center gap-2"
          onClick={() =>
            setInfo({
              name: "",
              price: 0,
              store: { name: "", taxe: 0 },
              cuantity: 0,
              store_taxe: 0,
              buy_cost: 0,
              delivery_cost: 0,
              descount_store: 0,
              description: "",
              own_offert: 0,
              taxe_own: 0,
              taxe_add: 0,
              price_store: 0,
            })
          }
        >
          <i className="pi pi-eraser"></i>
          <span>Limpiar</span>
        </button>
        <button
          type="submit"
          className="bg-orange-200 rounded-sm py-2 px-4 cursor-pointer flex flex-row justify-center items-center gap-2"
        >
          <i className="pi pi-save"></i>
          <span>Guardar</span>
        </button>
      </div>
    </form>
  );
};
export default ProductForm;
