import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { useAppSelector, useAppDispatch } from '../../store/hook';

import { deleteHistoryItem } from '../../store/slice/historySlice';
import { HistoryProps } from '../../types/types';
import './History.css';
import { getEmail } from '../../store/slice/authenticationSlice';

export const History = ({ post }: HistoryProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector(getEmail);

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

History.propTypes = {
  post: PropTypes.string,
};
