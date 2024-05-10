import React, { useEffect, useState } from 'react';
import { MoonIcon } from '../../Icons/Moon';
import { SunIcon } from '../../Icons/Sun';

export const ThemeSwitchButton = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className="dark:bg-slate-800-slate-800 h-8 w-8 border-none bg-none bg-white hover:cursor-pointer dark:bg-slate-800"
      onClick={handleThemeSwitch}
    >
      {theme === 'dark' ? <SunIcon className='text-white' /> : <MoonIcon />}
    </button>
  );
};
