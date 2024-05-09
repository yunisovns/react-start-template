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
    <button className="h-8 w-8 rounded-full" onClick={handleThemeSwitch}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
