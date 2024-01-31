export interface AuthProps {
  children: React.ReactNode;
  authText: string;
  authLinkName: string;
  authLink: string;
  buttonText: string;
}

export interface ICard {
  imgId: string;
  title: string;
  artistTitle: string;
  artworkTypeTitle: string;
}

export interface IPictureItem {
  id: string;
  image_id: string | null;
  artist_title: string;
  artwork_type_title: string;
  date_display: string;
  title: string;
  provenance_text: string;
}

export interface IPictureItemAfterFilter extends IPictureItem {
  image_id: string;
}
