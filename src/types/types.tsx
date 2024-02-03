export type searchQuery = string;

export interface HistoryState {
  historyQuery: searchQuery[];
}

export interface FormInputs {
  username?: string;
  email: string;
  password: string;
}

export interface PictureItem {
  id: string;
  image_id: string;
  artist_title: string;
  artwork_type_title: string;
  date_display: string;
  title: string;
  provenance_text: string;
}

export interface PictureItemById extends PictureItem {
  description: string;
  artist_display: string;
  date_start: string;
  date_end: string;
  place_of_origin: string;
  credit_line: string;
  medium_display: string;
}

export interface ArtworksState {
  data: PictureItem[];
}

export interface ArtworksStateByID {
  data: PictureItemById;
}

export interface AuthenticationProps {
  pathname: '/signin' | '/signup';
}

export interface HistoryProps {
  post: string;
}
