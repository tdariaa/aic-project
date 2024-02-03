import './Card.css';
import { useNavigate } from 'react-router';
import { PictureItemFront } from '../../utils/transformTypes';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addFavoriteItem } from '../../store/slice/favotiteSlice';

export const Card = (card: PictureItemFront) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector((state) => state.authentication.email);
  console.log(userEmail);

  // const handleClick = (card: PictureItemFront) => {
  //   // dispatch(addFavoriteItem(card));
  // };
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
        В избранное
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
