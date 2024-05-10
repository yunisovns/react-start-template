import React from 'react';
import AvatarSrc from './Avatar.png';

export const Avatar = () => {
  return (
    <div>
      <img className="w-8 h-8 rounded-full" src={AvatarSrc} alt="Аватар" />
    </div>
  );
};
