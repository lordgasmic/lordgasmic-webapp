export interface OrderResponse {
  user: string;
  orderDate: Date;
  items: { [key: string]: string[] };
}
