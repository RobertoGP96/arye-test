import { useEffect, useState } from "react";
import { exchangeChangeRates } from "../../utils/exchangeTools";


const RatesToolTip = ({
  exchange,
  mount,
}: {
  exchange: string;
  mount: number;
}) => {
  const rates: exchangeRate[] = [
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
  ];
  const [ratesShow, setRatesShow] = useState<exchangeRate[]>([]);
  useEffect(() => {
    const list: exchangeRate[] = exchangeChangeRates(rates, exchange)
    setRatesShow(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mount]);

  return (
    <div className="flex justify-star items-center">
      {ratesShow.length > 0 && (
        <ul className="w-full flex flex-col gap-2 justify-start items-center">
          {ratesShow.map(
            (element, index) =>
              element.currencyFrom == exchange && (
                <li className="w-full flex flex-row gap-1 justify-start items-center font-test text-sm border-b-2 border-gray-200 p-1" key={index}>
                  <span>{(element.rate * mount).toFixed(2)}</span>
                  <span className="rounded-full bg-gray-300 px-2">
                    {element.currencyTo}
                  </span>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};
export default RatesToolTip;

