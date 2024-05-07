import React from 'react';
import AvatarSrc from './Avatar.png';

export const Avatar = () => {
  return (
    <div>
      <img className="w-14 h-14 rounded-full" src={AvatarSrc} alt="Аватар" />
    </div>
  );
};
