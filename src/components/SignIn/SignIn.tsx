import { Authentication } from '../Authentication/Authentication';
export const SignIn = () => {
  return (
    <Authentication authLink='Зарегестрироваться' authText='Еще не зарегестрированны? ' buttonText='Войти'>
      <>
        <h3 className='auth__title'>Email :</h3>
        <input className='auth__input' type='text' placeholder='Email' />
        <h3 className='auth__title'>Пароль :</h3>
        <input className='auth__input' type='text' placeholder='Password' />
      </>
    </Authentication>
  );
};
