export interface OrderResponse {
  username: string;
  orderDate: Date;
  items: Map<string, string[]>;
}
