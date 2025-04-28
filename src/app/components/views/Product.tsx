import StoreLogo from "../StoreLogo";
import { useEffect, useRef, useState } from "react";

import { Dropdown } from "primereact/dropdown";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import ProductFilter from "../utils/ProductFilter";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

export const ProductRowView = ({ product }: { product: product }) => {
  type tag = {
    name: string;
    value: string;
  };
  const manageDescription = (): tag[] => {
    const filtredTags: tag[] = [];
    if (product.description?.includes("***") === false) {
      return [];
    } else {
      product?.description
        ?.split("***")[1]
        .split("\n")
        .map((e) => {
          if (e.includes(":")) {
            const temp = e.trim().split(":");
            filtredTags.push({ name: temp[0], value: temp[1] });
          }
        });
      return filtredTags;
    }
  };

  const manageIconTag = (tag: string): string => {
    switch (tag) {
      case "Color":
        return "bx bx-brush";
      case "Talla":
        return "bx bxs-t-shirt";
      default:
        return "pi pi-tag";
    }
  };
  return (
    <div className="w-full flex flex-row flex-nowrap gap-2 items-center justify-between py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-sm shadow-sm">
      <div className="flex flex-row justify-center items-center gap-2">
        <img
          className="min-w-[50px] min-h-[50px] rounded bg-gray-200 border-2 border-gray-300"
          src=""
          alt=""
        />
        <div>
          <h2 className="font-medium">{product.name}</h2>
          <div className="flex flex-row gap-2 items-center justify-start">
            <StoreLogo name={product.store?.name as string} />
            <div className="flex flex-row gap-1 items-center justify-center">
              <i className="bx bx-copy"></i>
              <p>{product.cuantity}</p>
            </div>
            {product.description && product.description?.length > 0 && (
              <ul className="flex flex-row gap-1 items-center justify-center">
                {manageDescription().map((tag) => {
                  return (
                    <li className="flex flex-row gap-1 items-center justify-center border-2 border-gray-200 rounded-full px-2 py-1 text-sm">
                      <i className={manageIconTag(tag.name)}></i>
                      <p className="text-[12px]">{tag.value}</p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div>
        <span className="font-test">{"$ " + product.price?.toFixed(2)}</span>
      </div>
    </div>
  );
};

export const ProductListView = ({
  productList,
  headerLabel
}: {
  headerLabel: string,
  productList: product[];
}) => {
  const [listView, setListView] = useState<product[]>(productList);

  const [sortKey, setSortKey] = useState<string | undefined>();

  const sortOptions = [
    { label: "Precio Asc.", value: "price" },
    { label: "Precio Des.", value: "!price" },
  ];

  const onSortChange = (e: { value: string }) => {
    setSortKey(e.value);
    const sortedProducts = sortProducts(productList, e.value);
    setListView(sortedProducts);
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
    const filteredProducts = productList.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setListView(filteredProducts);
  };

  useEffect(() => {
    if (!sortKey) setListView(productList);
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
            <ProductFilter productList={productList} />
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
      <div className={`flex flex-col  gap-2 ${(productList.length==0 || !productList)? "justify-center":"justify-start"} items-center p-3 border-2 border-gray-200 rounded-sm grow`}>
        { (listView && listView.length>0)?
        listView.map((e) => (
          <ProductRowView product={e} />
        )):
        <div className="flex justify-center items-center flex-row gap-2 bg-gray-100 rounded-full py-2 px-3 shadow-sm">
          <i className="pi pi-exclamation-circle"></i>
          <span>No hay productos que mostrar.</span>
        </div>
      }
        
      </div>
    </div>
  );
};
