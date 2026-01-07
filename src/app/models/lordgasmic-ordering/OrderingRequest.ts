export interface OrderingRequest {
  message: string;
  type: string;
  properties: OrderItem[];
}

export interface OrderItem {
  item: string;
  extras: OrderExtra[];
}

export interface OrderExtra {
  extra: string;
  type: string;
}
