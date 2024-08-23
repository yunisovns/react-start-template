import React, { useState } from 'react';
import { useGetCategoriesQuery } from '../../api/categoriesApi';
import {
  Operation,
  useCreateOperationMutation,
  useDeleteOperationMutation,
  useGetOperationsQuery,
  useUpdateOperationMutation,
} from '../../api/operationsApi';

const OperationsList: React.FC = () => {
  const {
    data: operationsData,
    error,
    isLoading,
  } = useGetOperationsQuery({
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
    commandId: '23209230423539',
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
        commandId: '23209230423539',
      });
    } catch (error) {
      alert('Failed to create operation');
    }
  };

  if (isLoading) return <div className="mt-4 text-center text-gray-600">Loading...</div>;
  if (error) return <div className="mt-4 text-center text-red-500">Error: {error as string}</div>;

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 py-4">
      <div className="w-full max-w-2xl rounded-md bg-white p-4 shadow-md">
        <h1 className="mb-4 text-xl font-medium text-gray-800">Операции</h1>
        <ul className="w-auto space-y-2">
          {operationsData?.data.map((operation) => {
            console.log(categoriesData.data);
            const category = operation.category
              ? categoriesData?.data.find((cat) => cat.id === operation.category.id)?.name
              : 'Неизвестная категория';
            console.log(operation);

            return (
              <li
                key={operation.id}
                className="flex items-center justify-between rounded-md border border-gray-300 bg-gray-50 p-3 text-sm transition-colors hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <div className="ml-2">
                    <p className="font-medium text-gray-900">
                      Категория: {category ? category : 'Неизвестная категория'}
                    </p>
                    <p className="font-medium text-gray-900">Название: {operation.name}</p>
                    <p className="text-gray-500">Тип: {operation.type}</p>
                    <div className="text-gray-600">
                      {operation.type === 'Cost' ? '-' : '+'} {operation.amount}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => handleUpdate(operation.id)} className="text-blue-500 hover:text-blue-600">
                    Редактировать
                  </button>
                  <button onClick={() => handleDelete(operation.id)} className="text-red-500 hover:text-red-600">
                    Удалить
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <h2 className="mb-2 text-lg font-medium text-gray-800">
            Добавить новую операцию или введите данные и редактируйте существующую операцию
          </h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Название"
              value={newOperation.name}
              onChange={(e) => setNewOperation({ ...newOperation, name: e.target.value })}
              className={`w-full rounded-md border p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <div className="text-sm text-red-500">{errors.name}</div>}

            <input
              type="text"
              placeholder="Описание"
              value={newOperation.desc}
              onChange={(e) => setNewOperation({ ...newOperation, desc: e.target.value })}
              className="w-full rounded-md border border-gray-300 p-2"
            />

            <input
              type="number"
              placeholder="Сумма"
              value={newOperation.amount}
              onChange={(e) => setNewOperation({ ...newOperation, amount: parseFloat(e.target.value) })}
              className={`w-full rounded-md border p-2 ${errors.amount ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.amount && <div className="text-sm text-red-500">{errors.amount}</div>}

            <input
              type="date"
              value={newOperation.date.substring(0, 10)}
              onChange={(e) => setNewOperation({ ...newOperation, date: new Date(e.target.value).toISOString() })}
              className={`w-full rounded-md border p-2 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.date && <div className="text-sm text-red-500">{errors.date}</div>}

            <select
              value={newOperation.type}
              onChange={(e) => setNewOperation({ ...newOperation, type: e.target.value as 'Profit' | 'Cost' })}
              className={`w-full rounded-md border p-2 ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="Profit">Profit</option>
              <option value="Cost">Cost</option>
            </select>
            {errors.type && <div className="text-sm text-red-500">{errors.type}</div>}

            <select
              value={newOperation.categoryId}
              onChange={(e) => setNewOperation({ ...newOperation, categoryId: e.target.value })}
              className={`w-full rounded-md border p-2 ${errors.categoryId ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Выберите категорию</option>
              {categoriesData?.data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && <div className="text-sm text-red-500">{errors.categoryId}</div>}

            <button
              onClick={handleCreate}
              className="w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
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
