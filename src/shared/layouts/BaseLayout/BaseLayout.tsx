import React, { ReactNode } from 'react';
import { Header } from '../../Header';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <div className="sticky top-0 m-0 box-content h-max w-full dark:bg-slate-800 dark:text-white">
        <Header />
      </div>
      <div className="p-5 dark:bg-slate-800 dark:text-white">{children}</div>
    </>
  );
};
