import React, { ReactElement } from 'react';
import s from './BaseLayout.module.scss';

interface BaseLayoutProps {
  header: ReactElement;
}

export const BaseLayout = ({ header }: BaseLayoutProps) => {
  <div className={s.outer}>
    <div className={s.header}>{header}</div>
    <main className={s.main}></main>
  </div>;
};
