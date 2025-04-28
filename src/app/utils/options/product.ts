type optionType = {
    label: string;
    value: string;
}

export const productStates: optionType[] = [
    { label: "Procesado", value: "processed" },
    { label: "Pagado", value: "paid" },
    { label: "Comprado", value: "bought" },
    { label: "Recibido", value: "recived" },
    { label: "Entregado", value: "delivery" },
]

export const productCategories: optionType[] = [
    { label: "Miscelaneas", value: "miscel" },
    { label: "Medicamentos", value: "medics" },
    { label: "Otros", value: "others" },
]


