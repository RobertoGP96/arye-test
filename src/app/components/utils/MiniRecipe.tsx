import React from "react";

interface MiniRecipeProps {
  product: product | null;
}

export const MiniRecipe: React.FC<MiniRecipeProps> = ({ product }) => {
  return (
    <ul className="max-w-[120px] flex flex-row flex-wrap justify-stretch items-center pl-4 px-2 border-l-2 border-dotted border-gray-400 gap-1 p-1 min-w-[200px]">
      <li className="w-full flex flex-row gap-0 justify-between items-center rounded-full p-1 bg-gray-50/45 border border-gray-400/45">
        <i className="pi pi-shop"></i>
        <span className="font-test w-full rounded-full px-2  text-end text-[16px]">
          {"$ " + product?.price_store?.toFixed(2)}
        </span>
      </li>
      <li className="w-full flex flex-row gap-0 justify-between px-2 items-center rounded-full bg-gray-50/45 p-1 border border-gray-400/45">
        <i className="pi pi-truck"></i>
        <span className="text-[14px] m-0">
          {"+ $" + product?.delivery_cost?.toFixed(2)}
        </span>
      </li>
    </ul>
  );
};
