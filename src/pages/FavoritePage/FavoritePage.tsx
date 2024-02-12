import { useAppSelector } from '../../store/hook';
import { CardSection } from '../../components/CardSection/CardSection';
import './FavoritePage.css';
import { getFavorite } from '../../store/slice/favotiteSlice';

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
  const favoriteList = useAppSelector(getFavorite);
  const isEmty: boolean = favoriteList.length === 0;
  return (
    <main className='main'>
      {isEmty ? <h1 className='main__title'>Здесь пока ничего нет</h1> : <CardSection cards={favoriteList} />}
    </main>
  );
};
