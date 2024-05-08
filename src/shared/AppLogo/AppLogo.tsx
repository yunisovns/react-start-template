import React, { memo } from 'react';

export const AppLogo = memo(() => {
  return (
    <div className="mr-8">
      <span className=" text-center text-5xl uppercase leading-9 tracking-widest text-slate-950">sinet</span>
    </div>
  );
});

AppLogo.displayName = 'AppLogo';
