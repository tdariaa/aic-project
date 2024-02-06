import { useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../store/hook';

import { deleteHistoryItem } from '../../store/slice/historySlice';
import { HistoryProps } from '../../types/types';
import './History.css';

const HistoryPosts = ({ post }: HistoryProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector((state) => state.authentication.email);

  const handleDeletePost = (post: string, userEmail?: string) => {
    if (userEmail) {
      dispatch(deleteHistoryItem({ search: post, email: userEmail }));
    }
  };

  return (
    <li className='history__item'>
      <div className='history__post' onClick={() => navigate(`/search/?query=${post}`)}>
        <p>{post}</p>
      </div>
      <button className='history__button' onClick={() => handleDeletePost(post, userEmail)}>
        X
      </button>
    </li>
  );
};

export const History = () => {
  const historyList = useAppSelector((state) => state.history.historyQuery);
  const content = historyList.map((post: string, index: number) => <HistoryPosts post={post} key={post + index} />);

  return (
    <section className='history'>
      <ul className='history__list'>{content}</ul>
    </section>
  );
};
