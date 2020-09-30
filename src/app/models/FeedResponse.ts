import {Meridiem} from './Meridiem';
import {Bottle} from './Bottle';

export class FeedResponse {
    date: String;
    timeHour: number;
    timeMinute: number;
    meridiem: Meridiem;
    bottles: Bottle[];
}