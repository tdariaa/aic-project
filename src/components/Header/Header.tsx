import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { logOut } from '../../store/slice/authenticationSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';

export const Header = () => {
  const currentTheme = React.useContext(ThemeContext);
  let userEmail = useAppSelector((state) => state.authentication.email);
  const [isAuth, setIsAuth] = React.useState(!!userEmail);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setIsAuth(!!userEmail);
  }, [userEmail]);

  const handleClick = () => {
    dispatch(logOut());
    setIsAuth(!isAuth);
  };

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
            {isAuth ? (
              <>
                <li className='header__link'>
                  <Link to='/history' className='header__link-a'>
                    История
                  </Link>
                </li>
                <li className='header__link'>
                  <Link to='/favorite' className='header__link-a'>
                    Избранное
                  </Link>
                </li>
                <li className='header__link'>
                  <Link onClick={() => handleClick()} to='/' className='header__link-a'>
                    Выйти
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='header__link'>
                  <Link to='/signin' className='header__link-a'>
                    Войти
                  </Link>
                </li>
                <li className='header__link'>
                  <Link to='/signup' className='header__link-a'>
                    Регистрация
                  </Link>
                </li>
              </>
            )}
          </ul>
          <button className={buttonClassName} onClick={currentTheme.toggleTheme} />
        </nav>
      </div>
    </header>
  );
};
