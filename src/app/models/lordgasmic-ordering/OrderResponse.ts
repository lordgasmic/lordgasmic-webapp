export interface OrderResponse {
  username: string;
  date: Date;
  items: Map<string, string[]>;
}
