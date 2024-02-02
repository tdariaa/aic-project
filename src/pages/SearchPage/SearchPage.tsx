import React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useGetArtworkBySearchQuery } from '../../store/api/api';

import './SearchPage.css';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get('query');
  const { data: items, isLoading, isSuccess } = useGetArtworkBySearchQuery(queryParam);

  const handleClick = (id: string) => {
    navigate(`/element/${id}`);
  };

  return (
    <main className='main'>
      <SearchForm />
      {isLoading && <p className='search-page__title_loading'>Loading...</p>}
      {!isLoading && isSuccess && items?.cards.length > 0 && (
        <ul className='search-page__list'>
          {items?.cards.map((item) => (
            <li
              className='search-page__item'
              key={item.id}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <p className='search-page__title'>{item.title}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && isSuccess && items?.cards.length === 0 && (
        <p className='search-page__title_no-result'>No result</p>
      )}
    </main>
  );
};
