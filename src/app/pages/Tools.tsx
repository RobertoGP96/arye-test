import { Divider } from "primereact/divider";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useState } from "react";

const Tools = () => {
  type dataT = {
    rates: exchangeRate[];
    costs: fixedCost[];
  };
  const data: dataT = {
    rates: [
      {
        currencyFrom: "cup",
        currencyTo: "cupt",
        rate: 1.1,
      },
      {
        currencyFrom: "mlc",
        currencyTo: "cup",
        rate: 345 / 1.5,
      },
      {
        currencyFrom: "usd",
        currencyTo: "cup",
        rate: 345,
      },
      {
        currencyFrom: "usd",
        currencyTo: "mlc",
        rate: 1.5,
      },
      {
        currencyFrom: "eur",
        currencyTo: "usd",
        rate: 1.04,
      },
      {
        currencyFrom: "can",
        currencyTo: "usd",
        rate: 0.72,
      },
    ],
    costs: [
      {
        currency: "USD",
        name: "Costo x Libra",
        value: 8,
        category: "Miscelaneas",
      },
      {
        currency: "USD",
        name: "Costo x Libra",
        value: 6,
        category: "Medicamentos",
      },
    ],
  };

  type exchangeTrate = {
    currentAt: exchangeRate | null;
    mount: number;
  };

  const [Trate, setTrate] = useState<exchangeTrate>({
    currentAt: null,
    mount: 0.0,
  });

  const CostTemplate = ({ costItem }: { costItem: fixedCost }) => {
    return (
      <div className="flex flex-row justify-between items-center gap-2 rounded-sm border-4 border-gray-200 p-2">
        <i className=" pi pi-thumbtack"></i>
        <span className="font-bold">{costItem.name}</span>
        <span className="flex justify-center items-center rounded-full font-bold text-sm bg-gray-200 px-2 py-1">
          {costItem.category}
        </span>

        <div className="flex justify-center items-center bg-gray-200 px-2 py-1 gap-1 rounded-sm ">
          <span className="font-test">{costItem.value.toFixed(2)}</span>
          <span>{costItem.currency}</span>
        </div>

        <button className="flex flex-row justify-center items-center bg-gray-200  p-2 rounded-sm hover:bg-gray-300 cursor-pointer">
          <i className="pi pi-pencil"></i>
        </button>
      </div>
    );
  };

  const optionTemplate = (option: exchangeRate) => {
    return (
      <div className="flex flex-row gap-2 justify-center items-center w-full">
        <span className="uppercase"> {option.currencyFrom} </span>
        <i className="pi pi-angle-right"></i>
        <span className="uppercase"> {option.currencyTo} </span>
      </div>
    );
  };

  const selectedTemplate = (option: exchangeRate) => {
    if (option) {
      return (
        <div className="flex flex-row gap-2 justify-center items-center w-full">
          <span className="uppercase"> {option.currencyFrom} </span>
          <i className="pi pi-angle-right"></i>
          <span className="uppercase"> {option.currencyTo} </span>
        </div>
      );
    }

    return <span> Selecciona el cambio</span>;
  };


  return (
    <div className="flex flex-row flex-wrap justify-start items-start gap-3 p-2">
      <h1 className="w-full">Tools</h1>
      <section className="">
        <h2 className="text-xl mb-2">Costos por Categoría</h2>
        <ul className="flex flex-col gap-1">
          {data.costs.map((elem) => (
            <li className="w-full flex flex-row gap-2 justify-start items-center">
              <CostTemplate costItem={elem} />{" "}
            </li>
          ))}
        </ul>
      </section>
      <Divider layout="horizontal"></Divider>
      <section className="w-full flex flex-row justify-start items-start gap-2">
        <div className="border-gray-300 border-2 rounded-sm p-6">
          <h2 className="text-xl mb-2 w-full uppercase text-center font-bold">
            Tasas de cambio
          </h2>
          <table className="">
            <thead></thead>
            <tbody className="">
              {data.rates.map((rowElement) => (
                <tr className="flex flex-row justify-between items-center gap-2 p-2  ">
                  <td>
                    <span className="font-test px-2 font-bold bg-orange-200 rounded-full">
                      1.00
                    </span>
                  </td>
                  <td>
                    <span className="font-test">{rowElement.currencyFrom}</span>
                  </td>
                  <td>
                    <i className="pi pi-angle-double-right"> </i>
                  </td>
                  <td>
                    <span className="font-test px-2 font-bold bg-orange-200 rounded-full">
                      {(1 * rowElement.rate).toFixed(2)}
                    </span>
                  </td>
                  <td>
                    <span className="font-test">{rowElement.currencyTo}</span>
                  </td>
                  <td>
                    <i className="pi pi-pencil p-1 rounded-sm cursor-pointer"></i>
                  </td>
                </tr>
              ))}
              <tr>
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 cursor-pointer w-full rounded-sm mt-2"
                >
                  <i className="pi pi-plus "></i>
                </button>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-gray-300 border-2 rounded-sm p-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-center uppercase">
              Cambio personalizado
            </h2>
            <div className="flex flex-row gap-2 justify-between">
              <InputNumber
                value={Trate.mount}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setTrate({ ...Trate, mount: e.value as number })
                }
                min={0}
                minFractionDigits={2}
                maxFractionDigits={5}
              />
              <button type="button" className="cursor-pointer ">
                <i className="pi pi-calculator py-4 px-2 rounded-sm bg-gray-300 hover:bg-gray-400"></i>
              </button>
            </div>

            <Dropdown
              value={Trate.currentAt}
              onChange={(e: DropdownChangeEvent) =>
                setTrate({ ...Trate, currentAt: e.value })
              }
              options={data.rates}
              itemTemplate={optionTemplate}
              valueTemplate={selectedTemplate}
              optionLabel="name"
              showClear
              placeholder="Selecciona una moneda"
            />
            <span className="w-full font-test p-2">
              = 
              {Trate.currentAt && (
                <>{" "+(Trate.mount * Trate.currentAt?.rate).toFixed(2)}</>
              )}
            </span>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};
export default Tools;
