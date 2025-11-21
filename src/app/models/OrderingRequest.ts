export interface OrderingRequest {
  message: string;
  type: string;
  properties: { [key: string]: string[] };
}
