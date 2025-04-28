import { ProductRowView } from "./views/Product";

const ProductList = ({ productList }: { productList: product[] }) => {
  return (
    <div className="flex flex-col gap-2 p-2 ">
      <div className="flex flex-row justify-between items-center gap-1 text-gray-500">
        <h2 className="uppercase font-bold">Lista de Productos</h2>
        <div className="flex flex-row justify-center items-center gap-1 text-gray-400 rounded-full border-2 border-dotted px-2">
          <i className="pi pi-box"></i>
          <span>{productList.length}</span>
        </div>
      </div>
      {productList && productList.length > 0 ? (
        <>
          <ul className="flex flex-col gap-1 max-h-[220px] overflow-y-auto px-2">
            {productList.map((element) => (
              <li key={element.id}>
                <ProductRowView product={element} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="flex flex-row justify-center items-center gap-1 text-gray-500 py-4 bg-gray-200">
          <i className="pi pi-info-circle"></i>
          <p>No hay productos disponibles</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
