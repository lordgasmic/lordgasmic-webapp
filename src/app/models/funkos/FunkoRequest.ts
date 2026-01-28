export interface FunkoRequest {
  title: string;
  fandom: string;
  seriesId: number;
  name: string;
  extras: FunkoExtrasRequest[];
}

export interface FunkoExtrasRequest {
  text: string;
}
