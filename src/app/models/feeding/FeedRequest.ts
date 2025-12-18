import { Meridiem } from '../Meridiem';
import { Bottle } from './Bottle';

export class FeedRequest {
  date: string;
  timeHour: number;
  timeMinute: number;
  meridiem: Meridiem;
  bottles: Bottle[];
}
