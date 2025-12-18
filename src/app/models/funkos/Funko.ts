import { FunkoExtras } from '@models/funkos/FunkoExtras';

export interface Funko {
  id: number;
  title: string;
  fandom: string;
  seriesId: number;
  name: string;
  extras: Array<FunkoExtras>;
}
