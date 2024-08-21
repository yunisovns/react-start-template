import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialized, setToken } from '../../store/authSlice';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  

  const onSubmit = (data: any) => {
    dispatch(setInitialized());
    dispatch(setToken('123'));
    navigate('/profile');
  };

  return (
    <div>
      <h2>Страница авторизации</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Логин:
          <input type="text" {...register('username', { required: true })} />
        </label>
        <br />
        <label>
          Пароль:
          <input type="password" {...register('password', { required: true })} />
        </label>
        <br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
