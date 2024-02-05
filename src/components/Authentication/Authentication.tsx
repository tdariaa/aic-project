import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../Authentication/Authentication.css';
import { AuthenticationProps } from '../../types/types';
import { validationErrorMessage } from '../../utils/validationErrorMessage';
import { FormInputs } from '../../types/types';
import { checkAuthentication } from '../../utils/checkAuthentication';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addUser, logInUser } from '../../store/slice/authenticationSlice';
import { getFavoriteItem } from '../../store/slice/favotiteSlice';
import { getHistoryItem } from '../../store/slice/historySlice';

export const Authentication = ({ pathname }: AuthenticationProps) => {
  const navigate = useNavigate();
  // const [authCheck] = checkAuthentication();
  // const userEmail = useAppSelector((state) => state.authentication.email);
  const dispatch = useAppDispatch();
  const location = pathname === '/signup';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log('inSubmit');
    if (location) {
      console.log('ok');
      dispatch(addUser({ username: data.username, email: data.email, password: data.password }));
      navigate('/');
      return;
    }
    console.log('ne ok', data);
    if (checkAuthentication(data)) {
      dispatch(logInUser(data.email));
      navigate('/');
      return;
    }
    navigate('/signup');
  };

  return (
    <section className='auth'>
      <div className='auth__container'>
        <form className='auth__form' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='auth__title'>{location ? 'Регистрация' : 'Вход'}</h1>
          {location && (
            <>
              <h3 className='auth__subtitle'>Имя :</h3>
              <input
                className='auth__input'
                type='text'
                placeholder='Name'
                {...register('username', { required: 'Email is required', minLength: 2, maxLength: 10 })}
              />
              <span className='auth__span'>
                {errors.username && <p>{validationErrorMessage('Name', errors.username.type)}</p>}
              </span>
            </>
          )}

          <h3 className='auth__subtitle'>Email :</h3>
          <input
            className='auth__input'
            type='email'
            placeholder='Email'
            {...register('email', {
              required: 'Email is required',
              minLength: 3,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Email is invalid',
              },
            })}
          />
          <span className='auth__span'>
            {errors.email && <p>{errors.email.message + validationErrorMessage('Email', errors.email.type)}</p>}
          </span>

          <h3 className='auth__subtitle'>Пароль :</h3>
          <input
            className='auth__input'
            type='password'
            placeholder='Password'
            autoComplete='on'
            {...register('password', { required: 'Email is required', minLength: 5, maxLength: 15 })}
          />
          <span className='auth__span'>
            {errors.password && <p>{validationErrorMessage('Password', errors.password.type)}</p>}
          </span>
          <button className='auth__button' type='submit'>
            <div className='auth__button_line' />
            <div className='auth__button_line' />
            <span className='auth__button-text'>{location ? 'Регистрация' : 'Войти'}</span>
          </button>
          <p className='auth__text'>
            {location ? 'Уже зарегестрированны? ' : 'Еще не зарегестрированны?'}
            <Link to={location ? '/signin' : '/signup'} className='auth__link'>
              {location ? 'Войти' : 'Зарегистрироваться'}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
