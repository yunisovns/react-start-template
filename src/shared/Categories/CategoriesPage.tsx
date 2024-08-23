import React from 'react';
import CategoriesList from '../../shared/Categories/CategoriesList';
import CreateCategory from '../../shared/Categories/CreateCategory';

const CategoriesPage = () => {
  return (
    <div className="text-1xl m-5 flex h-1/2 w-full max-w-screen-lg mx-auto flex-row text-center items-center justify-between space-x-4 p-4">
      <CategoriesList />
      <CreateCategory />
    </div>
  );
};

export default CategoriesPage;
