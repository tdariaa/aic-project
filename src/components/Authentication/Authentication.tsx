import './Authentication.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthProps } from '../../types/types';
import '../Authentication/Authentication.css';

interface FormInputs {
  username: string;
  email: string;
  password: string;
}

export const Authentication: React.FC<AuthProps> = ({ children, buttonText, authLink, authLinkName, authText }) => {
  const {
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
    console.log(data);
  };
  console.log(errors);

  return (
    <section className='auth'>
      <div className='auth__container'>
        <form className='auth__form' onSubmit={handleSubmit(onSubmit)}>
          {children}
          <button className='auth__button' type='submit'>
            <div className='auth__button_line' />
            <div className='auth__button_line' />
            <span className='auth__button-text'>{buttonText}</span>
          </button>
          <p className='auth__text'>
            {authText}
            <Link to={authLink} className='auth__link'>
              {authLinkName}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
