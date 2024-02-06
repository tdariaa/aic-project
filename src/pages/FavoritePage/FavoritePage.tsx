import { useAppSelector } from '../../store/hook';
// import { FavoriteSection } from '../../components/FavoriteSection/FavoriteSection';
import { CardSection } from '../../components/CardSection/CardSection';
import './FavoritePage.css';

export interface PictureItemFront {
  id: string;
  imageId: string;
  artistTitle: string;
  artworkTypeTitle: string;
  dateDisplay: string;
  title: string;
  provenanceText: string;
}

export const FavoritePage = () => {
  const favoriteList = useAppSelector((state) => state.favorite.favoriteQuery);
  return (
    <main className='main'>
      <CardSection cards={favoriteList} />
    </main>
  );
};
