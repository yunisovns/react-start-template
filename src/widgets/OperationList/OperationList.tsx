import React, { useState } from 'react';
import { createRandomOperation, Operation } from './createRandomProduct';

const OperationList: React.FC = () => {
  const [operations, setOperations] = useState<Operation[]>(
    Array.from({ length: 5 }, () => createRandomOperation(new Date().toISOString()))
  );
  
  const handleAddOperation = () => {
    setOperations((prevState) => [...prevState, createRandomOperation(new Date().toISOString())]);
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
            </div>
          </li>
        ))}
      </ul>

      <button onClick={handleAddOperation}>Добавить операцию</button>
    </div>
  );
};

export default OperationList;

// {newOperation && (
//   <ul>
//     {operations.map((operation) => (
//       <li key={operation.value.id}>
//         <div className="mt-4 box-border h-1/4 w-1/4 justify-between rounded-lg bg-slate-300 p-2 ">
//           <p>Название: {operation.value.name}</p>
//           <p>Тип: {operation.type}</p>
//           <p>Сумма: {operation.value.amount}</p>
//           <p>Категория: {operation.value.category.name}</p>
//           <p>Дата: {operation.value.createdAt}</p>
//         </div>
//       </li>
//     ))}
//   </ul>
// )}
