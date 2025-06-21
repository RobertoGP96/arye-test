import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { useEffect, useState } from "react";
import { Avatar } from "primereact/avatar";

import StoreLogo from "../components/StoreLogo";
import { Button } from "primereact/button";

const Products = () => {
  const products: product[] = [
    {
      name: "",
      price: 0,
      store: { name: "amazon", taxe: 1.0807 },
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
    },
    {
      name: "",
      price: 0,
      store: { name: "ebay", taxe: 1.1235 },
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
    },
  ];

  const [search, setSearch] = useState("");

  const [items, setItems] = useState<product[]>(products);

  const firstColumnBody = () => {
    return <i className="pi pi-box"></i>;
  };

  const clientBodyTemplate = () => {
    return (
      <div className="flex items-center gap-2">
        <Avatar icon="pi pi-user" />
        <span>Client</span>
      </div>
    );
  };
  const orderTemplate = (item: product) => {
    return (
      <div className="flex flex-row justify-star items-center gap-2">
        <i className="pi pi pi-ticket"></i>
        <span>{item.order}</span>
      </div>
    );
  };

  const Header = () => {
    return (
      <div className="flex justify-between items-center w-full gap-2">
        <h2 className="font-bold text-2xl">Productos</h2>
        <div className="flex flex-row gap-2.5">
          <Button icon="bx bx-filter-alt" />
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar"
            />
          </IconField>
        </div>
      </div>
    );
  };

  const priceBodyTemplate = (product: product) => {
    return (
      <div className="flex flex-row gap-2 justify-star">
        <span>$</span>
        <span className="font-test">{product.price.toFixed(2)}</span>
      </div>
    );
  };

  const storeBodyTemplate = (product: product) => {
    return <StoreLogo name={product.store?.name as string} />;
  };

  const handleSearch = () => {
    return items.filter((elem) => elem.name.includes(search));
  };

  useEffect(() => {
    if (search.length > 0) setItems(handleSearch);
    else setItems(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="flex flex-col grow gap-2 px-2.5 py-1.5 justify-star items-star w-full">
      <DataTable
        value={items}
        className="datatable-p w-full"
        header={Header}
        rows={12}
        emptyMessage="No hay elementos para mostrar."
      >
        <Column body={firstColumnBody} />
        <Column field="name" header="Name" sortable />
        <Column field="category" header="Category" sortable />
        <Column
          field="store"
          header="Tienda"
          sortable
          body={storeBodyTemplate}
        />
        <Column
          field="Client"
          header="Cliente"
          body={clientBodyTemplate}
          sortable
        />
        <Column field="order" header="Pedido" body={orderTemplate} sortable />
        <Column
          field="price"
          header="Precio"
          body={priceBodyTemplate}
          sortable
        />
      </DataTable>
    </div>
  );
};

export default Products;
