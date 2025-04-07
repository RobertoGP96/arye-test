import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { useEffect, useState } from "react";
import { Avatar } from "primereact/avatar";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { Button } from "primereact/button";

const Users = () => {
  const users = [
    {
      name: "Roberto",
      lastName: "González",
      email: "trolbertogp96@gmail.com",
      address: "Ave. Cap. Urbino",
      password: "********",
      phone: "+ 53 844409",
      role: "Client",
    },
    {
      name: "Client 1",
      lastName: "",
      email: "",
      address: "",
      password: "",
      phone: "",
      role: "Admin",
    },
    {
        name: "User 1",
        lastName: "",
        email: "",
        address: "",
        password: "",
        phone: "",
        role: "Econ",
      },
  ];

  const [search, setSearch] = useState("");

  const [items, setItems] = useState<user[]>(users);

  const firstColumnBody = () => {
    return <Avatar shape="circle" icon="pi pi-user" size="normal" />;
  };

  const actionBodyTemplate = () => {
    return (
      <div className="flex gap-2">
        <button className="p-button p-button-icon-only">
          <i className="pi pi-pencil"></i>
        </button>
        <button className="p-button p-button-icon-only">
          <i className="pi pi-trash"></i>
        </button>
      </div>
    );
  };
  const [checked, setChecked] = useState<boolean>(false);

  const Header = () => {
    return (
      <div className="flex justify-between items-center w-full gap-2">
        <h2 className="font-bold text-2xl">Users</h2>
        <div className="flex flex-row gap-2.5">
          <Button icon="pi pi-plus" label="Crear" />
          <ToggleButton
            checked={checked}
            onLabel="Cancelar"
            offLabel="Editar"
            onIcon="pi pi-times"
            offIcon="pi pi-pencil"
            onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)}
            className="w-8rem"
          />
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

  const emailBodyTemplate = (user: user) => {
    return (
      <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
        <i className="pi pi-envelope"></i>
        <span>{user.email}</span>
      </div>
    );
  };
  const phoneBodyTemplate = (user: user) => {
    return (
      <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
        <i className="pi pi-phone"></i>
        <span>{user.phone}</span>
      </div>
    );
  };
  const roleBodyTemplate = (user: user) => {
    const handleSeverity = (label: string): string => {
      switch (label) {
        case "Client":
          return "bg-gray-300";
        case "Admin":
          return "bg-green-300";
        case "Econ":
          return "bg-yellow-300";

        default:
          return "bg-gray-200"
      }
    };
    const handleIcon = (label: string):string => {
        switch (label) {
          case "Client":
            return "pi pi-user";
          case "Admin":
            return "pi pi-cog";
          case "Econ":
            return "pi pi-money-bill";
  
          default:
            return "pi pi-user"
        }
      };
    return (
      <div className="flex flex-row flex-nowrap justify-start items-center gap-2 ">
        <span className={handleSeverity(user.role)+" rounded-2xl text-sm px-2 py-1 flex flex-row flex-nowrap gap-1 justify-center items-center"}>
        <i className={handleIcon(user.role)}></i>
            {user.role}</span>
      </div>
    );
  };

  const handleSearch = () => {
    return users.filter((elem) => elem.name.includes(search));
  };

  useEffect(() => {
    if (search.length > 0) setItems(handleSearch);
    else setItems(users);
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
        <Column className="w-7" body={firstColumnBody} />
        <Column field="name" header="Nombre" sortable />
        <Column field="lastName" header="Apellidos" sortable />
        <Column
          field="email"
          header="Correo"
          body={emailBodyTemplate}
          sortable
        />
        <Column
          field="phone"
          header="Teléfono"
          body={phoneBodyTemplate}
          sortable
        />
        <Column field="role" header="Rol" sortable body={roleBodyTemplate} />
        {checked && (
          <Column
            className="w-1/10"
            header="Acciones"
            body={actionBodyTemplate}
          />
        )}
      </DataTable>
    </div>
  );
};

export default Users;
