import React from 'react';
import background from '../assets/background.png';

export const BackgroundImage = () => {
  const style = {
    width: '100%',
    height: 'auto'
  };

  return (
    <div style={{ width: '100%' }}>
      <img src={background} alt='backgroundImage' style={style} />
    </div>
  );
};
