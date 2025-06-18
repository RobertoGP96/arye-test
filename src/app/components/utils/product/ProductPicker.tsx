import { Dropdown } from "primereact/dropdown";
import { useEffect, useRef, useState } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import ProductFilter from "./ProductFilter";
import ProductRowBase from "./ProductRowBase";

const productListed: product[] = [
  {
    id: "1",
    name: "Producto 1",
    description: "Descripción del producto 1",
    sku: "SKU-001",
    category: "Categoría 1",
    cuantity: 10,
    price: 100,
    store: {
      name: "temu",
      taxe: 1.0807,
    },
    price_store: 7.09,
    delivery_cost: 5,
  },
  {
    id: "2",
    name: "Producto 2",
    description: "Descripción del producto 2",
    sku: "SKU-002",
    category: "Categoría 2",
    price_store: 8.04,
    delivery_cost: 5,
    cuantity: 20,
    price: 200,
    store: {
      name: "temu",
      taxe: 1.0807,
    },
  },
  {
    id: "3",
    name: "Producto 3",
    description: "Descripción del producto 3",
    sku: "SKU-003",
    category: "Categoría 1",
    price_store: 115.04,
    delivery_cost: 2.99,
    cuantity: 1,
    price: 200,
    store: {
      name: "shein",
      taxe: 1.1235,
    },
  },
];

const ProductPicker = ({
  handleAdd,
  headerLabel,
}: {
  headerLabel: string;
  handleAdd: (e: product[]) => void;
}) => {
  const [selectedProducts, setSelectedProducts] = useState<product[]>([]);
  const [availableProducts, setAvailableProducts] = useState<product[]>([]);
  const [sortKey, setSortKey] = useState<string | undefined>();

  const sortOptions = [
    { label: "Precio Asc.", value: "price" },
    { label: "Precio Des.", value: "!price" },
  ];

  const onSortChange = (e: { value: string }) => {
    setSortKey(e.value);
    const sortedProducts = sortProducts(availableProducts, e.value);
    setAvailableProducts(sortedProducts);
  };

  const sortProducts = (products: product[], key: string) => {
    return products.sort((a, b) => {
      if (key.startsWith("!")) {
        return (b.price as number) - (a.price as number);
      }
      return (a.price as number) - (b.price as number);
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    const filteredProducts = selectedProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setAvailableProducts(filteredProducts);
  };

  const handleSave = (e: product[]) => {
    handleAdd(e);
  };

  const handleSelect = (e: product) => {
    const checked = selectedProducts.find((product) => product.id === e.id);
    if (checked) {
      const updatedSelectedProducts = selectedProducts.filter(
        (product) => product.id !== e.id
      );
      setSelectedProducts(updatedSelectedProducts);
      return;
    } else {
      const updatedSelectedProducts = [...selectedProducts, e];
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  useEffect(() => {
    if (!sortKey) setAvailableProducts(productListed);
  }, [sortKey]);

  const op = useRef<OverlayPanel>(null);

  return (
    <div className="w-full flex flex-col gap-2 min-h-full">
      <h2 className="text-md font-bold uppercase">{headerLabel} </h2>
      <div className="flex flex-row gap-2 justify-between items-center p-3">
        <Dropdown
          options={sortOptions}
          value={sortKey}
          optionLabel="label"
          placeholder="Ordenar por"
          onChange={onSortChange}
          className="min-h-full w-[160px]"
          showClear
        />
        <div className="flex flex-row gap-2 justify-start items-center ">
          <Button
            icon="bx bx-filter-alt"
            onClick={(e) => op.current?.toggle(e)}
          />
          <OverlayPanel
            ref={op}
            showCloseIcon
            closeOnEscape
            dismissable={false}
            className="w-[300px]"
          >
            <ProductFilter productList={selectedProducts} />
          </OverlayPanel>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText
              placeholder="Buscar"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearch(e)
              }
            />
          </IconField>
        </div>
      </div>
      <div className="flex flex-col  gap-2 justify-start items-center p-3 border-2 border-gray-200 rounded-sm grow">
        {availableProducts.map((product) => {
          return (
            <ProductRowBase
              key={product.id}
              onSelected={handleSelect}
              item={product}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-row gap-2 justify-end items-center p-3 pb-0">
        <Button
          icon="pi pi-save"
          label="Completar"
          onClick={() => handleSave(selectedProducts)}
        />
      </div>
    </div>
  );
};

export default ProductPicker;
