import React, { ReactNode } from 'react';
import { Header } from '../../Header';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <div className=' sticky top-0 w-full dark:bg-indigo-900 dark:text-white h-max'>
        <Header />
      </div>
      <div className='p-5'>{children}</div>
    </>
  );
};
