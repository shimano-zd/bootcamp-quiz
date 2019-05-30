import React from 'react';

export const LadderRanks = props => {
  const { highlightedRank } = props;

  const getClassName = rank => {
    return rank === highlightedRank ? 'highlightedRank' : 'ladderSingleRank';
  };

  const getMilestoneRank = rank => {
    return rank === highlightedRank ? 'highlightedRank' : 'ladderSingleRankMilestone';
  };
  return (
    <div className='ladderRanks'>
      <div className={getMilestoneRank(1000000)}>1 MILIJUN KN</div>
      <div className={getClassName(500000)}>500.000 KN</div>
      <div className={getClassName(250000)}>250.000 KN</div>
      <div className={getClassName(125000)}>125.000 KN</div>
      <div className={getClassName(64000)}>64.000 KN</div>
      <div className={getMilestoneRank(32000)}>32.000 KN</div>
      <div className={getClassName(16000)}>16.000 KN</div>
      <div className={getClassName(8000)}>8.000 KN</div>
      <div className={getClassName(4000)}>4.000 KN</div>
      <div className={getClassName(2000)}>2.000 KN</div>
      <div className={getMilestoneRank(1000)}>1.000 KN</div>
      <div className={getClassName(500)}>500 KN</div>
      <div className={getClassName(300)}>300 KN</div>
      <div className={getClassName(200)}>200 KN</div>
      <div className={getClassName(100)}>100 KN</div>
    </div>
  );
};
