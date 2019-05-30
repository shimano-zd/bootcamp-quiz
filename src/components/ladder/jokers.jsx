import React from 'react';

import phone from '../../assets/phone.png';

export const LadderJokers = props => {
  return (
    <div className='ladderIcons'>
      <div className='ladderIcon5050'>50:50</div>
      <div className='ladderIconPhone'>
        <i class='fas fa-phone-square' />
      </div>
      <div className='ladderIconAudience'>
        <i class='fas fa-users' onClick={() => props.audienceClicked()} />
      </div>
    </div>
  );
};
