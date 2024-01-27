export const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <h1 className='header__title'>Art Insitut Chicago</h1>
        <nav className='header__nav'>
          <ul className='header__links'>
            <li className='header__link'>
              <a className='header__link-a' href='#'>
                Главная
              </a>
            </li>
            <li className='header__link'>
              <a className='header__link-a' href='#'>
                Избранное
              </a>
            </li>
            <li className='header__link'>
              <a className='header__link-a' href='#'>
                Войти
              </a>
            </li>
          </ul>
          <div className='header__theme header__theme_light' />
        </nav>
      </div>
    </header>
  );
};
