import React from 'react';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useLocation } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addHistoryItem } from '../../store/slice/historySlice';

import { useGetArtworkByIdQuery, useGetArtworkBySearchQuery } from '../../store/api/api';
import { useNavigate } from 'react-router';

import './SearchPage.css';
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get('query');
  // console.log(location, queryParam);

  const dispatch = useAppDispatch()();
  const { data: items, isLoading, isSuccess } = useGetArtworkBySearchQuery(queryParam);

  // console.log(items);

  const handleClick = (title: string, id: string) => {
    // dispatch(addHistoryItem(title));
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
                handleClick(item.title, item.id);
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
