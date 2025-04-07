type endpoint = {
    name: string,
    method: "get"|"post"|"put"|"delete",
    params: params[],
    description: string
}

type params= {
    name: string,
    type: string,
    required: boolean,
    description: string
}

type apiList = endpoint[]