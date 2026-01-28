import { Funko } from '@models/funkos/Funko';

export interface FunkosResponse {
  from: number;
  size: number;
  numFound: number;
  funkos: Array<Funko>;
}
