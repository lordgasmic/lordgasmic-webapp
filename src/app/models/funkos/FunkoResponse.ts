import { Funko } from '@models/funkos/Funko';

export interface FunkoResponse {
  start: number;
  numFound: number;
  funkos: Array<Funko>;
}
