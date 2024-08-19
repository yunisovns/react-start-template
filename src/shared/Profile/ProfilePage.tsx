import React from 'react';
import LoginForm from '../../features/forms/LoginForm';
import RegForm from '../../features/forms/RegForm';

export const ProfilePage = () => {
  return (
    <div>
      <h1>Страница профиля</h1>
      <LoginForm />
      <RegForm />
    </div>
  );
};
