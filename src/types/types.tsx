// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
import { SubmitHandler, useForm } from 'react-hook-form';
export interface IAuthProps {
  children: React.ReactNode;
  authText: string;
  authLinkName: string;
  authLink: string;
  buttonText: string;
  onSubmit: any;
}

export interface IFormInputs {
  username: string;
  email: string;
  password: string;
}

export interface ICard {
  id: string;
  imgId: string;
  title: string;
  artistTitle: string;
  artworkTypeTitle: string;
}

export interface IPictureItem {
  id: string;
  image_id: string;
  artist_title: string;
  artwork_type_title: string;
  date_display: string;
  title: string;
  provenance_text: string;
}

export interface IArtworksState {
  data: IPictureItem[];
}

export interface IPictureItemById extends IPictureItem {
  description: string;
  artist_display: string;
}

export interface IArtworksStateByID {
  data: IPictureItemById;
}
