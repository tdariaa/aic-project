import { PictureItem, PictureItemById } from '../types/types';
export interface PictureItemFront {
  id: string;
  imageId: string;
  artistTitle: string;
  artworkTypeTitle: string;
  dateDisplay: string;
  title: string;
  provenanceText: string;
}
export interface PictureItemByIdFront extends PictureItemFront {
  description: string;
  artistDisplay: string;
  dateStart: string;
  dateEnd: string;
  placeOfOrigin: string;
  creditLine: string;
  mediumDisplay: string;
}

export type imageId = PictureItem['image_id'];
export type artistTitle = PictureItem['artist_title'];
export type artworkTypeTitle = PictureItem['artwork_type_title'];
export type dateDisplay = PictureItem['date_display'];
export type provenanceText = PictureItem['provenance_text'];

export const transformPictureItem = (data: PictureItem): PictureItemFront => {
  const newData = {
    id: data.id,
    imageId: data.image_id,
    artistTitle: data.artist_title,
    artworkTypeTitle: data.artwork_type_title,
    dateDisplay: data.date_display,
    title: data.title,
    provenanceText: data.provenance_text,
  };
  return newData;
};

export type artistDisplay = PictureItemById['artist_display'];
export type dateStart = PictureItemById['date_start'];
export type dateEnd = PictureItemById['date_end'];
export type placeOfOrigin = PictureItemById['place_of_origin'];
export type creditLine = PictureItemById['credit_line'];
export type mediumDisplay = PictureItemById['medium_display'];

export const transformPictureItemById = (data: PictureItemById): PictureItemByIdFront => {
  const newData = {
    id: data.id,
    imageId: data.image_id,
    artistTitle: data.artist_title,
    artworkTypeTitle: data.artwork_type_title,
    dateDisplay: data.date_display,
    title: data.title,
    provenanceText: data.provenance_text,
    description: data.description?.replace(/<[^>]*>/g, ''),
    artistDisplay: data.artist_display,
    dateStart: data.date_start,
    dateEnd: data.date_end,
    placeOfOrigin: data.place_of_origin,
    creditLine: data.credit_line,
    mediumDisplay: data.medium_display,
  };
  return newData;
};
