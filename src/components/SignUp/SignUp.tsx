import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { Authentication } from '../Authentication/Authentication';
// import { IAuthProps, IFormInputs } from '../../types/types';

export const SignUp = () => {
  type FormInputs = {
    username: string;
    email: string;
    password: string;
  };

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

  const errorTypeMessage = (inputName: string, type: string) => {
    if (type === 'minLength') {
      return `${inputName} is too short`;
    }
    if (type === 'maxnLength') {
      return `${inputName} is too long`;
    }
    return '';
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    localStorage.setItem(data.email, JSON.stringify(data));
  };

  return (
    <section className='auth'>
      <div className='auth__container'>
        <form className='auth__form' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='auth__title'>Имя :</h3>
          <input
            className='auth__input'
            type='text'
            placeholder='Name'
            {...register('username', { required: 'Email is required', minLength: 2, maxLength: 10 })}
          />
          <span className='auth__span'>
            {errors.username && <p>{errorTypeMessage('Name', errors.username.type)}</p>}
          </span>

          <h3 className='auth__title'>Email :</h3>
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
            {errors.email && <p>{errors.email.message + errorTypeMessage('Email', errors.email.type)}</p>}
          </span>

          <h3 className='auth__title'>Пароль :</h3>
          <input
            className='auth__input'
            type='password'
            placeholder='Password'
            autoComplete='on'
            {...register('password', { required: 'Email is required', minLength: 5, maxLength: 15 })}
          />
          <span className='auth__span'>
            {errors.password && <p>{errorTypeMessage('Password', errors.password.type)}</p>}
          </span>
          <button className='auth__button' type='submit'>
            <div className='auth__button_line' />
            <div className='auth__button_line' />
            <span className='auth__button-text'>Регистрация</span>
          </button>
          <p className='auth__text'>
            Уже зарегестрированны?
            <Link to='/signin' className='auth__link'>
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
