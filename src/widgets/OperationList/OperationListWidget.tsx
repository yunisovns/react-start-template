import React from 'react';
import OperationList from './OperationList';
import { createRandomOperation } from './createRandomProduct';

export const OperationListWidget: React.FC = () => {
  const operations = Array.from({ length: 5 }, () => createRandomOperation(new Date().toISOString()));

  return (
    <div>
      <h1>Моё финансовое приложение</h1>
      <OperationList />
    </div>
    
  );
};
