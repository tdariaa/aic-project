import React from 'react';
import { Header } from '../../components/Header/Header';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { CardSection } from '../../components/CardSection/CardSection';
import { ThemeContext } from '../../context/ThemeContext';

import './MainPage.css';

export const MainPage = () => {
  const currentTheme = React.useContext(ThemeContext);
  console.log(currentTheme, currentTheme.theme);
  return (
    <>
      <Header />
      <main className='main'>
        <SearchForm />
        <CardSection />
      </main>
    </>
  );
};
