import "./ProductFilter.css";
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { productCategories, productStates } from "../../utils/options/product";

interface ProductFilterProps {
  productList: product[];
}

const ProductFilter: React.FC<ProductFilterProps> = () => {
  const [filters, setFilers] = useState<ProductFilters>({
    priceRange: [0, 100],
  });
  const [dates, setDates] = useState<Nullable<(Date | null)[]>>(null);

  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="uppercase font-bold text-center pb-1 border-b-2 border-gray-200/85">
        {" "}
        Filtros
      </h3>
      <div className="flex flex-col gap-3 p-3 justify-center items-center bg-gray-100 rounded-sm">
        <label className="w-full">Rango de Precio:</label>
        <div className="flex flex-row gap-2 justify-between items-center">
          <InputNumber
            className="w-full inpur-number-range"
            inputStyle={{ width: "100%" }}
            value={filters.priceRange[0]}
            prefix="$"
            minFractionDigits={2}
          />
          <InputNumber
            className="w-full inpur-number-range"
            inputStyle={{ width: "100%" }}
            value={filters.priceRange[1]}
            prefix="$"
            minFractionDigits={2}
          />
        </div>
        <Slider
          value={filters.priceRange}
          onChange={(e: SliderChangeEvent) =>
            setFilers({ ...filters, priceRange: e.value as [number, number] })
          }
          className="w-full"
          range
          min={0}
          max={500}
        />
      </div>
      <div className="p-2 bg-gray-100 rounded-sm">
        <label className="w-full">Rango de Fecha:</label>

        <Calendar
          value={dates}
          placeholder="Selecciona la fecha."
          className="w-full"
          onChange={(e) => setDates(e.value)}
          selectionMode="range"
          readOnlyInput
          hideOnRangeSelection
        />
      </div>
      <div className="p-2 bg-gray-100 rounded-sm flex flex-col gap-2">
        <label className="w-full">Estado del producto:</label>
        <Dropdown optionLabel="label" showClear placeholder="Selecciona el estado." options={productStates} value={filters.state} onChange={(e: DropdownChangeEvent)=>setFilers({...filters, state: e.target.value})} />
      </div>

      <div className="p-2 bg-gray-100 rounded-sm flex flex-col gap-2">
        <label className="w-full">Categoría:</label>
        <Dropdown optionLabel="label" showClear placeholder="Selecciona la categoía." options={productCategories} value={filters.category} onChange={(e: DropdownChangeEvent)=>setFilers({...filters,category: e.target.value})} />
      </div>

      <div className="flex flex-row justify-between gap-2">
        <Button
          label="Limpiar"
          severity="secondary"
          className="w-full"
          icon="pi pi-undo"
        />
        <Button label="Aplicar" className="w-full" icon="bx bx-filter-alt" />
      </div>
    </div>
  );
};

export default ProductFilter;
