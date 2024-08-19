import React, { memo } from 'react';
import { AppLogo } from '../AppLogo';
import { Avatar } from './Avatar';
import { LangSwitcherButton } from './LangSwitcherButton/LangSwitcherButton';
import { ThemeSwitchButton } from './ThemeSwitchButton/ThemeSwitchButton';
import { Link } from 'react-router-dom';

export const Header = memo(() => {
  return (
    <header className="sticky top-0 box-border flex h-12 items-center border-0 border-b-4 border-solid border-indigo-500 bg-white px-7 py-4 dark:bg-slate-800">
      <AppLogo />
      <div className="flex w-full flex-row flex-wrap items-center justify-between">
        <div className="flex items-center gap-1">
        <Link to='/main' className="flex items-center gap-1">Главная</Link>
          <Link to='/profile' className="flex items-center gap-1">Профиль</Link>
          <Link to='/operation' className="flex items-center gap-1">Операции</Link>
          <Link to='/modal' className="flex items-center gap-1">модальное окно</Link>
        </div>
        
        <div className="flex w-full flex-row flex-wrap items-center justify-end gap-5">
          <ThemeSwitchButton />
          <LangSwitcherButton />
          <div className="flex items-center gap-1"></div>
          <Avatar />
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
