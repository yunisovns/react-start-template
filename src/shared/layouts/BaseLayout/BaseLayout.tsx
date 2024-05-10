import React, { ReactNode } from 'react';
import { Header } from '../../Header';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <div className=" dark:bg-slate-800-indigo-900 sticky top-0 h-max w-full dark:text-white">
        <Header />
      </div>
      <div className="p-5">{children}</div>
    </>
  );
};
