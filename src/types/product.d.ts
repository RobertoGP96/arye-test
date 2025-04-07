type product = {
  order?: string;
  client?: string;
  store?: store;
  
  category?: string;

  id?: string;
  name: string;
  link?: string;
  description?: string;
  observation?: string;
  sku?: string;
  category: string;
  cuantity: number;

  buy_date?: string;
  deliveryUS_date?: string;
  delivery_date?: string;

  state?: string;

  price_store: number;
  descount_store: number;
  delivery_cost: number;

  store_taxe: number;

  buy_cost: number;

  taxe_own: number;
  taxe_add: number;
  own_offert: number;

  price: number;
  picture?: string;
};

