import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

export const Header = () => {
  const currentTheme = React.useContext(ThemeContext);

  const buttonClassName = `header__theme ${currentTheme.theme ? 'header__theme_dark' : 'header__theme_light'}`;
  const headerContentClassName = `header__content ${currentTheme.theme ? 'header__content_dark' : 'header__content_light'}`;

  return (
    <header className='header'>
      <div className={headerContentClassName}>
        <Link to='/' className='header__title'>
          Art Insitut Chicago
        </Link>
        <nav className='header__nav'>
          <ul className='header__links'>
            <li className='header__link'>
              <Link to='/' className='header__link-a'>
                Главная
              </Link>
            </li>
            <li className='header__link'>
              <Link to='/favorite' className='header__link-a'>
                Избранное
              </Link>
            </li>
            <li className='header__link'>
              <Link to='/signin' className='header__link-a'>
                Войти
              </Link>
            </li>
          </ul>
          <button className={buttonClassName} onClick={currentTheme.toggleTheme} />
        </nav>
      </div>
    </header>
  );
};
