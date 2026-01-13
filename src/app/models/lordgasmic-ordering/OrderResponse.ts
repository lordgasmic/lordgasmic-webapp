export interface OrderResponse {
  user: string;
  orderDate: Date;
  items: ItemMap;
}

export interface ItemMap {
  [key: string]: any;
}
