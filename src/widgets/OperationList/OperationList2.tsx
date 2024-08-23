import React, { useState } from 'react';
import { 
  useGetOperationsQuery, 
  useDeleteOperationMutation, 
  useUpdateOperationMutation, 
  useCreateOperationMutation,
  Operation,
} from '../../api/operationsApi';
import { useGetCategoriesQuery } from '../../api/categoriesApi';
import CategoriesList from '../../shared/Categories/CategoriesList';
import CreateCategory from '../../shared/Categories/CreateCategory';

const OperationsList: React.FC = () => {
  const { data: operationsData, error, isLoading } = useGetOperationsQuery({
    pagination: { pageSize: 100, pageNumber: 1 },
    sorting: { type: 'ASC', field: 'createdAt' },
  });

  const { data: categoriesData } = useGetCategoriesQuery();

  const [deleteOperation] = useDeleteOperationMutation();
  const [updateOperation] = useUpdateOperationMutation();
  const [createOperation] = useCreateOperationMutation();

  const [newOperation, setNewOperation] = useState<Operation>({
    name: '',
    desc: '',
    amount: 0,
    date: new Date().toISOString(),
    type: 'Profit',
    categoryId: '',
    commandId: "23209230423539",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!newOperation.name.trim()) {
      errors.name = 'Название операции обязательно';
    }
    if (!newOperation.amount || isNaN(newOperation.amount) || newOperation.amount <= 0) {
      errors.amount = 'Сумма должна быть положительным числом';
    }
    if (!newOperation.date) {
      errors.date = 'Дата обязательна';
    }
    if (!newOperation.type) {
      errors.type = 'Тип операции обязателен';
    }
    if (!newOperation.categoryId) {
      errors.categoryId = 'Категория обязательна';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteOperation(id).unwrap();
      alert('Operation deleted successfully');
    } catch (error) {
      alert('Failed to delete operation');
    }
  };

  const handleUpdate = async (id: string) => {
    if (!validateForm()) return;

    try {
      await updateOperation({ id, operation: newOperation }).unwrap();
      alert('Operation updated successfully');
    } catch (error) {
      alert('Failed to update operation');
    }
  };

  const handleCreate = async () => {
    if (!validateForm()) return;

    try {
      await createOperation(newOperation).unwrap();
      alert('Operation created successfully');
      setNewOperation({
        name: '',
        desc: '',
        amount: 0,
        date: new Date().toISOString(),
        type: 'Profit',
        categoryId: '',
        commandId: "23209230423539"
      });
    } catch (error) {
      alert('Failed to create operation');
    }
  };

  if (isLoading) return <div className="text-center mt-4 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center mt-4 text-red-500">Error: {error as string}</div>;

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-4">
      <CategoriesList />
      <CreateCategory />
      <div className="bg-white rounded-md shadow-md p-4 max-w-2xl w-full">
        <h1 className="text-xl font-medium text-gray-800 mb-4">Операции</h1>
        <ul className="space-y-2 w-auto">
          {operationsData?.data.map((operation) => (
            <li
              key={operation.id}
              className="border border-gray-300 bg-gray-50 rounded-md p-3 flex justify-between items-center text-sm hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="font-medium text-gray-900">Категория: {operation.categoryId}</p>
                  <p className="font-medium text-gray-900">Название: {operation.name}</p>
                  <p className="text-gray-500">Тип: {operation.type}</p>
                  <div className="text-gray-600">
                    {operation.type === 'Cost' ? '-' : '+'} {operation.amount}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleUpdate(operation.id)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => handleDelete(operation.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Добавить новую операцию или введите данные и редактируйте существующую операцию</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Название"
              value={newOperation.name}
              onChange={(e) => setNewOperation({ ...newOperation, name: e.target.value })}
              className={`border rounded-md p-2 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

            <input
              type="text"
              placeholder="Описание"
              value={newOperation.desc}
              onChange={(e) => setNewOperation({ ...newOperation, desc: e.target.value })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />

            <input
              type="number"
              placeholder="Сумма"
              value={newOperation.amount}
              onChange={(e) => setNewOperation({ ...newOperation, amount: parseFloat(e.target.value) })}
              className={`border rounded-md p-2 w-full ${errors.amount ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.amount && <div className="text-red-500 text-sm">{errors.amount}</div>}

            <input
              type="date"
              value={newOperation.date.substring(0, 10)}
              onChange={(e) => setNewOperation({ ...newOperation, date: new Date(e.target.value).toISOString() })}
              className={`border rounded-md p-2 w-full ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.date && <div className="text-red-500 text-sm">{errors.date}</div>}

            <select
              value={newOperation.type}
              onChange={(e) => setNewOperation({ ...newOperation, type: e.target.value as 'Profit' | 'Cost' })}
              className={`border rounded-md p-2 w-full ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="Profit">Profit</option>
              <option value="Cost">Cost</option>
            </select>
            {errors.type && <div className="text-red-500 text-sm">{errors.type}</div>}

            <select
              value={newOperation.categoryId}
              onChange={(e) => setNewOperation({ ...newOperation, categoryId: e.target.value })}
              className={`border rounded-md p-2 w-full ${errors.categoryId ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Выберите категорию</option>
              {categoriesData?.data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && <div className="text-red-500 text-sm">{errors.categoryId}</div>}

            <button
              onClick={handleCreate}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full"
            >
              Добавить операцию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsList;
