import React, { memo } from 'react';
import { AppLogo } from '../AppLogo';
import s from './Header.module.scss';

export const Header = memo(() => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <AppLogo />
      </div>
      <div className={s.inform}>RU</div>
    </header>
  );
});

Header.displayName = 'Header';
