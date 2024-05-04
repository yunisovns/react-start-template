import cn from 'clsx';
import React, { memo } from 'react';
import s from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <a className={cn(s.outer, className)} href="/">
      <span className={s.title}>Приложение для.</span>
      <span className={s.subtitle}>ведения бюджета</span>
    </a>
  );
});

AppLogo.displayName = 'AppLogo';
