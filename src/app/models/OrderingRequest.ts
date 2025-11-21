import { PrintType } from '@models/PrintType';

export interface OrderingRequest {
  message: string;
  type: PrintType;
  properties: { [key: string]: string[] };
}
