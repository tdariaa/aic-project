import { useParams } from 'react-router';
import { useGetArtworkByIdQuery } from '../../store/api/api';
import { transformPictureItemById } from '../../utils/transformTypes';
import './Item.css';

export const Item = () => {
  const param = useParams();
  const { data, isLoading, isSuccess, isError } = useGetArtworkByIdQuery(param.id);
  let content;
  let frontItem;
  if (isSuccess) {
    frontItem = transformPictureItemById(data.data);
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
        </div>
      </>
    );
  }
  return (
    <section className='item'>
      {isLoading && <div className='item__title'>Loading...</div>}
      {isError && <div className='item__title'>Error</div>}
      {isSuccess && content}
    </section>
  );
};
