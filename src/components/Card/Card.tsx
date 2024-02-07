import './Card.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { PictureItemFront } from '../../utils/transformTypes';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addFavoriteItem } from '../../store/slice/favotiteSlice';

export const Card = (card: PictureItemFront) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector((state) => state.authentication.email);
  const favoriteList = useAppSelector((state) => state.favorite.favoriteQuery);
  const isFav = favoriteList.some((item: PictureItemFront) => item.id === card.id);

  const handleClick = (card: PictureItemFront, email?: string) => {
    if (email) {
      dispatch(addFavoriteItem({ item: card, email: email }));
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
        {isFav ? 'Удалить' : 'В избранное'}
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

Card.propTypes = {
  id: PropTypes.string,
  imageId: PropTypes.string,
  artistTitle: PropTypes.string,
  artworkTypeTitle: PropTypes.string,
  dateDisplay: PropTypes.string,
  title: PropTypes.string,
  provenanceText: PropTypes.string,
};
