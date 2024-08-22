import React, { useState } from 'react';
import LoginForm from './../features/forms/LoginForm';
import RegisterForm from './../features/forms/RegForm';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? 'Войти' : 'Регистрация'}
        </h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <button
          onClick={toggleForm}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
