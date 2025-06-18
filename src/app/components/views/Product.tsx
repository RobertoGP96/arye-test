import StoreLogo from "../StoreLogo";
import { useEffect, useRef, useState } from "react";

import { Dropdown } from "primereact/dropdown";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import ProductFilter from "../utils/product/ProductFilter";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import ProductRowViewEdit from "../utils/product/ProductRowViewEdit";
import { Dialog } from "primereact/dialog";
import ProductPicker from "../utils/product/ProductPicker";

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
  headerLabel,
}: {
  headerLabel: string;
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
    const sortedProducts = sortProducts(listView, e.value);
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

  const handleSelect = (e: product[]) => {
    const temp = listView;
    e.map((e: product) => {
      const checked = temp.find((product) => product.id === e.id);
      if (!checked) {
        temp.push(e);
      }
    });
    setListView(temp);
    setAddPanel(false);
  };

  const handleDelete = (e: product) => {
    if (e.id) {
      const temp = listView.filter((o: product) => o.id != e.id);
      setListView(temp);
    }
  };

  useEffect(() => {
    if (!sortKey) setListView(productList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortKey]);

  const op = useRef<OverlayPanel>(null);

  const [addPanel, setAddPanel] = useState<boolean>(false);
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
          disabled={listView.length==0?true:false}
        />
        <div className="flex flex-row gap-2 justify-start items-center ">
          <div className="flex flex-row gap-2 justify-between items-center p-2 border-3 border-gray-400 border-dotted rounded-full w-15">
            <i className="pi pi-box"></i>
            <span className="m-0">{listView.length}</span>
          </div>
          <Button
            icon="pi pi-plus"
            severity="secondary"
            label="Añadir"
            onClick={() => setAddPanel(true)}
          />
          <Dialog
            visible={addPanel}
            style={{ width: "70vw", height: "85vh" }}
            onHide={() => {
              if (!addPanel) return;
              setAddPanel(false);
            }}
          >
            <ProductPicker
              headerLabel="Añade productos a la compra"
              handleAdd={handleSelect}
            />
          </Dialog>
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
            <ProductFilter productList={listView} />
          </OverlayPanel>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText
              placeholder="Buscar"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearch(e)
              }
              disabled={listView.length==0?true:false}
            />
          </IconField>
        </div>
      </div>
      <div
        className={`flex flex-col  gap-2 ${
          listView.length == 0 ? "justify-center" : "justify-start"
        } items-center p-3 border-2 border-gray-200 rounded-sm grow`}
      >
        {listView && listView.length > 0 ? (
          listView.map((e) => (
            <ProductRowViewEdit key={e.id} item={e} onDeleted={handleDelete} />
          ))
        ) : (
          <div className="flex justify-center items-center flex-row gap-2 bg-gray-100 rounded-full py-2 px-3 shadow-sm">
            <i className="pi pi-exclamation-circle"></i>
            <span>No hay productos que mostrar.</span>
          </div>
        )}
      </div>
    </div>
  );
};
