export interface CafeLocation {
  lat: number;
  lng: number;
}

export interface CafeContent {
  text: string;
  images: string[];
  playlist?: string;
  book?: string;
}

export interface CafeMeta {
  hours?: string;
  weather?: string;
}

export interface Cafe {
  slug: string;
  title: string;
  location?: CafeLocation;
  content: CafeContent;
  meta?: CafeMeta;
  published: boolean;
}

export interface CafeIndex {
  slug: string;
  title: string;
  published: boolean;
}
