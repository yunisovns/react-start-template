import React, { memo } from 'react';
import s from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <div className={s.logo}>
      <span className={s.text}>SINET</span>
    </div>
  );
});

AppLogo.displayName = 'AppLogo';
