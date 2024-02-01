// import { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { useGetArtworkByIdQuery } from '../../store/api/api';
import './Item.css';

export const Item = () => {
  const param = useParams();
  const { data, isLoading, isSuccess, isError, error } = useGetArtworkByIdQuery(param.id);
  let description;
  console.log(data);
  {
  }
  if (isSuccess) {
    description = data.data.description?.replace(/<[^>]*>/g, '');
  }
  return (
    <section className='item'>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && (
        <div className='item__contaiter'>
          <img
            className='item__image'
            src={`https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`}
            alt=''
          />
          <div>
            <h1 className='item__title'>{data.data.title}</h1>
            <h2 className='item__subtitle'>{data.data.artist_display}</h2>
            <p className='item__description'>{description}</p>
          </div>

          <div className='item__info'></div>
        </div>
      )}
    </section>
  );
};
