import { Header } from '../../components/Header/Header';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { History } from '../../components/History/Histoty';
import './HistoryPage.css';

export const HistoryPage = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <SearchForm />
        <History />
      </main>
    </>
  );
};
