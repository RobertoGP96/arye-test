import { Accordion, AccordionTab } from "primereact/accordion";

const ProductHeader = ({ name, price }: { name: string; price: number }) => (
  <div className="flex justify-between items-center">
    <span className="font-medium text-gray-700">{name}</span>
    <span className="font-test">${price.toFixed(2)}</span>
  </div>
);

export const OrderRecipe = ({ order }: { order: order }) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <Accordion className="w-full max-h-[600px]">
        {order.products.map((product, index) => (
          <AccordionTab
            key={index}
            header={<ProductHeader name={product.name} price={product.price} />}
          >
            <div className="flex flex-col text-sm text-gray-500 gap-1">
              <span>Precio Tienda: ${product.price_store.toFixed(2)}</span>
              <span>Costo Envío: ${product.delivery_cost.toFixed(2)}</span>
              <span>Impuesto Tienda: +{product.store_taxe}%</span>
              <span className="border-b-2 border-gray-200 pb-2 mb-2">
                Cantidad: {product.cuantity}
              </span>

              <span className="border-b-2 border-gray-200 pb-2 mb-2">
                Oferta Propia: ${product.own_offert.toFixed(2)}
              </span>

              <span>Impuesto Adicional: ${product.taxe_add.toFixed(2)}</span>
              <span className="border-b-2 border-gray-200 pb-2 mb-2">Impuesto Propio: ${product.taxe_own.toFixed(2)}</span>
              <span className="font-bold text-gray-700">
                Precio Final: ${product.price.toFixed(2)}
              </span>
            </div>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};
