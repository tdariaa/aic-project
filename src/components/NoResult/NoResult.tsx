import './NoResult.css';
import { useNavigate } from 'react-router';

export const NoResult = () => {
  const navigate = useNavigate();
  return (
    <main className='no-result'>
      <section className='no-result__section'>
        <h1 className='no-result__title'>Страница не найдена</h1>
        <button className='no-result__back' onClick={() => navigate(-1)} type='button'>
          Назад
        </button>
      </section>
    </main>
  );
};

export default NoResult;
