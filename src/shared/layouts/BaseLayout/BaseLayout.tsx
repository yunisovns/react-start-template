import React, { ReactNode } from 'react';
import { Header } from '../../Header';
import s from './BaseLayout.module.scss';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <div className={s.headerLayout}>
        <Header />
      </div>
      <div>{children}</div>
    </>
  );
};
