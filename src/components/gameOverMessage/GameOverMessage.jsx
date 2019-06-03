import React from 'react';

export const GameOverMessage = props => {
  const { message, icon, amountWon } = props;

  return (
    <div className='gameOverScreen'>
      <div className='gameOverModal'>
        <p>{message}</p>
        <i class={icon} />
        <p style={{ fontWeight: '600' }}>
          Osvojili ste: <span style={{ color: 'orange', fontSize: '25px' }}>{amountWon} KN. </span>
        </p>
        <div className='gameOverModalButton' onClick={() => props.resetGame()}>
          RESTART
        </div>
      </div>

      <div className='gameOverBackground' />
    </div>
  );
};
