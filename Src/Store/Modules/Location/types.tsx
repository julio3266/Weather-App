export interface ILocation {
  coordinates: {
    lat: number;
    long: number;
  };
  place: {
    city: string;
    state: string;
  };
  status: string;
}
