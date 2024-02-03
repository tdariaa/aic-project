import { SearchForm } from '../../components/SearchForm/SearchForm';
import { CardSection } from '../../components/CardSection/CardSection';

import './MainPage.css';
import { useGetArtworksQuery } from '../../store/api/api';
import { PictureItemFront, transformPictureItem } from '../../utils/transformTypes';

export const MainPage = () => {
  const { data: items, isLoading, isSuccess, isError, error } = useGetArtworksQuery('');
  let content;

  if (isLoading) {
    content = <div className='loading'>Loading...</div>;
  } else if (isSuccess) {
    const frontItem = items.cards.map((card) => transformPictureItem(card));
    const data = frontItem.filter((card) => card.imageId != null);
    content = <CardSection cards={data} />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <main className='main'>
      <SearchForm />
      {content}
    </main>
  );
};
