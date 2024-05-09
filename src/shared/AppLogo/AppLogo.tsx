import React, { memo } from 'react';

export const AppLogo = memo(() => {
  return (
    <div className="mr-8">
      <span className=" rounded-lg text-center text-5xl uppercase leading-9 tracking-widest text-slate-950 dark:text-white">
        sinet
      </span>
    </div>
  );
});

AppLogo.displayName = 'AppLogo';
