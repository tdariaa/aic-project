import './Card.css';
import { useNavigate } from 'react-router';
import { ICard } from '../../types/types';

export const Card: React.FC<ICard> = (card) => {
  const navigate = useNavigate();

  return (
    <div className='card'>
      <img src={`https://www.artic.edu/iiif/2/${card.imgId}/full/843,/0/default.jpg`} alt='' className='card__image' />
      <h2 className='card__title'>{card.title}</h2>
      <p className='card__title'>{card.artistTitle}</p>
      <p className='card__title'>{card.artworkTypeTitle}</p>
      <button className='card__button card__button_like'>В избранное</button>
      <button
        className='card__button card__button_info'
        onClick={() => {
          navigate(`/element/${card.id}`);
        }}
      >
        Подробнее
      </button>
    </div>
  );
};
