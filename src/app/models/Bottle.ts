import { UnitOfMeasure } from './UnitOfMeasure';

export class Bottle {
  ordinal: number;
  given: number;
  quantity: number;
  givenUom: UnitOfMeasure;
  quantityUom: UnitOfMeasure;
  vitamin: boolean;
  probiotic: boolean;
  gas: boolean;
  note: string;
}
