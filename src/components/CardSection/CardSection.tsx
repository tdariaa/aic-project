import './CardSection.css';
import { useGetArtworksQuery } from '../../store/api/api';
import { Card } from '../Card/Card';
import '../Card/Card.css';
import { transformPictureItem } from '../../utils/transformTypes';

export const CardSection = () => {
  const { data: items, isLoading, isSuccess, isError, error } = useGetArtworksQuery('');
  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    const frontItem = items.cards.map((card) => transformPictureItem(card));
    const data = frontItem.filter((card) => card.imageId != null);
    content = data.map((card) => (
      <li className='card__item' key={card.id}>
        <Card
          id={card.id}
          imgId={card.imageId}
          title={card.title}
          artistTitle={card.artistTitle}
          artworkTypeTitle={card.artworkTypeTitle}
        />
      </li>
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section className='card-area'>
      <ul className='card__list'>{content}</ul>
    </section>
  );
};
