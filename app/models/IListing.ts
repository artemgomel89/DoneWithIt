export interface Images {
  thumbnailUrl: string;
  url: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Listing {
  id: number;
  userId: number;
  categoryId: number;
  description: string;
  images?: Images[];
  price: number;
  title: string;
  location?: Location;
}

export interface ListingsState {
  data: Listing[];
  isLoading: boolean;
  error: string;
}
