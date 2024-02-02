import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch } from '../../store/hook';
import { useGetArtworkBySearchQuery } from '../../store/api/api';
import { addHistoryItem } from '../../store/slice/historySlice';

import './SearchForm.css';
import { useDebounce } from '../../hooks/useDebounce';

export const SearchForm = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get('query');
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState(queryParam || '');
  const debouncedSearchTerm = useDebounce(value, 500);
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: items } = useGetArtworkBySearchQuery(debouncedSearchTerm, { skip: value.trim().length < 0 });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addHistoryItem(value));
    setIsOpen(false);
    navigate(`/search/?query=${value}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setValue(() => e.target.value);
      setIsOpen(true);
    }
  };

  const handleClick = (title: string, id: string) => {
    navigate(`/element/${id}`);
    setIsOpen(false);
  };

  return (
    <section className='search'>
      <form className='search__container' onSubmit={handleSubmit}>
        <div className='sarch__line'>
          <input
            className='search__input'
            type='text'
            placeholder='Search'
            value={value || ''}
            onChange={handleChange}
            onFocus={() => setIsOpen(true)}
          />
          <button className='search__button'></button>
        </div>
      </form>
      <div className={`search__overlay ${isOpen ? 'search__overlay_open' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className={`search__popup ${isOpen ? 'search__popup_open' : ''}`}>
        {items?.cards.length ? (
          <ul className='search__list'>
            {items?.cards.map((item) => (
              <li
                className='search__item'
                key={item.id}
                onClick={() => {
                  handleClick(item.title, item.id);
                }}
              >
                <p className='search__title'>{item.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className='search__title'>No result</p>
        )}
      </div>
    </section>
  );
};
