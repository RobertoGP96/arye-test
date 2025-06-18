import React from "react";
import StoreLogo from "../../StoreLogo";
import { ClientManagerLink } from "../ClientManagerLink";
import { MiniRecipe } from "../MiniRecipe";

interface ProductRowBaseProps {
  item: product | null;
  onSelected: (item: product) => void;
}

const ProductRowBase: React.FC<ProductRowBaseProps> = ({
  item,
  onSelected,
}) => {
  const [selected, setSelected] = React.useState(false);

  type tag = {
    name: string;
    value: string;
  };
  const manageDescription = (): tag[] => {
    const filtredTags: tag[] = [];
    if (item?.description?.includes("***") === false) {
      return [];
    } else {
      item?.description
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
    <div
      className={`min-h-[70px] cursor-pointer border-2 border-transparent w-full flex flex-row flex-nowrap gap-2 items-center justify-between px-[5px] ${
        selected
          ? "bg-orange-200"
          : "bg-gray-200 hover:border-2 hover:border-gray-300"
      }  rounded-sm shadow-sm ease-in-out`}
      onClick={() => {
        setSelected(!selected);
        if (item) onSelected(item);
      }}
    >
      <div className="flex flex-row justify-center items-center gap-2">
        <img
          className="min-w-[60px] min-h-[60px] rounded bg-gray-200 border-3 border-gray-300"
          src=""
          alt=""
        />
        <div>
          <h2 className="font-medium">{item?.name}</h2>
          <div className="flex flex-row gap-2 items-center justify-start">
            <StoreLogo name={item?.store?.name as string} />
            <div className="flex flex-row gap-1 items-center justify-center">
              <i className="bx bx-copy"></i>
              <p>{item?.cuantity}</p>
            </div>
            {item?.description && item?.description?.length > 0 && (
              <ul className="flex flex-row gap-1 items-center justify-center">
                {manageDescription().map((tag) => {
                  return (
                    <li className="flex flex-row gap-1 items-center justify-center border-2 border-gray-400 rounded-full px-2 py-1 text-sm">
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
      <div className="flex flex-row gap-6 items-center justify-center min-h-[65px]">
        <ClientManagerLink
          client={item?.client as user}
          manager={item?.client as user}
        />
        <MiniRecipe product={item} />
      </div>
    </div>
  );
};

export default ProductRowBase;
