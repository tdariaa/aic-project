import './Card.css';
import { useNavigate } from 'react-router';
import { PictureItemFront } from '../../utils/transformTypes';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getFavorite, toggleFavoriteItem } from '../../store/slice/favotiteSlice';
import { getEmail } from '../../store/slice/authenticationSlice';

export const Card = (card: PictureItemFront) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector(getEmail);
  const favoriteList = useAppSelector(getFavorite);
  const isFav = favoriteList.some((item: PictureItemFront) => item.id === card.id);

  const handleClick = (card: PictureItemFront, email?: string) => {
    if (email) {
      dispatch(toggleFavoriteItem({ item: card, email: email }));
      return;
    }
    navigate('/signin');
  };

  return (
    <div className='card'>
      <img
        src={`https://www.artic.edu/iiif/2/${card.imageId}/full/843,/0/default.jpg`}
        alt=''
        className='card__image'
      />
      <h2 className='card__title'>{card.title}</h2>
      <p className='card__title'>{card.artistTitle}</p>
      <p className='card__title'>{card.artworkTypeTitle}</p>
      <button className='card__button card__button_like' onClick={() => handleClick(card, userEmail)}>
        {isFav && userEmail ? 'Удалить' : 'В избранное'}
      </button>
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
