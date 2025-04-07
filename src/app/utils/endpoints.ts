export const apiEndpointList: apiList[] = [
  [
    //PEDIDO
    {
      method: "post",
      name: "Crear pedido",
      params: [
        {
          name: "index",
          type: "string",
          required: true,
          description: "Indica el indice de la posicion en la base de datos.",
        },
        {
          name: "userId",
          type: "number",
          required: false,
          description: "Indica el id del usuario al cual se le crea el pedido.",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "get",
      name: "Obtener datos de un perido",
      params: [
        {
          name: "index",
          type: "number",
          required: true,
          description:
            "Indica el identificador del pedido del cual se desea obtener la información",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "delete",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "put",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
  ],
  //PRODUCTO
  [
    {
      method: "get",
      name: "Obtener datos de un perido",
      params: [
        {
          name: "index",
          type: "number",
          required: true,
          description:
            "Indica el identificador del pedido del cual se desea obtener la información",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "post",
      name: "Crear producto",
      params: [
        {
          name: "index",
          type: "string",
          required: true,
          description: "Indica el indice de la posicion en la base de datos.",
        },
        {
          name: "userId",
          type: "number",
          required: false,
          description: "Indica el id del usuario al cual se le crea el pedido.",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "delete",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "put",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
  ],
  //COMPRA,
  [
    {
      method: "get",
      name: "Obtener datos de un perido",
      params: [
        {
          name: "index",
          type: "number",
          required: true,
          description:
            "Indica el identificador del pedido del cual se desea obtener la información",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "post",
      name: "Crear producto",
      params: [
        {
          name: "index",
          type: "string",
          required: true,
          description: "Indica el indice de la posicion en la base de datos.",
        },
        {
          name: "userId",
          type: "number",
          required: false,
          description: "Indica el id del usuario al cual se le crea el pedido.",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "delete",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "put",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
  ],
  //USUARIOS
  [
    {
      method: "get",
      name: "Obtener datos de un perido",
      params: [
        {
          name: "index",
          type: "number",
          required: true,
          description:
            "Indica el identificador del pedido del cual se desea obtener la información",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "post",
      name: "Crear producto",
      params: [
        {
          name: "index",
          type: "string",
          required: true,
          description: "Indica el indice de la posicion en la base de datos.",
        },
        {
          name: "userId",
          type: "number",
          required: false,
          description: "Indica el id del usuario al cual se le crea el pedido.",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "delete",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "put",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
  ],
  //PAQUETE
  [
    {
      method: "get",
      name: "Obtener datos de un perido",
      params: [
        {
          name: "index",
          type: "number",
          required: true,
          description:
            "Indica el identificador del pedido del cual se desea obtener la información",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "post",
      name: "Crear producto",
      params: [
        {
          name: "index",
          type: "string",
          required: true,
          description: "Indica el indice de la posicion en la base de datos.",
        },
        {
          name: "userId",
          type: "number",
          required: false,
          description: "Indica el id del usuario al cual se le crea el pedido.",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "delete",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
    {
      method: "put",
      name: "Create",
      params: [
        {
          name: "index",
          type: "string",
          required: false,
          description: "",
        },
      ],
      decrption: "Lorem ipsum",
    },
  ],
];
