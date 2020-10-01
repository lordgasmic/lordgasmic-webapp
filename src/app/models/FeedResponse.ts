import { Meridiem } from './Meridiem';
import { Bottle } from './Bottle';

export class FeedResponse {
  date: string;
  timeHour: number;
  timeMinute: number;
  meridiem: Meridiem;
  bottles: Bottle[];
}
