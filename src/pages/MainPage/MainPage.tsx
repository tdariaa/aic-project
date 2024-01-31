import { SearchForm } from '../../components/SearchForm/SearchForm';
import { CardSection } from '../../components/CardSection/CardSection';

import './MainPage.css';

export const MainPage = () => {
  return (
    <main className='main'>
      <SearchForm />
      <CardSection />
    </main>
  );
};
