import { useNavigate, useParams } from 'react-router';
import { useGetArtworkByIdQuery } from '../../store/api/api';
import { PictureItemFront, transformPictureItemById } from '../../utils/transformTypes';
import './Item.css';
import { toggleFavoriteItem } from '../../store/slice/favotiteSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';

export interface PictureItemByIdFront extends PictureItemFront {
  description: string;
  artistDisplay: string;
  dateStart: string;
  dateEnd: string;
  placeOfOrigin: string;
  creditLine: string;
  mediumDisplay: string;
}

export const Item = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isError } = useGetArtworkByIdQuery(param.id);
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector((state) => state.authentication.email);
  const favoriteList = useAppSelector((state) => state.favorite.favoriteQuery);
  let isFav: boolean;
  let content: JSX.Element | undefined;
  let frontItem: PictureItemByIdFront;

  const handleClick = (card: PictureItemFront, email?: string) => {
    if (email) {
      dispatch(toggleFavoriteItem({ item: card, email: email }));
      return;
    }
    navigate('/signin');
  };

  if (isSuccess) {
    frontItem = transformPictureItemById(data.data);
    isFav = favoriteList.some((item: PictureItemFront) => item.id === data.data.id);
    content = (
      <>
        <div className='item__about'>
          <h1 className='item__title'>{frontItem.title}</h1>
          <h2 className='item__subtitle'>{frontItem.artistDisplay}</h2>
          <p className='item__date'>
            {frontItem.dateStart} - {frontItem.dateEnd}
          </p>
          <p className='item__place'>{frontItem.placeOfOrigin}</p>
        </div>
        <div className='item__contaiter'>
          <img
            className='item__image'
            src={`https://www.artic.edu/iiif/2/${frontItem.imageId}/full/843,/0/default.jpg`}
            alt=''
          />
          <p className='item__description'>{frontItem.description}</p>
          <div className='item__buttons'>
            <button className='item__button item__button_back' onClick={() => navigate(-1)}>
              Назад
            </button>
            <button className='item__button item__button_fav' onClick={() => handleClick(frontItem, userEmail)}>
              {isFav ? 'Удалить' : 'В избранное'}
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <section className='item'>
      {isLoading && <div className='item__title'>Loading...</div>}
      {isError && (
        <div className='item__error-container'>
          <h1 className='item__title item__title_error'>Error</h1>
          <button className='item__button item__button_error'>Назад</button>
        </div>
      )}
      {isSuccess && content}
    </section>
  );
};
