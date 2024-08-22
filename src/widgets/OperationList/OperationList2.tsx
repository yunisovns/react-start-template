import React from 'react';
import { useGetOperationsQuery } from '../../api/operationsApi';

const OperationsList: React.FC = () => {
  const { data, error, isLoading } = useGetOperationsQuery({
    pagination: { pageSize: 10, pageNumber: 1 },
    sorting: { type: 'ASC', field: 'name' },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error as string}</div>;

  return (
    <div>
      <h1>Operations</h1>
      <ul>
        {data?.data.map((operation) => (
          <li key={operation.id}>
            {operation.name}: {operation.amount} - {operation.type}
          </li>
        ))}
      </ul>
      <div>
        Page {data?.pagination.pageNumber} of {Math.ceil(data?.pagination.total / data?.pagination.pageSize)}
      </div>
    </div>
  );
};

export default OperationsList;
