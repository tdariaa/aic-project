import React from 'react';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Header } from '../../components/Header/Header';
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
  console.log(location, queryParam);

  const dispatch = useAppDispatch()();
  const { data: items } = useGetArtworkBySearchQuery(queryParam);

  console.log(items);

  const handleClick = (title: string, id: string) => {
    dispatch(addHistoryItem(title));
    navigate(`/element/${id}`);
  };

  return (
    <>
      <Header />
      <main className='main'>
        <SearchForm />
        {items?.cards.length ? (
          <ul className='search__list'>
            {items?.cards.map((item) => (
              <li
                className='search__item'
                key={item.id}
                onClick={() => {
                  handleClick(item.title, item.id);
                  // dispatch(addHistoryItem(item.title));
                  // navigate(`/element/${item.id}`);
                }}
              >
                <p className='search__title'>{item.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className='search__title'>No result</p>
        )}
      </main>
    </>
  );
};

// export const SearchForm = () => {
//   const dispatch = useAppDispatch()();
//   const [value, setValue] = React.useState('');
//   const [isOpen, setIsOpen] = React.useState(false);
//   const { data: items } = useGetArtworkBySearchQuery(value, { skip: value.trim().length < 0 });

//   const navigate = useNavigate();

//   React.useEffect(() => {
//     setValue('');
//   }, []);
