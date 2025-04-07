type order = {
  id?: string;
  products: product[];
  delivery?: string;
  clientId?: string;
  managerId?: string;
  receipt?: string;
  state?: string;
  pay_status?: boolean;
  totalCost?: number;
  receivedProducts?: product[];
};
