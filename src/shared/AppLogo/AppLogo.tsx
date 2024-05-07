import React, { memo } from 'react';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <div className='text-9xl text-gray-700'>
      <span className="text-9xl font-bold text-gray-400">sinet</span>
    </div>
  );
});

AppLogo.displayName = 'AppLogo';
