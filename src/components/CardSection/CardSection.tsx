import './CardSection.css';
import { Card } from '../Card/Card';
import '../Card/Card.css';
import { PictureItemFront } from '../../utils/transformTypes';

export interface CardSectionProps {
  cards: PictureItemFront[];
}

export const CardSection = ({ cards }: CardSectionProps) => {
  let content = cards.map((card) => (
    <li className='card__item' key={card.id}>
      <Card
        id={card.id}
        imageId={card.imageId}
        title={card.title}
        artistTitle={card.artistTitle}
        artworkTypeTitle={card.artworkTypeTitle}
        dateDisplay={card.dateDisplay}
        provenanceText={card.provenanceText}
      />
    </li>
  ));

  return (
    <section className='card-area'>
      <ul className='card__list'>{content}</ul>
    </section>
  );
};
