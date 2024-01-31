import './Card.css';
// import { useGetArtworksQuery } from '../../store/api/api';
import { ICard } from '../../types/types';

export const Card: React.FC<ICard> = (card) => {
  return (
    <div className='card'>
      <img src={`https://www.artic.edu/iiif/2/${card.imgId}/full/843,/0/default.jpg`} alt='' className='card__image' />
      <h2 className='card__title'>{card.title}</h2>
      <p className='card__title'>{card.artistTitle}</p>
      <p className='card__title'>{card.artworkTypeTitle}</p>
      <button className='card__button card__button_like' />
      <button className='card__button card__button_info' />
    </div>
  );
};
