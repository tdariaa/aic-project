import { useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../store/hook';

import { deleteHistoryItem } from '../../store/slice/historySlice';
import { HistoryProps } from '../../types/types';
import './History.css';

export const History = ({ post }: HistoryProps) => {
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
