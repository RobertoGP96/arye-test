import { Avatar } from "primereact/avatar";

export const AccountOption = (item: account) => {
  return (
    <div className="flex flex-row flex-nowrap gap-2 justify-start items-center ">
      {item ? (
        <>
          <Avatar shape="circle" icon="pi pi-user" />
          <span className="text-sm">{item.username}</span>
        </>
      ) : (
        <span className="py-[4px]">Selecciona la cuenta</span>
      )}
    </div>
  );
};

export const AccountSelectedOption = (item: account) => {
  return (
    <div className="flex flex-row flex-nowrap gap-2 justify-start items-center ">
      {item ? (
        <>
          <Avatar shape="circle" icon="pi pi-user" className="cursor-pointer" />
          <span className="text-sm max-w-[88px] overflow-ellipsis overflow-x-hidden">
            {item.username}
          </span>
        </>
      ) : (
        <span className="py-[4px]" >Selecciona la cuenta</span>
      )}
    </div>
  );
};
