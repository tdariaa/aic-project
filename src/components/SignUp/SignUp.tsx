import { Authentication } from '../Authentication/Authentication';
export const SignUp = () => {
  return (
    <Authentication authLink='Войти' authText='Уже зарегестрированны? ' buttonText='Зарегистрироваться'>
      <>
        <h3 className='auth__title'>Имя :</h3>
        <input className='auth__input' type='text' placeholder='Name' />
        <h3 className='auth__title'>Email :</h3>
        <input className='auth__input' type='text' placeholder='Email' />
        <h3 className='auth__title'>Пароль :</h3>
        <input className='auth__input' type='text' placeholder='Password' />
      </>
    </Authentication>
  );
};
