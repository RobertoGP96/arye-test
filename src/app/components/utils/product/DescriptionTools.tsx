import { useRef, useState } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function DescriptionTools({
  description,
  handleAddTool,
}: {
  description: string;
  handleAddTool: (value: string) => void;
}) {
  const odtp = useRef<OverlayPanel>(null);

  const [OverlayTemplate, setOverlayTemplate] = useState<number>(0);

  const updateProductDescription = (type: string, label: string): void => {
    let newDescription = "";
    if (description.includes("***")) {
      if (description.includes(`${type + ": "}`)) {
        handleAddTool(
          description
            .split("\n")
            .map((linea) =>
              linea.includes(`${type + ":"}`) ? `${type + ": " + label}` : linea
            )
            .join("\n")
        );
        return;
      } else {
        newDescription += `\n${type + ": " + label}`;
      }
    } else {
      newDescription += `\n***\n${type + ": " + label}`;
    }

    handleAddTool(description + newDescription);
  };

  const ClodesTemplate = () => {
    const [addDescrip, setAddDescrip] = useState<string>();
    return (
      <div className="flex flex-row gap-2 justify-center items-center">
        <i className="bx bxs-t-shirt text-xl"></i>
        <InputText
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAddDescrip(e.target.value)
          }
          placeholder="Talla:"
        />
        <Button
          icon="pi pi-save"
          type="button"
          label=""
          onClick={(e) => {
            odtp.current?.toggle(e);
            updateProductDescription("Talla", addDescrip as string);
          }}
        />
      </div>
    );
  };

  const ColorTemplate = () => {
    const [addDescrip, setAddDescrip] = useState<string>();
    return (
      <div className="flex flex-row gap-2 justify-center items-center">
        <i className="bx bx-brush text-xl"></i>
        <InputText
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAddDescrip(e.target.value)
          }
          placeholder="Color:"
        />
        <Button
          icon="pi pi-save"
          type="button"
          label=""
          onClick={(e) => {
            odtp.current?.toggle(e);
            updateProductDescription("Color", addDescrip as string);
          }}
        />
      </div>
    );
  };

  const OtherTemplate = () => {
    type tagAlter = {
      tag: string;
      label: string;
    };
    const [addDescrip, setAddDescrip] = useState<tagAlter>({
      tag: "",
      label: "",
    });
    return (
      <div className="flex flex-row gap-2 justify-center items-center">
        <i className="bx bx-purchase-tag text-2xl"></i>
        <InputText
          className="max-w-[100px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAddDescrip({ ...addDescrip, tag: e.target.value })
          }
          placeholder="Etiqueta:"
        />
        <InputText
          className="max-w-[150px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAddDescrip({ ...addDescrip, label: e.target.value })
          }
          placeholder="Valor:"
        />
        <Button
          icon="pi pi-save"
          type="button"
          label=""
          onClick={(e) => {
            odtp.current?.toggle(e);
            updateProductDescription(addDescrip.tag, addDescrip.label);
          }}
        />
      </div>
    );
  };

  const templates = [
    { temp: <ClodesTemplate /> },
    { temp: <ColorTemplate /> },
    { temp: <OtherTemplate /> },
  ];

  return (
    <div className="w-full flex flex-row flex-wrap justify-start gap-1 cursor-pointer items-center">
      <span className="w-full text-sm m-0">Herramientas</span>
      <Button
        icon="bx bxs-t-shirt"
        type="button"
        label=""
        onClick={(e) => {
          setOverlayTemplate(0);
          odtp.current?.toggle(e);
        }}
        tooltip="Talla"
      />
      <Button
        icon="bx bx-brush"
        label=""
        type="button"
        onClick={(e) => {
          setOverlayTemplate(1);
          odtp.current?.toggle(e);
        }}
        tooltip="Color"
      />
      <Button
        icon="bx bx-purchase-tag"
        label=""
        type="button"
        onClick={(e) => {
          setOverlayTemplate(2);
          odtp.current?.toggle(e);
        }}
        tooltip="Personalizada"
      />
      <Button
        icon="bx bx-trash"
        label=""
        type="button"
        onClick={() =>{
          handleAddTool(description.split("***")[0].trim());
        }}
        tooltip="Eliminar Descripción"
      />
      <OverlayPanel ref={odtp}>{templates[OverlayTemplate].temp}</OverlayPanel>
    </div>
  );
}
