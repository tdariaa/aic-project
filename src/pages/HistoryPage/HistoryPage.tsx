import { History } from '../../components/History/Histoty';
import { useAppSelector } from '../../store/hook';
import { getHistory } from '../../store/slice/historySlice';
import './HistoryPage.css';

export const HistoryPage = () => {
  const historyList = useAppSelector(getHistory);
  const isEmty: boolean = historyList.length === 0;
  const content = historyList.map((post: string, index: number) => <History post={post} key={post + index} />);

  return (
    <main className='main'>
      <section className='history'>
        {isEmty ? (
          <h1 className='history__title'>Здесь пока ничего нет</h1>
        ) : (
          <ul className='history__list'>{content}</ul>
        )}
      </section>
    </main>
  );
};
