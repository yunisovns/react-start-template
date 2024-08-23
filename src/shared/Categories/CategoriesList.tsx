import React, { useState } from 'react';
import { Filters, useDeleteCategoryMutation, useGetCategoriesQuery } from '../../api/categoriseApi2';

const CategoriesList: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    name: '',
    pagination: { pageSize: 10, pageNumber: 1 },
    sorting: { type: 'ASC', field: 'name' },
  });

  const { data: categoriesData, error, isLoading } = useGetCategoriesQuery(filters);
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteCategory(id).unwrap();
      alert('Category deleted successfully');
    } catch (error) {
      alert('Failed to delete category');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 py-4">
      <div className="w-auto max-w-2xl rounded-md bg-white p-4 shadow-md">
        <h1 className="mb-4 text-xl font-medium text-gray-800">Список категорий</h1>
        <input
          type="text"
          placeholder="Поиск по названию"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
        />
        {isLoading ? (
          <div className="mt-4 text-center text-gray-600">Loading...</div>
        ) : error ? (
          <div className="mt-4 text-center text-red-500">Error: {error as string}</div>
        ) : (
          <ul className="w-auto space-y-2">
            {categoriesData?.data.map((category) => (
              <li
                key={category.id}
                className="flex items-center justify-between rounded-md border border-gray-300 bg-gray-50 p-3 text-sm transition-colors hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <div className="ml-2">
                    <p className="font-medium text-gray-900">Название: {category.name}</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(category.id)} className="text-red-500 hover:text-red-600">
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex items-center justify-between text-sm">
          <button
            onClick={() =>
              setFilters({
                ...filters,
                pagination: { ...filters.pagination, pageNumber: filters.pagination.pageNumber - 1 },
              })
            }
            className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
            disabled={filters.pagination.pageNumber === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {filters.pagination.pageNumber} of{' '}
            {Math.ceil(categoriesData?.pagination.total / filters.pagination.pageSize)}
          </span>
          <button
            onClick={() =>
              setFilters({
                ...filters,
                pagination: { ...filters.pagination, pageNumber: filters.pagination.pageNumber + 1 },
              })
            }
            className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
            disabled={
              filters.pagination.pageNumber ===
              Math.ceil(categoriesData?.pagination.total / filters.pagination.pageSize)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
