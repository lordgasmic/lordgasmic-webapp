import { Funko } from '@models/Funko';

export interface FunkoResponse {
  start: number;
  numFound: number;
  funkos: Array<Funko>;
}
