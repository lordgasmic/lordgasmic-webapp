export interface GasVehicle {
  name: string;
  series: Array<GasSeries>;
}

export interface GasSeries {
  name: string;
  value: string;
}
