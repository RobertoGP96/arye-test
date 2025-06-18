import { Avatar } from "primereact/avatar";
import React from "react";

interface ClientManagerLinkProps {
  client: user | null;
  manager: user | null;
}

export const ClientManagerLink: React.FC<ClientManagerLinkProps> = ({ client, manager }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-[3px] p-[4px] border-3 border-solid border-gray-400/55 bg-gray-100/45 rounded-full">
      <div className="flex flex-row justify-center items-center gap-[3px]">
        <Avatar style={{background:"transparent"}} shape="circle" className="border border-gray-400" size="normal" icon={client?.name?"pi pi-user":"pi pi-question"}/>
        <span className="m-0 text-[12px]">{client?.name}</span>
      </div>
      <i className="pi pi-chevron-right text-sm"></i>
      <div className="flex flex-row justify-center items-center gap-[3px]">
        <Avatar style={{background:"transparent"}} className="border border-gray-400" shape="circle" size="normal" icon={manager?.name?"bx bx-hard-hat":"pi pi-question"}/>
        <span className="m-0 text-[12px]">{manager?.name}</span>
      </div>
    </div>
  );
};
