import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // добавить логику для отправки данных на сервер для аутентификации
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
