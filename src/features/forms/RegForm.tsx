import React from 'react';
import { useForm } from 'react-hook-form';

const RegForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // добавить логику для отправки данных на сервер для регистрации пользователя
  };

  return (
    <div>
      <h2>Страница регистрации</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Имя:
          <input type="text" {...register('firstName', { required: true })} />
        </label>
        <label>
          Email:
          <input type="email" {...register('email', { required: true })} />
        </label>
        <br />
        <label>
          Пароль:
          <input type="password" {...register('password', { required: true })} />
        </label>
        <br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegForm;
