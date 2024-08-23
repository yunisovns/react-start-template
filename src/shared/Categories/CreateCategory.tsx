import React, { useState } from 'react';
import { useCreateCategoryMutation } from '../../api/categoriseApi2';

const CreateCategory: React.FC = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [createCategory] = useCreateCategoryMutation();

  const handleCreate = async () => {
    if (!name) {
      alert('Название категории обязательно');
      return;
    }

    try {
      await createCategory({ name, photo }).unwrap();
      alert('Категория успешно создана');
      setName('');
      setPhoto(null);
    } catch (error) {
      alert('Не удалось создать категорию');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 py-4">
      <div className="w-auto max-w-2xl rounded-md bg-white p-4 shadow-md">
        <h1 className="mb-4 text-xl font-medium text-gray-800">Создать категорию</h1>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Название категории"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <input
            type="text"
            placeholder="URL изображения"
            value={photo || ''}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <button
            onClick={handleCreate}
            className="w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Создать категорию
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
