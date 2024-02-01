import './CardSection.css';
import { useGetArtworksQuery } from '../../store/api/api';
import { Card } from '../Card/Card';
import { IPictureItem, IPictureItemAfterFilter } from '../../types/types';
import '../Card/Card.css';

export const CardSection = () => {
  const { data: items, isLoading, isSuccess, isError, error } = useGetArtworksQuery('');
  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    console.log(items.cards);
    const data = items.cards.filter((card: IPictureItem) => card.image_id != null);
    content = data.map((card: IPictureItemAfterFilter) => (
      <li className='card__item' key={card.id}>
        <Card
          id={card.id}
          imgId={card.image_id}
          title={card.title}
          artistTitle={card.artist_title}
          artworkTypeTitle={card.artwork_type_title}
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
