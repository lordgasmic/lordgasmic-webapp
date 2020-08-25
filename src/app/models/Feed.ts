import {UnitOfMeasure} from './UnitOfMeasure';
import {Meridiem} from './Meridiem';

export class Feed {
  date: string;
  time: string;
  meridiem: Meridiem;
  given: number;
  givenUom: UnitOfMeasure;
  quantity: number;
  quantityUom: UnitOfMeasure;
  vitamin: boolean;
}
