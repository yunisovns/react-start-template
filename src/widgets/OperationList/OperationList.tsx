import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addOperation, removeOperation } from './OperationsSlice';

const OperationList: React.FC = () => {
  const operations = useSelector((state: RootState) => state.financialOperations.operations);
  const dispatch = useDispatch();
  const handleAddOperation = () => {
    dispatch(addOperation());
  };
  const handleRemoveOperation = (id: string) => {
    dispatch(removeOperation(id));
  };

  return (
    <div>
      <h2>Список операций:</h2>
      <ul>
        {operations.map((operation) => (
          <li key={operation.value.id}>
            <div className="mt-4 box-border h-1/4 w-1/4 justify-between rounded-lg bg-slate-300 p-2 ">
              <p>Название: {operation.value.name}</p>
              <p>Тип: {operation.type}</p>
              <p>Сумма: {operation.value.amount}</p>
              <p>Категория: {operation.value.category.name}</p>
              <p>Дата: {operation.value.createdAt}</p>
              <button
                className="rounded-md bg-red-500 px-6 py-2 text-sm font-medium text-white shadow transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-4"
                onClick={() => handleRemoveOperation(operation.value.id)}
              >
                Удалить операцию
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="rounded-md bg-blue-500 px-6 py-2 text-sm font-medium text-white shadow transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        onClick={handleAddOperation}
      >
        Добавить операцию
      </button>
    </div>
  );
};

export default OperationList;
