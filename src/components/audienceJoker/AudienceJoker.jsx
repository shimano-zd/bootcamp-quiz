import React, { useState } from 'react';

export const AudienceJoker = () => {
  const [answersVisible, setAnswersVisible] = useState(false);

  const [columnHeight, setColumnHeight] = useState([]);

  const height1 = Math.floor(Math.random() * 100);
  const height2 = Math.floor(Math.random() * (100 - height1));
  const height3 = Math.floor(Math.random() * (100 - (height1 + height2)));
  const height4 = Math.floor(Math.random() * (100 - (height1 + height2 + height3)));

  setTimeout(() => {
    //setColumnHeight([height1, height2, height3, height4]);
    setAnswersVisible(true);
  }, 3000);

  return (
    <div className='audience-joker-wrapper'>
      <div className='audience-joker-title'>Odgovori publike</div>
      <div className='audience-joker-answers'>
        {answersVisible ? (
          <div className='audience-joker-chart'>
            <div className='audience-joker-chart-single-bar'>
              <div className='audience-joker-chart-single-bar-fill' style={{ height: height1 }}>
                {' '}
              </div>
              <div className='audience-joker-chart-single-bar-text'>A </div>
            </div>
            <div className='audience-joker-chart-single-bar'>
              <div className='audience-joker-chart-single-bar-fill' style={{ height: height2 }}>
                {' '}
              </div>
              <div className='audience-joker-chart-single-bar-text'> B</div>
            </div>
            <div className='audience-joker-chart-single-bar'>
              <div className='audience-joker-chart-single-bar-fill' style={{ height: height3 }}>
                {' '}
              </div>
              <div className='audience-joker-chart-single-bar-text'> C</div>
            </div>
            <div className='audience-joker-chart-single-bar'>
              <div className='audience-joker-chart-single-bar-fill' style={{ height: height4 }}>
                {' '}
              </div>
              <div className='audience-joker-chart-single-bar-text'> D</div>
            </div>
          </div>
        ) : (
          <div className='audience-joker-loading'>
            Pričekajte dok publika odgovori...
            <div className='lds-facebook'>
              <div />
              <div />
              <div />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
