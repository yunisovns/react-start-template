import React, { useState } from 'react';
import { useGetProfileQuery, useUpdateProfileMutation, useChangePasswordMutation } from '../../api/profileApi';

const ProfilePage: React.FC = () => {
  const { data: profile, error, isLoading } = useGetProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [changePassword] = useChangePasswordMutation();

  const [name, setName] = useState(profile?.name || '');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (isLoading) return <div className="text-center">Загрузка...</div>;
  if (error) return <div className="text-center text-red-500">Ошибка загрузки профиля</div>;

  const handleUpdateProfile = async () => {
    try {
      const updatedProfile = await updateProfile({ name }).unwrap();
      if (updatedProfile.name) {
      setSuccessMessage('Профиль успешно обновлен!');
      setErrorMessage('');
      }
    } catch (err) {
      setErrorMessage('Ошибка обновления профиля');
      setSuccessMessage('');
    }
  };

  const handleChangePassword = async () => {
    try {
      const result = await changePassword({ password, newPassword }).unwrap();
      if (result.success) {
        setSuccessMessage('Пароль успешно изменен!');
        setErrorMessage('');
      }
    } catch (err) {
      setErrorMessage('Ошибка изменения пароля');
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Профиль</h2>
        <div className="text-lg mb-6">
          <p><strong>ID:</strong> {profile?.id}</p>
          <p><strong>Email:</strong> {profile?.email}</p>
          <p><strong>Дата регистрации:</strong> {new Date(profile?.signUpDate).toLocaleDateString()}</p>
          <p><strong>Команда:</strong> {profile?.commandId}</p>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Имя</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleUpdateProfile}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Обновить профиль
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Текущий пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          <label className="block text-sm font-medium text-gray-700 mt-4">Новый пароль</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleChangePassword}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Изменить пароль
          </button>
        </div>
        {successMessage && <div className="mt-4 text-center text-green-500">{successMessage}</div>}
        {errorMessage && <div className="mt-4 text-center text-red-500">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default ProfilePage;
