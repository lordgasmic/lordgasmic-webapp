import { WineResponse } from './WineResponse';

export class WineDisplay extends WineResponse {
  wineFriend = new Set<string>();
}
