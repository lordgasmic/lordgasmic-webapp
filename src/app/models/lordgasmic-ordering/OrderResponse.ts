export interface OrderResponse {
  user: string;
  orderDate: Date;
  // items: Map<string, string[]>;
  items: any;
}
