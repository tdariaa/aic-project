import { useAppSelector, useAppDispatch } from '../../store/hook';
// import { historyData } from '../../store/slice/historySlice';

import { Header } from '../../components/Header/Header';
import { SearchForm } from '../../components/SearchForm/SearchForm';

import './History.css';
import { ReactNode } from 'react';
import { deleteHistoryItem } from '../../store/slice/historySlice';

interface Ihistory {
  post: string;
  // key: number;
}

const HistoryPosts: React.FC<Ihistory> = ({ post }) => {
  const dispatch = useAppDispatch()();
  // const handleDeletePost = (key:number) => {
  //   dispatch(deleteHistoryItem(key));
  // }

  const handleDeletePost = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const historyItemId = e.target as HTMLDivElement;
    console.log(historyItemId);
    // console.log(historyItemId);
    // if (historyItemId) {
    //   dispatch(deleteHistoryItem(historyItemId));
    // }
  };
  // console.log(post);
  return (
    <div className='history__post' onClick={handleDeletePost}>
      <p>{post}</p>
      <button className='history__button'>X</button>
    </div>
  );
};

export const History = () => {
  const historyList = useAppSelector((state) => state.history.historyQuery);
  console.log(historyList);
  const content = historyList.map((post: string, index: number) => (
    <li className='history__item' key={index}>
      <HistoryPosts post={post} />
    </li>
  ));

  return (
    <section className='history'>
      <ul className='history__list'>{content}</ul>
    </section>
  );
};
