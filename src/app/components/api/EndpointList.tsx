import { Accordion, AccordionTab } from "primereact/accordion";
import { Chip } from "primereact/chip";

const EndpointList = ({ items }: { items: endpoint[] }) => {
  const RowTemplate = ({ data }: { data: endpoint }) => (
    <div className="flex flex-row flex-nowrap items-center gap-7">
      <span
        className={
          `w-[60px]  text-sm font-bold rounded-full py-1 border-4 flex justify-center bg-orange-300 border-orange-400 text-orange-950`
        }
      >
        {data.method.toLocaleUpperCase()}
      </span>
      <span className="font-extralight">Nombre:</span>
      <Chip label={data.name} />
    </div>
  );
  return (
    <div className="">
      <Accordion>
        {items.map((item) => (
          <AccordionTab header={<RowTemplate data={item} />}>
            <p className="border-t-2 border-gray-200 pt-3">{item.decrption}</p>
            <h2 className="text-2xl mb-3">Parámetros:</h2>
            <ul className="px-5 flex flex-col gap-1 justify-start items-center mb-2">
              {item.params.map((param) => (
                <li className="w-full flex flex-row justify-start items-center gap-5 border-4 border-gray-400/40 px-2.5 py-2 rounded-sm">
                  <p className="font-extrabold">{param.name}</p>
                  <i className="pi pi-caret-right"></i>
                  <p className="text-sm">Requerido:</p>
                  <p className={`rounded-full px-2 font-bold text-sm ${param.required?"bg-green-200":"bg-red-200"}`}>
                    {param.required + ""}
                  </p>
                  <p className="text-sm">Tipo:</p>
                  <p className="font-bold bg-gray-200 rounded-full px-2">
                    {param.type}
                  </p>
                  <p>
                    {" "}
                    <strong>Descripción:</strong> {param.description}
                  </p>
                  <button className="btn-test"></button>
                </li>
              ))}
            </ul>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};
export default EndpointList;
