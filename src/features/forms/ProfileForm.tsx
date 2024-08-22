import React from 'react';
import { useGetProfileQuery } from '../../api/profileApi';

const ProfilePage: React.FC = () => {
  const { data: profile, error, isLoading } = useGetProfileQuery();

  if (isLoading) return <div className="text-center">Загрузка...</div>;
  if (error) return <div className="text-center text-red-500">Ошибка загрузки профиля</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Профиль</h2>
        <div className="text-lg">
          <p><strong>ID:</strong> {profile?.id}</p>
          <p><strong>Имя:</strong> {profile?.name}</p>
          <p><strong>Email:</strong> {profile?.email}</p>
          <p><strong>Дата регистрации:</strong> {new Date(profile?.signUpDate).toLocaleDateString()}</p>
          <p><strong>Команда:</strong> {profile?.commandId}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
