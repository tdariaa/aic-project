import { SubmitHandler, useForm } from 'react-hook-form';
import { Authentication } from '../Authentication/Authentication';

export const SignIn = () => {
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
    console.log(type);
    if (type === 'minLength') {
      return `${inputName} is too short`;
    }
    if (type === 'maxnLength') {
      return `${inputName} is too long`;
    }
    return '';
  };

  return (
    <Authentication
      authLinkName='Зарегестрироваться'
      authLink='/signup'
      authText='Еще не зарегестрированны? '
      buttonText='Войти'
    >
      <>
        <h3 className='auth__title'>Имя :</h3>
        <input
          className='auth__input'
          type='text'
          placeholder='Name'
          {...register('username', { required: 'Email is required', minLength: 2, maxLength: 10 })}
        />
        <span className='auth__span'>{errors.username && <p>{errorTypeMessage('Name', errors.username.type)}</p>}</span>

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
      </>
    </Authentication>
  );
};
