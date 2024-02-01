import { useAppSelector, useAppDispatch } from '../../store/hook';
// import { historyData } from '../../store/slice/historySlice';

import { Header } from '../../components/Header/Header';
import { SearchForm } from '../../components/SearchForm/SearchForm';

import './History.css';
import { ReactNode } from 'react';
import { deleteHistoryItem } from '../../store/slice/historySlice';
import React from 'react';
import { useNavigate } from 'react-router';

interface Ihistory {
  post: string;
  // key: number;
}

const HistoryPosts: React.FC<Ihistory> = ({ post }) => {
  const dispatch = useAppDispatch()();
  const navigate = useNavigate();
  // const handleDeletePost = (key:number) => {
  //   dispatch(deleteHistoryItem(key));
  // }

  const handleDeletePost = (post: string) => {
    // const historyItemId = e.target;
    console.log(post);
    // console.log(historyItemId);
    // if (historyItemId) {
    dispatch(deleteHistoryItem(post));
    // }
  };
  // console.log(post);
  return (
    <li className='history__item'>
      <div className='history__post' onClick={() => navigate(`/search/?query=${post}`)}>
        <p>{post}</p>
      </div>
      <button className='history__button' onClick={() => handleDeletePost(post)}>
        X
      </button>
    </li>
  );
};

export const History = () => {
  const historyList = useAppSelector((state) => state.history.historyQuery);
  console.log(historyList);
  const content = historyList.map((post: string, index: number) => <HistoryPosts post={post} key={post + index} />);

  return (
    <section className='history'>
      <ul className='history__list'>{content}</ul>
    </section>
  );
};
