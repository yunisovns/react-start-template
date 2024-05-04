import React, { memo } from 'react';
import { AppLogo } from '../ui/AppLogo';
import s from './Header.module.scss';

export const Header = memo(() => {
  return (
    <div className={s.outer}>
      <div className={s.container}>
        <AppLogo className={s.logo} />
        <div className={s.right}>Право</div>
      </div>
    </div>
  );
});

Header.displayName = 'Header';
