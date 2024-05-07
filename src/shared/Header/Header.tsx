import React, { memo } from 'react';
import { AppLogo } from '../AppLogo';
import { Avatar } from './Avatar';

export const Header = memo(() => {
  return (
    <header className="box-border flex items-center border-0 border-b-4 border-solid border-indigo-500 bg-white px-7 py-4">
      <AppLogo />
      <div className="flex w-full flex-row flex-wrap items-center justify-between">
        <div className="flex w-full flex-row flex-wrap items-center gap-5 justify-end">
          <div>Поиск</div>
          <div>RU</div>
          <p>Страница</p>
          <Avatar />
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
