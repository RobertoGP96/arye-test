import { Dropdown } from "primereact/dropdown";
import { useEffect, useRef, useState } from "react";
import { ProductRowView } from "../views/Product";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import ProductFilter from "./ProductFilter";

const ProductPicker = ({productsSlected, headerLabel}:{headerLabel: string,productsSlected: product[]}) => {

  const [products, setProducts] = useState<product[]>(productsSlected);
  const [sortKey, setSortKey] = useState<string | undefined>();

  const sortOptions = [
    { label: "Precio Asc.", value: "price" },
    { label: "Precio Des.", value: "!price" },
  ];

  const onSortChange = (e: { value: string }) => {
    setSortKey(e.value);
    const sortedProducts = sortProducts(products, e.value);
    setProducts(sortedProducts);
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
    const filteredProducts = productsSlected.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    if (!sortKey) setProducts(productsSlected);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

          <Button icon="pi pi-plus" severity="secondary" label="Añadir" onClick={(e) => op.current?.toggle(e)} />
          <Button icon="bx bx-filter-alt" onClick={(e) => op.current?.toggle(e)} />
          <OverlayPanel ref={op} showCloseIcon closeOnEscape dismissable={false} className="w-[300px]">
            <ProductFilter productList={productsSlected}/>
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
        {products.map((product) => {
          return <ProductRowView key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductPicker;
